export default function ArrowDown({ className, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <path
        fill="currentColor"
        d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
      />
    </svg>
  );
}
