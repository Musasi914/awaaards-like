"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

export default function ServiceSummary() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleService1Ref = useRef<HTMLDivElement>(null);
  const titleService2Ref = useRef<HTMLDivElement>(null);
  const titleService3Ref = useRef<HTMLDivElement>(null);
  const titleService4Ref = useRef<HTMLDivElement>(null);
  const titleService5Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.add([
      gsap.to(titleService1Ref.current, {
        xPercent: 20,
      }),
      gsap.to(titleService2Ref.current, {
        xPercent: -20,
      }),
      gsap.to(titleService3Ref.current, {
        xPercent: 20,
      }),
      gsap.to(titleService4Ref.current, {
        xPercent: -20,
      }),
      gsap.to(titleService5Ref.current, {
        xPercent: 20,
      }),
    ]);
  });

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden font-accent leading-snug text-center text-sub no-transition"
    >
      <div ref={titleService1Ref}>
        <p>Animation</p>
      </div>
      <div
        ref={titleService2Ref}
        className="flex items-center justify-center gap-3 translate-x-32"
      >
        <p>Development</p>
        <div className="w-10 md:w-32 h-1 bg-gold" />
        <p>SEO</p>
        <div className="w-10 md:w-32 h-1 bg-gold" />
        <p>Design</p>
      </div>
      <div
        ref={titleService3Ref}
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>APIs</p>
        <div className="w-10 md:w-32 h-1 bg-gold" />
        <p>Scalability</p>
        <div className="w-10 md:w-32 h-1 bg-gold" />
        <p>Security</p>
      </div>
      <div
        ref={titleService4Ref}
        className="flex items-center justify-center gap-3 translate-x-64"
      >
        <p>React</p>
        <div className="w-10 md:w-32 h-1 bg-gold" />
        <p>Next.js</p>
        <div className="w-10 md:w-32 h-1 bg-gold" />
        <p>TypeScript</p>
      </div>
      <div ref={titleService5Ref} className="-translate-x-48">
        <p>Databases</p>
      </div>
    </section>
  );
}
