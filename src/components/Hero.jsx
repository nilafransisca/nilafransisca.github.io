import { HiCodeBracket } from "react-icons/hi2";
import { SiDotnet, SiExpress, SiJavascript, SiMysql, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { profile } from "../data";

const delay = (ms) => ({ animationDelay: `${ms}ms` });

// Little cards around the photo. `note` is an optional second line.
// `position` is used from md up, where the cards float over the photo's edge.
const badges = [
  { label: profile.role, Icon: HiCodeBracket, position: "bottom-8 -right-8 lg:-right-12", floatDelay: "0s" },
];

function BadgeCard({ label, note, Icon, floatDelay }) {
  return (
    <div
      className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-stone-200 bg-white px-3 py-2 shadow-lg motion-safe:animate-float"
      style={{ animationDelay: floatDelay }}
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold">{label}</span>
        {note && <span className="block text-xs text-stone-500">{note}</span>}
      </span>
    </div>
  );
}

// Tech shown under the buttons: front-end, then back-end, then database.
// Icons from react-icons (si = Simple Icons, tb = Tabler), colored like each brand.
const stack = [
  { name: "JavaScript", Icon: SiJavascript, color: "#eab308" },
  { name: "React", Icon: SiReact, color: "#149eca" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Express", Icon: SiExpress, color: "#1c1917" },
  { name: "C#", Icon: TbBrandCSharp, color: "#68217a" },
  { name: "ASP.NET", Icon: SiDotnet, color: "#512bd4" },
  { name: "MySQL", Icon: SiMysql, color: "#00758f" },
];

export default function Hero() {
  return (
    // From md up, the hero fills the screen between navbar (65px) and footer (89px)
    // and sits vertically centered, so there's no empty band underneath.
    <section className="flex items-center py-12 md:min-h-[calc(100svh-154px)] md:py-12">
      <div className="grid w-full items-center gap-16 md:grid-cols-2 md:gap-10">
        {/* photo — centered in its column, with a soft pink ring and badges */}
        <div className="fade-up flex flex-col items-center justify-self-center md:order-last" style={delay(150)}>
          <div className="relative">
            {/* The ring spins inside a still, clipped frame: a rotating box gets wider
                at 45°, which would otherwise push the page sideways and add a scrollbar. */}
            <div aria-hidden="true" className="absolute -inset-6 overflow-hidden rounded-full">
              <div className="h-full w-full rounded-full border-2 border-dashed border-accent/30 motion-safe:animate-spin-slow" />
            </div>
            <div aria-hidden="true" className="absolute -inset-2 rounded-full bg-accent/10" />
            <div className="relative aspect-square w-60 overflow-hidden rounded-full border-4 border-white shadow-xl sm:w-64 md:w-72 lg:w-[22rem]">
              <img src="img/foto1.jpg" alt={profile.name} className="h-full w-full origin-top scale-[1.2] object-cover" />
            </div>

            {/* md and up: badges float over the edge of the photo */}
            {badges.map((b) => (
              <div key={b.label} className={`absolute hidden md:block ${b.position}`}>
                <BadgeCard {...b} />
              </div>
            ))}
          </div>

          {/* phones: the photo is too small to cover, so the badges sit underneath */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 md:hidden">
            {badges.map((b) => (
              <BadgeCard key={b.label} {...b} />
            ))}
          </div>
        </div>

        {/* text */}
        <div>
          <p className="fade-up inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            Hallo, I'm 👋
          </p>
          <h1 className="fade-up mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl" style={delay(50)}>
            {profile.name}
          </h1>
          <p className="fade-up mt-4 max-w-lg text-lg leading-8 text-stone-600" style={delay(100)}>
            {profile.tagline}
          </p>

          <div className="fade-up mt-8 flex flex-wrap gap-3 text-[15px] font-medium" style={delay(150)}>
            <a href={profile.cvUrl} download className="rounded-md bg-accent px-5 py-3 text-white transition-colors hover:bg-accent-dark">
              Download CV
            </a>
            <a href="#contact" className="rounded-md border border-stone-300 px-5 py-3 transition-colors hover:border-accent hover:text-accent">
              Contact
            </a>
          </div>

          <div className="fade-up mt-10 border-t border-stone-200 pt-6" style={delay(200)}>
            <p className="text-sm font-medium text-stone-500">Tech stack</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {stack.map(({ name, Icon, color }) => (
                <li
                  key={name}
                  className="flex items-center gap-1.5 rounded-full border border-stone-200 px-2.5 py-1.5 text-sm text-stone-700"
                >
                  <Icon className="h-4 w-4" style={{ color }} aria-hidden="true" />
                  {name}
                </li>
              ))}
              {/* right after the last chip (MySQL); plain text, not a chip, so it stays on the same row */}
              <li className="flex items-center">
                <a href="#skills" className="px-1 text-sm font-medium text-accent transition-colors hover:text-accent-dark">
                  All skills →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
