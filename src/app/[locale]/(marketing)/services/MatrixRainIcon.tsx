import React, { useEffect, useRef } from 'react';

const codeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}()[]<>;:=+-*/_.,"\'|&^%!~';
const highlightColors = ['#39FF14', '#FFD600', '#00BFFF']; // green, yellow, blue

const MatrixRainIcon: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const width = 48;
    const height = 48;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 12;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => 1);

    let animationFrameId: number;

    function draw() {
      if (!ctx) {
        return;
      }
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `bold ${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const charIndex = Math.floor(Math.random() * codeChars.length);
        const text: string = String(codeChars.charAt(charIndex) || '');
        // Randomly pick a highlight color (mostly green, sometimes yellow/blue)
        let color: string = String(highlightColors[0]);
        if (Math.random() < 0.85) {
          color = String(highlightColors[0]);
        } else {
          const idx = Math.floor(Math.random() * (highlightColors.length - 1)) + 1;
          color = String(highlightColors[idx] ?? highlightColors[0]);
        }
        ctx.fillStyle = color;
        const dropY = (drops[i] ?? 1) * fontSize;
        ctx.fillText(text, i * fontSize, dropY);
        if (dropY > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] = (drops[i] ?? 1) + 1;
      }
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={48}
      height={48}
      style={{ display: 'block', borderRadius: '8px' }}
      aria-label="Matrix rain icon"
    />
  );
};

export default MatrixRainIcon;
