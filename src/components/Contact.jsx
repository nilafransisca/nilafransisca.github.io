import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowUpRight, HiCheck, HiOutlineEnvelope, HiOutlineSquare2Stack } from "react-icons/hi2";
import { profile, socials } from "../data";
import Section from "./Section";

// Socials shown on this page (same icons as the footer).
const icons = { linkedin: FaLinkedin, github: FaGithub };

// Copies text and returns whether it worked. Uses the Clipboard API, and falls back to
// the older copy command where that's missing or blocked (plain http, embedded browsers).
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  }
}

export default function Contact() {
  const links = socials.filter((s) => icons[s.icon]);
  const [copied, setCopied] = useState(false);

  // Switch "Copied!" back to "Copy email" after a moment.
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  // The email button needs a mail app on the visitor's device; copying works everywhere.
  const copyEmail = async () => {
    if (await copyText(profile.email)) setCopied(true);
  };

  return (
    <Section title="Contact">
      {/* one soft card holding everything */}
      <div
        className="fade-up rounded-2xl border border-stone-200 bg-gradient-to-br from-accent/[0.06] via-white to-white p-6 sm:p-10"
        style={{ animationDelay: "80ms" }}
      >
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let’s work together</h2>
            <p className="mt-3 max-w-md text-lg leading-8 text-stone-600">
              I’m open to new opportunities. The easiest way to reach me is by email.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
              >
                <HiOutlineEnvelope className="h-4 w-4" />
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-md border border-stone-300 bg-white px-3.5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-accent hover:text-accent"
              >
                {copied ? <HiCheck className="h-4 w-4 text-emerald-600" /> : <HiOutlineSquare2Stack className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy email"}
              </button>
            </div>
            <span className="sr-only" aria-live="polite">
              {copied ? "Email copied" : ""}
            </span>
          </div>

          <div>
            <p className="text-sm font-medium text-stone-500">Find me on</p>
            <div className="mt-3 space-y-3">
              {links.map((s) => {
                const Icon = icons[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-stone-200 bg-white px-4 py-3 transition-colors duration-200 hover:border-accent/40"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-medium">{s.name}</span>
                      <span className="block text-sm text-stone-500">{s.handle}</span>
                    </span>
                    <HiArrowUpRight className="h-4 w-4 text-stone-400 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
