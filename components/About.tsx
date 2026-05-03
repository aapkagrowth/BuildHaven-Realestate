"use client";

const stats = [
  { value: "240+", label: "Properties Delivered" },
  { value: "$2.4B", label: "Total Portfolio Value" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "14yr", label: "Industry Experience" },
];

const milestones = [
  {
    year: "2010",
    event:
      "BuildHaven founded in San Francisco with a vision to redefine new construction homes.",
  },
  {
    year: "2014",
    event:
      "Expanded to 5 major metro areas. Delivered our 50th property on time and on budget.",
  },
  {
    year: "2018",
    event:
      "Launched the ROI Guarantee program — the first of its kind in residential real estate.",
  },
  {
    year: "2022",
    event:
      "Crossed $1B in total portfolio value. Named Top Developer by Architectural Digest.",
  },
  {
    year: "2024",
    event:
      "240+ homes delivered. Zero compromises. Expanding to 3 new markets.",
  },
];

export default function About() {
  return (
    <>
      <style>{`
        .about-section {
          background: #0a0a08;
          padding: 120px 40px;
          position: relative;
          overflow: hidden;
        }
        .about-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: start;
        }
        .about-left {
          position: sticky;
          top: 100px;
        }
        .about-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 16px;
        }
        .about-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
          margin: 0 0 28px;
        }
        .about-title em {
          font-style: italic;
          color: rgba(255,255,255,0.45);
        }
        .about-lead {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          line-height: 1.85;
          color: rgba(255,255,255,0.5);
          margin-bottom: 20px;
        }
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          margin-top: 48px;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .about-stat {
          padding: 28px 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.04);
          position: relative;
          overflow: hidden;
        }
        .about-stat::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: #c9a96e;
        }
        .about-stat-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 6px;
        }
        .about-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .about-right {}
        .about-mission {
          background: rgba(201,169,110,0.06);
          border: 1px solid rgba(201,169,110,0.15);
          border-left: 3px solid #c9a96e;
          padding: 32px;
          margin-bottom: 60px;
        }
        .about-mission-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 12px;
        }
        .about-mission-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.1rem;
          font-style: italic;
          line-height: 1.7;
          color: rgba(255,255,255,0.75);
        }
        .about-timeline-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 32px;
        }
        .about-timeline {
          position: relative;
          padding-left: 28px;
        }
        .about-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          bottom: 6px;
          width: 1px;
          background: rgba(255,255,255,0.08);
        }
        .timeline-item {
          position: relative;
          padding-bottom: 36px;
        }
        .timeline-item:last-child {
          padding-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          left: -33px;
          top: 5px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #c9a96e;
          border: 2px solid #0a0a08;
          box-shadow: 0 0 0 1px rgba(201,169,110,0.3);
        }
        .timeline-year {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 6px;
        }
        .timeline-event {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.5);
        }
        .about-team-note {
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .about-team-avatars {
          display: flex;
        }
        .about-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #0a0a08;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 0.85rem;
          color: #fff;
          margin-left: -10px;
        }
        .about-avatar:first-child { margin-left: 0; }
        .about-team-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
        }
        .about-team-text strong {
          color: rgba(255,255,255,0.75);
          font-weight: 500;
          display: block;
        }
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 60px; }
          .about-left { position: static; }
        }
        @media (max-width: 640px) {
          .about-section { padding: 80px 24px; }
          .about-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-grid">
            <div className="about-left">
              <div className="about-eyebrow">— Our Story</div>
              <h2 className="about-title">
                A decade of <em>uncompromising</em> craftsmanship
              </h2>
              <p className="about-lead">
                BuildHaven was founded on a simple belief: that buying a new
                home should be the beginning of something extraordinary — not a
                source of stress or regret.
              </p>
              <p className="about-lead">
                We partner exclusively with award-winning developers who share
                our obsession with quality. Every property we represent has been
                personally vetted by our team, from floor plans to finish
                schedules.
              </p>

              <div className="about-stats">
                {stats.map((s) => (
                  <div key={s.label} className="about-stat">
                    <div className="about-stat-value">{s.value}</div>
                    <div className="about-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="about-team-note">
                <div className="about-team-avatars">
                  {[
                    { initials: "SL", bg: "#1a2a1a" },
                    { initials: "MK", bg: "#2a1a1a" },
                    { initials: "AR", bg: "#1a1a2a" },
                    { initials: "JP", bg: "#2a2a1a" },
                  ].map((a) => (
                    <div
                      key={a.initials}
                      className="about-avatar"
                      style={{ background: a.bg }}
                    >
                      {a.initials}
                    </div>
                  ))}
                </div>
                <div className="about-team-text">
                  <strong>Meet our advisory team</strong>
                  20+ combined years in luxury real estate
                </div>
              </div>
            </div>

            <div className="about-right">
              <div className="about-mission">
                <div className="about-mission-label">Our Mission</div>
                <p className="about-mission-text">
                  "To make exceptional builder homes accessible — and to ensure
                  that every client we serve walks away with not just a house,
                  but a home they're proud of for decades."
                </p>
              </div>

              <div className="about-timeline-label">— Our Journey</div>
              <div className="about-timeline">
                {milestones.map((m) => (
                  <div key={m.year} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-year">{m.year}</div>
                    <div className="timeline-event">{m.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
