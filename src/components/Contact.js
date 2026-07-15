import { contactLinks } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-pink-200/20 bg-gradient-to-br from-pink-300/15 via-white/[0.05] to-fuchsia-400/10 p-8 text-center shadow-2xl shadow-pink-950/30 backdrop-blur md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-pink-200">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Have a product idea or role in mind?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
          I&apos;m open to full-stack opportunities, production web builds, and product
          engineering work where clean execution matters.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-white/15 bg-[#100711]/70 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-pink-200/50 hover:bg-pink-300/15"
            >
              {link.label}: {link.value}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
