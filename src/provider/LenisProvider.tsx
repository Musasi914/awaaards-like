"use client";

import { LenisRef, ReactLenis } from "lenis/react";
import { useEffect, useRef, createContext, useContext } from "react";
import gsap from "gsap";

// Lenisコンテキストを作成
const LenisContext = createContext<React.RefObject<LenisRef | null> | null>(
  null
);

// カスタムフックを作成
export const useLenis = () => {
  const lenisRef = useContext(LenisContext);
  if (!lenisRef) {
    throw new Error("useLenis must be used within LenisProvider");
  }
  return lenisRef;
};

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
      ref={lenisRef}
    >
      <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
    </ReactLenis>
  );
}
