import { Link } from "react-router-dom";
import { dataOpiniTerkait } from "../../../../contents/informasi/opini";
import Calendar from "../../../Icon/Calendar";
import EyeView from "../../../Icon/EyeView";
import getLanguage from "../../../../hooks/getLanguage";
import Share from "../../../Icon/Share";
import Cancel from "../../../Icon/Cancel";
import Clipboard from "../../../Icon/Clipboard";
import { useEffect, useState } from "react";
import WhatsAppColor from "../../../Icon/WhatsAppColor";
import TwitterColor from "../../../Icon/TwitterColor";
import FacebookColor from "../../../Icon/FacebookColor";
import LinkedinColor from "../../../Icon/LinkedinColor";

const OpiniRelated = () => {
  const lang = getLanguage();

  return (
    <div className="lg:w-1/4 shadow-md rounded-lg mt-4 md:mt-6 h-fit lg:mt-0 bg-white">
      <h2 className="bg-maroon-light text-white text-base md:text-lg lg:text-xl font-bold p-2 md:p-3 lg:p-4 px-4 md:px-6 rounded-lg rounded-b-none">
        {lang === "id" ? "Opini Terkait" : "Related Opinions"}
      </h2>
      <div className="flex flex-col gap-0 md:px-2 lg:px-0">
        {dataOpiniTerkait.map((item) => (
          <Link
            to={`/${lang}/informasi/opini/${item.id}`}
            key={item.id}
            className="flex items-start p-3 md:p-4 cursor-pointer"
          >
            <img
              className="w-1/4 md:w-1/3 lg:w-1/3 object-cover rounded-lg"
              src={item.image}
              alt="Related Berita"
            />
            <div className="ml-2.5 md:ml-3 lg:ml-4">
              <h3 className="text-sm md:text-lg lg:text-lg font-semibold leading-snug space-y-1">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function DetailOpini({ data }) {
  const lang = getLanguage();
  const [isCopied, setIsCopied] = useState(false);
  const [isShare, setIsShare] = useState(false);

  const copyToClipboard = () => {
    const inputValue = window.location.href;
    navigator.clipboard.writeText(inputValue);
  };

  const shareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${window.location.href}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const shareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${window.location.href}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const shareLinkedin = () => {
    const url = `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <>
      {/* Modal */}
      <div
        className={`bg-black bg-opacity-65 z-50 fixed top-0 justify-center items-center w-full min-h-screen ${
          isShare ? "flex" : "hidden"
        }`}
      >
        <div className="bg-white p-4 flex flex-col gap-4 w-3/4 md:w-1/2 lg:w-1/4 rounded-lg shadow-lg relative">
          <button
            onClick={() => setIsShare(false)}
            className="flex justify-center items-center absolute top-4 right-4"
          >
            <Cancel className="w-6 h-6 text-stone-600 hover:text-stone-900" />
          </button>
          <h2 className="text-base md:text-lg lg:text-xl text-stone-900 font-semibold">
            {lang === "id" ? "Bagikan" : "Share"}
          </h2>
          <div className="relative flex border-2 border-stone-400 rounded-lg">
            <input
              type="search"
              id="default-search"
              className="w-full p-2 text-sm md:text-base lg:text-lg text-stone-600 rounded-lg focus:ring-4 focus:ring-gold focus:border-gold focus:outline-none overflow-hidden"
              disabled
              value={window.location.href}
            />
            <button
              onClick={() => {
                copyToClipboard;
                setIsCopied(true);
              }}
              type="button"
              className="text-white z-20 text-sm md:text-base lg:text-lg absolute px-2 py-1 end-1 md:end-1 bottom-1 md:bottom-1 bg-maroon-light hover:bg-maroon focus:outline-none font-medium rounded-lg"
            >
              {lang === "id" ? "Salin" : "Copy"}
            </button>
          </div>
          <div
            className={`flex justify-start -mt-3 items-center rounded-xl transition-transform duration-500 ${
              isCopied
                ? "translate-y-0 opacity-100"
                : "-translate-y-6 opacity-0"
            }`}
          >
            <Clipboard className="w-5 h-5 md:w-6 md:h-6 text-stone-400 " />
            <p className="text-stone-500 text-sm md:text-base lg:text-lg ms-1 font-semibold ">
              {lang === "id"
                ? "URL Berhasil Disalin!"
                : "URL Copied Successfully!"}
            </p>
          </div>
          <h2 className="-mt-3 text-base md:text-lg lg:text-xl text-stone-900 font-semibold">
            {lang === "id" ? "Media Sosial" : "Social Media"}
          </h2>
          <div className="grid grid-cols-2 -mt-2 md:-mt-1 lg:mt-0 space-y-1 md:space-y-0 md:grid-cols-4 w-full mx-auto gap-2 md:gap-6 lg:gap-8 justify-center">
            <div
              onClick={shareWhatsApp}
              className="flex flex-col items-center gap-0.5"
            >
              <WhatsAppColor className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
              <p className="text-xs md:text-sm text-stone-700">WhatsApp</p>
            </div>
            <div
              onClick={shareTwitter}
              className="flex flex-col items-center gap-0.5"
            >
              <TwitterColor className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
              <p className="text-xs md:text-sm text-stone-700">Twitter</p>
            </div>
            <div
              onClick={shareFacebook}
              className="flex flex-col items-center gap-0.5"
            >
              <FacebookColor className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
              <p className="text-xs md:text-sm text-stone-700">Facebook</p>
            </div>
            <div
              onClick={shareLinkedin}
              className="flex flex-col items-center gap-0.5"
            >
              <LinkedinColor className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
              <p className="text-xs md:text-sm text-stone-700">Linkedin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
        {/* Breadcumb */}
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
            to={`/${lang}/informasi/berita`}
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
              {lang === "id" ? "Informasi" : "Information"}
            </span>
          </Link>
          <Link
            to={`/${lang}/informasi/opini`}
            className="text-sm md:text-base lg:text-lg inline font-semibold text-stone-900 align-middle"
          >
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
              {lang === "id" ? "Opini" : "Opinion"}
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
              {data.title}
            </span>
          </Link>
        </nav>
        <div className="mt-0 md:mt-3 lg:mt-6">
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <div className="flex-1">
              <div className="flex-1 bg-white p-3 pt-4 md:p-6 lg:p-8 shadow rounded-xl">
                <h2 className="text-xl md:text-2xl lg:text-3xl flex gap-2 font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4">
                  <div className="border-r-2 pr-2 border-stone-600">
                    {data.title}
                  </div>
                  <div className="text-stone-700 font-semibold">
                    {data.tags[0]}
                  </div>
                </h2>
                <div
                  onClick={() => setIsShare(true)}
                  className="bg-stone-200 py-1.5 md:py-2.5 lg:py-3 px-3 md:px-4 w-fit flex justify-center items-center rounded-xl hover:bg-stone-500 group mb-3 md:mb-4"
                >
                  <Share className="w-8 h-8 text-stone-600 group-hover:text-stone-100" />
                  <p className="text-stone-600 text-sm md:text-base lg:text-lg ms-1 font-semibold group-hover:text-stone-100">
                    {lang === "id" ? "Bagikan" : "Share"}
                  </p>
                </div>
                <img
                  className="w-full object-cover rounded-lg"
                  src="/images/info-dua.png"
                  alt="News"
                />
                <div className="text-gray-500 text-sm mb-0 mt-2 md:my-2 flex gap-1 items-center">
                  <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-stone-600 group-hover:text-stone-100" />
                    <p className="text-stone-600 text-sm md:text-base lg:text-lg ms-1 font-semibold group-hover:text-stone-100">
                      {data.date}
                    </p>
                  </div>
                  <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
                    <EyeView className="w-5 h-5 md:w-6 md:h-6 text-stone-600 group-hover:text-stone-100" />
                    <p className="text-stone-600 text-sm md:text-base lg:text-lg ms-1 font-semibold group-hover:text-stone-100">
                      {data.views} baca
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center gap-1.5 md:gap-2 lg:gap-2.5 mt-1 md:mt-2 lg:mt-4">
                  {data.content.map((item, index) => (
                    <p
                      key={index}
                      className="indent-6 md:indent-8 text-gray-900 text-sm md:text-base text-justify"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <OpiniRelated />
          </div>
        </div>
      </div>
    </>
  );
}
