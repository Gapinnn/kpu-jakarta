import One from "../Icon/Number/One";
import Two from "../Icon/Number/Two";
import Three from "../Icon/Number/Three";
import Four from "../Icon/Number/Four";
import Five from "../Icon/Number/Five";
import Six from "../Icon/Number/Six";
import Seven from "../Icon/Number/Seven";
import Eight from "../Icon/Number/Eight";
import Nine from "../Icon/Number/Nine";
import Ten from "../Icon/Number/Ten";

export default function Timeline() {
  return (
    <div className="bg-maroon-light relative p-2 py-4">
      <h1 className="text-stone-100 text-center mx-auto font-extrabold text-4xl mt-8">
        Timeline Pilkada DKI Jakarta 2024
      </h1>
      <div className="w-max-w p-4 md:py-12 md:px-16 lg:px-[10%]">
        {/* Timeline PERTAMA */}
        <div className="flex w-full justify-start gap-0 py-3">
          <div className="block">
            <div className="absolute right-1/2 flex gap-6 items-center translate-x-2.5">
              <div className="flex justify-start flex-col md:flex-row gap-2">
                <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                  <One />
                </div>
              </div>
              <div className="w-72 h-1 bg-gold"></div>
              <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              S.D. 18 NOVEMBER 2024
            </div>
            <div className="text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Penetapan Tata Cara dan Jadwal <br />
              Tahapan Pelaksanaan Pemilihan
            </div>
          </div>
        </div>

        <div className="bg-white absolute left-1/2 w-1 h-[4.5rem] -translate-x-0.5 -translate-y-14"></div>

        {/* Timeline KEDUA*/}
        <div className="flex w-full justify-end gap-0 py-3">
          <div className="absolute left-1/2 flex gap-6 items-center -translate-x-2.5">
            <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            <div className="w-72 h-1 bg-gold"></div>
            <div className="flex justify-start flex-col md:flex-row gap-2">
              <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                <Two />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              17 APRIL - 18 NOVEMBER 2024
            </div>
            <div className="text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Pembentukan PPS, PPK, dan KPPS
            </div>
          </div>
        </div>

        {/* Timeline KETIGA */}
        <div className="flex w-full justify-start gap-0 py-3">
          <div className="block">
            <div className="absolute right-1/2 flex gap-6 items-center translate-x-2.5">
              <div className="flex justify-start flex-col md:flex-row gap-2">
                <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                  <Three />
                </div>
              </div>
              <div className="w-72 h-1 bg-gold"></div>
              <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            </div>
          </div>

          <div className="bg-white absolute left-1/2 w-1 h-[2.8rem] -translate-x-0.5 -translate-y-10"></div>

          <div className="flex flex-col items-center">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              31 MEI - 23 SEPTEMBER 2024
            </div>
            <div className="text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Pemutakhiran dan Penyusunan Daftar
              <br /> Pemilih
            </div>
          </div>
        </div>

        <div className="bg-white absolute left-1/2 w-1 h-[4.5rem] -translate-x-0.5 -translate-y-14"></div>

        {/* Timeline KEEMPAT */}
        <div className="flex w-full justify-end gap-0 py-3">
          <div className="absolute left-1/2 flex gap-6 items-center -translate-x-2.5">
            <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            <div className="w-72 h-1 bg-gold"></div>
            <div className="flex justify-start flex-col md:flex-row gap-2">
              <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                <Four />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              10 - 16 NOVEMBER 2024
            </div>
            <div className="text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Pemberitahuan dan Pendaftaran <br />
              Pemantau Pemilihan
            </div>
          </div>
        </div>

        <div className="bg-white absolute left-1/2 w-1 h-[4.5rem] -translate-x-0.5 -translate-y-14"></div>

        {/* Timeline KELIMA */}
        <div className="flex w-full justify-start gap-0 py-3">
          <div className="block">
            <div className="absolute right-1/2 flex gap-6 items-center translate-x-2.5">
              <div className="flex justify-start flex-col md:flex-row gap-2">
                <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                  <Five />
                </div>
              </div>
              <div className="w-72 h-1 bg-gold"></div>
              <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              S.D. 18 NOVEMBER 2024
            </div>
            <div className="text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Penetapan Tata Cara dan Jadwal <br />
              Tahapan Pelaksanaan Pemilihan
            </div>
          </div>
        </div>

        <div className="bg-white absolute left-1/2 w-1 h-[4.5rem] -translate-x-0.5 -translate-y-14"></div>

        {/* Timeline KEENAM */}
        <div className="flex w-full justify-end gap-0 py-3">
          <div className="absolute left-1/2 flex gap-6 items-center -translate-x-2.5">
            <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            <div className="w-72 h-1 bg-gold"></div>
            <div className="flex justify-start flex-col md:flex-row gap-2">
              <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                <Six />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              17 APRIL - 18 NOVEMBER 2024
            </div>
            <div className="text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Pembentukan PPS, PPK, dan KPPS
            </div>
          </div>
        </div>

        {/* Timeline KETUJUH */}
        <div className="flex w-full justify-start gap-0 py-3">
          <div className="block">
            <div className="absolute right-1/2 flex gap-6 items-center translate-x-2.5">
              <div className="flex justify-start flex-col md:flex-row gap-2">
                <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                  <Seven />
                </div>
              </div>
              <div className="w-72 h-1 bg-gold"></div>
              <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            </div>
          </div>

          <div className="bg-white absolute left-1/2 w-1 h-[2.8rem] -translate-x-0.5 -translate-y-10"></div>

          <div className="flex flex-col items-center">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              31 MEI - 23 SEPTEMBER 2024
            </div>
            <div className="text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Pemutakhiran dan Penyusunan Daftar
              <br /> Pemilih
            </div>
          </div>
        </div>

        <div className="bg-white absolute left-1/2 w-1 h-[4.5rem] -translate-x-0.5 -translate-y-14"></div>

        {/* Timeline KEDELAPAN */}
        <div className="flex w-full justify-end gap-0 py-3">
          <div className="absolute left-1/2 flex gap-6 items-center -translate-x-2.5">
            <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            <div className="w-72 h-1 bg-gold"></div>
            <div className="flex justify-start flex-col md:flex-row gap-2">
              <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                <Eight />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              10 - 16 NOVEMBER 2024
            </div>
            <div className="text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Pemberitahuan dan Pendaftaran <br />
              Pemantau Pemilihan
            </div>
          </div>
        </div>

        <div className="bg-white absolute left-1/2 w-1 h-[4.5rem] -translate-x-0.5 -translate-y-14"></div>

        {/* Timeline KESEMBILAN */}
        <div className="flex w-full justify-start gap-0 py-3">
          <div className="block">
            <div className="absolute right-1/2 flex gap-6 items-center translate-x-2.5">
              <div className="flex justify-start flex-col md:flex-row gap-2">
                <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                  <Nine />
                </div>
              </div>
              <div className="w-72 h-1 bg-gold"></div>
              <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            </div>
          </div>

          <div className="bg-white absolute left-1/2 w-1 h-[2.8rem] -translate-x-0.5 -translate-y-10"></div>

          <div className="flex flex-col items-center">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              31 MEI - 23 SEPTEMBER 2024
            </div>
            <div className="text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Pemutakhiran dan Penyusunan Daftar
              <br /> Pemilih
            </div>
          </div>
        </div>

        <div className="bg-white absolute left-1/2 w-1 h-[4.5rem] -translate-x-0.5 -translate-y-14"></div>

        {/* Timeline KESEPULUH */}
        <div className="flex w-full justify-end gap-0 py-3">
          <div className="absolute left-1/2 flex gap-6 items-center -translate-x-2.5">
            <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            <div className="w-72 h-1 bg-gold"></div>
            <div className="flex justify-start flex-col md:flex-row gap-2">
              <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                <Ten />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              17 APRIL - 18 NOVEMBER 2024
            </div>
            <div className="text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Pembentukan PPS, PPK, dan KPPS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
