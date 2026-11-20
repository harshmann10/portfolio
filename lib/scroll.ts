// Respect the OS "reduce motion" setting for programmatic scrolling too —
// CSS scroll-behavior alone does not affect scrollIntoView/scrollTo calls.
export function getScrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined") return "auto";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}
