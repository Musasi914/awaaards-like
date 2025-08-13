import ClipUpText from "./ClipUpText";
import Line from "./Line";

export default function SectionTitle({
  children,
  id,
  isScrollTrigger = false,
}: {
  children: React.ReactNode;
  id?: string;
  isScrollTrigger?: boolean;
}) {
  return (
    <div>
      <h2 className="section-title" id={id}>
        <ClipUpText isScrollTrigger={isScrollTrigger}>{children}</ClipUpText>
      </h2>
      <Line isScrollTrigger={isScrollTrigger} />
    </div>
  );
}
