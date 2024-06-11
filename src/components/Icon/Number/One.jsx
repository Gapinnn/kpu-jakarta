export default function One({ className = "w-12 h-12 text-white" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="currentColor" stroke="currentColor" d="M10 7v2h2v8h2V7z" />
    </svg>
  );
}
