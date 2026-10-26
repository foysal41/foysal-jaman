
"use client";

import { useEffect, useRef } from "react";

const CODE_OPACITY = 0.40;
const FONT_SIZE = 12;
const LINE_HEIGHT = 10;
const MIN_SPEED = 10;
const MAX_SPEED = 40;
const EDGE_PADDING = 8;

const codeLines = [
  "import { useState, useEffect } from 'react';",
  "import Link from 'next/link';",
  "export default function Hero() {",
  "const [active, setActive] = useState(false);",
  "return <main className='portfolio'>",
  "  <h1>Foysal Jaman Full Stack Developer</h1>",
  "const projects = await getProjects();",
  "export async function GET() {",
  "return Response.json({ success: true });",
  "interface Project { title: string; }",
  "const response = await fetch('/api/projects');",
  "function ProjectCard({ project }) {",
  "return <article>{project.title}</article>;",
  "const skills = ['React', 'Next.js', 'TypeScript'];",
  "useEffect(() => { loadProjects(); }, []);",
  "export const metadata = { title: 'Portfolio' };",
  "const handleSubmit = async () => {",
  "await sendMessage(prompt);",
  "const data = await response.json();",
  "const router = useRouter();",
  "export function About() { return <section />; }",
  "type Props = { title: string; children: React.ReactNode };",
  "const isLoading = false;",
  "const isAvailable = true;",
];

export default function HeroCodeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let frameId;
    let lastTime = 0;
    let rows = [];

    const createRows = () => {
      ctx.font = `${FONT_SIZE}px monospace`;

      const rowCount = Math.floor(
        Math.max(0, height - EDGE_PADDING * 2) / LINE_HEIGHT
      );

      rows = Array.from({ length: rowCount }, (_, index) => ({
        // Keep every baseline safely inside the canvas.
        y: EDGE_PADDING + index * LINE_HEIGHT + FONT_SIZE,
        x: Math.random() * Math.max(width, 1),
        speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
        lineIndex: Math.floor(Math.random() * codeLines.length),
        direction: index % 2 === 0 ? 1 : -1,
        opacity: 0.65 + Math.random() * 0.35,
      }));
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createRows();
      lastTime = 0;
    };

    const draw = (timestamp) => {
      const delta = lastTime
        ? Math.min((timestamp - lastTime) / 1000, 0.05)
        : 0;

      lastTime = timestamp;

      ctx.clearRect(0, 0, width, height);
      ctx.save();

      // Hard clipping prevents anything from painting outside the Hero.
      ctx.beginPath();
      ctx.rect(0, 0, width, height);
      ctx.clip();

      ctx.font = `${FONT_SIZE}px monospace`;
      ctx.textBaseline = "alphabetic";

      rows.forEach((row) => {
        const text = codeLines[row.lineIndex];
        const textWidth = ctx.measureText(text).width;

        if (!reducedMotion) {
          row.x += row.direction * row.speed * delta;
        }

        // Recycle rows at the edges to keep horizontal movement continuous.
        if (row.direction === 1 && row.x > width) {
          row.x = -textWidth;
          row.lineIndex = Math.floor(Math.random() * codeLines.length);
        } else if (row.direction === -1 && row.x + textWidth < 0) {
          row.x = width;
          row.lineIndex = Math.floor(Math.random() * codeLines.length);
        }

        // Safety check: never draw text too close to the bottom or top.
        if (
          row.y - FONT_SIZE < 0 ||
          row.y + 2 > height
        ) {
          return;
        }

        const centerDistance =
          Math.abs(row.x - width / 2) / Math.max(width / 2, 1);

        const centerFade = Math.max(
          0.35,
          Math.min(1, 0.35 + centerDistance * 0.45)
        );

        const alpha = Math.min(
          1,
          CODE_OPACITY * row.opacity * centerFade
        );

        const isKeyword =
          /^\s*(import|export|const|function|interface|return|await|type|useEffect)/.test(
            text
          );

        ctx.fillStyle = isKeyword
          ? `rgba(137, 111, 190, ${alpha})`
          : `rgba(90, 98, 110, ${alpha})`;

        // No maxWidth scaling: prevents text from being compressed.
        ctx.fillText(text, row.x, row.y);
      });

      ctx.restore();

      if (!reducedMotion) {
        frameId = requestAnimationFrame(draw);
      }
    };

    resizeCanvas();

    const observer = new ResizeObserver(() => {
      resizeCanvas();
    });

    observer.observe(canvas);

    if (reducedMotion) {
      draw(performance.now());
    } else {
      frameId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 block h-full w-full"
      />

      {/* Keep the center soft and preserve readable Hero content. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.48) 45%, rgba(255,255,255,0.12) 100%)",
        }}
      />
    </>
  );
}
