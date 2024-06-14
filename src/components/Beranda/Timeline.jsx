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
    <div className="bg-maroon-light relative p-2 py-2 md:py-3 lg:py-4 lg:h-auto pb-6">
      <h1 className="text-stone-100 text-center mx-auto font-extrabold text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-6 lg:mt-8">
        Timeline Pilkada DKI Jakarta 2024
      </h1>
      {/* Timeline Hp */}
      <div className="block md:hidden p-2">
        {/* Timeline PERTAMA */}
        <div className="flex w-full justify-start gap-0 py-0">
          <div className="w-full block">
            <div className="flex w-full gap-2 items-center">
              <div className="flex w-full flex-col gap-1">
                <div className="flex flex-row gap-3">
                  <div className="rounded-full w-7 h-7 z-10 bg-gold">
                    <One className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col items-center gap-0">
                    <p className="text-gold text-base font-semibold">
                      S.D. 18 NOVEMBER 2024
                    </p>
                    <p className="text-center text-stone-100 text-sm font-semibold">
                      Penetapan Tata Cara dan Jadwal <br />
                      Tahapan Pelaksanaan Pemilihan
                    </p>
                  </div>
                </div>
                <div className="w-1 h-11 translate-x-3 -translate-y-8 bg-gold bg-opacity-65"></div>
                <div className="w-[94.5%] self-center h-1 -translate-y-9 bg-gold bg-opacity-65"></div>
                <div className="self-end w-1 h-6 -translate-x-3 -translate-y-10 bg-gold bg-opacity-65"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline KEDUA */}
        <div className="-mt-8 flex w-full justify-start gap-0 py-0">
          <div className="block w-full">
            <div className="flex w-full gap-2 items-center">
              <div className="flex w-full items-end flex-col gap-1">
                <div className="flex flex-row w-full justify-end gap-3">
                  <div className="flex flex-col items-center gap-0">
                    <p className="text-gold text-base font-semibold">
                      17 APRIL - 18 NOVEMBER 2024
                    </p>
                    <p className="text-center text-stone-100 text-sm font-semibold">
                      Pembentukan PPS, PPK, dan KPPS
                    </p>
                  </div>
                  <div className="rounded-full w-7 h-7 z-10 bg-gold">
                    <Two className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="w-1 h-6 -translate-x-3 -translate-y-3 bg-gold bg-opacity-65"></div>
                <div className="w-[94.5%] self-center h-1 -translate-y-4 bg-gold bg-opacity-65"></div>
                <div className="self-start w-1 h-6 translate-x-3 -translate-y-5 bg-gold bg-opacity-65"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline KETIGA */}
        <div className="-mt-3 flex w-full justify-start gap-0 py-0">
          <div className="w-full block">
            <div className="flex w-full gap-2 items-center">
              <div className="flex w-full flex-col gap-1">
                <div className="flex flex-row gap-3">
                  <div className="rounded-full w-7 h-7 z-10 bg-gold">
                    <Three className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col items-center gap-0">
                    <p className="text-gold text-base font-semibold">
                      31 MEI - 23 SEPTEMBER 2024
                    </p>
                    <p className="text-center text-stone-100 text-sm font-semibold">
                      Pemutakhiran dan Penyusunan <br />
                      Daftar Pemilih
                    </p>
                  </div>
                </div>
                <div className="w-1 h-11 translate-x-3 -translate-y-8 bg-gold bg-opacity-65"></div>
                <div className="w-[94.5%] self-center h-1 -translate-y-9 bg-gold bg-opacity-65"></div>
                <div className="self-end w-1 h-6 -translate-x-3 -translate-y-10 bg-gold bg-opacity-65"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline KEEMPAT */}
        <div className="-mt-8 flex w-full justify-start gap-0 py-0">
          <div className="block w-full">
            <div className="flex w-full gap-2 items-center">
              <div className="flex w-full items-end flex-col gap-1">
                <div className="flex flex-row w-full justify-end gap-3">
                  <div className="flex flex-col items-center gap-0">
                    <p className="text-gold text-base font-semibold">
                      27 MEI - 16 NOVEMBER 2024
                    </p>
                    <p className="text-center text-stone-100 text-sm font-semibold">
                      Pemberitahuan dan Pendaftaran <br />
                      Pemantau Pemilihan
                    </p>
                  </div>
                  <div className="rounded-full w-7 h-7 z-10 bg-gold">
                    <Four className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="w-1 h-11 -translate-x-3 -translate-y-8 bg-gold bg-opacity-65"></div>
                <div className="w-[94.5%] self-center h-1 -translate-y-9 bg-gold bg-opacity-65"></div>
                <div className="self-start w-1 h-6 translate-x-3 -translate-y-10 bg-gold bg-opacity-65"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline KELIMA */}
        <div className="-mt-8 flex w-full justify-start gap-0 py-0">
          <div className="w-full block">
            <div className="flex w-full gap-2 items-center">
              <div className="flex w-full flex-col gap-1">
                <div className="flex flex-row gap-3">
                  <div className="rounded-full w-7 h-7 z-10 bg-gold">
                    <Five className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col items-center gap-0">
                    <p className="text-gold text-base font-semibold">
                      27 - 29 AGUSTUS 2024
                    </p>
                    <p className="text-center text-stone-100 text-sm font-semibold">
                      Pendaftaran Pasangan Calon
                    </p>
                  </div>
                </div>
                <div className="w-1 h-6 translate-x-3 -translate-y-3 bg-gold bg-opacity-65"></div>
                <div className="w-[94.5%] self-center h-1 -translate-y-4 bg-gold bg-opacity-65"></div>
                <div className="self-end w-1 h-6 -translate-x-3 -translate-y-5 bg-gold bg-opacity-65"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline KEENAM */}
        <div className="-mt-3 flex w-full justify-start gap-0 py-0">
          <div className="block w-full">
            <div className="flex w-full gap-2 items-center">
              <div className="flex w-full items-end flex-col gap-1">
                <div className="flex flex-row w-full justify-end gap-3">
                  <div className="flex flex-col items-center gap-0">
                    <p className="text-gold text-base font-semibold">
                      22 SEPTEMBER 2024
                    </p>
                    <p className="text-center text-stone-100 text-sm font-semibold">
                      Penetapan Pasangan Calon
                    </p>
                  </div>
                  <div className="rounded-full w-7 h-7 z-10 bg-gold">
                    <Six className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="w-1 h-6 -translate-x-3 -translate-y-3 bg-gold bg-opacity-65"></div>
                <div className="w-[94.5%] self-center h-1 -translate-y-4 bg-gold bg-opacity-65"></div>
                <div className="self-start w-1 h-6 translate-x-3 -translate-y-5 bg-gold bg-opacity-65"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline KETUJUH */}
        <div className="-mt-3 flex w-full justify-start gap-0 py-0">
          <div className="w-full block">
            <div className="flex w-full gap-2 items-center">
              <div className="flex w-full flex-col gap-1">
                <div className="flex flex-row gap-3">
                  <div className="rounded-full w-7 h-7 z-10 bg-gold">
                    <Seven className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col items-center gap-0">
                    <p className="text-gold text-base font-semibold">
                      25 SEPTEMBER - 23 NOVEMBER 2024
                    </p>
                    <p className="text-center text-stone-100 text-sm font-semibold">
                      Pelaksanaan Kampanye
                    </p>
                  </div>
                </div>
                <div className="w-1 h-6 translate-x-3 -translate-y-3 bg-gold bg-opacity-65"></div>
                <div className="w-[94.5%] self-center h-1 -translate-y-4 bg-gold bg-opacity-65"></div>
                <div className="self-end w-1 h-6 -translate-x-3 -translate-y-5 bg-gold bg-opacity-65"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline KEDELAPAN */}
        <div className="-mt-3 flex w-full justify-start gap-0 py-0">
          <div className="block w-full">
            <div className="flex w-full gap-2 items-center">
              <div className="flex w-full items-end flex-col gap-1">
                <div className="flex flex-row w-full justify-end gap-3">
                  <div className="flex flex-col items-center gap-0">
                    <p className="text-gold text-base font-semibold">
                      27 NOVEMBER 2024
                    </p>
                    <p className="text-center text-stone-100 text-sm font-semibold">
                      Pemungutan Suara
                    </p>
                  </div>
                  <div className="rounded-full w-7 h-7 z-10 bg-gold">
                    <Eight className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="w-1 h-6 -translate-x-3 -translate-y-3 bg-gold bg-opacity-65"></div>
                <div className="w-[94.5%] self-center h-1 -translate-y-4 bg-gold bg-opacity-65"></div>
                <div className="self-start w-1 h-6 translate-x-3 -translate-y-5 bg-gold bg-opacity-65"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline KESEMBILAN */}
        <div className="-mt-3 flex w-full justify-start gap-0 py-0">
          <div className="w-full block">
            <div className="flex w-full gap-2 items-center">
              <div className="flex w-full flex-col gap-1">
                <div className="flex flex-row gap-3">
                  <div className="rounded-full w-7 h-7 z-10 bg-gold">
                    <Nine className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex flex-col items-center gap-0">
                    <p className="text-gold text-base font-semibold">
                      DESEMBER 2024
                    </p>
                    <p className="text-center text-stone-100 text-sm font-semibold">
                      Penetapan Calon Terpilih
                    </p>
                  </div>
                </div>
                <div className="w-1 h-6 translate-x-3 -translate-y-3 bg-gold bg-opacity-65"></div>
                <div className="w-[94.5%] self-center h-1 -translate-y-4 bg-gold bg-opacity-65"></div>
                <div className="self-end w-1 h-6 -translate-x-3 -translate-y-5 bg-gold bg-opacity-65"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline KESEPULUH */}
        <div className="-mt-3 flex w-full justify-start gap-0 py-0">
          <div className="block w-full">
            <div className="flex w-full gap-2 items-center">
              <div className="flex w-full items-end flex-col gap-1">
                <div className="flex flex-row w-full justify-end gap-3">
                  <div className="flex flex-col items-center gap-0">
                    <p className="text-gold text-base font-semibold">
                      2025 - 2030
                    </p>
                    <p className="text-center text-stone-100 text-sm font-semibold">
                      Masa Kerja Calon Terpilih
                    </p>
                  </div>
                  <div className="rounded-full w-7 h-7 z-10 bg-gold">
                    <Ten className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Laptop dan Tablet */}
      <div className="hidden md:block p-4 md:py-8 md:pb-12 lg:pb-0 md:px-4 lg:px-[10%]">
        {/* Timeline PERTAMA */}
        <div className="flex w-full justify-start gap-0 py-3">
          <div className="block">
            <div className="absolute right-1/2 flex gap-6 items-center translate-x-2.5">
              <div className="flex justify-start flex-col md:flex-row gap-2">
                <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                  <One />
                </div>
              </div>
              <div className="w-36 lg:w-72 h-1 bg-gold"></div>
              <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            </div>
          </div>

          <div className="flex flex-col items-center md:translate-y-12 md:mt-2 lg:translate-y-0 lg:mt-0">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              S.D. 18 NOVEMBER 2024
            </div>
            <div className="text-center lg:text-left text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
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
            <div className="w-36 lg:w-72 h-1 bg-gold"></div>
            <div className="flex justify-start flex-col md:flex-row gap-2">
              <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                <Two />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:translate-y-12 md:mt-2 lg:translate-y-0 lg:mt-0">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              17 APRIL - 18 NOVEMBER 2024
            </div>
            <div className="text-center lg:text-left text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
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
              <div className="w-36 lg:w-72 h-1 bg-gold"></div>
              <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            </div>
          </div>

          <div className="bg-white absolute left-1/2 w-1 h-[2.8rem] -translate-x-0.5 -translate-y-10"></div>

          <div className="flex flex-col items-center md:translate-y-12 md:mt-2 lg:translate-y-0 lg:mt-0">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              31 MEI - 23 SEPTEMBER 2024
            </div>
            <div className="text-center lg:text-left text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
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
            <div className="w-36 lg:w-72 h-1 bg-gold"></div>
            <div className="flex justify-start flex-col md:flex-row gap-2">
              <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                <Four />
              </div>
            </div>
          </div>

          <div className="lg:translate-x-12 flex flex-col items-center md:translate-y-12 md:mt-2 lg:translate-y-0 lg:mt-0">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              27 MEI - 16 NOVEMBER 2024
            </div>
            <div className="text-center lg:text-left text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
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
              <div className="w-44 lg:w-72 h-1 bg-gold"></div>
              <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            </div>
          </div>

          <div className="flex flex-col items-center md:translate-y-12 md:mt-2 lg:translate-y-0 lg:mt-0">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              27 - 29 AGUSTUS 2024
            </div>
            <div className="text-center lg:text-left text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Pendaftaran Pasangan <br /> Calon
            </div>
          </div>
        </div>

        <div className="bg-white absolute left-1/2 w-1 h-[4.5rem] -translate-x-0.5 -translate-y-14"></div>

        {/* Timeline KEENAM */}
        <div className="flex w-full justify-end gap-0 py-3">
          <div className="absolute left-1/2 flex gap-6 items-center -translate-x-2.5">
            <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            <div className="w-40 lg:w-72 h-1 bg-gold"></div>
            <div className="flex justify-start flex-col md:flex-row gap-2">
              <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                <Six />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:translate-y-12 md:mt-2 lg:translate-y-0 lg:mt-0">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              22 SEPTEMBER 2024
            </div>
            <div className="text-center lg:text-left text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Penetapan Pasangan Calon
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
              <div className="w-32 lg:w-72 h-1 bg-gold"></div>
              <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            </div>
          </div>

          <div className="bg-white absolute left-1/2 w-1 h-[2.8rem] -translate-x-0.5 -translate-y-10"></div>

          <div className="lg:-translate-x-[4.5rem] flex flex-col items-center md:translate-y-12 md:mt-2 lg:translate-y-0 lg:mt-0">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              25 SEPTEMBER - 23 NOVEMBER 2024
            </div>
            <div className="text-center lg:text-left text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Pelaksanaan Kampanye
              <br /> Partai Politik
            </div>
          </div>
        </div>

        <div className="bg-white absolute left-1/2 w-1 h-[4.5rem] -translate-x-0.5 -translate-y-14"></div>

        {/* Timeline KEDELAPAN */}
        <div className="flex w-full justify-end gap-0 py-3">
          <div className="absolute left-1/2 flex gap-6 items-center -translate-x-2.5">
            <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            <div className="w-40 lg:w-72 h-1 bg-gold"></div>
            <div className="flex justify-start flex-col md:flex-row gap-2">
              <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                <Eight />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:translate-y-12 md:mt-2 lg:translate-y-0 lg:mt-0">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              27 NOVEMBER 2024
            </div>
            <div className="text-center lg:text-left text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Pemungutan Suara <br />
              Hari-H Pemilu
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
              <div className="w-44 lg:w-72 h-1 bg-gold"></div>
              <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            </div>
          </div>

          <div className="bg-white absolute left-1/2 w-1 h-[2.8rem] -translate-x-0.5 -translate-y-10"></div>

          <div className="flex flex-col items-center md:translate-y-12 md:mt-2 lg:translate-y-0 lg:mt-0">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              DESEMBER 2024
            </div>
            <div className="text-center lg:text-left text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Penetapan Calon Terpilih
            </div>
          </div>
        </div>

        <div className="bg-white absolute left-1/2 w-1 h-[2.8rem] -translate-x-0.5 -translate-y-7"></div>

        {/* Timeline KESEPULUH */}
        <div className="flex w-full justify-end gap-0 py-3">
          <div className="absolute left-1/2 flex gap-6 items-center -translate-x-2.5">
            <div className="rounded-full w-5 h-5 z-10 bg-gold"></div>
            <div className="w-44 lg:w-72 h-1 bg-gold"></div>
            <div className="flex justify-start flex-col md:flex-row gap-2">
              <div className="rounded-full bg-gold h-12 w-12 flex items-center justify-center">
                <Ten />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:translate-y-12 md:mt-2 lg:translate-y-0 lg:mt-0">
            <div className="text-gold text-base font-semibold md:text-xl lg:text-2xl">
              2025 - 2030
            </div>
            <div className="text-center lg:text-left text-stone-100 text-sm font-normal md:text-lg lg:text-xl">
              Masa Kerja Calon Terpilih
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
