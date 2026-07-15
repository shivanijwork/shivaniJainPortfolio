import { experience } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Experience"
          title="Hands-on product engineering."
          description="I move comfortably between customer requirements, UI details, backend rules, and release-ready delivery."
        />

        <div className="relative space-y-5 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-pink-300 before:to-transparent">
          {experience.map((item) => (
            <div key={item.role} className="relative pl-12">
              <span className="absolute left-0 top-2 h-8 w-8 rounded-full border border-pink-200/40 bg-[#130812] shadow-[0_0_24px_rgba(244,114,182,0.28)]" />
              <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-pink-200/30">
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
