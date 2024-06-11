export default function Divider({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 15 15"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 2a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10a.5.5 0 0 1 .5-.5"
        clipRule="evenodd"
      />
    </svg>
  );
}
