"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah & James Thornton",
    role: "Homeowners — Maple Grove Estate",
    location: "Willow Creek, CA",
    text: "We'd looked at dozens of new builds and were completely exhausted. BuildHaven cut through the noise in a single afternoon. Our home was exactly as described — not a single surprise after closing. That alone is worth everything.",
    rating: 5,
    property: "Maple Grove Estate",
    year: "2023",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Real Estate Investor",
    location: "Marina Bay, CA",
    text: "As an investor, I've worked with dozens of brokerages. BuildHaven is the only team that ever discussed ROI projections with actual data before I asked. Harborview has already appreciated 22% in 18 months.",
    rating: 5,
    property: "Harborview Residences",
    year: "2022",
  },
  {
    id: 3,
    name: "Priya & Anil Sharma",
    role: "First-Time Buyers",
    location: "Highland Park, TX",
    text: "We were terrified of the whole process — the jargon, the paperwork, the pressure. Our BuildHaven advisor made us feel like family. We moved into Aspen Ridge three months ahead of schedule. Still can't believe it.",
    rating: 5,
    property: "Aspen Ridge Villas",
    year: "2023",
  },
  {
    id: 4,
    name: "David Okafor",
    role: "Tech Executive",
    location: "Downtown, NY",
    text: "I needed a penthouse that matched my schedule — fast closing, zero drama. Elm Court was ready in 6 weeks. The white-glove service is not a marketing phrase; they genuinely managed every detail while I was traveling.",
    rating: 5,
    property: "Elm Court Penthouses",
    year: "2024",
  },
  {
    id: 5,
    name: "Rachel & Tom Elwood",
    role: "Relocating Family",
    location: "Lakeside, IL",
    text: "Moving states with three kids is a nightmare scenario. BuildHaven scouted Birchwood, handled our virtual tours, and had everything ready before we landed. The neighborhood is everything they promised and more.",
    rating: 5,
    property: "Birchwood Commons",
    year: "2023",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <>
      <style>{`
        .test-section {
          background: #0d0d0b;
          padding: 120px 40px;
          position: relative;
          overflow: hidden;
        }
        .test-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 20% 50%, rgba(201,169,110,0.04) 0%, transparent 60%);
          pointer-events: none;
        }
        .test-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .test-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 72px;
          gap: 32px;
          flex-wrap: wrap;
        }
        .test-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 14px;
        }
        .test-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
          margin: 0;
        }
        .test-title em {
          font-style: italic;
          color: rgba(255,255,255,0.45);
        }
        .test-nav-arrows {
          display: flex;
          gap: 8px;
        }
        .test-arrow {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.12);
          background: none;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }
        .test-arrow:hover {
          border-color: rgba(255,255,255,0.4);
          color: #fff;
          background: rgba(255,255,255,0.04);
        }
        .test-main {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 60px;
          align-items: start;
        }
        .test-quote-area {
          position: relative;
        }
        .test-quote-mark {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 8rem;
          line-height: 0.7;
          color: rgba(201,169,110,0.15);
          margin-bottom: 16px;
          display: block;
        }
        .test-quote-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.2rem, 2vw, 1.65rem);
          font-style: italic;
          line-height: 1.65;
          color: rgba(255,255,255,0.82);
          margin: 0 0 40px;
        }
        .test-author {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .test-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a2a1a, #2a1a2a);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.1rem;
          color: rgba(255,255,255,0.8);
          flex-shrink: 0;
        }
        .test-author-info {}
        .test-author-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #fff;
          margin-bottom: 3px;
        }
        .test-author-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.03em;
        }
        .test-stars {
          display: flex;
          gap: 3px;
          margin-left: auto;
          color: #c9a96e;
        }
        .test-sidebar {}
        .test-sidebar-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 20px;
        }
        .test-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .test-list-item {
          padding: 18px 20px;
          border: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          background: transparent;
          text-align: left;
          width: 100%;
        }
        .test-list-item.active,
        .test-list-item:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
        }
        .test-list-item.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #c9a96e;
        }
        .test-list-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          margin-bottom: 3px;
        }
        .test-list-item.active .test-list-name {
          color: #fff;
        }
        .test-list-prop {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .test-list-year {
          color: rgba(201,169,110,0.6);
          font-size: 0.65rem;
        }
        .test-dots {
          display: flex;
          gap: 6px;
          margin-top: 40px;
        }
        .test-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          padding: 0;
        }
        .test-dot.active {
          background: #c9a96e;
          width: 24px;
          border-radius: 3px;
        }
        @media (max-width: 1024px) {
          .test-main { grid-template-columns: 1fr; }
          .test-sidebar { display: none; }
        }
        @media (max-width: 640px) {
          .test-section { padding: 80px 24px; }
          .test-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section id="testimonials" className="test-section">
        <div className="test-inner">
          <div className="test-header">
            <div>
              <div className="test-eyebrow">— Client Stories</div>
              <h2 className="test-title">
                Words from<br /><em>those who live here</em>
              </h2>
            </div>
            <div className="test-nav-arrows">
              <button
                className="test-arrow"
                onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="test-arrow"
                onClick={() => setActive((a) => (a + 1) % testimonials.length)}
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="test-main">
            <div className="test-quote-area">
              <span className="test-quote-mark">"</span>
              <p className="test-quote-text">{current.text}</p>
              <div className="test-author">
                <div className="test-avatar">
                  {current.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div className="test-author-info">
                  <div className="test-author-name">{current.name}</div>
                  <div className="test-author-role">{current.role} · {current.location}</div>
                </div>
                <div className="test-stars">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M7 1l1.5 4h4l-3.3 2.4 1.3 4L7 9 3.5 11.4l1.3-4L1.5 5h4z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="test-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`test-dot${active === i ? " active" : ""}`}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="test-sidebar">
              <div className="test-sidebar-title">All Stories</div>
              <div className="test-list">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    className={`test-list-item${active === i ? " active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <div className="test-list-name">{t.name}</div>
                    <div className="test-list-prop">
                      <span>{t.property}</span>
                      <span className="test-list-year">{t.year}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
