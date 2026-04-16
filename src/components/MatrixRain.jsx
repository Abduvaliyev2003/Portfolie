// Matrix Rain Effect - Canvas-based falling code streams
import { useEffect, useRef } from "react";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ01アイウエオ{}[]<>/\\|!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 13;
    let cols = Math.floor(canvas.width / fontSize);
    let drops = Array(cols).fill(1).map(() => Math.random() * -100);

    const draw = () => {
      // Semi-transparent black overlay → trails
      ctx.fillStyle = "rgba(3, 7, 18, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      cols = Math.floor(canvas.width / fontSize);
      while (drops.length < cols) drops.push(Math.random() * -100);

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * fontSize;

        // Bright head char
        const bright = drops[i] > 1 && Math.random() > 0.92;
        if (bright) {
          ctx.fillStyle = "rgba(255,255,255,0.9)";
        } else {
          // Gradient: cyan → green
          const alpha = Math.random() * 0.5 + 0.25;
          ctx.fillStyle = `rgba(0,245,255,${alpha})`;
        }

        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        ctx.fillText(char, i * fontSize, y);

        // Reset column after it passes screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.4 + Math.random() * 0.3;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        opacity: 0.18,
        pointerEvents: "none",
      }}
    />
  );
}
