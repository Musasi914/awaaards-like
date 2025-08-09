import ClipUpText from "./ClipUpText";
import Line from "./Line";

export default function SectionTitle({
  children,
  isScrollTrigger = false,
}: {
  children: React.ReactNode;
  isScrollTrigger?: boolean;
}) {
  return (
    <div>
      <h2 className="section-title">
        <ClipUpText isScrollTrigger={isScrollTrigger}>{children}</ClipUpText>
      </h2>
      <Line isScrollTrigger={isScrollTrigger} />
    </div>
  );
}
