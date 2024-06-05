import { Link } from "react-router-dom";
const VisiMisiComponent = () => {
  return (
    <div className="flex flex-col w-full bg-stone-200 relative">
      <div className="w-full rounded-xl flex flex-col gap-0 absolute bottom-0">
        <div className="bg-maroon-light bg-opacity-85 w-full h-52 rounded-t-full"></div>
        <div className="bg-maroon-light bg-opacity-85 w-full h-8"></div>
      </div>

      {/* <div className="bg-gradient-to-t from-maroon-light from-25% to-stone-400 to-90% w-full p-2 py-4 absolute bottom-0 h-80 rounded-t-[20rem]"></div> */}

      <div className="container mx-auto py-10 px-2 flex flex-col justify-center">
        {/* Breadcumb */}
        <nav
          className="w-fit flex px-5 py-3 mb-2 text-stone-900 border border-gray-200 rounded-lg bg-stone-100 shadow-xl"
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
                <p className="text-lg text-maroon-light font-medium">
                  Tentang Kami
                </p>
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
                <p className="text-lg text-gray-900 font-medium">Visi Misi</p>
              </div>
            </Link>
          </ol>
        </nav>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-8 px-10 bg-stone-100 shadow-xl rounded-2xl">
          <h1 className="text-maroon-light font-bold text-3xl mb-4">
            Visi dan Misi KPU Provinsi DKI Jakarta
          </h1>
          {/* Visi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10 mb-4">
            Visi
          </h1>

          <h1 className=" text-black text-lg p-2 ">
            Menjadi penyelenggara Pemilu yang mandiri, profesional, dan
            berintegritas untuk terwujudnya Pemilu yang luber dan jurdil
          </h1>

          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10 mb-4">
            Misi
          </h1>

          {/* <h1 className=" text-black text-lg p-2 ">Dalam Pasal 13 Undang Undang 7 Tahun 2017 Tentang Pemilihan Umum, KPU mempunyai kewenangan sebagai berikut:</h1> --> */}
          {/* list */}
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">
              1
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Meningkatkan kualitas penyelenggaraan Pemilu yang efektif dan
              efisien, transparan, akuntabel, serta aksesibel;
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">
              2
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Meningkatkan integritas, kemandirian, kompetensi sebagai upaya
              menciptakan profesionalisme penyelenggara Pemilu dengan
              mengukuhkan code of conduct penyelenggara Pemilu;
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">
              3
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Menyusun regulasi di bidang Pemilu yang memberikan kepastian
              hukum, progesif, dan partisipatif;
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">
              4
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Meningkatkan kualitas pelayanan Pemilu khususnya untuk seluruh
              pemangku kepentingan dan umumnya untuk seluruh masyarakat;
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">
              5
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Meningkatkan partisipasi dan kualitas pemilih dalam Pemilu;
              melalui sosialisasi dan Pendidikan pemilih yang berkelanjutan;
            </h1>
          </div>
          <div className="flex px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">
              6
            </h1>
            <h1 className="text-black text-lg p-2 ml-14">
              Mengoptimalkan pemanfaatan kemajuan teknologi informasi dalam
              penyelenggaraan Pemilu
            </h1>
          </div>
          {/* akhir list */}
        </div>
      </div>
    </div>
  );
};

export default VisiMisiComponent;
