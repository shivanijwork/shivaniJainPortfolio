export default function EnergyBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-12%] top-20 h-72 w-72 rounded-full bg-[#ff4f91]/18 blur-3xl" />
      <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-[#4fb8ff]/12 blur-3xl" />
      <div className="absolute bottom-[18%] left-[18%] h-80 w-80 rounded-full bg-[#b46cff]/10 blur-3xl" />
      <div className="work-light-sweep absolute left-1/2 top-0 h-full w-1/2 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,159,198,0.08),transparent)] blur-2xl" />

      <div className="work-particles">
        {Array.from({ length: 11 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <svg
        className="work-energy-trail absolute left-1/2 top-72 hidden h-[72%] w-[82%] -translate-x-1/2 lg:block"
        viewBox="0 0 1000 1800"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M130 20C780 190 180 450 760 650C1080 760 210 940 520 1160C830 1380 230 1510 810 1760"
          stroke="url(#workTrail)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="workTrail" x1="130" y1="20" x2="810" y2="1760">
            <stop stopColor="#ff9fc6" stopOpacity="0" />
            <stop offset="0.22" stopColor="#ff4f91" stopOpacity="0.38" />
            <stop offset="0.52" stopColor="#4fb8ff" stopOpacity="0.28" />
            <stop offset="0.82" stopColor="#b46cff" stopOpacity="0.26" />
            <stop offset="1" stopColor="#ffd3e4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
