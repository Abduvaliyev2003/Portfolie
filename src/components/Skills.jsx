// Skills Section — Animated skill bars with terminal aesthetics
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "../data/projects";

const ALL_SKILLS_FLAT = [
  { name: "Python",       level: 92, color: "#00f5ff" },
  { name: "Go",           level: 80, color: "#00f5ff" },
  { name: "Rust",         level: 65, color: "#bf00ff" },
  { name: "SQL",          level: 88, color: "#39ff14" },
  { name: "Bash",         level: 82, color: "#39ff14" },
  { name: "FastAPI",      level: 90, color: "#00f5ff" },
  { name: "Django",       level: 75, color: "#00f5ff" },
  { name: "PostgreSQL",   level: 87, color: "#39ff14" },
  { name: "Redis",        level: 80, color: "#ff3c3c" },
  { name: "MongoDB",      level: 72, color: "#39ff14" },
  { name: "Docker",       level: 85, color: "#00f5ff" },
  { name: "Kubernetes",   level: 68, color: "#bf00ff" },
  { name: "Nginx",        level: 78, color: "#39ff14" },
  { name: "GitHub Actions",level:80, color: "#bf00ff" },
];

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.75rem", color:"rgba(201,216,227,0.75)" }}>
          {name}
        </span>
        <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.7rem", color }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          height: 3,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          style={{
            height: "100%",
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            borderRadius: 2,
            boxShadow: `0 0 8px ${color}55`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" style={{ background: "rgba(0,0,0,0.2)" }}>
      <div className="container-inner" style={{ maxWidth: 1100 }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <p className="section-label" style={{ marginBottom: 12 }}>// 03. tech_stack</p>
          <h2
            className="glitch"
            data-text="SKILLS"
            style={{
              fontFamily: "'Orbitron', monospace",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fff",
              letterSpacing: "0.08em",
            }}
          >
            SKILLS
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
          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card"
            style={{ padding: "32px 28px" }}
          >
            <p className="section-label" style={{ marginBottom: 24 }}>// proficiency_levels</p>
            {ALL_SKILLS_FLAT.map((sk, i) => (
              <SkillBar key={sk.name} {...sk} inView={inView} delay={0.3 + i * 0.05} />
            ))}
          </motion.div>

          {/* Category grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {SKILLS.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25 + gi * 0.1 }}
                className="glass-card"
                style={{ padding: "22px 24px" }}
              >
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    color: "var(--neon-green)",
                    marginBottom: 14,
                    textTransform: "uppercase",
                  }}
                >
                  /{group.category}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map(item => (
                    <span key={item} className="tech-badge">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* OS / Tools */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.75 }}
              className="glass-card"
              style={{ padding: "22px 24px" }}
            >
              <p style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.2em", color:"var(--neon-cyan)", marginBottom:14, textTransform:"uppercase" }}>
                /Environment
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {["Linux", "Arch Linux", "Neovim", "Git", "tmux", "zsh"].map(t => (
                  <span key={t} className="tech-badge" style={{ borderColor:"rgba(191,0,255,0.4)", color:"#bf00ff" }}>{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
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
