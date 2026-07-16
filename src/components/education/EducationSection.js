import Image from "next/image";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    institution: "Vellore Institute of Technology",
    campus: "Chennai",
    degree: "Master of Computer Applications",
    shortDegree: "MCA",
    period: "2023 - 2025",
    image: "/education/vit-chennai.jpg",
    imageAlt: "Vellore Institute of Technology Chennai campus",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chennai_Campus.jpg",
    sourceLabel: "Akhil123ag / Wikimedia Commons",
  },
  {
    institution: "Manipal University Jaipur",
    campus: "Jaipur",
    degree: "Bachelor of Computer Applications",
    shortDegree: "BCA",
    period: "2020 - 2023",
    image: "/education/manipal-jaipur-day.png",
    imageAlt: "Manipal University Jaipur dome building",
    sourceUrl: null,
    sourceLabel: null,
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-black px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 size-72 rounded-full bg-[#4fb8ff]/8 blur-3xl" />
        <div className="absolute -right-28 bottom-0 size-72 rounded-full bg-[#ff4f91]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 grid gap-4 md:grid-cols-[0.72fr_1fr] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff9fc6]">
              Education
            </p>
            <h2
              className="text-4xl leading-none text-white md:text-5xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Where I built my <span className="italic text-[#ffd3e4]">foundation.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-white/58 md:ml-auto md:text-base">
            A foundation in computer applications, strengthened through postgraduate study and hands-on exploration.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.shortDegree} className="liquid-glass group overflow-hidden rounded-2xl">
              <figure className="relative aspect-[2/1] overflow-hidden border-b border-white/10 bg-white/[0.025]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-lg border border-white/12 bg-black/45 px-2.5 py-1 text-[11px] text-white/70 backdrop-blur-md">
                  {item.campus}
                </span>
                {item.sourceUrl && (
                  <figcaption className="absolute bottom-3 right-3 text-[10px] text-white/45">
                    <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="hover:text-white/70">
                      Image: {item.sourceLabel}
                    </a>
                  </figcaption>
                )}
              </figure>

              <div className="flex gap-4 p-5 sm:p-6">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#ff4f91]/10 text-[#ff9fc6]">
                  <GraduationCap size={20} aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff9fc6]">
                      {item.shortDegree}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-white/42">
                      <CalendarDays size={13} aria-hidden="true" />
                      {item.period}
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-white">{item.institution}</h3>
                  <p className="text-sm text-white/62">{item.degree}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-white/38">
                    <MapPin size={13} aria-hidden="true" />
                    {item.campus}, India
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
