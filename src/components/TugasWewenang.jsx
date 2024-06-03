import { Link } from "react-router-dom";
const TugasWewenangComponent = () => {
  return (
    <div className="flex flex-col w-full bg-stone-200 relative">
      <div className="w-full flex flex-col gap-0 absolute bottom-0">
        <div className="bg-maroon-light bg-opacity-85 w-full h-52 rounded-t-full"></div>
        <div className="bg-maroon-light bg-opacity-85 w-full h-8"></div>
      </div>

      <div className="container mx-auto py-10 px-2 flex flex-col justify-center">
        {/* Breadcumb */}
        <nav
          className="w-fit flex px-5 py-3 mb-2 text-stone-900 border border-gray-200 bg-gray-50 shadow-xl rounded-xl"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse">
            <Link to={"/id"} className="inline-flex items-center">
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
            <Link to={"/id/profil/visi-misi"}>
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
                <p className="text-lg text-maroon-light font-medium">Profil</p>
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
                  Tugas dan Wewenang
                </p>
              </div>
            </Link>
          </ol>
        </nav>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-8 px-10 bg-stone-100 shadow-xl rounded-2xl">
          <h1 className="text-maroon-light font-bold text-3xl mb-4">
            Tugas dan Wewenang KPU
          </h1>
          {/* tugas */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-[28] p-4  text-left font-bold">
            Tugas KPU
          </h1>

          <h1 className=" text-black text-lg p-2 ">
            Dalam Pasal 12 Undang Undang 7 Tahun 2017 Tentang Pemilihan Umum,
            KPU mempunyai tugas sebagai berikut:
          </h1>
          {/* list */}
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              1
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Merencanakan program dan anggaran serta menetapkan jadwal,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              2
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menyusun tata kerja KPU, KPU Provinsi, KPU Kabupaten/Kota, PPK,
              PPS, KPPS, PPLN, dan KPPSLN,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              3
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menyusun Peraturan KPU untuk setiap tahapan pemilu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              4
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Mengoordinasikan, menyelenggarakan, mengendalikan dan memantau
              semua tahapan pemilu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              5
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menerima daftar pemilih dari KPU Provinsi,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className=" bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              6
            </h1>
            <h1 className=" text-black text-lg p-2 ml-14">
              Memutakhirkan data pemilih berdasarkan data pemilu terakhir dengan
              memperhatikan data kependudukan yang disiapkan dan diserahkan oleh
              pemerintah dan menetapkannya sebagai daftar pemilih,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              7
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Membuat berita acara dan sertifikat rekapitulasi hasil
              penghitungan suara serta wajib menyerahkannya kepada saksi peserta
              pemilu dan Bawaslu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              8
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Mengumumkan calon anggota DPR, calon anggota DPD, dan Pasangan
              Calon terpilih serta membuat berita acaranya,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              9
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menindaklanjuti dengan segera putusan Bawaslu atas temuan dan
              laporan adanya dugaan pelanggaran atau sengketa Pemilu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              10
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menyosialisasikan penyelenggaraan pemilu dan/atau yang berkaitan
              dengan tugas dan wewenang KPU kepada masyarakat,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              11
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Melakukan evaluasi dan membuat laporan setiap tahapan
              penyelenggaraan pemilu, dan
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
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
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              1
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menetapkan tata kerja KPU, KPU Provinsi, KPU Kabupaten/Kota, PPK,
              PPS, KPPS, PPLN, dan KPPSLN,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              2
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menetapkan Peraturan KPU untuk setiap tahapan pemilu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              3
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menetapkan peserta pemilu,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
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
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              5
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menerbitkan keputusan KPU untuk mengesahkan hasil Pemilu dan
              mengumumkannya,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
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
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              7
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menetapkan standar serta kebutuhan pengadaan dan pendistribusian
              perlengkapan,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              8
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Membentuk KPU Provinsi, KPU Kabupaten/Kota, dan PPLN,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              9
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Mengangkat, membina, dan memberhentikan anggota KPU Provinsi,
              anggota KPU Kabupaten/Kota, dan anggota PPLN,
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
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
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
              11
            </h1>
            <h1 className="text-black text-[12] p-2 ml-14">
              Menetapkan kantor akuntan publik untuk mengaudit dana kampanye
              Pemilu dan mengumumkan laporan sumbangan dana Kampanye Pemilu, dan
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-14 text-gold text-[16] p-2 text-center absolute">
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
