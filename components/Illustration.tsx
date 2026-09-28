type Kind =
  | "beton-recycling"
  | "betonmischer"
  | "beschickungsaufzuege"
  | "mischanlagen"
  | "zyklon"
  | "halle";

export default function Illustration({
  kind,
  className,
}: {
  kind: Kind;
  className?: string;
}) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f4f6f9" />
            <stop offset="100%" stopColor="#e6ebf1" />
          </linearGradient>
          <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a5578" />
            <stop offset="100%" stopColor="#0f2b4a" />
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#dfe3e8" strokeWidth="0.6" />
          </pattern>
        </defs>

        <rect width="800" height="500" fill="url(#sky)" />
        <rect width="800" height="500" fill="url(#grid)" opacity="0.5" />
        <line x1="0" y1="380" x2="800" y2="380" stroke="#c8d0da" strokeWidth="1" />

        {kind === "beton-recycling" && (
          <g>
            <rect x="120" y="180" width="180" height="200" fill="url(#steel)" />
            <rect x="130" y="200" width="160" height="10" fill="#1c3a5f" />
            <rect x="130" y="230" width="160" height="10" fill="#1c3a5f" />
            <rect x="130" y="260" width="160" height="10" fill="#1c3a5f" />
            <path d="M 300 280 L 500 280 L 520 300 L 280 300 Z" fill="#4a627d" />
            <circle cx="560" cy="240" r="80" fill="url(#steel)" />
            <circle cx="560" cy="240" r="60" fill="#e6ebf1" />
            <circle cx="560" cy="240" r="8" fill="#0f2b4a" />
            <path d="M 560 180 L 560 300 M 500 240 L 620 240 M 517 197 L 603 283 M 603 197 L 517 283" stroke="#0f2b4a" strokeWidth="2" />
            <path d="M 200 380 L 200 420 L 210 420 L 210 380 Z M 240 380 L 240 420 L 250 420 L 250 380 Z" fill="#8895a8" />
          </g>
        )}

        {kind === "betonmischer" && (
          <g>
            <ellipse cx="400" cy="290" rx="180" ry="90" fill="url(#steel)" />
            <ellipse cx="400" cy="270" rx="180" ry="90" fill="#3a5578" />
            <ellipse cx="400" cy="270" rx="160" ry="75" fill="#1c3a5f" />
            <circle cx="400" cy="270" r="20" fill="#e6ebf1" />
            <circle cx="400" cy="270" r="6" fill="#0f2b4a" />
            <rect x="220" y="270" width="360" height="6" fill="#0f2b4a" />
            <path d="M 320 380 L 360 340 M 480 340 L 520 380" stroke="#8895a8" strokeWidth="4" />
            <rect x="310" y="380" width="60" height="8" fill="#8895a8" />
            <rect x="470" y="380" width="60" height="8" fill="#8895a8" />
          </g>
        )}

        {kind === "beschickungsaufzuege" && (
          <g>
            <rect x="360" y="80" width="80" height="300" fill="url(#steel)" />
            <rect x="360" y="80" width="80" height="4" fill="#0f2b4a" />
            <rect x="380" y="90" width="40" height="60" fill="#e6ebf1" stroke="#0f2b4a" />
            <rect x="360" y="380" width="80" height="8" fill="#0f2b4a" />
            <line x1="380" y1="80" x2="380" y2="380" stroke="#4a627d" strokeWidth="1" />
            <line x1="420" y1="80" x2="420" y2="380" stroke="#4a627d" strokeWidth="1" />
            <path d="M 400 90 L 400 380" stroke="#8895a8" strokeDasharray="4 6" />
            <rect x="200" y="340" width="120" height="40" fill="#3a5578" />
            <rect x="480" y="340" width="120" height="40" fill="#3a5578" />
          </g>
        )}

        {kind === "mischanlagen" && (
          <g>
            <rect x="120" y="200" width="120" height="180" fill="#3a5578" />
            <rect x="260" y="140" width="140" height="240" fill="url(#steel)" />
            <rect x="420" y="180" width="120" height="200" fill="#3a5578" />
            <rect x="560" y="240" width="100" height="140" fill="#4a627d" />
            <rect x="260" y="140" width="140" height="10" fill="#0f2b4a" />
            <line x1="240" y1="220" x2="260" y2="220" stroke="#0f2b4a" strokeWidth="3" />
            <line x1="400" y1="240" x2="420" y2="240" stroke="#0f2b4a" strokeWidth="3" />
            <line x1="540" y1="280" x2="560" y2="280" stroke="#0f2b4a" strokeWidth="3" />
            <circle cx="330" cy="220" r="24" fill="#e6ebf1" stroke="#0f2b4a" />
            <line x1="150" y1="380" x2="150" y2="410" stroke="#8895a8" strokeWidth="4" />
            <line x1="210" y1="380" x2="210" y2="410" stroke="#8895a8" strokeWidth="4" />
          </g>
        )}

        {kind === "zyklon" && (
          <g>
            <path d="M 340 140 L 460 140 L 420 340 L 380 340 Z" fill="url(#steel)" />
            <path d="M 380 340 L 420 340 L 400 420 Z" fill="#0f2b4a" />
            <rect x="340" y="140" width="120" height="14" fill="#0f2b4a" />
            <path d="M 260 180 L 340 180 L 340 200 L 260 200 Z" fill="#3a5578" />
            <circle cx="240" cy="190" r="30" fill="none" stroke="#0f2b4a" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 400 160 Q 420 200 400 240 Q 380 280 400 320" fill="none" stroke="#e6ebf1" strokeWidth="2" opacity="0.7" />
          </g>
        )}

        {kind === "halle" && (
          <g>
            <path d="M 60 380 L 60 260 L 400 160 L 740 260 L 740 380 Z" fill="#3a5578" />
            <path d="M 60 260 L 400 160 L 740 260" fill="none" stroke="#0f2b4a" strokeWidth="2" />
            <rect x="120" y="290" width="60" height="90" fill="#e6ebf1" />
            <rect x="220" y="290" width="60" height="90" fill="#e6ebf1" />
            <rect x="360" y="290" width="80" height="90" fill="#0f2b4a" />
            <rect x="500" y="290" width="60" height="90" fill="#e6ebf1" />
            <rect x="600" y="290" width="60" height="90" fill="#e6ebf1" />
            <line x1="200" y1="220" x2="600" y2="220" stroke="#0f2b4a" strokeWidth="3" />
            <rect x="290" y="200" width="30" height="20" fill="#8895a8" />
            <rect x="480" y="200" width="30" height="20" fill="#8895a8" />
          </g>
        )}

        <text
          x="770"
          y="470"
          textAnchor="end"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="10"
          fill="#8895a8"
          letterSpacing="2"
        >
          WEMA · ST. WENDEL
        </text>
      </svg>
    </div>
  );
}
