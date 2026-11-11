import { memo } from "react";

// The ink effect finds this button by its id and class name: do not rename them.
// The label switches with CSS (see index.css), so no icon is needed.
function ThemeToggle() {
  return (
    <button
      id="theme-toggle"
      type="button"
      className="theme-toggle"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <span className="theme-toggle__to-dark">DARK</span>
      <span className="theme-toggle__to-light">LIGHT</span>
    </button>
  );
}

export default memo(ThemeToggle);