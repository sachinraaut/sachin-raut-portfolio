import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently most visible in the viewport,
 * using IntersectionObserver rather than scroll-position math — cheaper,
 * and correct regardless of section height.
 *
 * @param sectionIds - ids of the sections to observe, in document order
 * @param options - rootMargin tunes when a section is considered "active";
 *                  a top-biased margin means the section is marked active
 *                  once it's near the top of the viewport, which matches
 *                  how a fixed navbar visually reads "current section".
 */
export function useScrollSpy(
  sectionIds: string[],
  options: { rootMargin?: string; threshold?: number } = {}
): string | null {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Among currently-intersecting entries, pick the one closest to the top.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: options.rootMargin ?? "-15% 0px -70% 0px",
        threshold: options.threshold ?? 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // sectionIds is expected to be a stable array from content data.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(","), options.rootMargin, options.threshold]);

  return activeId;
}
