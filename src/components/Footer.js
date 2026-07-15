export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Shivani Jain. Built with Next.js and Tailwind CSS.</p>
        <a href="#home" className="text-pink-200 transition hover:text-pink-100">
          Back to top
        </a>
      </div>
    </footer>
  );
}
