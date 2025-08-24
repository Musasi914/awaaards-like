"use client";

import { useRef, useState } from "react";
import { useLenis } from "../provider/LenisProvider";
import Image from "next/image";
import Link from "next/link";
import useScrollTrigger from "@/hooks/useScrollTrigger";
import { useModelLoading } from "./ModelLoadingProvider";

// メニューアイテムの型定義
interface MenuItem {
  id: string;
  label: string;
  href: string;
}

// タグアイテムの型定義
interface TagItem {
  id: string;
  label: string;
  href: string;
}

// メニューデータ
const MENU_ITEMS: MenuItem[] = [
  { id: "index", label: "Index", href: "#" },
  { id: "portfolio", label: "Portfolio", href: "#" },
  { id: "about", label: "About", href: "#" },
  { id: "contact", label: "Contact", href: "#" },
  { id: "blog", label: "Blog", href: "#" },
];

const TAG_ITEMS: TagItem[] = [
  { id: "web-animations", label: "Web Animations", href: "#" },
  { id: "interactive-media", label: "Interactive Media", href: "#" },
  { id: "motion-craft", label: "Motion Craft", href: "#" },
];

export default function Navbar() {
  const lenisRef = useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { useGSAP, gsap, SplitText } = useScrollTrigger();

  // Refs
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuMediaWrapperRef = useRef<HTMLDivElement>(null);
  const copyContainersRef = useRef<HTMLDivElement>(null);
  const menuToggleLabelRef = useRef<HTMLDivElement>(null);
  const menuToggleIconRef = useRef<HTMLDivElement>(null);
  const headerTitleRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    let isAnimate = false;
    let isOpen = false;
    const split = SplitText.create(".menu__col a, .menu__col p", {
      type: "lines",
      mask: "lines",
    });

    gsap.set(split.lines, { yPercent: 110 });

    const menuToggleBtn = document.querySelector(".menu__toggle-btn");
    // const main = document.querySelector("main");
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 1 },
    });

    tl.to(menuToggleLabelRef.current, {
      yPercent: -110,
    })
      .to(
        headerTitleRef.current,
        {
          yPercent: -110,
        },
        "<"
      )
      // .to(
      //   main,
      //   {
      //     y: "100vh",
      //   },
      //   "<"
      // )
      .to(
        menuOverlayRef.current,
        {
          clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
        },
        "<"
      )
      .to(
        menuMediaWrapperRef.current,
        {
          opacity: 1,
          duration: 0.75,
          delay: 0.5,
        },
        "<"
      )
      .to(
        split.lines,
        {
          yPercent: 0,
          stagger: -0.04,
        },
        "<"
      );
    tl.pause();

    menuToggleBtn?.addEventListener("click", () => {
      if (isAnimate) return;
      isAnimate = true;

      if (!isOpen) {
        setIsMenuOpen(true);
        // メニューを開く
        isOpen = true;
        // スクロールを停止
        lenisRef.current?.lenis?.stop();

        tl.timeScale(1.5).play();
        tl.call(() => {
          isAnimate = false;
        });
      } else {
        setIsMenuOpen(false);
        // メニューを閉じる
        isOpen = false;
        // スクロールを再開
        lenisRef.current?.lenis?.start();

        tl.timeScale(2.5).reverse();
        isAnimate = false;
      }
    });
  });

  // メニューアイテムをレンダリング
  const renderMenuItems = () => (
    <div ref={copyContainersRef} className="menu__col">
      {MENU_ITEMS.map((item) => (
        <div key={item.id} className="menu__link">
          <Link
            href={item.href}
            className="text-4xl md:text-6xl font-accent leading-tight transition-opacity hover:opacity-50"
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );

  // タグアイテムをレンダリング
  const renderTagItems = () => (
    <div ref={copyContainersRef} className="menu__col">
      {TAG_ITEMS.map((item) => (
        <div key={item.id} className="menu__tag">
          <Link
            href={item.href}
            className="text-lg md:text-2xl transition-opacity hover:opacity-50"
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );

  // ハンバーガーアイコン
  const HamburgerIcon = () => (
    <div
      ref={menuToggleIconRef}
      className="menu__toggle-icon relative w-12 h-12 flex flex-col justify-center items-center border border-[var(--menu-fg-secondary)] rounded-full"
    >
      <span
        className={`absolute w-3.5 h-0.25 origin-center -translate-y-[3px] bg-[var(--menu-fg-secondary)] ${
          isMenuOpen
            ? "translate-y-[0] rotate-45 scale-110"
            : "-translate-y-[3px]"
        }`}
      />
      <span
        className={`absolute w-3.5 h-0.25 origin-center bg-[var(--menu-fg-secondary)] ${
          isMenuOpen
            ? "-translate-y-[0] -rotate-45 scale-110"
            : "translate-y-[3px]"
        }`}
      />
    </div>
  );

  return (
    <header className="fixed w-full h-screen top-0 left-0 pointer-events-none overflow-hidden z-10">
      {/* ナビゲーションバー */}
      <div className="menu__bar fixed top-0 left-0 w-full p-4 flex justify-between items-center pointer-events-auto text-[var(--menu-fg-secondary)] z-10">
        <div className="menu__logo overflow-hidden">
          <Link
            href="/"
            ref={headerTitleRef}
            className="block text-xl md:text-2xl font-accent font-light text-[var(--menu-fg-secondary)]"
          >
            KATO STUDIO
          </Link>
        </div>

        <div className="menu__toggle-btn flex items-center gap-2 cursor-pointer">
          <div className="menu__toggle-label overflow-hidden">
            <p
              ref={menuToggleLabelRef}
              className="relative will-change-transform font-accent font-normal text-sm"
            >
              MENU
            </p>
          </div>
          <HamburgerIcon />
        </div>
      </div>

      {/* メニューオーバーレイ */}
      <div
        ref={menuOverlayRef}
        className="menu__overlay bg-[var(--menu-background)] fixed top-0 left-0 w-full h-screen overflow-hidden z-0 [clip-path:polygon(0_0,100%_0,100%_0,0_0)]"
      >
        <div className="menu__overlay-content fixed top-0 left-0 w-full h-screen overflow-hidden z-0 flex pointer-events-auto">
          {/* メディアセクション */}
          <div
            ref={menuMediaWrapperRef}
            className="menu__media-wrapper flex-2 opacity-0 hidden md:block"
          >
            <Image
              src="/nav.jpg"
              width={400}
              height={1000}
              alt=""
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* コンテンツセクション */}
          <nav className="flex-3 relative flex text-[var(--menu-fg-secondary)]">
            <div className="absolute md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-full md:w-3/4 p-16 md:p-0 lg:p-16 flex flex-col md:flex-row md:items-end gap-8">
              {renderMenuItems()}
              {renderTagItems()}
            </div>

            {/* フッター */}
            <div className="mx-auto w-full md:w-3/4 p-16 pb-24 md:pb-16 flex items-end gap-8">
              <div ref={copyContainersRef} className="menu__col">
                <p>Toronto, Canada</p>
              </div>
              <div ref={copyContainersRef} className="menu__col">
                <p>+1 234 567 890</p>
                <p>info@example.com</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
