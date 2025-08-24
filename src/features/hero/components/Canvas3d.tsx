"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { useEffect, useRef, useState } from "react";
import { useModelLoading } from "@/components/ModelLoadingProvider";
import { useGSAP, gsap } from "@/lib/gsap";

export default function Canvas3d() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { shouldStartAnimations } = useModelLoading();
  useGSAP(() => {
    if (!shouldStartAnimations) return;

    gsap.from(canvasRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1.7,
      ease: "power2.inOut",
    });
  }, [shouldStartAnimations]);

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
        camera={{ fov: 45, near: 0.1, far: 30, position: [0, 8, 20] }}
        dpr={1}
        frameloop={visible ? "always" : "never"}
      >
        <Scene />
      </Canvas>
    </figure>
  );
}
