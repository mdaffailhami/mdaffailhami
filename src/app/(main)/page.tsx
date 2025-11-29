export default function HomePage() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <Section id="home" />
      <Section id="about" />
      <Section id="projects" />
      <Section id="experience" />
      <Section id="contact" />
    </main>
  );
}

function Section({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="snap-center snap-always flex items-center justify-center h-full border-8 border-blue-500 "
    >
      <h1 className="text-4xl text-center font-bold">Section {id}</h1>
    </div>
  );
}
