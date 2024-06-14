export default function LayoutVis({ title, children }) {
  return (
    <div>
      <div className="bg-maroon-light mt-2 md:mt-4 lg:mt-6 text-sm md:text-base lg:text-lg font-bold text-center text-stone-100 rounded-t-2xl p-2 px-4">
        {title.toUpperCase()}
      </div>
      <div
        className={`relative p-2 md:p-3 lg:p-4 flex flex-col w-full shadow-xl bg-stone-100 rounded-b-2xl border-1 mx-auto lg:px-8 transition-all duration-300 opacity-100`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
