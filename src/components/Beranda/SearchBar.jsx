import Search from "../Icon/Search";

export default function SearchBar() {
  return (
    <div>
      <form className="w-full mx-auto">
        <div className="relative flex">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-8 h-8 text-black" />
          </div>
          <input
            type="search"
            id="default-search"
            className="w-full p-4 pl-16 text-lg text-black rounded-lg bg-stone-100 focus:ring-4 focus:ring-gold focus:border-gold focus:outline-none font-medium"
            placeholder="Cari Informasi ..."
            required
          />
          <button
            type="submit"
            className="text-white text-lg absolute end-2.5 bottom-2.5 bg-maroon-light hover:bg-maroon focus:ring-4 focus:outline-none focus:ring-gold focus:border-gold font-medium rounded-lg px-4 py-2"
          >
            Cari
          </button>
        </div>
      </form>
    </div>
  );
}
