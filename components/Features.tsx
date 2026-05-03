"use client";

const features = [
  {
    number: "01",
    title: "Precision-Built Homes",
    desc: "Every property in our portfolio is built by award-winning developers to the highest structural and design standards — no shortcuts, no compromises.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="14" width="22" height="11" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M1 14L14 3l13 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="10" y="19" width="8" height="6" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Transparent Pricing",
    desc: "No hidden fees or surprise costs. Our pricing is all-inclusive — what you see is what you pay, with full documentation from day one.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M14 7v2M14 19v2M9 14h2M17 14h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Move-In Ready",
    desc: "From appliances to landscaping, every detail is finished before you sign. Your new home is ready the moment you receive the keys.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14l7 7L23 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Investment-Grade ROI",
    desc: "Our properties average 18.4% annual appreciation — backed by data, not promises. Build long-term wealth while enjoying where you live.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polyline points="3,21 9,13 14,16 20,8 25,10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="20,8 25,8 25,13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "White-Glove Service",
    desc: "A dedicated concierge guides you through every step — from first viewing to closing day. We're available 7 days a week.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M5 23c0-5 4-8 9-8s9 3 9 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "06",
    title: "Curated Neighborhoods",
    desc: "We vet every location for schools, commute, walkability, and future development — so you're not just buying a home, you're buying into a community.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="12" r="5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M14 3v2M14 19v2M3 12h2M21 12h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M14 17c0 0 -6 5 -6 9h12c0-4-6-9-6-9z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <>
      <style>{`
        .feat-section {
          background: #0d0d0b;
          padding: 120px 40px;
          position: relative;
          overflow: hidden;
        }
        .feat-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.2), transparent);
        }
        .feat-divider-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
        }
        .feat-bg-number {
          position: absolute;
          top: 60px;
          right: -20px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20vw;
          font-weight: 700;
          color: rgba(255,255,255,0.015);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .feat-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .feat-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 80px;
          align-items: end;
        }
        .feat-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 14px;
        }
        .feat-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
          margin: 0;
        }
        .feat-title em {
          font-style: italic;
          color: rgba(255,255,255,0.45);
        }
        .feat-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.45);
          max-width: 420px;
          align-self: end;
        }
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-left: 1px solid rgba(255,255,255,0.06);
        }
        .feat-item {
          padding: 44px 36px;
          border-right: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          position: relative;
          transition: background 0.35s ease;
          overflow: hidden;
        }
        .feat-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,169,110,0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .feat-item:hover {
          background: rgba(255,255,255,0.02);
        }
        .feat-item:hover::before {
          opacity: 1;
        }
        .feat-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .feat-number {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.2);
        }
        .feat-icon {
          color: rgba(255,255,255,0.35);
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .feat-item:hover .feat-icon {
          color: #c9a96e;
          transform: scale(1.1);
        }
        .feat-item-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.1rem;
          font-weight: 400;
          color: #fff;
          margin: 0 0 12px;
        }
        .feat-item-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.42);
        }
        .feat-accent-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #c9a96e;
          transition: width 0.4s ease;
        }
        .feat-item:hover .feat-accent-bar {
          width: 100%;
        }
        @media (max-width: 1024px) {
          .feat-grid { grid-template-columns: repeat(2, 1fr); }
          .feat-header { grid-template-columns: 1fr; gap: 24px; }
        }
        @media (max-width: 640px) {
          .feat-section { padding: 80px 24px; }
          .feat-grid { grid-template-columns: 1fr; }
          .feat-item { padding: 32px 24px; }
        }
      `}</style>

      <section id="features" className="feat-section">
        <div className="feat-divider-line" />
        <div className="feat-bg-number">06</div>
        <div className="feat-inner">
          <div className="feat-header">
            <div>
              <div className="feat-eyebrow">— Why BuildHaven</div>
              <h2 className="feat-title">
                Built on trust,<br /><em>delivered with detail</em>
              </h2>
            </div>
            <p className="feat-subtitle">
              We don't just sell homes. We set a new standard for what modern living looks like — from the foundation up, with every feature thoughtfully considered.
            </p>
          </div>

          <div className="feat-grid">
            {features.map((f) => (
              <div key={f.number} className="feat-item">
                <div className="feat-item-top">
                  <span className="feat-number">{f.number}</span>
                  <span className="feat-icon">{f.icon}</span>
                </div>
                <h3 className="feat-item-title">{f.title}</h3>
                <p className="feat-item-desc">{f.desc}</p>
                <div className="feat-accent-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
