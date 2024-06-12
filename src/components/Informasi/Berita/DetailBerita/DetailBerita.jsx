import { Link } from "react-router-dom";
import { dataBeritaTerkait } from "../../../../contents/informasi/berita";
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

const NewsRelated = () => {
  const lang = getLanguage();

  return (
    <div className="lg:w-1/4 shadow-md rounded-lg mt-8 h-fit lg:mt-0 bg-white">
      <h2 className="bg-maroon-light text-white text-xl font-bold p-4 px-6 rounded-lg rounded-b-none">
        Berita Terkait
      </h2>
      <div className="flex flex-col gap-0">
        {dataBeritaTerkait.map((item) => (
          <Link
            to={`/${lang}/informasi/berita/${item.id}`}
            key={item.id}
            className="flex items-start p-4 cursor-pointer"
          >
            <img
              className="w-1/3 object-cover rounded-lg"
              src={item.image}
              alt="Related Berita"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold leading-snug space-y-1">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function DetailBerita({ data }) {
  const lang = getLanguage();
  const [isCopied, setIsCopied] = useState(false);
  const [isShare, setIsShare] = useState(false);

  const copyToClipboard = () => {
    const inputValue = window.location.href;
    navigator.clipboard
      .writeText(inputValue)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
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
      <div
        className={`bg-black bg-opacity-65 z-50 fixed top-0 justify-center items-center w-full min-h-screen ${
          isShare ? "flex" : "hidden"
        }`}
      >
        <div className="bg-white p-4 flex flex-col gap-4 w-1/4 rounded-lg shadow-lg relative">
          <button
            onClick={() => setIsShare(false)}
            className="flex justify-center items-center absolute top-4 right-4"
          >
            <Cancel className="w-6 h-6 text-stone-600 hover:text-stone-900" />
          </button>
          <h2 className="text-xl text-stone-900 font-semibold">Bagikan</h2>
          <div className="relative flex border-2 border-stone-400 rounded-lg">
            <input
              type="search"
              id="default-search"
              className="w-full p-2 text-lg text-stone-600 rounded-lg focus:ring-4 focus:ring-gold focus:border-gold focus:outline-none overflow-hidden"
              placeholder="Cari Informasi ..."
              disabled
              value={window.location.href}
            />
            <button
              onClick={() => {
                copyToClipboard;
                setIsCopied(true);
              }}
              type="button"
              className="text-white z-20 text-lg absolute end-1 bottom-1 bg-maroon-light hover:bg-maroon focus:outline-none font-medium rounded-lg px-2 py-1"
            >
              Salin
            </button>
          </div>
          <div
            className={`flex justify-start -mt-3 items-center rounded-xl transition-transform duration-500 ${
              isCopied
                ? "translate-y-0 opacity-100"
                : "-translate-y-6 opacity-0"
            }`}
          >
            <Clipboard className="w-6 h-6 text-stone-400 " />
            <p className="text-stone-500 text-lg ms-1 font-semibold ">
              URL Berhasil Disalin!
            </p>
          </div>
          <h2 className="-mt-3 text-xl text-stone-900 font-semibold">
            Media Sosial
          </h2>
          <div className="flex w-full mx-auto gap-8 justify-center">
            <div
              onClick={shareWhatsApp}
              className="flex flex-col items-center gap-0.5"
            >
              <WhatsAppColor className="w-16 h-16" />
              <p className="text-sm text-stone-700">WhatsApp</p>
            </div>
            <div
              onClick={shareTwitter}
              className="flex flex-col items-center gap-0.5"
            >
              <TwitterColor className="w-16 h-16" />
              <p className="text-sm text-stone-700">Twitter</p>
            </div>
            <div
              onClick={shareFacebook}
              className="flex flex-col items-center gap-0.5"
            >
              <FacebookColor className="w-16 h-16" />
              <p className="text-sm text-stone-700">Facebook</p>
            </div>
            <div
              onClick={shareLinkedin}
              className="flex flex-col items-center gap-0.5"
            >
              <LinkedinColor className="w-16 h-16" />
              <p className="text-sm text-stone-700">Linkedin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container z-0 mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
        {/* Breadcumb */}
        <nav
          className="w-fit rounded-xl flex mb-4 text-stone-900"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse">
            <Link to={`/${lang}`} className="inline-flex items-center">
              <div className="inline-flex items-center text-lg font-medium text-maroon-light hover:text-maroon">
                <svg
                  className="w-5 h-5 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#660300"
                  stroke="#660300"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Beranda
              </div>
            </Link>
            <Link to={`/${lang}/informasi/berita`}>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 block w-3.5 h-3.5 mx-1.5 text-maroon-light "
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
                <p className="text-lg text-maroon-light font-medium">
                  Informasi
                </p>
              </div>
            </Link>
            <Link to={`/${lang}/informasi/berita`}>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 block w-3.5 h-3.5 mx-1.5 text-maroon-light "
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
                <p className="text-lg text-maroon-light font-medium">Berita</p>
              </div>
            </Link>
            {/* Current Page */}
            <Link>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 block w-3.5 h-3.5 mx-1.5 text-gray-900"
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
                <p className="text-lg text-gray-900 font-medium">
                  {data.title}
                </p>
              </div>
            </Link>
          </ol>
        </nav>
        <div className="mt-6">
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <div className="flex-1">
              <div className="flex-1 bg-white p-8 shadow rounded-xl">
                <h2 className="text-3xl flex gap-2 font-bold text-gray-900 mb-4">
                  <div className="border-r-2 pr-2 border-stone-600">
                    {data.title}
                  </div>
                  <div className="text-stone-700 font-semibold">
                    {data.tags[0]}
                  </div>
                </h2>
                <div
                  onClick={() => setIsShare(true)}
                  className="bg-stone-200 py-3 px-4 w-fit flex justify-center items-center rounded-xl hover:bg-stone-500 group mb-4"
                >
                  <Share className="w-8 h-8 text-stone-600 group-hover:text-stone-100" />
                  <p className="text-stone-600 text-lg ms-1 font-semibold group-hover:text-stone-100">
                    Bagikan
                  </p>
                </div>
                <img
                  className="w-full object-cover rounded-lg"
                  src="/images/info-dua.png"
                  alt="News"
                />
                <div className="text-gray-500 text-sm my-2 flex gap-1 items-center">
                  <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
                    <Calendar className="w-6 h-6 text-stone-600 group-hover:text-stone-100" />
                    <p className="text-stone-600 text-lg ms-1 font-semibold group-hover:text-stone-100">
                      {data.date}
                    </p>
                  </div>
                  <div className="bg-stone-200 py-1 px-2 flex justify-center items-center rounded-xl hover:bg-stone-500 group">
                    <EyeView className="w-6 h-6 text-stone-600 group-hover:text-stone-100" />
                    <p className="text-stone-600 text-lg ms-1 font-semibold group-hover:text-stone-100">
                      {data.views} baca
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center gap-2.5 mt-4">
                  {data.content.map((item, index) => (
                    <p
                      key={index}
                      className="text-gray-900 text-base text-justify"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <NewsRelated />
          </div>
        </div>
      </div>
    </>
  );
}
