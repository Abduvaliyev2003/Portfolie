// Resume / CV Section — Cyber styled + printable PDF version
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// ─── CV Data ──────────────────────────────────────────────────
const CV_DATA = {
  name: "Asadbek Abduvaliyev",
  title: "Backend Developer (PHP)",
  location: "Tashkent, Uzbekistan",
  email: "abduvaliyevasad23@gmail.com",
  telegram: "+998 99 878 48 03",
  github: "github.com/Abduvaliyev2003",
  linkedin: "linkedin.com/in/asadbek-abduvaliyev",

  summary:
    "Dynamic and detail-oriented Backend Developer with over 2 years of professional experience specializing in PHP and the Laravel framework. Proven expertise in building scalable RESTful APIs, managing server infrastructure, and developing high-performance web applications. Adept at optimizing database queries and managing Nginx/Linux environments to ensure high system availability.",

  experience: [
    {
      role: "Backend Developer",
      company: "Jobo.uz",
      period: "June 2023 – July 2025",
      tech: ["PHP", "Laravel", "MySQL", "Nginx", "Linux", "REST API", "JSON API"],
      points: [
        "Engineered and maintained robust backend infrastructures for job portal applications using PHP and Laravel, improving system response times by 20%.",
        "Developed and deployed automated Telegram bots for notifications and user interaction, streamlining communication workflows.",
        "Managed and configured Linux-based servers (Nginx), ensuring optimal performance, security updates, and 99.9% uptime.",
        "Architected and implemented comprehensive RESTful APIs to support seamless integration with mobile and web front-end platforms.",
        "Collaborated with cross-functional teams to debug complex issues and deliver high-quality, maintainable code.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor in IT",
      school: "MDIS Tashkent",
      period: "2024 — 2028 (Expected)",
      note: "Focusing on Software Engineering and Information Systems.",
    },
    {
      degree: "Backend PHP Developer",
      school: "Proweb Learning Center",
      period: "2022",
      note: "Intensive program covering PHP fundamentals, database design, and web architecture.",
    },
  ],

  certifications: [
    { name: "IELTS Band 6.5", issuer: "IDP / British Council", year: "2025" },
  ],

  languages: [
    { lang: "Uzbek", level: "Native" },
    { lang: "Russian", level: "Upper-Intermediate (B2)" },
    { lang: "English", level: "Upper-Intermediate (B2)" },
  ],

  skills: {
    "Backend":    ["PHP", "Laravel", "Python (Django)", "REST API", "JSON API"],
    "Database":   ["MySQL", "MongoDB"],
    "Server":     ["Nginx", "Linux", "Git"],
    "Frontend":   ["React.js", "JavaScript", "HTML", "CSS"],
  },
};

// ─── Print styles injected globally ──────────────────────────
const PRINT_CSS = `
@media print {
  body { background: #fff !important; color: #111 !important; }
  .no-print, nav, canvas, .scanlines, .cursor-dot, .cursor-ring { display: none !important; }
  #cv-print-target {
    position: fixed !important;
    inset: 0 !important;
    z-index: 99999 !important;
    background: #fff !important;
    padding: 32px 48px !important;
    overflow: auto !important;
    color: #111 !important;
    font-family: 'JetBrains Mono', monospace !important;
    font-size: 11px !important;
  }
  #cv-print-target * { color: #111 !important; background: transparent !important;
    border-color: #ccc !important; box-shadow: none !important; }
  #cv-print-target h1 { font-size: 22px !important; }
  #cv-print-target .cv-section-title { color: #0070c0 !important; border-color: #0070c0 !important; }
}
`;

export default function Resume() {
  const [showPrintView, setShowPrintView] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleDownload = () => {
    const style = document.createElement("style");
    style.innerHTML = PRINT_CSS;
    document.head.appendChild(style);
    setShowPrintView(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        setShowPrintView(false);
        document.head.removeChild(style);
      }, 1000);
    }, 200);
  };

  return (
    <>
      {/* ── Printable overlay (hidden until print) ── */}
      {showPrintView && (
        <div id="cv-print-target" style={{ display: "none" }}>
          <PrintableCV data={CV_DATA} />
        </div>
      )}

      {/* ── Main styled section ── */}
      <section id="resume">
        <div className="container-inner" style={{ maxWidth: 960 }}>

          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 56, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: 12 }}>// 05. resume</p>
              <h2
                className="glitch"
                data-text="RESUME"
                style={{
                  fontFamily: "'Orbitron', monospace",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#fff",
                  letterSpacing: "0.08em",
                }}
              >
                RESUME
              </h2>
            </div>
            <button
              onClick={handleDownload}
              className="btn-neon no-print"
              style={{ alignSelf: "flex-end" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download PDF
            </button>
          </motion.div>

          {/* ── Identity card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="glass-card"
            style={{ padding: "32px 36px", marginBottom: 32 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24 }}>
              <div>
                <h3 style={{ fontFamily: "'Orbitron', monospace", fontWeight: 900, fontSize: "1.6rem", color: "#fff", marginBottom: 6 }}>
                  {CV_DATA.name}
                </h3>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.85rem", color: "var(--neon-cyan)", marginBottom: 14, letterSpacing: "0.12em" }}>
                  {CV_DATA.title}
                </p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "rgba(201,216,227,0.65)", maxWidth: 540, lineHeight: 1.8 }}>
                  {CV_DATA.summary}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 240 }}>
                {[
                  { icon: "📍", val: CV_DATA.location },
                  { icon: "📧", val: CV_DATA.email },
                  { icon: "💬", val: CV_DATA.telegram },
                  { icon: "🐙", val: CV_DATA.github },
                  { icon: "💼", val: CV_DATA.linkedin },
                ].map(({ icon, val }) => (
                  <div key={val} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: "0.85rem" }}>{icon}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "rgba(201,216,227,0.6)" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Experience ── */}
          <SectionBlock title="Experience" delay={0.2} inView={inView}>
            <div style={{ position: "relative" }}>
              {/* Timeline line */}
              <div style={{
                position: "absolute", left: 7, top: 8, bottom: 0, width: 1,
                background: "linear-gradient(to bottom, var(--neon-cyan), transparent)",
              }} />
              {CV_DATA.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  style={{ paddingLeft: 32, paddingBottom: 36, position: "relative" }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: "absolute", left: 0, top: 6,
                    width: 15, height: 15, borderRadius: "50%",
                    background: "var(--bg-primary)",
                    border: "2px solid var(--neon-cyan)",
                    boxShadow: "0 0 10px rgba(0,245,255,0.5)",
                  }} />

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <div>
                      <h4 style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "0.95rem", color: "#fff", marginBottom: 4 }}>
                        {exp.role}
                      </h4>
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "var(--neon-green)" }}>
                        {exp.company}
                      </span>
                    </div>
                    <span style={{
                      fontFamily: "'Space Mono', monospace", fontSize: "0.7rem",
                      color: "rgba(201,216,227,0.35)", letterSpacing: "0.1em",
                      background: "rgba(0,245,255,0.06)", border: "1px solid rgba(0,245,255,0.15)",
                      padding: "3px 12px", borderRadius: 3,
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul style={{ marginBottom: 14, paddingLeft: 0, listStyle: "none" }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem",
                        color: "rgba(201,216,227,0.7)", lineHeight: 1.8, marginBottom: 4,
                        paddingLeft: 16, position: "relative",
                      }}>
                        <span style={{ position: "absolute", left: 0, color: "var(--neon-cyan)" }}>›</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {exp.tech.map(t => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionBlock>

          {/* ── Education ── */}
          <SectionBlock title="Education" delay={0.35} inView={inView}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="grid-responsive">
              {CV_DATA.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.1 }}
                  className="glass-card"
                  style={{ padding: "22px 24px" }}
                >
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "var(--neon-cyan)", letterSpacing: "0.15em", marginBottom: 8 }}>
                    {edu.period}
                  </div>
                  <h4 style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "0.85rem", color: "#fff", marginBottom: 6 }}>
                    {edu.degree}
                  </h4>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "var(--neon-green)", marginBottom: 8 }}>
                    {edu.school}
                  </p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "rgba(201,216,227,0.5)" }}>
                    {edu.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </SectionBlock>

          {/* ── Skills (compact) ── */}
          <SectionBlock title="Technical Skills" delay={0.45} inView={inView}>
            <div className="glass-card" style={{ padding: "24px 28px" }}>
              {Object.entries(CV_DATA.skills).map(([cat, items]) => (
                <div key={cat} style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 14, flexWrap: "wrap" }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace", fontSize: "0.7rem",
                    color: "rgba(201,216,227,0.4)", letterSpacing: "0.1em",
                    minWidth: 110, textTransform: "uppercase",
                  }}>
                    {cat}
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {items.map(t => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* ── Certifications + Languages ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-responsive">
            <SectionBlock title="Certifications" delay={0.5} inView={inView}>
              <div className="glass-card" style={{ padding: "20px 24px" }}>
                {CV_DATA.certifications.map((c, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid rgba(0,245,255,0.06)", flexWrap: "wrap", gap: 6 }}>
                    <div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "rgba(201,216,227,0.8)", marginBottom: 2 }}>{c.name}</div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "rgba(201,216,227,0.4)" }}>{c.issuer}</div>
                    </div>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "var(--neon-cyan)" }}>{c.year}</span>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock title="Languages" delay={0.55} inView={inView}>
              <div className="glass-card" style={{ padding: "20px 24px" }}>
                {CV_DATA.languages.map((l, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(0,245,255,0.06)" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "rgba(201,216,227,0.8)" }}>{l.lang}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "var(--neon-green)" }}>{l.level}</span>
                  </div>
                ))}
              </div>
            </SectionBlock>
          </div>

        </div>
        <style>{`
          @media (max-width: 768px) {
            .grid-responsive { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}

// ─── Helper: reusable section block ──────────────────────────
function SectionBlock({ title, delay, inView, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      style={{ marginBottom: 40 }}
    >
      <div style={{
        display: "flex", alignItems: "center", gap: 16, marginBottom: 24,
      }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.2em", color: "var(--neon-cyan)", textTransform: "uppercase" }}>
          // {title.toLowerCase().replace(" ", "_")}
        </span>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,245,255,0.3), transparent)" }} />
      </div>
      {children}
    </motion.div>
  );
}

// ─── Printable CV (clean for PDF export) ─────────────────────
function PrintableCV({ data }) {
  const s = {
    body: { fontFamily: "'JetBrains Mono', monospace", color: "#111", fontSize: 11 },
    h1: { fontSize: 22, fontFamily: "Orbitron, monospace", marginBottom: 2 },
    subtitle: { fontSize: 12, color: "#0070c0", marginBottom: 6 },
    sectionTitle: { fontSize: 12, fontWeight: "bold", color: "#0070c0", borderBottom: "1.5px solid #0070c0", paddingBottom: 3, marginBottom: 10, marginTop: 18 },
    row: { display: "flex", justifyContent: "space-between", marginBottom: 2 },
    dim: { color: "#555", fontSize: 10 },
    bullet: { fontSize: 10, color: "#333", marginBottom: 2 },
    badge: { display: "inline-block", background: "#e8f4fd", color: "#0070c0", padding: "1px 6px", borderRadius: 3, fontSize: 9, marginRight: 4, marginBottom: 4, border: "1px solid #bde0f7" },
  };
  return (
    <div style={s.body}>
      {/* Header */}
      <h1 style={s.h1}>{data.name}</h1>
      <div style={s.subtitle}>{data.title}</div>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 8, ...s.dim }}>
        <span>📍 {data.location}</span>
        <span>📧 {data.email}</span>
        <span>💬 {data.telegram}</span>
        <span>🐙 {data.github}</span>
        <span>💼 {data.linkedin}</span>
      </div>
      <p style={{ fontSize: 10, color: "#444", lineHeight: 1.6, marginBottom: 4 }}>{data.summary}</p>

      {/* Experience */}
      <div style={s.sectionTitle}>EXPERIENCE</div>
      {data.experience.map((exp, i) => (
        <div key={i} style={{ marginBottom: 12 }}>
          <div style={s.row}>
            <strong>{exp.role} — {exp.company}</strong>
            <span style={s.dim}>{exp.period}</span>
          </div>
          <ul style={{ paddingLeft: 14, margin: "4px 0 4px" }}>
            {exp.points.map((p, j) => <li key={j} style={s.bullet}>{p}</li>)}
          </ul>
          <div>{exp.tech.map(t => <span key={t} style={s.badge}>{t}</span>)}</div>
        </div>
      ))}

      {/* Education */}
      <div style={s.sectionTitle}>EDUCATION</div>
      {data.education.map((e, i) => (
        <div key={i} style={{ marginBottom: 8 }}>
          <div style={s.row}>
            <strong>{e.degree}</strong><span style={s.dim}>{e.period}</span>
          </div>
          <div style={s.dim}>{e.school}</div>
          <div style={{ ...s.dim, fontSize: 9 }}>{e.note}</div>
        </div>
      ))}

      {/* Skills */}
      <div style={s.sectionTitle}>TECHNICAL SKILLS</div>
      {Object.entries(data.skills).map(([cat, items]) => (
        <div key={cat} style={{ marginBottom: 5 }}>
          <span style={{ ...s.dim, fontWeight: "bold", marginRight: 8 }}>{cat}:</span>
          {items.map(t => <span key={t} style={s.badge}>{t}</span>)}
        </div>
      ))}

      {/* Certifications + Languages */}
      <div style={{ display: "flex", gap: 40, marginTop: 4 }}>
        <div style={{ flex: 1 }}>
          <div style={s.sectionTitle}>CERTIFICATIONS</div>
          {data.certifications.map((c, i) => (
            <div key={i} style={{ ...s.row, marginBottom: 4 }}>
              <span style={{ fontSize: 10 }}>{c.name} · {c.issuer}</span>
              <span style={s.dim}>{c.year}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <div style={s.sectionTitle}>LANGUAGES</div>
          {data.languages.map((l, i) => (
            <div key={i} style={{ ...s.row, marginBottom: 4 }}>
              <span style={{ fontSize: 10 }}>{l.lang}</span>
              <span style={s.dim}>{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
