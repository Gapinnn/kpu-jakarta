import Book from "../components/Icon/Book";
import Unduh from "../components/Icon/Unduh";

export default function Sop() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="bg-maroon-light p-2 py-4 relative h-[233px]"></div>
        
        <div className="bg-stone-100 p-2 relative h-[697px]">
          <div className="container rounded-lg bg-stone-100 shadow-lg p-10 absolute -top-32 left-1/2 transform -translate-x-1/2">
          <h1 className="text-maroon-light font-bold text-[32px] mb-4">Standar Operasional Prosedur</h1>
            {/* grid sop */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* sop pertama */}
              <div class="flex bg-white rounded-lg shadow p-4">
                <img src="/images/contoh-buku.png" alt="SOP PDIP" className="rounded-lg max-w-56"/>                
                <span className="inline-block px-4">
                  <h1>2 Februari 2024</h1>
                  <h1 className="text-maroon text-[24px] font-semibold">Bahan Sosialisasi Pemilihan Serentak 2024</h1>
                  <div class="flex flex-col mt-14 space-y-2">
                    <button class="bg-maroon-light text-white px-4 py-2 rounded-lg flex flex-col items-center space-x-2"><Book/> Baca</button>
                    <button class="inline bg-gold text-maroon-light px-4 py-2 rounded-lg items-center space-x-2"><Unduh/>Unduh</button>
                  </div>
                </span>
              </div>

              {/* sop kedua  */}
              <div class="flex bg-white rounded-lg shadow p-4">
                <img src="/images/contoh-buku.png" alt="SOP PDIP" className="rounded-lg max-w-56"/>                
                <span className="inline-block px-4">
                  <h1>2 Februari 2024</h1>
                  <h1 className="text-maroon text-[24px] font-semibold">Bahan Sosialisasi Pemilihan Serentak 2024</h1>
                  <div class="flex flex-col mt-14 space-y-2">
                    <button class="bg-maroon-light text-white px-4 py-2 rounded-lg">Baca</button>
                    <button class="bg-gold text-maroon-light px-4 py-2 rounded-lg">Unduh</button>
                  </div>
                </span>
              </div>            
            </div> 
          </div>
        </div> 
      </div>
    </>
  );
}
