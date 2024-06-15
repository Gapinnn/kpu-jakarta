import { Link } from "react-router-dom";
import getLanguage from "../../hooks/getLanguage";

export default function Breadcumb() {
  const lang = getLanguage();
  return (
    <nav className="inline align-middle mb-4" aria-label="Breadcrumb">
      <Link
        to={`/${lang}`}
        className="text-sm md:text-base lg:text-lg inline font-semibold text-maroon-light hover:text-maroon align-middle"
      >
        <svg
          className="inline w-4 h-4 md:w-5 md:h-5 me-2 md:me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="#660300"
          stroke="#660300"
          viewBox="0 0 20 20"
        >
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
        <span className="inline text-center align-text-top">
          {lang === "id" ? "Beranda" : "Home"}
        </span>
      </Link>
      <Link
        to={`/${lang}/statistik/visualisasi`}
        className="text-sm md:text-base lg:text-lg inline font-semibold text-maroon-light hover:text-maroon align-middle"
      >
        <svg
          className="rtl:rotate-180 inline w-2.5 h-2.5 md:w-3.5 md:h-3.5 mx-1.5 text-maroon-light "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="inline text-center align-text-top">
          {lang === "id" ? "Statistik" : "Statistic"}
        </span>
      </Link>
      {/* Halaman Saat Ini */}
      <Link className="text-sm md:text-base lg:text-lg inline font-semibold text-stone-900 align-middle">
        <svg
          className="rtl:rotate-180 inline w-2.5 h-2.5 md:w-3.5 md:h-3.5 mx-1.5 text-stone-900 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="inline text-center align-text-top">
          {lang === "id" ? "Visualisasi Data" : "Data Visualization"}
        </span>
      </Link>
    </nav>
  );
}
