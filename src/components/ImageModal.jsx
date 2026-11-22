import { useEffect } from "react";
import { HiArrowUpRight, HiXMark } from "react-icons/hi2";

/**
 * Full-screen image preview. With `title`/`subtitle`/`link` it also shows a bar
 * under the image (used for certificates); without them it's just the image.
 */
export default function ImageModal({ src, alt, onClose, title, subtitle, link, linkLabel = "Buka sertifikat asli" }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const hasInfo = Boolean(title || link);

  return (
    <div
      className="fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div className="fade-up relative max-w-[90vw] overflow-hidden rounded-md bg-white" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className={`mx-auto block max-w-full ${hasInfo ? "max-h-[75vh]" : "max-h-[85vh]"}`} />

        {hasInfo && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 p-4">
            <div>
              {title && <p className="text-sm font-semibold">{title}</p>}
              {subtitle && <p className="text-sm text-stone-500">{subtitle}</p>}
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
              >
                {linkLabel} <HiArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}

        {/* same round X as the project popup */}
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Tutup"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 text-stone-600 shadow transition-colors hover:text-stone-900 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          <HiXMark className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
