"use client";

const footerLinks = {
  Properties: [
    "New Listings",
    "Builder Homes",
    "Luxury Apartments",
    "Investment Properties",
    "Sold Portfolio",
  ],
  Company: [
    "About Us",
    "Our Team",
    "Careers",
    "Press & Media",
    "Partner With Us",
  ],
  Resources: [
    "Buyer's Guide",
    "ROI Calculator",
    "Mortgage Estimator",
    "Neighborhood Reports",
    "Blog",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Accessibility",
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: #070706;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 80px 40px 40px;
          position: relative;
          overflow: hidden;
        }
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent);
        }
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 80px;
          padding-bottom: 64px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 40px;
        }
        .footer-brand {}
        .footer-logo {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 16px;
          display: block;
          text-decoration: none;
        }
        .footer-logo span {
          color: #c9a96e;
        }
        .footer-brand-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.35);
          margin-bottom: 28px;
          max-width: 240px;
        }
        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid rgba(201,169,110,0.2);
          background: rgba(201,169,110,0.05);
        }
        .footer-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6ec98f;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .footer-badge-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }
        .footer-links-group {}
        .footer-links-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 20px;
          font-weight: 500;
        }
        .footer-links-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links-list a {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s ease;
          display: block;
        }
        .footer-links-list a:hover {
          color: rgba(255,255,255,0.7);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.22);
        }
        .footer-copy strong {
          color: rgba(255,255,255,0.4);
          font-weight: 500;
        }
        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }
        .footer-bottom-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.22);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-bottom-links a:hover {
          color: rgba(255,255,255,0.5);
        }
        .footer-newsletter {
          margin-top: 48px;
          padding: 40px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }
        .footer-newsletter-text {}
        .footer-newsletter-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.15rem;
          color: #fff;
          margin: 0 0 6px;
        }
        .footer-newsletter-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.35);
        }
        .footer-newsletter-form {
          display: flex;
          gap: 0;
          min-width: 360px;
          flex: 1;
          max-width: 480px;
        }
        .footer-newsletter-input {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: #fff;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-right: none;
          padding: 12px 18px;
          outline: none;
          flex: 1;
          transition: border-color 0.25s ease;
          border-radius: 0;
        }
        .footer-newsletter-input::placeholder {
          color: rgba(255,255,255,0.2);
        }
        .footer-newsletter-input:focus {
          border-color: rgba(201,169,110,0.3);
        }
        .footer-newsletter-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          color: #0a0a08;
          background: #fff;
          border: none;
          padding: 12px 22px;
          cursor: pointer;
          transition: background 0.25s ease;
          white-space: nowrap;
        }
        .footer-newsletter-btn:hover {
          background: #c9a96e;
          color: #fff;
        }
        @media (max-width: 1024px) {
          .footer-top { grid-template-columns: 1fr; gap: 48px; }
          .footer-links { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .footer { padding: 60px 24px 36px; }
          .footer-links { grid-template-columns: 1fr 1fr; gap: 28px; }
          .footer-newsletter { padding: 28px 24px; }
          .footer-newsletter-form { min-width: 0; flex-direction: column; }
          .footer-newsletter-input { border-right: 1px solid rgba(255,255,255,0.1); border-bottom: none; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-newsletter">
            <div className="footer-newsletter-text">
              <h4 className="footer-newsletter-title">New properties, first.</h4>
              <div className="footer-newsletter-sub">Get exclusive listings before they go public. No spam, ever.</div>
            </div>
            <div className="footer-newsletter-form">
              <input
                className="footer-newsletter-input"
                type="email"
                placeholder="your@email.com"
              />
              <button className="footer-newsletter-btn">Subscribe</button>
            </div>
          </div>

          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                Build<span>Haven</span>
              </a>
              <p className="footer-brand-desc">
                Curated builder homes and luxury apartments crafted for the way you actually live. Move-in ready. No compromises.
              </p>
              <div className="footer-badge">
                <div className="footer-badge-dot" />
                <span className="footer-badge-text">Accepting Viewings Now</span>
              </div>
            </div>

            <div className="footer-links">
              {Object.entries(footerLinks).map(([group, links]) => (
                <div key={group} className="footer-links-group">
                  <div className="footer-links-title">{group}</div>
                  <ul className="footer-links-list">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © {year} <strong>BuildHaven</strong>. All rights reserved. · Licensed Real Estate Brokerage · CA DRE #01234567
            </div>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
