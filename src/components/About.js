import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="I build practical systems with polish."
          description="My work sits at the intersection of clean interfaces, dependable backend logic, and product thinking."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Production applications for international and domain-specific clients.",
            "Dashboards, authentication, payments, eligibility logic, and database-backed workflows.",
            "A full-stack mindset: solve the user problem, then choose the right implementation.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 text-lg leading-8 text-zinc-200 shadow-2xl shadow-pink-950/10 backdrop-blur transition hover:-translate-y-1 hover:border-pink-200/30"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
