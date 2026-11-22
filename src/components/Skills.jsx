import { skillGroups } from "../data";
import Section from "./Section";

// One row per group: number + title on the left, skills as chips on the right.
// On phones the title sits above the chips.
export default function Skills() {
  return (
    <Section title="Skills">
      <div className="divide-y divide-stone-200 border-y border-stone-200">
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            className="fade-up grid gap-3 py-4 sm:grid-cols-[12rem_1fr] sm:items-center sm:gap-6"
            style={{ animationDelay: `${100 + i * 70}ms` }}
          >
            <h2 className="flex items-baseline gap-3 font-semibold">
              <span className="text-xs font-medium text-accent">{group.number}</span>
              {group.title}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full border border-stone-200 px-3 py-1 text-sm text-stone-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
