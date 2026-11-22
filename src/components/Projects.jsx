import { useCallback, useState } from "react";
import { HiArrowUpRight, HiOutlineBriefcase } from "react-icons/hi2";
import { projects } from "../data";
import Section from "./Section";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <Section title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setActive(project)}
            className="fade-up group flex flex-col overflow-hidden rounded-lg border border-stone-200 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            style={{ animationDelay: `${100 + i * 80}ms` }}
          >
            {/* image with the project type as a small pink label on top */}
            <div className="relative w-full overflow-hidden border-b border-stone-200">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-white shadow-sm">
                {project.tag}
              </span>
            </div>

            {/* title, subtitle and your role (the tech stack is in the popup); the arrow shows it opens */}
            <div className="flex flex-1 items-start justify-between gap-4 p-5">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="mt-0.5 text-sm text-stone-500">{project.subtitle}</p>
                {project.role ? (
                  <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-stone-600">
                    <HiOutlineBriefcase className="h-4 w-4 text-accent" aria-hidden="true" />
                    {project.role}
                  </p>
                ) : (
                  <p className="mt-3 text-xs text-stone-500">{project.stack.join(" · ")}</p>
                )}
              </div>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-stone-200 text-stone-500 transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <HiArrowUpRight className="h-4 w-4" />
                <span className="sr-only">Lihat detail</span>
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={close} />}
    </Section>
  );
}
