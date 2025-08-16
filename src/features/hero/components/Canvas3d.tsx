"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { useEffect, useRef, useState } from "react";
import { useModelLoading } from "@/components/ModelLoadingProvider";
import { PerformanceMonitor } from "@react-three/drei";
import useScrollTrigger from "@/hooks/useScrollTrigger";
import { Perf } from "r3f-perf";

export default function Canvas3d() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { shouldStartAnimations } = useModelLoading();
  const { useGSAP, gsap } = useScrollTrigger();
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

  const [dpr, setDpr] = useState(1.5);

  return (
    <figure className="absolute inset-0 -z-10 min-h-screen h-[110vw]">
      <Canvas
        ref={canvasRef}
        shadows
        camera={{ fov: 45, near: 0.1, far: 30, position: [0, 8, 20] }}
        gl={{
          stencil: false,
        }}
        dpr={dpr}
        frameloop={visible ? "always" : "never"}
      >
        <Perf position="bottom-left" />
        <PerformanceMonitor
          onIncline={() => setDpr(1.5)}
          onDecline={() => setDpr(1)}
        ></PerformanceMonitor>
        <Scene />
      </Canvas>
    </figure>
  );
}
