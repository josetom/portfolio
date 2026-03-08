export default function Twitter({ height = 24, width = 24 }: { height?: number; width?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="X logo">
      <path
        fill="currentColor"
        d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.57l-5.144-6.744L5.13 22H1.87l7.604-8.693L1.5 2h6.737l4.65 6.144L18.244 2Zm-1.15 18h1.803L7.255 3.896H5.322L17.094 20Z"
      />
    </svg>
  );
}
