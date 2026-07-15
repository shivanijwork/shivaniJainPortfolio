export default function LiquidButton({ href, children, className = "", ariaLabel }) {
  const classes = `liquid-glass inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9fc6] ${className}`;

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}
