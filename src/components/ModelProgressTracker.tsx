"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useCallback } from "react";
import { useModelLoading } from "./ModelLoadingProvider";
import { useLenis } from "@/provider/LenisProvider";

export default function ModelProgressTracker() {
  const { progress } = useProgress();
  const { setLoadingProgress, setModelLoaded } = useModelLoading();
  const lenisRef = useLenis();

  const handleProgressComplete = useCallback(() => {
    setTimeout(() => {
      setModelLoaded(true);
      lenisRef.current?.lenis?.start();
    }, 50);
  }, [setModelLoaded, lenisRef]);

  useEffect(() => {
    lenisRef.current?.lenis?.stop();
    setLoadingProgress(progress);

    // 読み込みが完了したら（100%になったら）モデルが読み込まれたとみなす
    if (progress === 100) {
      handleProgressComplete();
    }
  }, [progress, setLoadingProgress, handleProgressComplete]);

  // このコンポーネントは何もレンダリングしない
  return null;
}
