import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-wordmark">
              Vineyard
            </Link>
            <p>
              A shared digital home.
              <br />
              Two independent foundations.
            </p>
          </div>
          <nav aria-label="Footer">
            <Link href="/#foundations">The foundations</Link>
            <Link href="/#approach">Our approach</Link>
            <Link href="/#giving">Giving information</Link>
            <Link href="/design-system">Design system preview</Link>
          </nav>
        </div>
        <div className="footer-organizations">
          <p>Vineyard International Foundation</p>
          <p>Vineyard Hope Foundation</p>
        </div>
        <div className="footer-bottom">
          <p>
            Each foundation retains its own identity and financial
            accountability.
          </p>
          <p>Development preview · Not accepting donations</p>
        </div>
      </div>
    </footer>
  );
}
