import type { Metadata } from "next";
import {
  ButtonLink,
  FoundationCard,
  Notice,
  SectionHeading,
  TextField,
} from "../../components/ui";
export const metadata: Metadata = {
  title: "Design system preview | Vineyard",
  description:
    "Development reference for Vineyard typography, components, colors, and accessible form states.",
};
const colors = [
  { name: "Primary green", hex: "#164A38" },
  { name: "Warm ivory", hex: "#F8F7F3" },
  { name: "Charcoal", hex: "#171B19" },
  { name: "Soft sage", hex: "#B6C9B3" },
  { name: "Hope gold", hex: "#C99B49" },
];
export default function DesignSystem() {
  return (
    <main tabIndex={-1} id="main" className="container">
      <div className="page-intro">
        <p className="eyebrow">Internal design reference</p>
        <h1>Thoughtful by design.</h1>
        <p>
          Reusable foundations for an accessible, calm, and distinctly
          humanitarian digital experience. This page demonstrates components; it
          does not collect information.
        </p>
      </div>
      <section className="specimen" aria-labelledby="palette">
        <h2 id="palette">Color with purpose.</h2>
        <div className="swatches">
          {colors.map((c) => (
            <div className="swatch" key={c.hex}>
              <div className="swatch-color" style={{ background: c.hex }} />
              <p>
                {c.name}
                <code>{c.hex}</code>
              </p>
            </div>
          ))}
        </div>
        <Notice title="Accessible pairings">
          Use charcoal on ivory or sage, and ivory on primary green. Gold is a
          decorative accent, not small text on ivory. Every final text and
          background pairing requires a contrast check.
        </Notice>
      </section>
      <section className="specimen" aria-labelledby="type">
        <SectionHeading
          id="type"
          eyebrow="Typography"
          title="A clear voice. Room to breathe."
        >
          <p>
            Fluid headings, readable body text, and a restrained editorial
            accent. System fonts keep this phase free of third-party requests;
            the family token can accept approved self-hosted typography later.
          </p>
        </SectionHeading>
      </section>
      <section className="specimen" aria-labelledby="actions">
        <h2 id="actions">Actions that feel clear.</h2>
        <div className="button-group">
          <ButtonLink href="/#foundations">Explore the foundations</ButtonLink>
          <ButtonLink href="/#giving" tone="outline">
            Giving information
          </ButtonLink>
        </div>
        <div className="dark-specimen">
          <ButtonLink href="/#approach" tone="light">
            Read our approach
          </ButtonLink>
        </div>
      </section>
      <section className="specimen" aria-labelledby="cards">
        <h2 id="cards">Identity with clarity.</h2>
        <div className="foundation-grid">
          <FoundationCard
            number="01"
            id="example-international"
            name="Vineyard International Foundation"
          >
            <p>Each card makes its organizational identity explicit.</p>
          </FoundationCard>
          <FoundationCard
            number="02"
            id="example-hope"
            name="Vineyard Hope Foundation"
          >
            <p>
              Shared visual language does not imply shared legal or financial
              ownership.
            </p>
          </FoundationCard>
        </div>
      </section>
      <section className="specimen" aria-labelledby="forms">
        <h2 id="forms">Respectful forms.</h2>
        <p>
          Component examples only. There is no submission button or storage.
          Please do not enter personal information.
        </p>
        <TextField
          id="example-name"
          label="Name"
          placeholder="Example field"
          hint="Collect only what is needed for the stated purpose."
          autoComplete="off"
        />
        <TextField
          id="example-email"
          label="Email address"
          type="email"
          required
          hint="Demonstration of an invalid field."
          error="Enter an email address in the format name@example.org."
          defaultValue="example"
          autoComplete="off"
        />
        <div className="field">
          <label htmlFor="example-foundation">Foundation</label>
          <select id="example-foundation" defaultValue="">
            <option value="" disabled>
              Select a foundation
            </option>
            <option value="international">
              Vineyard International Foundation
            </option>
            <option value="hope">Vineyard Hope Foundation</option>
          </select>
        </div>
        <Notice title="Submission states">
          Success messages must follow a confirmed backend response. These
          examples do not simulate a completed submission.
        </Notice>
      </section>
    </main>
  );
}
