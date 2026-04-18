// Projects Section — Glassmorphism cards with neon glow
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../data/projects";

const CATEGORIES = ["All", "Backend", "DevOps", "Security", "AI/ML"];

const CATEGORY_COLORS = {
  Backend:  { bg: "rgba(0,245,255,0.08)",   border: "rgba(0,245,255,0.35)",   text: "var(--neon-cyan)" },
  DevOps:   { bg: "rgba(191,0,255,0.08)",   border: "rgba(191,0,255,0.35)",   text: "#bf00ff" },
  Security: { bg: "rgba(255,60,60,0.08)",   border: "rgba(255,60,60,0.35)",   text: "#ff3c3c" },
  "AI/ML":  { bg: "rgba(57,255,20,0.08)",   border: "rgba(57,255,20,0.35)",   text: "var(--neon-green)" },
};

function ProjectCard({ project, idx, inView }) {
  const [hovered, setHovered] = useState(false);
  const cat = CATEGORY_COLORS[project.category] || CATEGORY_COLORS.Backend;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: idx * 0.1 }}
      className="glass-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "28px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        boxShadow: hovered
          ? `0 0 40px rgba(0,245,255,0.15), 0 0 80px rgba(0,245,255,0.05)`
          : "none",
        transition: "box-shadow 0.4s, transform 0.3s",
      }}
    >
      {/* Card header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        {/* Folder icon + number */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
            <path d="M2 4a2 2 0 012-2h8l3 4h17a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
              fill="rgba(0,245,255,0.12)" stroke="var(--neon-cyan)" strokeWidth="1.2"/>
          </svg>
          <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.65rem", color:"rgba(201,216,227,0.3)", letterSpacing:"0.15em" }}>
            {String(idx + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Category + GitHub */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
          <span style={{
            fontFamily:"'Space Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.12em",
            padding:"3px 10px", borderRadius:3,
            background: cat.bg, border:`1px solid ${cat.border}`, color: cat.text
          }}>
            {project.category}
          </span>

          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            style={{ color: hovered ? "var(--neon-cyan)" : "rgba(201,216,227,0.35)", transition:"color 0.25s", cursor:"none" }}
            aria-label="GitHub"
          >
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
          </a>
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Orbitron', monospace",
          fontWeight: 700,
          fontSize: "1rem",
          color: hovered ? "var(--neon-cyan)" : "#fff",
          transition: "color 0.25s",
          letterSpacing: "0.06em",
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.8rem",
          color: "rgba(201,216,227,0.6)",
          lineHeight: 1.75,
          flexGrow: 1,
        }}
      >
        {project.description}
      </p>

      {/* Tech stack badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tech_stack.map(tech => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>

      {/* Neon bottom line */}
      <div
        style={{
          height: 1,
          background: hovered
            ? "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))"
            : "rgba(0,245,255,0.1)",
          transition: "background 0.4s",
          borderRadius: 1,
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects">
      <div className="container-inner" style={{ maxWidth: 1200 }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <p className="section-label" style={{ marginBottom: 12 }}>// 02. projects</p>
          <h2
            className="glitch"
            data-text="PROJECTS"
            style={{
              fontFamily: "'Orbitron', monospace",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fff",
              letterSpacing: "0.08em",
              marginBottom: 24,
            }}
          >
            PROJECTS
          </h2>
          <p style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.82rem", color:"rgba(201,216,227,0.45)", maxWidth:540 }}>
            Production-grade systems I've built. Each one solves a real problem at scale.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                padding: "6px 16px",
                borderRadius: 4,
                border: filter === cat ? "1px solid var(--neon-cyan)" : "1px solid rgba(0,245,255,0.18)",
                background: filter === cat ? "rgba(0,245,255,0.1)" : "transparent",
                color: filter === cat ? "var(--neon-cyan)" : "rgba(201,216,227,0.5)",
                cursor: "none",
                transition: "all 0.25s",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} idx={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
