"use client";
import { useEffect } from "react";

export default function NeonRippleCursor() {
  useEffect(() => {
    const moveHandler = (e) => {
      const ring = document.createElement("div");
      ring.className = "cursor-ring";
      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
      document.body.appendChild(ring);

      setTimeout(() => ring.remove(), 600); // Remove after animation
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return null;
}
