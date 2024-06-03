import { Link } from "react-router-dom";
const TupoksiComponent = () => {
  return (
    <div className="flex flex-col w-full bg-stone-200 relative">
      <div className="w-full flex flex-col gap-0 absolute bottom-0">
        <div className="bg-maroon-light bg-opacity-85 w-full h-52 rounded-t-full"></div>
        <div className="bg-maroon-light bg-opacity-85 w-full h-8"></div>
      </div>

      <div className="container mx-auto py-10 px-2 flex flex-col justify-center">
        {/* Breadcumb */}
        <nav
          className="w-fit rounded-xl flex px-5 py-3 mb-2 text-stone-900 border border-gray-200 bg-stone-100 shadow-xl"
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
                  Tugas Pokok dan Fungsi
                </p>
              </div>
            </Link>
          </ol>
        </nav>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-8 px-10 bg-stone-100 shadow-xl rounded-2xl">
          <h1 className="text-maroon-light font-bold text-3xl mb-4">
            Tugas Pokok dan Fungsi KPU DKI Jakarta
          </h1>

          <h1 className=" text-black text-lg p-2 ">
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
            1. Divisi Keuangan, Umum, dan Rumah Tangga;
          </h1>
          {/* list */}
          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">1</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">
              Divisi Keuangan, Umum, dan Rumah Tangga mempunyai tugas untuk
              mengoordinasikan, menyelenggarakan, mengendalikan, memantau,
              supervisi, dan evaluasi terkait dengan kebijakan:
              <p>a. Administrasi perkantoran, rumah tangga, dan kearsipan;</p>
              <p>b. Protokol dan persidangan;</p>
              <p>c. Pengelolaan dan pelaporan Barang Milik Negara;</p>
              <p>d. Pelaporan dan pertanggungjawaban keuangan;</p>
              <p>
                e. Pengusulan peresmian keanggotaan dan pelaksanaan sumpah/janji
                DPRD Provinsi.
              </p>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            2. Divisi Sosialisasi, Pendidikan Pemilih, dan Partisipasi
            Masyarakat;
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">2</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">
              Divisi Sosialisasi, Pendidikan Pemilih, dan Partisipasi Masyarakat
              mempunyai tugas untuk mengoordinasikan, menyelenggarakan,
              mengendalikan, memantau, supervisi, dan evaluasi terkait dengan
              kebijakan:
              <p> a. Sosialisasi kepemiluan;</p>
              <p> b. Partisipasi masyarakat dan pendidikan pemilih;</p>
              <p> c. Publikasi dan kehumasan;</p>
              <p> d. Kampanye Pemilu dan Pemilihan;</p>
              <p> e. Kerja sama antar lembaga; dan</p>
              <p> f. Pengelolaan dan penyediaan informasi publik.</p>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            3. Divisi Data dan Informasi;
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">3</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">
              Divisi Data dan Informasi mempunyai tugas untuk mengoordinasikan,
              menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi
              terkait dengan kebijakan:
              <p> a. Pemutakhiran dan pemeliharaan data pemilih;</p>
              <p> b. Sistem informasi yang berkaitan dengan tahapan pemilu;</p>
              <p> c. Pengelolaan sarana dan prasarana teknologi informasi;</p>
              <p> d. Pengelolaan dan penyajian data hasil Pemilu nasional;</p>
              <p> e. Pengendalian informasi; dan</p>
              <p>
                {" "}
                f. Pengelolaan dan pengolahan data hasil Pemilu dan Pemilihan
              </p>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            4. Divisi Perencanaan dan Logistik;
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">4</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">
              Divisi Perencanaan dan Logistik mempunyai tugas untuk
              mengoordinasikan, menyelenggarakan, mengendalikan, memantau,
              supervisi, dan evaluasi terkait dengan kebijakan:
              <p> a. Penyusunan program dan anggaran;</p>
              <p>
                {" "}
                b. Perencanaan, pengadaan barang dan jasa, serta distribusi
                logistik; dan
              </p>
              <p>
                {" "}
                c. Monitoring, evaluasi, dan pengendalian program dan anggaran.
              </p>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            5. Divisi Teknis Penyelenggaraan;
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">5</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">
              Divisi Teknis Penyelenggaraan mempunyai tugas untuk
              mengoordinasikan, menyelenggarakan, mengendalikan, memantau,
              supervisi, dan evaluasi terkait dengan kebijakan:
              <p> a. Pengusulan daerah pemilihan dan alokasi kursi;</p>
              <p> b. Verifikasi partai politik dan anggota DPD;</p>
              <p> c. Pencalonan Peserta Pemilu dan Pemilihan;</p>
              <p>
                {" "}
                d. Pemungutan, penghitungan suara, dan rekapitulasi penghitungan
                suara;
              </p>
              <p>
                {" "}
                e. Penetapan hasil dan pendokumentasian hasil Pemilu dan
                Pemilihan;
              </p>
              <p> f. Pelaporan dana kampanye; dan</p>
              <p> g. Penggantian antar waktu anggota DPRD Provinsi.</p>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            6. Divisi Hukum dan Pengawasan;
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">6</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">
              Divisi Hukum dan Pengawasan mempunyai tugas untuk
              mengoordinasikan, menyelenggarakan, mengendalikan, memantau,
              supervisi, dan evaluasi terkait dengan kebijakan:
              <p> a. Penyusunan rancangan Keputusan KPU Provinsi;</p>
              <p> b. Telaah hukum dan advokasi hukum;</p>
              <p>
                {" "}
                c. Penyelesaian sengketa proses, tahapan, hasil Pemilu dan
                Pemilihan, serta non tahapan Pemilu dan Pemilihan;
              </p>
              <p> d. Dokumentasi dan publikasi hukum;</p>
              <p> e. Pengawasan dan pengendalian internal; dan</p>
              <p>
                {" "}
                f. Penanganan pelanggaran administrasi, Kode Etik, dan Kode
                Perilaku.
              </p>
            </h1>
          </div>

          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">
            7. Divisi Sumber Daya Manusia, Penelitian, dan Pengembangan
          </h1>

          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">6</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">
              Divisi Sumber Daya Manusia dan Litbang mempunyai tugas untuk
              mengoordinasikan, menyelenggarakan, mengendalikan, memantau,
              supervisi, dan evaluasi terkait dengan kebijakan:
              <p>
                {" "}
                a. Pengusulan penggantian antar waktu anggota KPU
                Kabupaten/Kota;
              </p>
              <p> b. Pengawasan proses rekrutmen anggota PPK, PPS, dan KPPS;</p>
              <p>
                {" "}
                c. Pembinaan etika dan evaluasi kinerja sumber daya manusia;
              </p>
              <p> d. Pengembangan budaya kerja, tata laksana dan organisasi;</p>
              <p>
                {" "}
                e. Pendidikan dan pelatihan, serta pengembangan sumber daya
                manusia; dan
              </p>
              <p> f. Penelitian dan pengembangan kepemiluan.</p>
            </h1>
          </div>
          {/* akhir list */}
        </div>
      </div>
    </div>
  );
};

export default TupoksiComponent;
