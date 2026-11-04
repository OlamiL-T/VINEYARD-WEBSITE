import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { siteOrigin } from "../lib/site";
const origin = siteOrigin();
export const metadata: Metadata = {
  metadataBase:
    origin === "https://YOUR_NEW_DOMAIN" ? undefined : new URL(origin),
  title: "Vineyard Foundations | Development",
  description: "Development environment for two independent foundations.",
  robots: { index: false, follow: false },
};
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
