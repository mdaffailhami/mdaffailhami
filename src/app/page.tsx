import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {Array.from({ length: 5 }).map((_, i) => (
          <Section
            key={Math.random()}
            section={i + 1}
            id={`section-${i + 1}`}
          />
        ))}
      </main>
    </>
  );
}

function Section({ section, id }: { section: number; id: string }) {
  return (
    <div
      id={id}
      className="snap-center snap-always flex items-center justify-center h-full border-8 border-blue-500 "
    >
      <h1 className="text-4xl text-center font-bold">Section {section}</h1>
    </div>
  );
}
