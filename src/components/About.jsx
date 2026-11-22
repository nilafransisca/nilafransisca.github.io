import { useState } from "react";
import { education, achievement } from "../data";
import Section from "./Section";
import ImageModal from "./ImageModal";

export default function About() {
  const [showAward, setShowAward] = useState(false);

  return (
    <Section title="About">
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <p className="fade-up max-w-3xl leading-8 text-stone-700" style={{ animationDelay: "80ms" }}>
          I’m a graduate in Information Technology from Universitas Brawijaya with hands-on experience in Web Development. My skills include HTML, CSS, JavaScript, and C#, along with frameworks such as ReactJS, ASP.NET, ExpressJs,
          Tailwind CSS, and Bootstrap. Passionate about digital technology and eager to keep learning, I’m always open to new challenges. With strong adaptability and a growth mindset, I strive to contribute positively in every opportunity
          I take.
        </p>

        <div className="fade-up" style={{ animationDelay: "160ms" }}>
          <h2 className="font-semibold">Education</h2>
          <div className="mt-4 space-y-4">
            {education.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-lg border border-stone-200 p-5">
                <img src={item.logo} alt="" className="h-12 w-12 shrink-0 object-contain" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-stone-500">{item.period}</p>
                  </div>
                  <p className="text-sm text-stone-600">
                    {item.subtitle.split(" · ").map((part, i) => (
                      <span key={part}>
                        {i > 0 && " · "}
                        <span className="whitespace-nowrap">{part}</span>
                      </span>
                    ))}
                  </p>
                  {achievement.institution === item.title && (
                    <p className="mt-1 text-sm text-stone-600">
                      Graduated {achievement.title} ·{" "}
                      <button type="button" onClick={() => setShowAward(true)} className="text-accent underline underline-offset-2 hover:text-accent-dark">
                        view certificate
                      </button>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showAward && <ImageModal src={achievement.image} alt={`${achievement.title} — ${achievement.institution}`} onClose={() => setShowAward(false)} />}
    </Section>
  );
}
