"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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
  const appendClass = [];
  className && appendClass.push(className);

  // 各テキスト要素への参照を配列で管理
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
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
        start: "top 80%",
        animation: textAnimation,
      });
    } else {
      textAnimation.play();
    }
  }, [delay]); // delayを依存配列に追加

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
