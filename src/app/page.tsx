import Hero from "@/app/features/hero/Hero";

export default function Home() {
  console.log("first");
  return (
    <main className="relative ">
      <Hero />
      <section className="banner h-screen">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quod architecto beatae doloribus aliquid eum labore cum veniam
          ducimus? Ab, sunt earum distinctio quisquam sapiente quam vel neque at placeat?
        </p>
      </section>
      <section className="outro h-screen">
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem tenetur eius esse animi voluptatum sunt voluptatibus
          praesentium beatae rem molestias pariatur, minus repellat! Repellat omnis magnam iusto alias quod.
        </h2>
      </section>
    </main>
  );
}
