import { memo } from "react";

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