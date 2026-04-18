// Hero Section — Full-screen 3D + Glitch title + Terminal typewriter
import { useRef, useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Scene from "./Scene";

const TYPED_LINES = [
  "Backend Engineer & System Architect",
  "Building high-performance APIs & microservices",
  "Golang · Python · Rust · PostgreSQL · Kubernetes",
];

function Typewriter({ lines }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const current = lines[lineIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 45);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, 22);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setLineIdx(i => (i + 1) % lines.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, lineIdx, lines]);

  return (
    <span>
      <span style={{ color: "var(--neon-cyan)" }}>{displayed}</span>
      <span className="blink" style={{ color: "var(--neon-green)" }}>█</span>
    </span>
  );
}

export default function Hero() {
  const mouse = useRef([0, 0]);

  const handleMouseMove = (e) => {
    mouse.current = [
      e.clientX - window.innerWidth / 2,
      -(e.clientY - window.innerHeight / 2),
    ];
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* 3D Canvas background */}
      <div
        id="hero-canvas"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      >
        <Suspense fallback={null}>
          <Scene mouse={mouse} />
        </Suspense>
      </div>

      {/* Radial gradient vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(3,7,18,0.7) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Hero Content */}
      <div
        className="container-inner"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
        }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            background: "rgba(57,255,20,0.08)",
            border: "1px solid rgba(57,255,20,0.3)",
            borderRadius: 4,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 8, height: 8,
              borderRadius: "50%",
              background: "var(--neon-green)",
              boxShadow: "0 0 8px var(--neon-green)",
              animation: "blink 2s step-end infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              color: "var(--neon-green)",
            }}
          >
            AVAILABLE FOR HIRE · REMOTE
          </span>
        </motion.div>

        {/* Glitch Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p
            className="section-label"
            style={{ marginBottom: 12 }}
          >
            // system.init()
          </p>
          <h1
            className="glitch"
            data-text="ASADBEK"
            style={{
              fontFamily: "'Orbitron', monospace",
              fontWeight: 900,
              fontSize: "clamp(3rem, 10vw, 7rem)",
              lineHeight: 1,
              letterSpacing: "0.06em",
              marginBottom: 8,
              color: "#fff",
            }}
          >
            ASADBEK
          </h1>
          <h2
            style={{
              fontFamily: "'Orbitron', monospace",
              fontWeight: 400,
              fontSize: "clamp(1rem, 3vw, 1.8rem)",
              letterSpacing: "0.3em",
              color: "rgba(201,216,227,0.5)",
              marginBottom: 32,
              textTransform: "uppercase",
            }}
          >
            Backend<span style={{ color: "var(--neon-cyan)" }}>_</span>Developer
          </h2>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
            marginBottom: 48,
            minHeight: 28,
          }}
        >
          <span style={{ color: "var(--neon-green)" }}>~/asadbek $ </span>
          <Typewriter lines={TYPED_LINES} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          <a href="#projects" className="btn-neon">
            <span>View Projects</span>
            <span>→</span>
          </a>
          <a
            href="#contact"
            className="btn-neon"
            style={{
              borderColor: "var(--neon-green)",
              color: "var(--neon-green)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.setProperty("--btn-bg", "var(--neon-green)");
            }}
          >
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: -80,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "rgba(201,216,227,0.35)",
            }}
          >
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{
              width: 1,
              height: 40,
              background:
                "linear-gradient(to bottom, rgba(0,245,255,0.8), transparent)",
            }}
          />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(transparent, var(--bg-primary))",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
