"use client";

import { useRef } from "react";
import { useModelLoading } from "@/components/ModelLoadingProvider";
import useScrollTrigger from "@/hooks/useScrollTrigger";

export default function Line({
  isScrollTrigger = false,
}: {
  isScrollTrigger?: boolean;
}) {
  const lineRef = useRef<HTMLDivElement>(null);
  const { shouldStartAnimations } = useModelLoading();
  const { useGSAP, gsap, ScrollTrigger } = useScrollTrigger();
  useGSAP(() => {
    if (!shouldStartAnimations) return;

    const lineAnimation = gsap.fromTo(
      lineRef.current,
      {
        width: 0,
      },
      {
        width: "100%",
        ease: "none",
        duration: 1,
        paused: true,
      }
    );

    if (isScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: lineRef.current,
        start: "top 90%",
        onEnter: () => lineAnimation.play(),
      });
    } else {
      lineAnimation.play();
    }
  }, [shouldStartAnimations]);
  return <div ref={lineRef} className="border-t-2 absolute inset-x-0" />;
}
