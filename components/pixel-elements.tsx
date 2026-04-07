export function PixelCross({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="8" y="0" width="4" height="4" />
      <rect x="8" y="4" width="4" height="4" />
      <rect x="0" y="8" width="4" height="4" />
      <rect x="4" y="8" width="4" height="4" />
      <rect x="8" y="8" width="4" height="4" />
      <rect x="12" y="8" width="4" height="4" />
      <rect x="16" y="8" width="4" height="4" />
      <rect x="8" y="12" width="4" height="4" />
      <rect x="8" y="16" width="4" height="4" />
    </svg>
  );
}

export function PixelCursor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Tip */}
      <rect x="0" y="0" width="2" height="2" />
      
      {/* Arrow Body */}
      <rect x="0" y="2" width="2" height="2" />
      <rect x="2" y="2" width="2" height="2" />
      
      <rect x="0" y="4" width="2" height="2" />
      <rect x="2" y="4" width="2" height="2" />
      <rect x="4" y="4" width="2" height="2" />
      
      <rect x="0" y="6" width="2" height="2" />
      <rect x="2" y="6" width="2" height="2" />
      <rect x="4" y="6" width="2" height="2" />
      <rect x="6" y="6" width="2" height="2" />
      
      <rect x="0" y="8" width="2" height="2" />
      <rect x="2" y="8" width="2" height="2" />
      <rect x="4" y="8" width="2" height="2" />
      <rect x="6" y="8" width="2" height="2" />
      <rect x="8" y="8" width="2" height="2" />
      
      <rect x="0" y="10" width="2" height="2" />
      <rect x="2" y="10" width="2" height="2" />
      <rect x="4" y="10" width="2" height="2" />
      <rect x="6" y="10" width="2" height="2" />
      <rect x="8" y="10" width="2" height="2" />
      <rect x="10" y="10" width="2" height="2" />
      
      {/* Arrow Base */}
      <rect x="0" y="12" width="2" height="2" />
      <rect x="2" y="12" width="2" height="2" />
      <rect x="4" y="12" width="2" height="2" />
      <rect x="6" y="12" width="2" height="2" />
      <rect x="8" y="12" width="2" height="2" />
      <rect x="10" y="12" width="2" height="2" />
      <rect x="12" y="12" width="2" height="2" />
      
      <rect x="0" y="14" width="2" height="2" />
      <rect x="2" y="14" width="2" height="2" />
      <rect x="4" y="14" width="2" height="2" />
      <rect x="6" y="14" width="2" height="2" />
      
      {/* Bottom Corner & Tail Start */}
      <rect x="0" y="16" width="2" height="2" />
      <rect x="2" y="16" width="2" height="2" />
      <rect x="6" y="16" width="2" height="2" />
      <rect x="8" y="16" width="2" height="2" />
      
      {/* Tail Extending Down-Right */}
      <rect x="8" y="18" width="2" height="2" />
      <rect x="10" y="18" width="2" height="2" />
      
      <rect x="8" y="20" width="2" height="2" />
      <rect x="10" y="20" width="2" height="2" />
      
      <rect x="10" y="22" width="2" height="2" />
      <rect x="12" y="22" width="2" height="2" />
    </svg>
  );
}


export function PixelHand({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* Index finger */}
      <rect x="10" y="2" width="2" height="10" />

      {/* Middle finger */}
      <rect x="12" y="8" width="2" height="3" />

      {/* Ring finger */}
      <rect x="14" y="9" width="2" height="10" />

      {/* Pinky */}
      <rect x="16" y="10" width="2" height="3" />

      {/* Right side */}
      <rect x="18" y="11" width="2" height="7" />

      {/* Bottom curve (rounded palm via steps) */}
      <rect x="9" y="17" width="10" height="2" />
      <rect x="10" y="19" width="8" height="2" />
      <rect x="11" y="21" width="6" height="1" />

      {/* Inner palm */}
      <rect x="10" y="10" width="2" height="7" />

      {/* Thumb (angled like reference) */}
      <rect x="5" y="12" width="2" height="2" />
      <rect x="5" y="13" width="2" height="2" />
      <rect x="5" y="14" width="2" height="2" />
      <rect x="6" y="15" width="2" height="2" />
      <rect x="7" y="16" width="2" height="2" />
      <rect x="8" y="18" width="2" height="2" />
      <rect x="9" y="19" width="2" height="2" />
      <rect x="10" y="20" width="2" height="2" />

    </svg>
  );
}


export function PixelSmiley({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="2" height="2" />
      <rect x="10" y="4" width="2" height="2" />
      <rect x="2" y="10" width="2" height="2" />
      <rect x="4" y="12" width="2" height="2" />
      <rect x="6" y="12" width="4" height="2" />
      <rect x="10" y="12" width="2" height="2" />
      <rect x="12" y="10" width="2" height="2" />
    </svg>
  );
}

export function PixelExclamation({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 6 20"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="1" y="0" width="4" height="4" />
      <rect x="1" y="4" width="4" height="4" />
      <rect x="1" y="8" width="4" height="4" />
      <rect x="1" y="16" width="4" height="4" />
    </svg>
  );
}

export function PixelQuestion({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 22"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="4" y="0" width="8" height="2" />
      <rect x="2" y="2" width="2" height="2" />
      <rect x="12" y="2" width="2" height="2" />
      <rect x="12" y="4" width="2" height="2" />
      <rect x="10" y="6" width="2" height="2" />
      <rect x="8" y="8" width="2" height="2" />
      <rect x="6" y="10" width="2" height="2" />
      <rect x="6" y="12" width="2" height="2" />
      <rect x="6" y="18" width="2" height="2" />
    </svg>
  );
}

export function PixelGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="4" height="4" />
      <rect x="8" y="0" width="4" height="4" />
      <rect x="16" y="0" width="4" height="4" />
      <rect x="4" y="4" width="4" height="4" />
      <rect x="12" y="4" width="4" height="4" />
      <rect x="20" y="4" width="4" height="4" />
      <rect x="0" y="8" width="4" height="4" />
      <rect x="8" y="8" width="4" height="4" />
      <rect x="16" y="8" width="4" height="4" />
      <rect x="4" y="12" width="4" height="4" />
      <rect x="12" y="12" width="4" height="4" />
    </svg>
  );
}

export function PixelMonitor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 18"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="2" y="0" width="16" height="2" />
      <rect x="0" y="2" width="2" height="10" />
      <rect x="18" y="2" width="2" height="10" />
      <rect x="2" y="10" width="16" height="2" />
      <rect x="8" y="12" width="4" height="2" />
      <rect x="4" y="14" width="12" height="2" />
    </svg>
  );
}