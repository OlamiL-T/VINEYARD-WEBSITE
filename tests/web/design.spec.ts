import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("landing preserves separate foundation identities and safe giving state", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Creating hope.Transforminglives.",
  );
  await expect(
    page.getByRole("heading", { name: "Vineyard International Foundation" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Vineyard Hope Foundation" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Support our mission" }).last().click();
  await expect(page).toHaveURL(/#giving$/);
  await expect(page.getByText("Online giving is not open yet.")).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("navigation works on mobile and closes with Escape or destination selection", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Mobile disclosure interaction");
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu" });
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeHidden();
  await menu.click();
  await expect(page.getByRole("button", { name: "Close" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "The foundations" })
    .click();
  await expect(page).toHaveURL(/#foundations$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});

test("keyboard skip link reaches the main landmark", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

for (const path of ["/", "/design-system"]) {
  test(`${path} has no automated WCAG AA violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}

test("form examples expose labels and linked errors without submitting", async ({
  page,
}) => {
  await page.goto("/design-system");
  const email = page.getByLabel("Email address (required)");
  await expect(email).toHaveAttribute("aria-invalid", "true");
  await expect(email).toHaveAccessibleDescription(/Enter an email address/);
  await expect(page.getByRole("button", { name: /submit|send/i })).toHaveCount(
    0,
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(
    await page
      .locator("html")
      .evaluate((el) => getComputedStyle(el).scrollBehavior),
  ).toBe("auto");
});
