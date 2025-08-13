"use client";

import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useModelLoading } from "@/components/ModelLoadingProvider";
import useScrollTrigger from "@/hooks/useScrollTrigger";

export default function AnimatedTextLines({
  texts,
  className,
  delay = 0,
  isScrollTrigger = false,
}: {
  texts: string[];
  className?: string;
  delay?: number;
  isScrollTrigger?: boolean;
}) {
  const { useGSAP, gsap, ScrollTrigger } = useScrollTrigger();
  const appendClass = [];
  className && appendClass.push(className);

  // 各テキスト要素への参照を配列で管理
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { shouldStartAnimations } = useModelLoading();

  useGSAP(() => {
    if (isMobile || !shouldStartAnimations) return;
    // nullでない要素のみをフィルタリング
    const validRefs = textRefs.current.filter(Boolean);

    const textAnimation = gsap.from(validRefs, {
      // y: 100,
      opacity: 0,
      ease: "power2.out",
      duration: 0.6,
      stagger: 0.15,
      delay: delay,
      paused: true,
    });

    if (isScrollTrigger) {
      ScrollTrigger.create({
        trigger: textRefs.current,
        start: "top 95%",
        animation: textAnimation,
      });
    } else {
      textAnimation.play();
    }
  }, [shouldStartAnimations]); // delayを削除し、shouldStartAnimationsのみに依存

  return (
    <p className={appendClass.join(" ")}>
      {texts.map((text, i) => (
        <span
          key={i}
          className="block"
          ref={(el) => {
            textRefs.current[i] = el;
          }}
        >
          {text}
        </span>
      ))}
    </p>
  );
}
