export default function Ten({ className = "w-12 h-12 text-white" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="white"
        stroke="white"
        d="M10 7H6v2h2v8h2zm6 0h-2c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2V9a2 2 0 0 0-2-2m0 8h-2V9h2z"
      />
    </svg>
  );
}
