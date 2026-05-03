"use client";

import { useState } from "react";

const properties = [
  {
    id: 1,
    name: "Maple Grove Estate",
    location: "Willow Creek, CA",
    price: "$824,000",
    beds: 4,
    baths: 3,
    sqft: "2,940",
    roi: "18.4%",
    status: "Available",
    tag: "New Listing",
    gradient: "linear-gradient(135deg, #1a1a14 0%, #2a2418 100%)",
    accent: "#c9a96e",
  },
  {
    id: 2,
    name: "Harborview Residences",
    location: "Marina Bay, CA",
    price: "$1,240,000",
    beds: 5,
    baths: 4,
    sqft: "3,820",
    roi: "22.1%",
    status: "Available",
    tag: "Featured",
    gradient: "linear-gradient(135deg, #0f1a1a 0%, #172828 100%)",
    accent: "#6eb5c9",
  },
  {
    id: 3,
    name: "Aspen Ridge Villas",
    location: "Highland Park, TX",
    price: "$698,500",
    beds: 3,
    baths: 2,
    sqft: "2,110",
    roi: "15.7%",
    status: "Sold Out",
    tag: "Luxury",
    gradient: "linear-gradient(135deg, #1a0f14 0%, #28151c 100%)",
    accent: "#c96e8f",
  },
  {
    id: 4,
    name: "Elm Court Penthouses",
    location: "Downtown, NY",
    price: "$2,100,000",
    beds: 3,
    baths: 3,
    sqft: "2,400",
    roi: "26.8%",
    status: "Limited",
    tag: "Premium",
    gradient: "linear-gradient(135deg, #0f0f1a 0%, #15152a 100%)",
    accent: "#8f6ec9",
  },
  {
    id: 5,
    name: "Birchwood Commons",
    location: "Lakeside, IL",
    price: "$512,000",
    beds: 3,
    baths: 2,
    sqft: "1,890",
    roi: "13.2%",
    status: "Available",
    tag: "Move-in Ready",
    gradient: "linear-gradient(135deg, #121a0f 0%, #1c2817 100%)",
    accent: "#6ec98f",
  },
  {
    id: 6,
    name: "Stonehaven Lofts",
    location: "Midtown, GA",
    price: "$445,000",
    beds: 2,
    baths: 2,
    sqft: "1,560",
    roi: "11.9%",
    status: "Available",
    tag: "Urban Living",
    gradient: "linear-gradient(135deg, #1a1414 0%, #281e1a 100%)",
    accent: "#c9956e",
  },
];

const filters = ["All", "Available", "Limited", "Sold Out"];

export default function Properties() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? properties
      : properties.filter((p) => p.status === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .props-section {
          background: #0a0a08;
          padding: 120px 40px;
          position: relative;
          overflow: hidden;
        }
        .props-section::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .props-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .props-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 60px;
          flex-wrap: wrap;
          gap: 32px;
        }
        .props-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 14px;
        }
        .props-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.15;
          margin: 0;
        }
        .props-title em {
          font-style: italic;
          color: rgba(255,255,255,0.5);
        }
        .props-filters {
          display: flex;
          gap: 4px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 4px;
          border-radius: 2px;
        }
        .filter-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          background: none;
          border: none;
          padding: 8px 18px;
          cursor: pointer;
          transition: all 0.25s ease;
          border-radius: 1px;
        }
        .filter-btn:hover {
          color: rgba(255,255,255,0.8);
        }
        .filter-btn.active {
          background: #fff;
          color: #0a0a08;
          font-weight: 500;
        }
        .props-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2px;
        }
        .prop-card {
          position: relative;
          background: #111110;
          border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }
        .prop-card:hover {
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-4px);
          z-index: 2;
        }
        .prop-visual {
          height: 220px;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding: 20px;
          overflow: hidden;
        }
        .prop-visual-bg {
          position: absolute;
          inset: 0;
          transition: transform 0.6s ease;
        }
        .prop-card:hover .prop-visual-bg {
          transform: scale(1.05);
        }
        .prop-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0a0a08;
          background: #fff;
          padding: 5px 12px;
          font-weight: 500;
        }
        .prop-status {
          position: absolute;
          top: 20px;
          right: 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 12px;
          font-weight: 400;
          border: 1px solid;
        }
        .prop-status.available {
          color: #6ec98f;
          border-color: rgba(110,201,143,0.3);
          background: rgba(110,201,143,0.08);
        }
        .prop-status.limited {
          color: #c9a96e;
          border-color: rgba(201,169,110,0.3);
          background: rgba(201,169,110,0.08);
        }
        .prop-status.sold {
          color: rgba(255,255,255,0.3);
          border-color: rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
        }
        .prop-roi-badge {
          position: relative;
          z-index: 1;
          background: rgba(10,10,8,0.85);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 10px 14px;
        }
        .prop-roi-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 2px;
        }
        .prop-roi-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }
        .prop-roi-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.35);
          margin-top: 2px;
        }
        .prop-body {
          padding: 24px;
        }
        .prop-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.25rem;
          font-weight: 400;
          color: #fff;
          margin: 0 0 4px;
        }
        .prop-location {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }
        .prop-specs {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .prop-spec {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .prop-spec-val {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          color: #fff;
        }
        .prop-spec-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .prop-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .prop-price {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
        }
        .prop-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          background: none;
          border: 1px solid rgba(255,255,255,0.12);
          padding: 9px 18px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .prop-cta:hover {
          background: #fff;
          color: #0a0a08;
          border-color: #fff;
        }
        .props-bottom {
          margin-top: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .view-all-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 14px 40px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .view-all-btn:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.4);
        }
        .view-all-btn svg {
          transition: transform 0.3s ease;
        }
        .view-all-btn:hover svg {
          transform: translateX(4px);
        }
        @media (max-width: 768px) {
          .props-section { padding: 80px 24px; }
          .props-grid { grid-template-columns: 1fr; }
          .props-header { flex-direction: column; align-items: flex-start; }
        }
          
      `}</style>

      <section id="properties" className="props-section">
        <div className="props-inner">
          <div className="props-header">
            <div>
              <div className="props-eyebrow">— Our Portfolio</div>
              <h2 className="props-title">
                Curated homes,<br /><em>extraordinary living</em>
              </h2>
            </div>
            <div className="props-filters">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`filter-btn${active === f ? " active" : ""}`}
                  onClick={() => setActive(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="props-grid">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="prop-card"
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="prop-visual">
                  <div
                    className="prop-visual-bg"
                    style={{ background: p.gradient }}
                  />
                  <span className="prop-tag">{p.tag}</span>
                  <span
                    className={`prop-status ${
                      p.status === "Available"
                        ? "available"
                        : p.status === "Limited"
                        ? "limited"
                        : "sold"
                    }`}
                  >
                    {p.status}
                  </span>
                  <div className="prop-roi-badge">
                    <div className="prop-roi-label">Avg. ROI</div>
                    <div className="prop-roi-value" style={{ color: p.accent }}>
                      {p.roi}
                    </div>
                    <div className="prop-roi-sub">Annual appreciation</div>
                  </div>
                </div>
                <div className="prop-body">
                  <h3 className="prop-name">{p.name}</h3>
                  <div className="prop-location">📍 {p.location}</div>
                  <div className="prop-specs">
                    <div className="prop-spec">
                      <span className="prop-spec-val">{p.beds}</span>
                      <span className="prop-spec-label">Beds</span>
                    </div>
                    <div className="prop-spec">
                      <span className="prop-spec-val">{p.baths}</span>
                      <span className="prop-spec-label">Baths</span>
                    </div>
                    <div className="prop-spec">
                      <span className="prop-spec-val">{p.sqft}</span>
                      <span className="prop-spec-label">Sq Ft</span>
                    </div>
                  </div>
                  <div className="prop-footer">
                    <span className="prop-price">{p.price}</span>
                    <button className="prop-cta">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="props-bottom">
            <button className="view-all-btn">
              View All Properties
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
