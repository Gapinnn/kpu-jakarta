import InfoSlider from "./InfoSlider";
import getLanguage from "../../hooks/getLanguage";

export default function InfoTerkini() {
  const lang = getLanguage();
  return (
    <div className="w-full bg-stone-100 p-1 md:p-2 py-4">
      <h1 className="text-maroon-light text-center mx-auto font-extrabold text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-6 lg:mt-8">
        {lang === "id" ? "Info Terkini" : "Latest Information"}
      </h1>
      <InfoSlider />
    </div>
  );
}
