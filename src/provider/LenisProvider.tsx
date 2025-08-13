"use client";

import { LenisRef, ReactLenis } from "lenis/react";
import { useEffect, useRef, createContext, useContext } from "react";
import useScrollTrigger from "@/hooks/useScrollTrigger";
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
  const { gsap } = useScrollTrigger();
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
        // duration: 1.2,
        touchMultiplier: 2,
      }}
      ref={lenisRef}
    >
      <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
    </ReactLenis>
  );
}
