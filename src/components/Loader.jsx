import { useEffect, useState } from "react";
import Hamster from "./loader/Hamster";
import "./loader/loader.css";

// How long the loading screen stays up, counted from when the page started
// loading. MIN keeps it on screen long enough to see the animation; MAX is a
// safety net in case some image never finishes loading.
const MIN_LOADING_MS = 2000;
const MAX_LOADING_MS = 6000;
const FADE_MS = 500;

/**
 * Returns "visible" → "hiding" (fading out) → "done" (removed from the page).
 * Finishes once the page and its images have loaded, but never before MIN_LOADING_MS.
 */
export function usePageLoader() {
  const [stage, setStage] = useState("visible");

  useEffect(() => {
    const timers = [];
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(0, MIN_LOADING_MS - performance.now());
      timers.push(
        setTimeout(() => {
          setStage("hiding");
          timers.push(setTimeout(() => setStage("done"), FADE_MS));
        }, wait),
      );
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish);
    timers.push(setTimeout(finish, MAX_LOADING_MS));

    return () => {
      window.removeEventListener("load", finish);
      timers.forEach(clearTimeout);
    };
  }, []);

  return stage;
}

/** Full-screen loading screen: a hamster running in its wheel. */
export default function Loader({ hiding }) {
  return (
    <div role="status" className={`loader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white ${hiding ? "loader-hide" : ""}`}>
      <svg viewBox="0 0 200 140" className="w-48 sm:w-56" aria-hidden="true">
        <Hamster />
      </svg>

      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-stone-700">
        Loading
        <span aria-hidden="true" className="ml-1">
          <span className="loader-dot">.</span>
          <span className="loader-dot">.</span>
          <span className="loader-dot">.</span>
        </span>
      </p>
    </div>
  );
}
