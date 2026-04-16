// Main App — assembles all sections
import MatrixRain    from "./components/MatrixRain";
import CustomCursor  from "./components/CustomCursor";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Projects      from "./components/Projects";
import Skills        from "./components/Skills";
import Resume        from "./components/Resume";
import Contact       from "./components/Contact";

export default function App() {
  return (
    <>
      {/* Global overlays */}
      <div className="scanlines" />
      <MatrixRain />
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: "relative", zIndex: 10 }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
