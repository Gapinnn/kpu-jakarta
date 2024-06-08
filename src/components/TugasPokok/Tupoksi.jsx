import Breadcumb from "./Breadcumb";

const TupoksiComponent = () => {
  return (
    <div className="flex flex-col w-full bg-stone-100 relative">
      <div className="w-full flex flex-col gap-0 absolute bottom-0">
        <div className="bg-maroon-light bg-opacity-85 w-full h-52 rounded-t-full"></div>
        <div className="bg-maroon-light bg-opacity-85 w-full h-8"></div>
      </div>

      <div className="container mx-auto pt-8 pb-12 px-2 flex flex-col justify-center">
        {/* Breadcumb */}
        <Breadcumb />
        {/* Judul Halaman */}
        <h1 className="text-maroon-light font-bold text-3xl mb-6 mt-4">
          Tugas Pokok dan Fungsi KPU Provinsi DKI Jakarta
        </h1>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-8 px-10 bg-white shadow-2xl rounded-2xl">
          <h1 className=" text-black text-lg ">
            Pemilihan umum diselenggarakan oleh suatu komisi pemilihan umum yang
            bersifat nasional, tetap, dan mandiri. Dalam menyelenggarakan
            Pemilihan Umum, Komisi Pemilihan Umum terdiri atas KPU Provinsi yang
            menjadi Penyelenggara Pemilu di Provinsi. KPU Provinsi DKI Jakarta
            dipimpin oleh anggota KPU Provinsi yang terdiri atas 1 (satu) orang
            ketua merangkap anggota dan 6 (enam) orang anggota. Masa jabatan
            anggota KPU Provinsi adalah selama 5 (lima) tahun dan dapat dipilih
            kembali untuk 1 (satu) kali masa jabatan pada tingkatan yang sama.
            Anggota KPU Provinsi dalam melaksanakan tugas, wewenang, dan
            kewajibannya, melakukan pembagian tugas dalam bentuk Divisi dan
            Korwil. Pembagian Divisi di KPU Provinsi DKI Jakarta adalah sebagai
            berikut:
          </h1>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            1. Divisi Keuangan, Umum, dan Rumah Tangga
          </h1>
          {/* list */}
          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">1</h1> */}
            <div className="text-black text-lg mt-2">
              Divisi Keuangan, Umum, dan Rumah Tangga mempunyai tugas untuk
              mengoordinasikan, menyelenggarakan, mengendalikan, memantau,
              supervisi, dan evaluasi terkait dengan kebijakan:
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  a
                </h1>
                <h1 className="text-black text-lg">
                  Administrasi perkantoran, rumah tangga, dan kearsipan;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  b
                </h1>
                <h1 className="text-black text-lg">
                  Protokol dan persidangan;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  c
                </h1>
                <h1 className="text-black text-lg">
                  Pengelolaan dan pelaporan barang milik negara;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  d
                </h1>
                <h1 className="text-black text-lg">
                  Pelaporan dan pertanggungjawaban keuangan;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  e
                </h1>
                <h1 className="text-black text-lg">
                  Pengusulan peresmian keanggotaan dan pelaksanaan sumpah/janji
                  DPRD Provinsi;
                </h1>
              </div>
            </div>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            2. Divisi Sosialisasi, Pendidikan Pemilih, dan Partisipasi
            Masyarakat
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">2</h1> */}
            <h1 className="text-black text-lg mt-2">
              Divisi Sosialisasi, Pendidikan Pemilih, dan Partisipasi Masyarakat
              mempunyai tugas untuk mengoordinasikan, menyelenggarakan,
              mengendalikan, memantau, supervisi, dan evaluasi terkait dengan
              kebijakan:
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  a
                </h1>
                <h1 className="text-black text-lg">Sosialisasi kepemiluan;</h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  b
                </h1>
                <h1 className="text-black text-lg">
                  Partisipasi masyarakat dan pendidikan pemilih;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  c
                </h1>
                <h1 className="text-black text-lg">Publikasi dan kehumasan;</h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  d
                </h1>
                <h1 className="text-black text-lg">
                  Kampanye pemilu dan pemilihan;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  e
                </h1>
                <h1 className="text-black text-lg">
                  Kerja sama antar lembaga;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  f
                </h1>
                <h1 className="text-black text-lg">
                  Pengelolaan dan penyediaan informasi publik.
                </h1>
              </div>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            3. Divisi Data dan Informasi
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">3</h1> */}
            <h1 className="text-black text-lg mt-2">
              Divisi Data dan Informasi mempunyai tugas untuk mengoordinasikan,
              menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi
              terkait dengan kebijakan:
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  a
                </h1>
                <h1 className="text-black text-lg">
                  Pemutakhiran dan pemeliharaan data pemilih;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  b
                </h1>
                <h1 className="text-black text-lg">
                  Sistem informasi yang berkaitan dengan tahapan pemilu;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  c
                </h1>
                <h1 className="text-black text-lg">
                  Pengelolaan sarana dan prasarana teknologi informasi;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  d
                </h1>
                <h1 className="text-black text-lg">
                  Pengelolaan dan penyajian data hasil pemilu nasional;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  e
                </h1>
                <h1 className="text-black text-lg">Pengendalian informasi;</h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  f
                </h1>
                <h1 className="text-black text-lg">
                  Pengelolaan dan pengolahan data hasil pemilu dan pemilihan.
                </h1>
              </div>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            4. Divisi Perencanaan dan Logistik
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">4</h1> */}
            <h1 className="text-black text-lg mt-2">
              Divisi Perencanaan dan Logistik mempunyai tugas untuk
              mengoordinasikan, menyelenggarakan, mengendalikan, memantau,
              supervisi, dan evaluasi terkait dengan kebijakan:
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  a
                </h1>
                <h1 className="text-black text-lg">
                  Penyusunan program dan anggaran;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  b
                </h1>
                <h1 className="text-black text-lg">
                  Perencanaan, pengadaan barang dan jasa, serta distribusi
                  logistik;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  c
                </h1>
                <h1 className="text-black text-lg">
                  Monitoring, evaluasi, dan pengendalian program dan anggaran;
                </h1>
              </div>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            5. Divisi Teknis Penyelenggaraan
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">5</h1> */}
            <h1 className="text-black text-lg mt-2">
              Divisi Teknis Penyelenggaraan mempunyai tugas untuk
              mengoordinasikan, menyelenggarakan, mengendalikan, memantau,
              supervisi, dan evaluasi terkait dengan kebijakan:
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  a
                </h1>
                <h1 className="text-black text-lg">
                  Pengusulan daerah pemilihan dan alokasi kursi;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  b
                </h1>
                <h1 className="text-black text-lg">
                  Verifikasi partai politik dan anggota DPD;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  c
                </h1>
                <h1 className="text-black text-lg">
                  Pencalonan peserta pemilu dan pemilihan;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  d
                </h1>
                <h1 className="text-black text-lg">
                  Pemungutan, penghitungan suara, dan rekapitulasi penghitungan
                  suara;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  e
                </h1>
                <h1 className="text-black text-lg">
                  Penetapan hasil dan pendokumentasian hasil pemilu dan
                  pemilihan;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  f
                </h1>
                <h1 className="text-black text-lg">Pelaporan dana kampanye;</h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  g
                </h1>
                <h1 className="text-black text-lg">
                  Penggantian antar waktu anggota DPRD Provinsi.
                </h1>
              </div>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            6. Divisi Hukum dan Pengawasan
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">6</h1> */}
            <h1 className="text-black text-lg mt-2">
              Divisi Hukum dan Pengawasan mempunyai tugas untuk
              mengoordinasikan, menyelenggarakan, mengendalikan, memantau,
              supervisi, dan evaluasi terkait dengan kebijakan:
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  a
                </h1>
                <h1 className="text-black text-lg">
                  Penyusunan rancangan keputusan KPU Provinsi;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  b
                </h1>
                <h1 className="text-black text-lg">
                  Telaah hukum dan advokasi hukum;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  c
                </h1>
                <h1 className="text-black text-lg">
                  Penyelesaian sengketa proses, tahapan, hasil pemilu dan
                  pemilihan, serta non tahapan pemilu dan pemilihan;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  d
                </h1>
                <h1 className="text-black text-lg">
                  Dokumentasi dan publikasi hukum;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  e
                </h1>
                <h1 className="text-black text-lg">
                  Pengawasan dan pengendalian internal;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  f
                </h1>
                <h1 className="text-black text-lg">
                  Penanganan pelanggaran administrasi, kode etik, dan kode
                  perilaku.
                </h1>
              </div>
            </h1>
          </div>

          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            7. Divisi Sumber Daya Manusia, Penelitian, dan Pengembangan
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">6</h1> */}
            <h1 className="text-black text-lg mt-2">
              Divisi Sumber Daya Manusia dan Litbang mempunyai tugas untuk
              mengoordinasikan, menyelenggarakan, mengendalikan, memantau,
              supervisi, dan evaluasi terkait dengan kebijakan:
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  a
                </h1>
                <h1 className="text-black text-lg">
                  Pengusulan penggantian antar waktu anggota KPU Kabupaten/Kota;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  b
                </h1>
                <h1 className="text-black text-lg">
                  Pengawasan proses rekrutmen anggota PPK, PPS, dan KPPS;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  c
                </h1>
                <h1 className="text-black text-lg">
                  Pembinaan etika dan evaluasi kinerja sumber daya manusia;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  d
                </h1>
                <h1 className="text-black text-lg">
                  Pengembangan budaya kerja, tata laksana dan organisasi;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  e
                </h1>
                <h1 className="text-black text-lg">
                  Pendidikan dan pelatihan, serta pengembangan sumber daya
                  manusia;
                </h1>
              </div>
              <div className="flex gap-2 mt-1">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md w-[1.6rem] h-[1.6rem] p-0 font-semibold flex justify-center items-center">
                  f
                </h1>
                <h1 className="text-black text-lg">
                  Penelitian dan pengembangan kepemiluan.
                </h1>
              </div>
            </h1>
          </div>
          {/* akhir list */}
        </div>
      </div>
    </div>
  );
};

export default TupoksiComponent;
