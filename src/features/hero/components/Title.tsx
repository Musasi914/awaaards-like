"use client";

import ClipUpText from "@/components/ui/ClipUpText";
import { useRef } from "react";
import { useModelLoading } from "@/components/ModelLoadingProvider";
import { useGSAP, gsap } from "@/lib/gsap";

export default function Title({ delay }: { delay: number }) {
  const titleRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const { shouldStartAnimations } = useModelLoading();
  useGSAP(() => {
    if (!shouldStartAnimations) return;

    gsap.from(titleRef.current, {
      yPercent: 105,
      delay,
      duration: 1,
    });
    gsap.from(subTitleRef.current, {
      opacity: 0,
      delay: delay + 0.5,
      duration: 1,
    });
  }, [shouldStartAnimations, delay]);
  return (
    <hgroup className="flex flex-col-reverse gap-3 px-4 md:px-10 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] text-right">
      <h1
        id="hero-title"
        ref={titleRef}
        className="fadeText uppercase banner-text-responsive tracking-tighter font-accent"
      >
        <ClipUpText delay={delay}>Kato Studio</ClipUpText>
      </h1>
      <p ref={subTitleRef} className="fadeText text-sm md:text-base">
        すばらしいサイトをあなたに
      </p>
    </hgroup>
  );
}
