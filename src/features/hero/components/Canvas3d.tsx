"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Canvas3d() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useGSAP(() => {
    gsap.from(canvasRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1.7,
      ease: "power2.inOut",
    });
  }, []);

  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!canvasRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });
    observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="absolute inset-0 -z-10 min-h-screen h-[110vw]">
      <Canvas
        ref={canvasRef}
        shadows
        camera={{ fov: 45, near: 0.1, far: 100, position: [0, 8, 20] }}
        gl={{
          stencil: false,
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        frameloop={visible ? "always" : "never"}
      >
        <Scene />
      </Canvas>
    </figure>
  );
}
