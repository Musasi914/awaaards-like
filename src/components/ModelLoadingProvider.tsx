"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModelLoadingContextType {
  isModelLoaded: boolean;
  setModelLoaded: (loaded: boolean) => void;
  loadingProgress: number;
  setLoadingProgress: (progress: number) => void;
  shouldStartAnimations: boolean;
}

const ModelLoadingContext = createContext<ModelLoadingContextType | undefined>(
  undefined
);

export function useModelLoading() {
  const context = useContext(ModelLoadingContext);
  if (context === undefined) {
    throw new Error(
      "useModelLoading must be used within a ModelLoadingProvider"
    );
  }
  return context;
}

interface ModelLoadingProviderProps {
  children: ReactNode;
}

export default function ModelLoadingProvider({
  children,
}: ModelLoadingProviderProps) {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [shouldStartAnimations, setShouldStartAnimations] = useState(false);

  const setModelLoaded = (loaded: boolean) => {
    setIsModelLoaded(loaded);
    if (loaded) {
      setLoadingProgress(100);
      // アニメーション開始を少し遅らせる
      setTimeout(() => {
        setShouldStartAnimations(true);
      }, 100);
    }
  };

  const value = {
    isModelLoaded,
    setModelLoaded,
    loadingProgress,
    setLoadingProgress,
    shouldStartAnimations,
  };

  return (
    <ModelLoadingContext.Provider value={value}>
      {children}
    </ModelLoadingContext.Provider>
  );
}
