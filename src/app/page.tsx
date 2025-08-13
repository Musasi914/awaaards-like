import Hero from "@/features/hero/Hero";
import Service from "@/features/service/Service";
import ServiceSummary from "@/components/ServiceSummary";
import Works from "@/features/works/Works";

export default function Home() {
  return (
    <main className="relative section-space">
      <Hero />
      <ServiceSummary />
      <Service />
      <Works />
    </main>
  );
}
