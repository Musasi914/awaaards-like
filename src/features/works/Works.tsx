"use client";

import AnimatedTextLines from "@/components/ui/AnimatedTextLines";
import ClipUpText from "@/components/ui/ClipUpText";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import useScrollTrigger from "@/hooks/useScrollTrigger";
export default function Works() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const moveX = useRef<((value: number) => void) | null>(null);
  const moveY = useRef<((value: number) => void) | null>(null);
  const skewX = useRef<((value: number) => void) | null>(null);
  const skewY = useRef<((value: number) => void) | null>(null);
  const mouse = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const { useGSAP, gsap } = useScrollTrigger();
  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x");
    moveY.current = gsap.quickTo(previewRef.current, "y");
    skewX.current = gsap.quickTo(previewRef.current, "skewX");
    skewY.current = gsap.quickTo(previewRef.current, "skewY");
  });

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
    });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.9,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    mouse.current.x =
      e.clientX / 2 + (wrapperRef.current?.offsetWidth ?? 0) / 2;
    mouse.current.y =
      e.clientY / 2 + (wrapperRef.current?.offsetHeight ?? 0) / 2;
    moveX.current?.(mouse.current.x);
    moveY.current?.(mouse.current.y);

    skewX.current?.(Math.max(Math.min(e.movementX, 10), -10));
    skewY.current?.(Math.max(Math.min(e.movementY, 10), -10));
  };

  return (
    <section className="wrapper" ref={wrapperRef} aria-labelledby="works-title">
      <SectionTitle id="works-title" isScrollTrigger={true}>
        Works
      </SectionTitle>
      <AnimatedTextLines
        texts={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aut!",
          "Cum, soluta pariatur. Sequi delectus possimus provident quo.",
          "Accusantium vero exercitationem accusamus ratione aut nesciunt quisquammodi.",
        ]}
        className="md:text-right ml-auto md:w-3/4 umt-4"
        isScrollTrigger={true}
      />
      <div className="relative umt-8" onMouseMove={handleMouseMove}>
        <div className="flex gap-y-10">
          <div className="flex-1">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="relative flex flex-col gap-1 py-5 cursor-pointer md:gap-0 group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                aria-labelledby={`works-${project.name}`}
              >
                {/* title */}
                <div className="flex justify-between items-center transition-all duration-500 md:group-hover:opacity-50">
                  <h3
                    className="font-accent text-sub-jp"
                    id={`works-${project.name}`}
                  >
                    <ClipUpText isScrollTrigger={true}>
                      {project.name}
                    </ClipUpText>
                  </h3>
                  <ClipUpText isScrollTrigger={true}>
                    <ArrowUpRight />
                  </ClipUpText>
                </div>
                {/* devide */}
                <div className="h-px w-full bg-foreground" />
                {/* frameworks */}
                <AnimatedTextLines
                  isScrollTrigger={true}
                  texts={project.frameworks.map((framework) => framework.name)}
                  className="flex gap-x-5 transition-colors duration-500 md:group-hover:opacity-50"
                />
                {/* mobile image */}
                <div className="md:hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1920}
                    height={1280}
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
          <div className="flex-1 hidden md:block" />
        </div>

        {/* desktop floatingimage */}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden w-1/3 border-8 pointer-events-none hidden md:block"
        >
          {currentIndex != null && (
            <Image
              src={projects[currentIndex].image}
              alt={projects[currentIndex].name}
              width={1920}
              height={1280}
              className="w-full h-full aspect-video object-cover"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRlICAABXRUJQVlA4WAoAAAAgAAAAngAAfAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggZAAAALAHAJ0BKp8AfQA/zebwcz+3sqygaAPwOYlpbt0AAd0OqpNkxDtn8+vEdkzRgI5wxskcdP8a5geYJe4nHMY+d7335hREPwAA/ujQ+st1VKJDlnTGPgT2TyEvCKT5g7UzHAQAAAA="
            />
          )}
        </div>
      </div>
    </section>
  );
}
