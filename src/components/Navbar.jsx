import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

/** "Open to work" status with a pulsing green dot; leads to the Contact page. */
function OpenToWork({ className = "", onClick }) {
  return (
    <a
      href="#contact"
      onClick={onClick}
      className={`items-center gap-2 border border-accent bg-accent font-medium text-white transition-colors hover:border-accent-dark hover:bg-accent-dark ${className}`}
    >
      {/* white ring keeps the green dot visible on the pink background */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white" />
      </span>
      Open to work
    </a>
  );
}

export default function Navbar({ pages, current }) {
  const [open, setOpen] = useState(false);
  const currentLabel = pages.find((p) => p.id === current)?.label;

  // Underline drawn with ::after so it can grow from the left on hover.
  const underline =
    "relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-accent after:transition-transform after:duration-300";
  const linkClass = (id) =>
    id === current
      ? `${underline} text-stone-900 after:scale-x-100`
      : `${underline} text-stone-500 hover:text-stone-900 after:scale-x-0 hover:after:scale-x-100`;

  return (
    <header className="sticky top-0 z-40 border-b border-accent/30 bg-white">
      <nav className="mx-auto flex h-14 max-w-page items-center justify-between px-5 md:h-16 md:px-8">
        <div className="hidden gap-8 text-[15px] md:flex">
          {pages.map((p) => (
            <a key={p.id} href={`#${p.id}`} aria-current={p.id === current ? "page" : undefined} className={linkClass(p.id)}>
              {p.label}
            </a>
          ))}
        </div>
        <OpenToWork className="hidden rounded-full px-4 py-2 text-sm md:flex" />

        <span className="font-medium md:hidden">{currentLabel}</span>
        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="fade-in border-t border-accent/30 md:hidden">
          <div className="mx-auto flex max-w-page flex-col px-5 py-2 text-sm md:px-8">
            {pages.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                onClick={() => setOpen(false)}
                className={`py-2.5 ${p.id === current ? "font-medium text-stone-900" : "text-stone-500"}`}
              >
                {p.label}
              </a>
            ))}
            <OpenToWork onClick={() => setOpen(false)} className="my-2 flex justify-center rounded-md py-2.5" />
          </div>
        </div>
      )}
    </header>
  );
}
