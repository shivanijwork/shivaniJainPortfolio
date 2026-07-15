import ExperienceChapter from "@/components/experience/ExperienceChapter";
import experience from "@/data/experience.json";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-6 lg:px-10 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-[#ff4f91]/14 blur-3xl" />
        <div className="absolute right-[-10%] bottom-12 h-80 w-80 rounded-full bg-[#4fb8ff]/10 blur-3xl" />
        <div className="experience-orbit absolute left-1/2 top-28 hidden h-[76%] w-[76%] -translate-x-1/2 rounded-full border border-[#ff9fc6]/10 lg:block" />
        <div className="experience-orbit experience-orbit-delay absolute left-[54%] top-44 hidden h-[54%] w-[54%] -translate-x-1/2 rounded-full border border-[#4fb8ff]/10 lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9fc6]">
            Experience
          </p>
          <h2
            className="mb-5 text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Places That Shaped Me
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/62 md:text-base">
            I don&apos;t measure my career by years. I measure it by products
            built, problems solved, and lessons carried forward.
          </p>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {experience.map((item, index) => (
            <ExperienceChapter key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
