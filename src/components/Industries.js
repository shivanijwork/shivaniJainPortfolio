import { industries } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Industries() {
  return (
    <section id="industries" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Industries"
          title="Built across complex domains."
          description="I enjoy work where the product has real constraints, real users, and real consequences."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-pink-200/40 hover:shadow-2xl hover:shadow-pink-950/20"
            >
              <div className="mb-7 h-10 w-10 rounded-2xl bg-gradient-to-br from-pink-300 to-fuchsia-500 opacity-80 shadow-[0_0_35px_rgba(236,72,153,0.28)] transition group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-white">{industry}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
