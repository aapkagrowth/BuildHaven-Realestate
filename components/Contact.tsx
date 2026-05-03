"use client";

import { useState } from "react";

const contactInfo = [
  {
    label: "General Inquiries",
    value: "hello@buildhaven.com",
    sub: "We reply within 2 business hours",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Schedule a Viewing",
    value: "+1 (888) 842-4683",
    sub: "Available Mon–Sat, 9am–7pm",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 2h4l1.5 4-2.5 1.5c1 2 3 4 5 5L14.5 10l4 1.5V15c0 1.7-1.3 3-3 3C6 18 2 9 2 5a3 3 0 013-3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Office Location",
    value: "488 Market St, San Francisco",
    sub: "Suite 2200 · CA 94105",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
];

const services = [
  "Schedule a Property Viewing",
  "Investment Inquiry",
  "General Question",
  "Partnership / Developer",
  "Media / Press",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <style>{`
        .contact-section {
          background: #0a0a08;
          padding: 120px 40px;
          position: relative;
          overflow: hidden;
        }
        .contact-section::before {
          content: '';
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-inner {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .contact-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .contact-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 16px;
        }
        .contact-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
          margin: 0 0 16px;
        }
        .contact-title em {
          font-style: italic;
          color: rgba(255,255,255,0.45);
        }
        .contact-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.4);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.8;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 2px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .contact-info-panel {
          background: #111110;
          padding: 52px 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .contact-info-items {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .contact-info-item {}
        .contact-info-icon-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          color: #c9a96e;
        }
        .contact-info-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .contact-info-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          color: #fff;
          margin: 4px 0 3px;
        }
        .contact-info-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
        }
        .contact-info-footer {
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .contact-social-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 16px;
        }
        .contact-socials {
          display: flex;
          gap: 10px;
        }
        .contact-social {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          transition: all 0.25s ease;
          background: none;
        }
        .contact-social:hover {
          border-color: #c9a96e;
          color: #c9a96e;
        }
        .contact-form-panel {
          background: #0f0f0e;
          padding: 52px 48px;
        }
        .contact-form-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.3rem;
          font-weight: 400;
          color: #fff;
          margin: 0 0 36px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }
        .form-group.full { grid-column: 1 / -1; }
        .form-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .form-input, .form-select, .form-textarea {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: #fff;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 12px 16px;
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease;
          width: 100%;
          box-sizing: border-box;
          -webkit-appearance: none;
          border-radius: 0;
        }
        .form-input::placeholder, .form-textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: rgba(201,169,110,0.4);
          background: rgba(255,255,255,0.05);
        }
        .form-select {
          cursor: pointer;
          color: rgba(255,255,255,0.6);
        }
        .form-select option {
          background: #1a1a18;
          color: #fff;
        }
        .form-textarea {
          resize: none;
          min-height: 110px;
          line-height: 1.6;
        }
        .form-submit {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0a0a08;
          background: #fff;
          border: none;
          padding: 16px 32px;
          cursor: pointer;
          transition: background 0.25s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          width: 100%;
          justify-content: center;
        }
        .form-submit:hover {
          background: #c9a96e;
          color: #fff;
        }
        .form-submit svg {
          transition: transform 0.25s ease;
        }
        .form-submit:hover svg {
          transform: translateX(4px);
        }
        .contact-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 400px;
          gap: 16px;
        }
        .contact-success-icon {
          width: 56px;
          height: 56px;
          border: 1px solid rgba(201,169,110,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c9a96e;
          margin-bottom: 8px;
        }
        .contact-success-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.6rem;
          font-weight: 400;
          color: #fff;
        }
        .contact-success-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.4);
          max-width: 300px;
          line-height: 1.75;
        }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .contact-section { padding: 80px 24px; }
          .contact-info-panel, .contact-form-panel { padding: 36px 28px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="contact-header">
            <div className="contact-eyebrow">— Get In Touch</div>
            <h2 className="contact-title">
              Let's find your <em>perfect home</em>
            </h2>
            <p className="contact-subtitle">
              Whether you're ready to buy or just exploring, our advisors are here to guide you — with zero pressure and complete transparency.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="contact-info-items">
                {contactInfo.map((item) => (
                  <div key={item.label} className="contact-info-item">
                    <div className="contact-info-icon-row">
                      {item.icon}
                      <span className="contact-info-label">{item.label}</span>
                    </div>
                    <div className="contact-info-value">{item.value}</div>
                    <div className="contact-info-sub">{item.sub}</div>
                  </div>
                ))}
              </div>

              <div className="contact-info-footer">
                <div className="contact-social-label">Follow Us</div>
                <div className="contact-socials">
                  {["IG", "TW", "LI", "YT"].map((s) => (
                    <button key={s} className="contact-social">
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.05em" }}>{s}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-success-title">Message Received</div>
                  <p className="contact-success-text">
                    Thank you, {form.name.split(" ")[0]}. One of our advisors will reach out within 2 business hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="contact-form-title">Send us a message</div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        className="form-input"
                        name="name"
                        placeholder="James Thornton"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        className="form-input"
                        name="email"
                        type="email"
                        placeholder="james@email.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone (Optional)</label>
                      <input
                        className="form-input"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">I'm Interested In</label>
                      <select
                        className="form-select"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      placeholder="Tell us about what you're looking for — budget, location, timeline…"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button className="form-submit" onClick={handleSubmit}>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
