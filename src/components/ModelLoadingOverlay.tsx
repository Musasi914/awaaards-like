"use client";

import { useGSAP } from "@gsap/react";
import { useModelLoading } from "./ModelLoadingProvider";
import gsap from "gsap";
import { useRef } from "react";

export default function ModelLoadingOverlay() {
  const { isModelLoaded } = useModelLoading();

  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!isModelLoaded) return;
    gsap.to(ref.current, {
      autoAlpha: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [isModelLoaded]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-100 flex items-center justify-center bg-background backdrop-blur-sm"
    >
      <div className="text-center">
        <div className="mb-4 text-2xl font-bold">読み込み中...</div>
      </div>
    </div>
  );
}
