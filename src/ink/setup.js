import { InkTransition } from "./ui/inkTransition";
import { applyTheme, getTheme } from "./ui/theme";

let started = false;

/** Starts the ink dark-mode effect. Safe to call twice (React StrictMode does). */
export function setupInk() {
  if (started) return;
  const toggle = document.querySelector("#theme-toggle");
  if (!toggle) return;
  started = true;

  applyTheme(getTheme(), toggle);

  // The canvas the ink is drawn on. It covers the page only while the ink is spreading.
  const canvas = document.createElement("canvas");
  canvas.className = "ink-canvas";
  canvas.setAttribute("aria-hidden", "true");
  canvas.setAttribute("data-html2canvas-ignore", "");
  document.body.append(canvas);

  const ink = new InkTransition(canvas, toggle);

  toggle.addEventListener("click", (e) => {
    // detail === 0 means the button was pressed with the keyboard: spread from the button.
    ink.toggle(e.detail === 0 ? undefined : { x: e.clientX, y: e.clientY });
  });
}