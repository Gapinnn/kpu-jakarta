import Breadcumb from "./Breadcumb";
const VisiMisiComponent = () => {
  return (
    <div className="flex flex-col w-full bg-stone-100 relative">
      <div className="w-full rounded-xl flex flex-col gap-0 absolute bottom-0">
        <div className="bg-maroon-light bg-opacity-85 w-full h-52 rounded-t-full"></div>
        <div className="bg-maroon-light bg-opacity-85 w-full h-8"></div>
      </div>

      <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 lg:px-2 flex flex-col justify-center">
        {/* Breadcumb */}
        <Breadcumb />
        {/* Judul Halaman */}
        <h1 className="text-maroon-light font-bold text-2xl lg:text-3xl mb-2 lg:mb-6 mt-2 lg:mt-4">
          Visi dan Misi KPU Provinsi DKI Jakarta
        </h1>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-4 lg:py-8 px-2 lg:px-10 bg-white shadow-2xl rounded-2xl">
          {/* Visi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mb-2 lg:mb-4">
            Visi
          </h1>

          <h1 className=" text-black text-lg px-2 lg:p-2 ">
            Menjadi penyelenggara Pemilu yang mandiri, profesional, dan
            berintegritas untuk terwujudnya Pemilu yang luber dan jurdil
          </h1>

          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-4 lg:mt-8 mb-2 lg:mb-4">
            Misi
          </h1>

          {/* <h1 className=" text-black text-lg p-2 ">Dalam Pasal 13 Undang Undang 7 Tahun 2017 Tentang Pemilihan Umum, KPU mempunyai kewenangan sebagai berikut:</h1> --> */}
          {/* list */}
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg mt-1 lg:mt-0 w-8 h-8 flex justify-center items-center lg:w-12 lg:h-auto text-gold text-lg p-2 text-center absolute font-bold">
              1
            </h1>
            <h1 className="text-black text-lg lg:leading-normal lg:p-2 ml-12 lg:ml-14">
              Meningkatkan kualitas penyelenggaraan Pemilu yang efektif dan
              efisien, transparan, akuntabel, serta aksesibel;
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg mt-1 lg:mt-0 w-8 h-8 flex justify-center items-center lg:w-12 lg:h-auto text-gold text-lg p-2 text-center absolute font-bold">
              2
            </h1>
            <h1 className="text-black text-lg lg:leading-normal lg:p-2 ml-12 lg:ml-14">
              Meningkatkan integritas, kemandirian, kompetensi sebagai upaya
              menciptakan profesionalisme penyelenggara Pemilu dengan
              mengukuhkan code of conduct penyelenggara Pemilu;
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg mt-1 lg:mt-0 w-8 h-8 flex justify-center items-center lg:w-12 lg:h-auto text-gold text-lg p-2 text-center absolute font-bold">
              3
            </h1>
            <h1 className="text-black text-lg lg:leading-normal lg:p-2 ml-12 lg:ml-14">
              Menyusun regulasi di bidang Pemilu yang memberikan kepastian
              hukum, progesif, dan partisipatif;
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg mt-1 lg:mt-0 w-8 h-8 flex justify-center items-center lg:w-12 lg:h-auto text-gold text-lg p-2 text-center absolute font-bold">
              4
            </h1>
            <h1 className="text-black text-lg lg:leading-normal lg:p-2 ml-12 lg:ml-14">
              Meningkatkan kualitas pelayanan Pemilu khususnya untuk seluruh
              pemangku kepentingan dan umumnya untuk seluruh masyarakat;
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg mt-1 lg:mt-0 w-8 h-8 flex justify-center items-center lg:w-12 lg:h-auto text-gold text-lg p-2 text-center absolute font-bold">
              5
            </h1>
            <h1 className="text-black text-lg lg:leading-normal lg:p-2 ml-12 lg:ml-14">
              Meningkatkan partisipasi dan kualitas pemilih dalam Pemilu;
              melalui sosialisasi dan Pendidikan pemilih yang berkelanjutan;
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg mt-1 lg:mt-0 w-8 h-8 flex justify-center items-center lg:w-12 lg:h-auto text-gold text-lg p-2 text-center absolute font-bold">
              6
            </h1>
            <h1 className="text-black text-lg lg:leading-normal lg:p-2 ml-12 lg:ml-14">
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
