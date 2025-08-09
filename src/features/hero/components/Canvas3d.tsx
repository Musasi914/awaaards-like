"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { useRef } from "react";
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

  return (
    <figure className="absolute inset-0 -z-10">
      <Canvas
        ref={canvasRef}
        shadows
        camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 15] }}
        gl={{
          stencil: false,
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Scene />
      </Canvas>
    </figure>
  );
}
