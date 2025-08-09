import { Environment, Float, Lightformer } from "@react-three/drei";
import Model from "@/features/hero/components/Model";
import { useMediaQuery } from "react-responsive";
export default function () {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <Float
        rotationIntensity={isMobile ? 2 : 4}
        speed={isMobile ? 0.5 : 1}
        floatingRange={isMobile ? [0.1, 0.1] : [0.2, 0.2]}
      >
        <Model
          scale={isMobile ? 0.02 : 0.03}
          position={isMobile ? [-1, 1.5, 0] : [-2, 2, 0]}
          rotation-y={Math.PI / 4}
        />
      </Float>

      <Environment preset="warehouse" />
    </>
  );
}
