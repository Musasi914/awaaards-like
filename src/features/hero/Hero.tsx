import AnimatedTextLines from "@/components/ui/AnimatedTextLines";
import Title from "@/features/hero/components/Title";
import Canvas3d from "@/features/hero/components/Canvas3d";
import Line from "@/components/ui/Line";

const aboutTexts = [
  "美しいデザインと高いコンバージョン。",
  "あなたのビジネスをサポートします。",
  "お気軽にご相談ください。",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end"
      aria-labelledby="hero-title"
    >
      <div className="w-full max-w-none md:max-w-11/12 mx-auto pb-20 md:pb-10 pointer-events-none">
        <Title delay={0.8} />
        <Line />
        <div>
          <AnimatedTextLines
            texts={aboutTexts}
            className="p-4 md:p-10 text-right"
            delay={1.3}
          />
        </div>
      </div>
      <Canvas3d />
    </section>
  );
}
