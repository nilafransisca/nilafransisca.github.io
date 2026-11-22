import { useEffect } from "react";
import { HiArrowUpRight, HiXMark } from "react-icons/hi2";

function Block({ title, children }) {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-stone-600">{children}</div>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const links = [
    project.links?.demo && { label: "Lihat website", url: project.links.demo },
    project.links?.repo && { label: "Lihat kode", url: project.links.repo },
  ].filter(Boolean);

  return (
    <div
      className="fade-in fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center sm:p-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        className="fade-up relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white sm:rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Tutup"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 text-stone-600 shadow transition-colors hover:text-stone-900 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          <HiXMark className="h-5 w-5" />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/9] w-full border-b border-stone-200 object-cover object-top"
        />

        <div className="p-6 sm:p-8">
          <p className="text-xs font-medium text-accent">{project.tag}</p>
          <h2 id="project-title" className="mt-1 text-xl font-semibold">{project.title}</h2>
          <p className="text-stone-500">{project.subtitle}</p>
          {project.role && (
            <p className="mt-3 text-sm text-stone-600">
              Peran: <span className="font-medium text-stone-900">{project.role}</span>
            </p>
          )}

          <Block title="Masalah">
            <p>{project.problem}</p>
          </Block>

          <Block title="Solusi">
            <p>{project.solution}</p>
          </Block>

          <Block title="Fitur utama">
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Teknologi">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="rounded-full bg-stone-100 px-2.5 py-1 text-xs text-stone-600">
                  {s}
                </span>
              ))}
            </div>
          </Block>

          {links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
              {links.map((l, i) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 transition-colors ${
                    i === 0 ? "bg-accent text-white hover:bg-accent-dark" : "border border-stone-300 hover:border-accent hover:text-accent"
                  }`}
                >
                  {l.label} <HiArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
