import { useCallback, useState } from "react";
import { HiOutlineEye } from "react-icons/hi2";
import { certificates } from "../data";
import Section from "./Section";
import ImageModal from "./ImageModal";

const ALL = "All";
// Filter buttons: "All" plus each certificate type, in the order they first appear in data.js.
const types = [ALL, ...new Set(certificates.map((c) => c.type))];
const countOf = (type) => (type === ALL ? certificates.length : certificates.filter((c) => c.type === type).length);

export default function Certificates() {
  const [filter, setFilter] = useState(ALL);
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  const shown = filter === ALL ? certificates : certificates.filter((c) => c.type === filter);
  const [activeName, activeIssuer] = active ? active.title.split(" — ") : [];

  return (
    <Section title="Certificates">
      {/* filter */}
      <div className="fade-up flex flex-wrap gap-2" style={{ animationDelay: "60ms" }}>
        {types.map((type) => {
          const on = type === filter;
          return (
            <button
              key={type}
              type="button"
              onClick={() => setFilter(type)}
              aria-pressed={on}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                on ? "border-accent bg-accent text-white" : "border-stone-200 text-stone-600 hover:border-accent/40 hover:text-accent"
              }`}
            >
              {type} <span className={on ? "text-white/75" : "text-stone-400"}>{countOf(type)}</span>
            </button>
          );
        })}
      </div>

      {/* cards: the certificate sits whole on a soft frame; clicking opens a preview */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((cert, i) => {
          const [name, issuer] = cert.title.split(" — ");
          return (
            <button
              key={cert.title}
              type="button"
              onClick={() => setActive(cert)}
              className="fade-up group overflow-hidden rounded-lg border border-stone-200 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              style={{ animationDelay: `${100 + i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] border-b border-stone-200 bg-stone-50 p-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="h-full w-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-accent text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                  <HiOutlineEye className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-accent">{cert.type}</p>
                <p className="mt-1 text-sm font-medium leading-5">{name}</p>
                {issuer && <p className="mt-1 text-sm text-stone-500">{issuer}</p>}
              </div>
            </button>
          );
        })}
      </div>

      {active && (
        <ImageModal
          src={active.image}
          alt={active.title}
          title={activeName}
          subtitle={activeIssuer}
          link={active.link}
          onClose={close}
        />
      )}
    </Section>
  );
}
