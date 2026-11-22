import { memo } from "react";

function Logo({ size = 40 }) {
  return (
    <svg
      className="ds-logo"
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="DS logo"
    >
      <rect className="ds-logo__bg" x="10" y="10" width="100" height="100" rx="24" />

      <g className="ds-logo__web">
        <path pathLength="1" d="M10,36 Q20,20 36,10" />
        <path pathLength="1" d="M10,52 Q26,26 52,10" />
        <path pathLength="1" d="M10,10 L28,28" />
      </g>

      <g
        className="ds-logo__letters"
        transform="translate(60 62) scale(.8) translate(-43 -26)"
      >
        <path d="M4,2 V50 H20 A24 24 0 0 0 20,2 Z" />
        <path
          transform="translate(50,0)"
          d="M32,12 C32,0 4,0 4,13 C4,26 32,26 32,39 C32,52 4,52 4,40"
        />
      </g>
    </svg>
  );
}

export default memo(Logo);