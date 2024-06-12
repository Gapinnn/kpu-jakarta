export default function StackedBarChart({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M22 21H2V3h2v16h2v-2h4v2h2v-3h4v3h2v-2h4zm-4-7h4v2h-4zm-6-8h4v3h-4zm4 9h-4v-5h4zM6 10h4v2H6zm4 6H6v-3h4z"
      />
    </svg>
  );
}