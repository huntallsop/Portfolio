export default function GradientBlob({ className = '', variant = 'default', ...props }) {
  if (variant === 'cta') {
    return (
      <svg
        className={className}
        viewBox="0 0 700 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        <defs>
          <radialGradient id="ctaGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 260) scale(360 260)">
            <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0.45" />
            <stop offset="1" stopColor="var(--color-black)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="350" cy="260" rx="340" ry="250" fill="url(#ctaGlow)" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <defs>
        <radialGradient id="heroGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260 260) scale(260 260)">
          <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0.28" />
          <stop offset="1" stopColor="var(--color-black)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="260" r="250" fill="url(#heroGlow)" />
    </svg>
  );
}
