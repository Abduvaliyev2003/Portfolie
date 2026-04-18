// About Section — Terminal-window style bio
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "3+",  label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "50k+",label: "API req/day handled" },
  { value: "99.9%",label: "Uptime SLA" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about">
      <div className="container-inner" style={{ maxWidth: 1100 }}>

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p className="section-label" style={{ marginBottom: 12 }}>
            // 01. about_me
          </p>
          <h2
            className="glitch"
            data-text="ABOUT"
            style={{
              fontFamily: "'Orbitron', monospace",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fff",
              letterSpacing: "0.08em",
            }}
          >
            ABOUT
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="grid-responsive"
        >
          {/* Terminal bio card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card"
            style={{ padding: 0, overflow: "hidden" }}
          >
            {/* Terminal title bar */}
            <div
              style={{
                background: "rgba(0,245,255,0.06)",
                borderBottom: "1px solid rgba(0,245,255,0.12)",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
                <span key={c} style={{ width:10, height:10, borderRadius:"50%", background:c, display:"block" }} />
              ))}
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.7rem",
                  color: "rgba(201,216,227,0.5)",
                  marginLeft: 8,
                }}
              >
                ~/.config/asadbek/bio.sh
              </span>
            </div>

            {/* Bio text */}
            <div style={{ padding: "24px 28px" }}>
              {[
                { cmd: "whoami", out: "Asadbek — Backend Developer based in Uzbekistan" },
                { cmd: "cat experience.txt", out: "3+ years building production-grade backend systems.\nSpecialize in high-load APIs, microservices, and DevOps automation." },
                { cmd: "echo $PASSION", out: "Clean architecture, open-source & making things FAST." },
                { cmd: "cat goals.txt", out: "Currently exploring distributed systems, Rust performance\noptimization and AI-powered backend tooling." },
              ].map(({ cmd, out }, i) => (
                <div key={i} style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.78rem",
                      color: "var(--neon-green)",
                      marginBottom: 6,
                    }}
                  >
                    <span style={{ color: "var(--neon-cyan)", opacity: 0.6 }}>~/asadbek</span>
                    <span style={{ color: "rgba(201,216,227,0.4)" }}> $ </span>
                    {cmd}
                  </div>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.82rem",
                      color: "rgba(201,216,227,0.8)",
                      lineHeight: 1.7,
                      paddingLeft: 16,
                      borderLeft: "2px solid rgba(0,245,255,0.15)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {out}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="glass-card"
                  style={{ padding: "24px 20px", textAlign: "center" }}
                >
                  <div
                    style={{
                      fontFamily: "'Orbitron', monospace",
                      fontWeight: 900,
                      fontSize: "2rem",
                      color: "var(--neon-cyan)",
                      textShadow: "0 0 20px rgba(0,245,255,0.6)",
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.68rem",
                      color: "rgba(201,216,227,0.5)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Secondary info */}
            <div className="glass-card" style={{ padding: "24px 28px" }}>
              <p className="section-label" style={{ marginBottom: 16 }}>// current_stack</p>
              {[
                { k: "Primary Lang", v: "Python  /  Go" },
                { k: "Database",     v: "PostgreSQL  /  MongoDB" },
                { k: "Infra",        v: "Docker  /  Kubernetes  /  Nginx" },
                { k: "Cloud",        v: "VPS  /  Railway  /  GCP" },
                { k: "Status",       v: "🟢  Open to remote offers" },
              ].map(({ k, v }) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "9px 0",
                    borderBottom: "1px solid rgba(0,245,255,0.06)",
                    gap: 12,
                  }}
                >
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "rgba(201,216,227,0.4)" }}>
                    {k}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--neon-cyan)" }}>
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
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
