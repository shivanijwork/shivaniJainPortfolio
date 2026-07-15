export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-pink-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
