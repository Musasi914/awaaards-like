import AnimatedTextLines from "@/components/ui/AnimatedTextLines";
import ClipUpText from "@/components/ui/ClipUpText";
import SectionTitle from "@/components/ui/SectionTitle";
import { servicesData } from "@/constants";
import ServiceWrapper from "./ServiceWrapper";

export default function Service() {
  return (
    <ServiceWrapper>
      <section className="wrapper">
        <SectionTitle isScrollTrigger={true}>Service</SectionTitle>
        <AnimatedTextLines
          texts={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Consequatur quo quis culpa voluptates aperiam quos animi,",
            "dolorem perspiciatis iure distinctio sunt repellendus.",
          ]}
          className="text-right ml-auto md:w-3/4 umt-4"
          isScrollTrigger={true}
        />
        <div className="umt-8">
          {servicesData.map((service, index) => (
            <section
              key={service.title}
              className={`sticky bg-background px-4 py-4 pb-10 md:py-10 md:pb-20 ${
                index === 0 ? "top-[5rem]" : "border-t"
              } ${
                index === 1
                  ? "top-[9rem] sm:top-[10rem] md:top-[12rem] lg:top-[13rem]"
                  : index === 2
                  ? "top-[13rem] sm:top-[15rem] md:top-[19rem] lg:top-[21rem]"
                  : index === 3
                  ? "top-[17rem] sm:top-[20rem] md:top-[26rem] lg:top-[29rem]"
                  : index === 4
                  ? "top-[21rem] sm:top-[25rem] md:top-[33rem] lg:top-[37rem]"
                  : ""
              }`}
            >
              <div>
                <h3 className="text-sub font-accent">
                  <ClipUpText isScrollTrigger={true}>
                    {service.title}
                  </ClipUpText>
                </h3>
                <AnimatedTextLines
                  texts={[service.description]}
                  className="umt-2"
                  isScrollTrigger={true}
                />
                <ol className="umt-2 space-y-1">
                  {service.items.map((item, index) => (
                    <li key={item.title}>
                      <AnimatedTextLines
                        texts={[`0${index + 1}`, item.title]}
                        className="flex items-center gap-4 [&>span:nth-child(1)]:text-foreground/70"
                        isScrollTrigger={true}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          ))}
          <div className="h-48 sticky opacity-0"></div>
        </div>
      </section>
    </ServiceWrapper>
  );
}
