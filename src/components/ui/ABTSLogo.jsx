import React from 'react';

/**
 * ABTSLogo — inline SVG seal, fully transparent background.
 * 
 * Props:
 *   size     — pixel diameter (default 48)
 *   light    — if true, renders in white/gold for dark backgrounds
 *              if false (default), renders in navy/gold for light backgrounds
 */
export default function ABTSLogo({ size = 48, light = false }) {
  const navy  = light ? '#ffffff' : '#0f172a';
  const gold  = '#d4a017';
  const sub   = light ? 'rgba(255,255,255,0.55)' : '#475569';
  const r     = 46; // outer ring radius (viewBox is 0 0 100 100)

  /* Arc helper — draws text along a circle */
  // We embed the text on arched paths using SVG textPath.

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{ display: 'block', overflow: 'visible' }}
      aria-label="ABTS Logo"
    >
      <defs>
        {/* Arc for top text — apostolic biblical theological seminary */}
        <path
          id="topArc"
          d={describeArc(50, 50, 40, -155, -25)}
          fill="none"
        />
        {/* Arc for bottom text — teach apostolic truth · love well */}
        <path
          id="bottomArc"
          d={describeArc(50, 50, 40, 25, 155)}
          fill="none"
        />
      </defs>

      {/* ── Outer double ring ── */}
      <circle cx="50" cy="50" r={r}     fill="none" stroke={navy} strokeWidth="0.7" />
      <circle cx="50" cy="50" r={r - 3} fill="none" stroke={gold} strokeWidth="0.3" />

      {/* ── Book icon at top (12 o'clock) ── */}
      <g transform="translate(50, 5)" fill={gold}>
        {/* simple open book: two rectangles with a spine line */}
        <rect x="-5" y="-2" width="4.5" height="3.5" rx="0.5" />
        <rect x="0.5"  y="-2" width="4.5" height="3.5" rx="0.5" />
        <line x1="0" y1="-2" x2="0" y2="1.5" stroke={gold} strokeWidth="0.6" />
      </g>

      {/* ── Cross icon at bottom (6 o'clock) ── */}
      <g transform="translate(50, 95)" fill="none" stroke={gold} strokeWidth="0.8" strokeLinecap="round">
        <line x1="0" y1="-3" x2="0" y2="3" />
        <line x1="-2" y1="0" x2="2" y2="0" />
      </g>

      {/* ── Star separators at 3, 9 o'clock ── */}
      <text x="96" y="52.5" textAnchor="middle" fontSize="4" fill={gold}>★</text>
      <text x="4"  y="52.5" textAnchor="middle" fontSize="4" fill={gold}>★</text>

      {/* ── Curved top text ── */}
      <text fontSize="5.2" fill={navy} fontFamily="Georgia, serif" letterSpacing="0.8">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          APOSTOLIC BIBLICAL THEOLOGICAL SEMINARY
        </textPath>
      </text>

      {/* ── Curved bottom text ── */}
      <text fontSize="4.8" fill={sub} fontFamily="Georgia, serif" letterSpacing="0.5">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          TEACH APOSTOLIC TRUTH · LOVE WELL
        </textPath>
      </text>

      {/* ── Inner thin ring separating arc text from center ── */}
      <circle cx="50" cy="50" r="30" fill="none" stroke={gold} strokeWidth="0.25" strokeDasharray="1.5 1.5" />

      {/* ── EST badge ── */}
      <text
        x="50" y="33"
        textAnchor="middle"
        fontSize="4.2"
        fill={sub}
        fontFamily="'Courier New', monospace"
        letterSpacing="2"
      >
        EST. 2008
      </text>

      {/* ── Main ABTS wordmark ── */}
      <text
        x="50" y="55"
        textAnchor="middle"
        fontSize="18"
        fontWeight="900"
        fill={navy}
        fontFamily="Georgia, 'Times New Roman', serif"
        letterSpacing="-0.5"
      >
        ABTS
      </text>

      {/* ── Location sub-text ── */}
      <text
        x="50" y="63.5"
        textAnchor="middle"
        fontSize="4.5"
        fill={gold}
        fontFamily="Georgia, serif"
        letterSpacing="1.5"
      >
        NEW DELHI · INDIA
      </text>
    </svg>
  );
}

/* ── Utility: SVG arc path descriptor ── */
function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end   = polarToCartesian(cx, cy, r, startAngle);
  const large = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 0 ${end.x} ${end.y}`;
}
