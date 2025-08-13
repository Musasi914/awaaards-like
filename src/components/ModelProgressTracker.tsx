"use client";

import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { useModelLoading } from "./ModelLoadingProvider";
import { useLenis } from "@/provider/LenisProvider";

export default function ModelProgressTracker() {
  const { progress } = useProgress();
  const { setLoadingProgress, setModelLoaded } = useModelLoading();
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef.current?.lenis?.stop();
    setLoadingProgress(progress);

    // 読み込みが完了したら（100%になったら）モデルが読み込まれたとみなす
    if (progress === 100) {
      // 少し遅延を入れて、実際のモデル表示を待つ
      setTimeout(() => {
        setModelLoaded(true);
        lenisRef.current?.lenis?.start();
      }, 50);
    }
  }, [progress, setLoadingProgress, setModelLoaded]);

  // このコンポーネントは何もレンダリングしない
  return null;
}
