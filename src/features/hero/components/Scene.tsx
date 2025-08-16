import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  SoftShadows,
} from "@react-three/drei";
import Model from "@/features/hero/components/Model";
import { useMediaQuery } from "react-responsive";
import ModelProgressTracker from "@/components/ModelProgressTracker";

export default function () {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <fog attach="fog" args={["#c6c6c6", 21, 27]} />
      <ModelProgressTracker />
      <OrbitControls />
      <Float
        speed={isMobile ? 0.5 : 2}
        floatingRange={isMobile ? [0.1, 0.1] : [0.2, 0.2]}
      >
        <Model
          scale={isMobile ? 0.02 : 0.03}
          position={isMobile ? [0, 1.5, 0] : [-2, 4, 0]}
          rotation-y={Math.PI / 4}
        />
      </Float>
      <ContactShadows
        opacity={0.9}
        scale={20}
        position={isMobile ? [0, -2, 0] : [0, -4, 0]}
        blur={4}
      />

      <Environment preset="warehouse" />
    </>
  );
}
