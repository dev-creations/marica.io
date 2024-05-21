interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function Logo({ width = 64, height, className }: LogoProps) {
  return (
    <svg
      width={width}
      height={height || width}
      className={className}
      viewBox="0 0 70 70"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <polygon points="0,0 20,0 25,13 0,60" />
      <polygon points="2,70 18,70 18,45" />
      <polygon points="20,42 46,0 68,0 35,53" />
      <polygon points="68,15 68,70 48,70 48,45" />
    </svg>
  );
}
