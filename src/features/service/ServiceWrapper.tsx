"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 20%",
      end: "bottom 20%",
      onEnter: () => document.documentElement.classList.add("dark"),
      onLeave: () => document.documentElement.classList.remove("dark"),
      onEnterBack: () => document.documentElement.classList.add("dark"),
      onLeaveBack: () => document.documentElement.classList.remove("dark"),
    });
  }, []);

  return <div ref={sectionRef}>{children}</div>;
}
