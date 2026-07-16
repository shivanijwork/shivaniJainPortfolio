import {
  BrainCircuit,
  CloudCog,
  Code2,
  CreditCard,
  Database,
  PanelsTopLeft,
  Server,
} from "lucide-react";

const skillGroups = [
  { label: "Problem Solving", skills: ["C++", "DSA"], icon: BrainCircuit },
  { label: "Frontend", skills: ["React.js", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"], icon: PanelsTopLeft },
  { label: "Backend", skills: ["Node.js", "Express.js"], icon: Server },
  { label: "Databases", skills: ["MongoDB", "MySQL", "PostgreSQL"], icon: Database },
  { label: "Infrastructure", skills: ["AWS", "Nginx", "Docker"], icon: CloudCog },
  { label: "Payments", skills: ["Stripe", "Razorpay"], icon: CreditCard },
  { label: "AI Tools", skills: ["GitHub Copilot", "Claude Code", "Claude Cowork", "Claude Skills", "OpenAI Codex"], icon: Code2 },
];

function SkillTrack({ hidden = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {skillGroups.map(({ label, skills, icon: Icon }) => (
        <div key={label} className="flex shrink-0 items-center">
          <div className="flex items-center gap-3 px-5 sm:px-6">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#ff4f91]/10 text-[#ff9fc6]">
              <Icon size={16} aria-hidden="true" />
            </span>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/76">
                {label}
              </span>
              <span className="text-sm text-white/44">{skills.join("  /  ")}</span>
            </div>
          </div>
          <span className="h-7 w-px shrink-0 bg-white/10" aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}

export default function SkillsStrip() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-black px-5 py-5 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 lg:flex-row lg:items-center">
        <div className="flex shrink-0 items-center gap-3 lg:w-32">
          <span className="h-px w-6 bg-[#ff4f91]" aria-hidden="true" />
          <h2 id="skills-heading" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffd3e4]">
            Toolkit
          </h2>
        </div>

        <div className="skills-marquee liquid-glass relative min-w-0 flex-1 overflow-hidden rounded-xl py-3">
          <div className="skills-track flex w-max">
            <SkillTrack />
            <SkillTrack hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
