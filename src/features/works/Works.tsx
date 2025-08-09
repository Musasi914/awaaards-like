import AnimatedTextLines from "@/components/ui/AnimatedTextLines";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/constants";

export default function Works() {
  return (
    <section className="wrapper">
      <SectionTitle isScrollTrigger={true}>Works</SectionTitle>
      <AnimatedTextLines
        texts={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aut!",
          "Cum, soluta pariatur. Sequi delectus possimus provident quo.",
          "Accusantium vero exercitationem accusamus ratione aut nesciunt quisquammodi.",
        ]}
        className="text-right ml-auto md:w-3/4 umt-4"
        isScrollTrigger={true}
      />
      <div className="umt-8">
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
