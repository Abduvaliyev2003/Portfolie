// Contact Section — Terminal form + social links
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SOCIAL = [
  {
    label: "GitHub",
    handle: "@asadbek",
    url: "https://github.com/asadbek",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482
          0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463
          -.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832
          .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683
          -.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59
          0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699
          1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852
          0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12
          c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    label: "Telegram",
    handle: "@asadbek_dev",
    url: "https://t.me/asadbek_dev",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0
          0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18
          1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693
          -1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014
          -.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48
          -.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663
          3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "asadbek@example.com",
    url: "mailto:asadbek@example.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "asadbek-dev",
    url: "https://linkedin.com/in/asadbek-dev",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136
          2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267
          5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782
          13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24
          1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: "rgba(0,0,0,0.4)",
    border: `1px solid ${focused === field ? "var(--neon-cyan)" : "rgba(0,245,255,0.15)"}`,
    borderRadius: 6,
    padding: "12px 16px",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.82rem",
    color: "#c9d8e3",
    outline: "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
    boxShadow: focused === field ? "0 0 12px rgba(0,245,255,0.12)" : "none",
    cursor: "none",
  });

  return (
    <section id="contact" style={{ paddingBottom: "60px" }}>
      <div className="container-inner" style={{ maxWidth: 1100 }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <p className="section-label" style={{ marginBottom: 12 }}>// 04. contact</p>
          <h2
            className="glitch"
            data-text="GET IN TOUCH"
            style={{
              fontFamily: "'Orbitron', monospace",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "#fff",
              letterSpacing: "0.08em",
              marginBottom: 20,
            }}
          >
            GET IN TOUCH
          </h2>
          <p style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.82rem", color:"rgba(201,216,227,0.45)", maxWidth:500, margin:"0 auto" }}>
            Looking for a backend engineer? Let's talk. I respond within 24h.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 40,
          }}
          className="grid-responsive"
        >
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card"
            style={{ padding: "36px 32px" }}
          >
            {!sent ? (
              <form onSubmit={handleSubmit}>
                <p className="section-label" style={{ marginBottom: 24 }}>// send_message()</p>

                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.7rem", color:"var(--neon-cyan)", display:"block", marginBottom:6 }}>
                    name
                  </label>
                  <input
                    type="text"
                    placeholder="your_name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                    required
                  />
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.7rem", color:"var(--neon-cyan)", display:"block", marginBottom:6 }}>
                    email
                  </label>
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                    required
                  />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.7rem", color:"var(--neon-cyan)", display:"block", marginBottom:6 }}>
                    message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), resize: "none" }}
                    required
                  />
                </div>

                <button type="submit" className="btn-neon" style={{ width: "100%", justifyContent: "center" }}>
                  <span>Send Message</span>
                  <span>→</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "60px 0" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily:"'Orbitron',monospace", color:"var(--neon-green)", marginBottom:12, fontSize:"1.2rem" }}>
                  Message Sent!
                </h3>
                <p style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.78rem", color:"rgba(201,216,227,0.5)" }}>
                  I'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Social + Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {SOCIAL.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="glass-card"
                style={{
                  padding: "18px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textDecoration: "none",
                  cursor: "none",
                }}
                whileHover={{ x: 6 }}
              >
                <span style={{ color: "var(--neon-cyan)" }}>{s.icon}</span>
                <div>
                  <div style={{ fontFamily:"'Orbitron',monospace", fontSize:"0.8rem", color:"#fff", marginBottom:3 }}>{s.label}</div>
                  <div style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.72rem", color:"rgba(201,216,227,0.45)" }}>{s.handle}</div>
                </div>
                <span style={{ marginLeft:"auto", color:"rgba(0,245,255,0.4)", fontSize:"1.2rem" }}>→</span>
              </motion.a>
            ))}

            {/* Location */}
            <div className="glass-card" style={{ padding:"22px", marginTop:4 }}>
              <p className="section-label" style={{ marginBottom:12 }}>// location</p>
              <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.82rem", color:"rgba(201,216,227,0.65)" }}>
                🌍 Uzbekistan · Remote Worldwide
              </p>
              <p style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.7rem", color:"rgba(201,216,227,0.35)", marginTop:8 }}>
                UTC+5 · Response time &lt; 24h
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 80,
            paddingTop: 32,
            borderTop: "1px solid rgba(0,245,255,0.08)",
            textAlign: "center",
          }}
        >
          <p style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.7rem", color:"rgba(201,216,227,0.25)", letterSpacing:"0.1em" }}>
            © 2026 ASADBEK.DEV · Built with React + Three.js + ❤️
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
