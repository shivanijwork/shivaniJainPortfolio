const resumeText = encodeURIComponent(
  "Shivani Jain - Software / Full Stack Developer\n\nProduction-level projects across healthcare, sports, prize-draw platforms, finance, AI, ML, and research.\n\nTech: React JS, Next.js, Node.js, MongoDB, MySQL, PostgreSQL, NeonDB, Tailwind CSS."
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 md:px-8"
    >
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 shadow-2xl shadow-pink-950/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-pink-300 shadow-[0_0_18px_rgba(249,168,212,0.9)]" />
            Software / Full Stack Developer
          </div>

          <h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-pink-200 via-rose-300 to-fuchsia-300 bg-clip-text text-transparent">
              Shivani.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-zinc-300 md:text-2xl md:leading-10">
            Tech stacks come and go. I build solutions that solve real-world problems.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
            I design and develop reliable web products across healthcare, sports,
            prize-draw platforms, finance, AI, ML, and research.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500 px-6 py-3 text-center text-sm font-bold text-white shadow-[0_18px_50px_rgba(236,72,153,0.28)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(236,72,153,0.36)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-1 hover:border-pink-200/50 hover:bg-white/[0.08]"
            >
              Contact Me
            </a>
            <a
              href={`data:text/plain;charset=utf-8,${resumeText}`}
              download="Shivani-Jain-Resume.txt"
              className="rounded-full border border-pink-300/30 px-6 py-3 text-center text-sm font-bold text-pink-100 transition hover:-translate-y-1 hover:bg-pink-300/10"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-8 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-pink-950/30 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#120912]/80 p-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Portfolio focus</p>
                  <p className="mt-1 text-xl font-semibold text-white">Real products</p>
                </div>
                <span className="rounded-full bg-pink-300/10 px-3 py-1 text-xs font-semibold text-pink-100">
                  Production-ready
                </span>
              </div>

              <div className="space-y-4">
                {["Secure auth", "Admin dashboards", "Payments", "Data-driven systems"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-pink-200/35 hover:bg-pink-300/[0.07]"
                    >
                      <span className="text-zinc-200">{item}</span>
                      <span className="text-sm font-semibold text-pink-200">
                        0{index + 1}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
