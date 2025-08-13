"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function ClipUpText({
  children,
  delay = 0,
  className,
  isScrollTrigger = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  isScrollTrigger?: boolean;
}) {
  const textRef = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    const textAnimation = gsap.from(textRef.current, {
      yPercent: 105,
      delay,
      duration: 1,
      paused: true,
    });

    if (isScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: textRef.current,
        start: "top 85%",
        onEnter: () => textAnimation.play(),
      });
    } else {
      textAnimation.play();
    }
  }, []);

  const appendClass = [];
  className && appendClass.push(className);
  return (
    <span
      className={`inline-block [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] ${appendClass.join(
        " "
      )}`}
    >
      <span ref={textRef} className="inline-block">
        {children}
      </span>
    </span>
  );
}
