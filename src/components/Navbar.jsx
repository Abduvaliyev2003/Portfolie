// Navbar — Terminal-style sticky navigation with mobile hamburger
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#hero",     label: "~/home" },
  { href: "#about",    label: "~/about" },
  { href: "#projects", label: "~/projects" },
  { href: "#skills",   label: "~/skills" },
  { href: "#resume",   label: "~/resume" },
  { href: "#contact",  label: "~/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("#hero");
  const [isMobile, setIsMobile]   = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener("scroll", close);
      return () => window.removeEventListener("scroll", close);
    }
  }, [menuOpen]);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        padding: scrolled ? "10px 0" : (isMobile ? "14px 0" : "20px 0"),
        background: scrolled
          ? "rgba(3, 7, 18, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,245,255,0.12)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div className="container-inner" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: isMobile ? "flex" : "none",
            flexDirection: "column",
            gap: 5,
            padding: 8,
            zIndex: 10,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "var(--neon-cyan)",
                borderRadius: 1,
                transition: "all 0.3s",
                transformOrigin: "center",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                  : i === 1 ? "scaleX(0)"
                  : "rotate(-45deg) translate(4.5px, -4.5px)"
                  : "none",
              }}
            />
          ))}
        </button>

        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: "'Orbitron', monospace",
            fontWeight: 900,
            fontSize: isMobile ? "0.95rem" : "1.1rem",
            letterSpacing: "0.15em",
            color: "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ color: "var(--neon-cyan)" }}>[</span>
          <span className="text-neon-cyan">ASAD</span>
          <span style={{ color: "#fff" }}>.DEV</span>
          <span style={{ color: "var(--neon-cyan)" }}>]</span>
          <span className="blink" style={{ color: "var(--neon-green)", marginLeft: 2 }}>_</span>
        </a>

        {/* Desktop Links */}
        <ul
          style={{
            gap: 8,
            listStyle: "none",
            alignItems: "center",
            display: isMobile ? "none" : "flex",
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleNav(href)}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.78rem",
                  letterSpacing: "0.05em",
                  padding: "6px 14px",
                  borderRadius: 4,
                  textDecoration: "none",
                  color: active === href ? "var(--neon-cyan)" : "rgba(201,216,227,0.7)",
                  background: active === href ? "rgba(0,245,255,0.08)" : "transparent",
                  border: active === href ? "1px solid rgba(0,245,255,0.25)" : "1px solid transparent",
                  transition: "all 0.25s",
                  cursor: "none",
                }}
                onMouseEnter={e => {
                  if (active !== href) e.target.style.color = "var(--neon-cyan)";
                }}
                onMouseLeave={e => {
                  if (active !== href) e.target.style.color = "rgba(201,216,227,0.7)";
                }}
              >
                {label}
              </a>
            </li>
          ))}

          {/* CTA */}
          <li>
            <a
              href="#contact"
              className="btn-neon"
              style={{ padding: "6px 18px", fontSize: "0.75rem", width: "auto" }}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(3,7,18,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(0,245,255,0.15)",
              padding: "16px 20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              overflow: "hidden",
            }}
          >
            {NAV_LINKS.map(({ href, label }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => handleNav(href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.9rem",
                  color: active === href ? "var(--neon-cyan)" : "rgba(201,216,227,0.8)",
                  textDecoration: "none",
                  padding: "14px 12px",
                  borderRadius: 8,
                  background: active === href ? "rgba(0,245,255,0.06)" : "transparent",
                  borderBottom: "1px solid rgba(0,245,255,0.06)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ color: "var(--neon-green)", fontSize: "0.75rem" }}>›</span>
                {label}
              </motion.a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => handleNav("#contact")}
              className="btn-neon"
              style={{ marginTop: 12, textAlign: "center", justifyContent: "center" }}
            >
              Hire Me →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
