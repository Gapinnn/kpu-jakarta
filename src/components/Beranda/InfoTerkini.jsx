import InfoSlider from "./InfoSlider";

export default function InfoTerkini() {
  return (
    <div className="w-full bg-stone-100 p-1 md:p-2 py-4">
      <h1 className="text-maroon-light text-center mx-auto font-extrabold text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-6 lg:mt-8">
        Info Terkini
      </h1>
      <InfoSlider />
    </div>
  );
}
