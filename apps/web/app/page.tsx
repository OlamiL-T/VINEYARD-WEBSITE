import {
  ButtonLink,
  FoundationCard,
  Notice,
  SectionHeading,
} from "../components/ui";
export default function Home() {
  return (
    <main tabIndex={-1} id="main">
      <div className="preview-banner">
        Design development preview <span aria-hidden="true">·</span> Content is
        subject to approval
      </div>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> Human dignity. Shared purpose.
          </p>
          <h1 id="hero-title">
            Creating hope.
            <br />
            <span>Transforming</span>
            <br />
            lives.
          </h1>
          <p className="hero-description">
            Building bridges to humanitarian support, opportunity, and stronger
            communities.
          </p>
          <div className="button-group">
            <ButtonLink href="#foundations">Explore the foundations</ButtonLink>
            <ButtonLink href="#giving" tone="outline">
              Support our mission
            </ButtonLink>
          </div>
          <p className="hero-footnote">
            Two independent foundations. One shared digital platform.
          </p>
        </div>
        <figure className="hero-art">
          <div className="arch-art" aria-hidden="true">
            <div className="art-sun" />
            <div className="art-field art-field-one" />
            <div className="art-field art-field-two" />
            <div className="art-path" />
            <span className="art-caption">Room for hope.</span>
          </div>
          <figcaption>
            Original abstract illustration · Approved photography to follow
          </figcaption>
        </figure>
      </section>
      <div className="principles-strip">
        <div className="container">
          <span>Dignity at the center.</span>
          <span>Clarity in our purpose.</span>
          <span>Accountability in our work.</span>
        </div>
      </div>
      <section
        className="section container"
        id="foundations"
        aria-labelledby="foundations-title"
      >
        <div className="split-heading">
          <SectionHeading
            id="foundations-title"
            eyebrow="The foundations"
            title="Distinct identities. A shared commitment."
          >
            <p>
              Meet the two independent organizations represented on this
              platform. Their programs, records, and financial accountability
              remain separate.
            </p>
          </SectionHeading>
          <span className="section-index" aria-hidden="true">
            01 / Foundations
          </span>
        </div>
        <div className="foundation-grid">
          <FoundationCard
            number="01"
            name="Vineyard International Foundation"
            id="international"
          >
            <p>
              Mission, history, programs, and legal information will be added
              after review by this foundation’s authorized representatives.
            </p>
          </FoundationCard>
          <FoundationCard number="02" name="Vineyard Hope Foundation" id="hope">
            <p>
              This foundation’s own mission, leadership, programs, and verified
              organizational information will appear here following approval.
            </p>
          </FoundationCard>
        </div>
      </section>
      <section
        className="approach-section"
        id="approach"
        aria-labelledby="approach-title"
      >
        <div className="container approach-grid">
          <SectionHeading
            id="approach-title"
            eyebrow="Our approach to this platform"
            title="Trust begins with clarity."
          >
            <p>
              A thoughtful home for humanitarian work, built around the people
              and organizations it represents.
            </p>
          </SectionHeading>
          <ol className="approach-list">
            <li>
              <span aria-hidden="true">01</span>
              <div>
                <h3>People before numbers.</h3>
                <p>
                  Impact stories and results will be shared only when verified
                  and approved, with privacy and dignity protected.
                </p>
              </div>
            </li>
            <li>
              <span aria-hidden="true">02</span>
              <div>
                <h3>Clear organizational ownership.</h3>
                <p>
                  Programs, projects, and giving opportunities will identify the
                  responsible foundation.
                </p>
              </div>
            </li>
            <li>
              <span aria-hidden="true">03</span>
              <div>
                <h3>Room for meaningful participation.</h3>
                <p>
                  Volunteering and partnership information will follow once
                  opportunities and contact channels are confirmed.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section
        className="section container"
        id="get-involved"
        aria-labelledby="involved-title"
      >
        <SectionHeading
          id="involved-title"
          eyebrow="Get involved"
          title="There is a place for compassion."
        >
          <p>
            Volunteer, partner, or give. We are preparing clear ways to connect
            with each foundation.
          </p>
        </SectionHeading>
        <div className="participation-grid">
          {[
            {
              title: "Give your time",
              label: "Volunteering",
              body: "Approved opportunities and a secure application process are being prepared.",
            },
            {
              title: "Build a partnership",
              label: "Partnerships",
              body: "Foundation-specific inquiry channels will be available after confirmation.",
            },
            {
              title: "Support a foundation",
              label: "Giving",
              body: "Choose the foundation you wish to support when secure giving becomes available.",
            },
          ].map((item) => (
            <article className="participation-card" key={item.label}>
              <p className="eyebrow">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="availability">Not yet available</span>
            </article>
          ))}
        </div>
      </section>
      <section
        className="giving-section"
        id="giving"
        aria-labelledby="giving-title"
      >
        <div className="container giving-inner">
          <p className="eyebrow">A thoughtful way to give</p>
          <h2 id="giving-title">
            Your generosity.
            <br />
            Your choice of foundation.
          </h2>
          <p>
            Future donations will be directed to the foundation you select, with
            separate payment configurations and financial records.
          </p>
          <Notice title="Online giving is not open yet.">
            No donations or donor details are collected in this preview. Secure
            checkout will follow organizational and payment-provider approval.
          </Notice>
        </div>
      </section>
    </main>
  );
}
