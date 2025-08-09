"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function Line({
  isScrollTrigger = false,
}: {
  isScrollTrigger?: boolean;
}) {
  const lineRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
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
  }, []);
  return <div ref={lineRef} className="border-t-2 absolute inset-x-0" />;
}
