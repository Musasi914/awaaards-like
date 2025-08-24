"use client";

import { useRef } from "react";
import { useGSAP, ScrollTrigger } from "@/lib/gsap";

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

  return (
    <div className="bg-background" ref={sectionRef}>
      {children}
    </div>
  );
}
