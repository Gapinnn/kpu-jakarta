import Breadcumb from "./Breadcumb";

const TugasWewenangComponent = () => {
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
          Tugas dan Wewenang KPU Provinsi DKI Jakarta
        </h1>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-8 px-10 bg-white shadow-2xl rounded-2xl">
          {/* tugas */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-lg p-4 text-left font-bold">
            Tugas KPU
          </h1>

          <h1 className=" text-black text-lg p-2 ">
            Dalam Pasal 12 Undang Undang 7 Tahun 2017 Tentang Pemilihan Umum,
            KPU mempunyai tugas sebagai berikut:
          </h1>
          {/* list */}
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              1
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Merencanakan program dan anggaran serta menetapkan jadwal,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              2
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menyusun tata kerja KPU, KPU Provinsi, KPU Kabupaten/Kota, PPK,
              PPS, KPPS, PPLN, dan KPPSLN,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              3
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menyusun Peraturan KPU untuk setiap tahapan pemilu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              4
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Mengoordinasikan, menyelenggarakan, mengendalikan dan memantau
              semua tahapan pemilu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              5
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menerima daftar pemilih dari KPU Provinsi,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className=" bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              6
            </h1>
            <h1 className=" text-black text-lg p-2 ml-14">
              Memutakhirkan data pemilih berdasarkan data pemilu terakhir dengan
              memperhatikan data kependudukan yang disiapkan dan diserahkan oleh
              pemerintah dan menetapkannya sebagai daftar pemilih,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              7
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Membuat berita acara dan sertifikat rekapitulasi hasil
              penghitungan suara serta wajib menyerahkannya kepada saksi peserta
              pemilu dan Bawaslu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              8
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Mengumumkan calon anggota DPR, calon anggota DPD, dan Pasangan
              Calon terpilih serta membuat berita acaranya,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              9
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menindaklanjuti dengan segera putusan Bawaslu atas temuan dan
              laporan adanya dugaan pelanggaran atau sengketa Pemilu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              10
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menyosialisasikan penyelenggaraan pemilu dan/atau yang berkaitan
              dengan tugas dan wewenang KPU kepada masyarakat,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              11
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Melakukan evaluasi dan membuat laporan setiap tahapan
              penyelenggaraan pemilu, dan
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              12
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Melaksanakan tugas lain dalam penyelenggaraan pemilu sesuai dengan
              ketentuan peraturan perundang-undangan.
            </h1>
          </div>
          {/* akhir list */}

          {/* wewenang */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-[28] p-2 mt-12 text-center">
            Wewenang KPU
          </h1>

          <h1 className=" text-black text-lg p-2 ">
            Dalam Pasal 13 Undang Undang 7 Tahun 2017 Tentang Pemilihan Umum,
            KPU mempunyai kewenangan sebagai berikut:
          </h1>
          {/* list */}
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              1
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menetapkan tata kerja KPU, KPU Provinsi, KPU Kabupaten/Kota, PPK,
              PPS, KPPS, PPLN, dan KPPSLN,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              2
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menetapkan Peraturan KPU untuk setiap tahapan pemilu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              3
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menetapkan peserta pemilu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              4
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menetapkan dan mengumumkan hasil rekapitulasi penghitungan suara
              tingkat nasional berdasarkan hasil rekapitulasi penghitungan suara
              di KPU Provinsi untuk Pemilu Presiden dan Wakil presiden dan untuk
              pemilu anggota DPR serta hasil rekapitulasi penghitungan suara di
              setiap KPU provinsi untuk pemilu anggota DPD dengan membuat berita
              acara penghitungan suara dan sertifikat hasil penghitungan suara,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              5
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menerbitkan keputusan KPU untuk mengesahkan hasil Pemilu dan
              mengumumkannya,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              6
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menetapkan dan mengumumkan perolehan jumlah kursi anggota DPR,
              anggota DPRD provinsi, dan anggota DPRD kabupaten/kota untuk
              setiap partai politik peserta pemilu Anggota DPR, anggota DPRD
              provinsi, dan anggota DPRD kabupaten/kota,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              7
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menetapkan standar serta kebutuhan pengadaan dan pendistribusian
              perlengkapan,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              8
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Membentuk KPU Provinsi, KPU Kabupaten/Kota, dan PPLN,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              9
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Mengangkat, membina, dan memberhentikan anggota KPU Provinsi,
              anggota KPU Kabupaten/Kota, dan anggota PPLN,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              10
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menjatuhkan sanksi administratif dan/atau menonaktifkan sementara
              anggota KPU provinsi, anggota KPU Kabupaten/Kota, anggota PPLN,
              anggota KPPSLN, dan sekretaris Jenderal KPU yang terbukti
              melakukan tindakan yang mengakibatkan terganggunya tahapan
              penyelenggaraan pemilu yang sedang berlangsung berdasarkan putusan
              Bawaslu dan/atau ketentuan peraturan perundang-undangan,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              11
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menetapkan kantor akuntan publik untuk mengaudit dana kampanye
              Pemilu dan mengumumkan laporan sumbangan dana Kampanye Pemilu, dan
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-lg font-bold p-2 text-center absolute">
              12
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Melaksanakan wewenang lain dalam penyelenggaraan Pemilu sesuai
              dengan ketentuan peraturan perundang-undangan.
            </h1>
          </div>
          {/* akhir list */}
        </div>
      </div>
    </div>
  );
};

export default TugasWewenangComponent;
