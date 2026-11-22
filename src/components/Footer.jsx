import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, socials } from "../data";

const icons = { linkedin: FaLinkedin, github: FaGithub };

export default function Footer() {
  const links = socials.filter((s) => icons[s.icon]);

  return (
    <footer className="border-t border-accent/30">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-6 md:px-8 md:py-8">
        <p className="text-sm text-accent">© {new Date().getFullYear()} {profile.shortName}</p>
        <div className="flex items-center gap-5">
          {links.map((s) => {
            const Icon = icons[s.icon];
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                title={s.name}
                className="text-accent transition-colors hover:text-accent-dark"
              >
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
