import getLanguage from "../../hooks/getLanguage";
import Building from "../Icon/Building";
import Calendar from "../Icon/Calendar";
import Cancel from "../Icon/Cancel";
import Clipboard from "../Icon/Clipboard";
import Comment from "../Icon/Comment";
import FIleOpen from "../Icon/FIleOpen";
import FileImage from "../Icon/FileImage";
import Images from "../Icon/Images";
import Leader from "../Icon/Leader";
import People from "../Icon/People";
import Public from "../Icon/Public";
import Room from "../Icon/Room";
import Search from "../Icon/Search";
import Share from "../Icon/Share";
import Sosialisasi from "../Icon/Sosialisasi";
import Table from "../Icon/Table";
import Unduh from "../Icon/Unduh";
import Breadcumb from "./Breadcumb";

const VisiMisiComponent = () => {
  const lang = getLanguage();
  return (
    <div className="flex flex-col w-full bg-stone-100 relative">
      <div className="w-full rounded-xl flex flex-col gap-0 absolute bottom-0">
        <div className="bg-maroon-light bg-opacity-85 w-full h-52 rounded-t-full"></div>
        <div className="bg-maroon-light bg-opacity-85 w-full h-8"></div>
      </div>

      {/* BUTTON */}
      {/* <div className="min-h-screen flex flex-col items-center justify-center gap-6 ml-32">
        <div className="flex flex-row gap-8">
          <button className="h-14 px-8 rounded-xl py-0 text-base lg:text-lg font-semibold bg-maroon-light text-white border-2 border-maroon-light hover:bg-white hover:text-maroon-light">
            Selengkapnya
          </button>
          <button className="h-14 px-6 flex flex-row items-center rounded-xl py-0 text-base lg:text-lg font-semibold bg-maroon-light text-white border-2 border-maroon-light hover:bg-white hover:text-maroon-light">
            <Share className="w-4 h-4 md:w-4 md:h-4 lg:w-7 lg:h-7 me-1.5" />
            <p className="text-lg">Selengkapnya</p>
          </button>
        </div>
        <div className="flex flex-row gap-8">
          <button className="h-14 px-8 flex text-lg items-center bg-white border-2 border-maroon-light text-maroon-light justify-center py-0 rounded-xl md:text-sm lg:text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100">
            <p className="text-lg">Selengkapnya</p>
          </button>
          <button className="h-14 px-6 flex text-lg items-center bg-white border-2 border-maroon-light text-maroon-light justify-center py-0 rounded-xl md:text-sm lg:text-base font-semibold group hover:bg-maroon-light hover:bg-opacity-80 hover:border-2 hover:border-maroon-light hover:text-stone-100">
            <Share className="w-4 h-4 md:w-4 md:h-4 lg:w-7 lg:h-7 me-1.5" />
            <p className="text-lg">Selengkapnya</p>
          </button>
        </div>
      </div> */}

      {/* ICON */}
      {/* <div className="min-h-screen flex flex-col gap-6 justify-center w-full ml-32">
        <div className="flex flex-row gap-6 items-center">
          <Building className="w-12 h-12 text-stone-900" />
          <Calendar className="w-12 h-12 text-stone-900" />
          <Clipboard className="w-12 h-12 text-stone-900" />
          <Comment className="w-12 h-12 text-stone-900" />
          <Share className="w-12 h-12 text-stone-900" />
        </div>
        <div className="flex flex-row gap-6 items-center">
          <FileImage className="w-12 h-12 text-stone-900" />
          <Images className="w-12 h-12 text-stone-900" />
          <Leader className="w-12 h-12 text-stone-900" />
          <People className="w-12 h-12 text-stone-900" />
          <Cancel className="w-12 h-12 text-stone-900" />
        </div>
        <div className="flex flex-row gap-6 items-center">
          <Public className="w-12 h-12 text-stone-900" />
          <Search className="w-12 h-12 text-stone-900" />
          <Sosialisasi className="w-12 h-12 text-stone-900" />
          <Table className="w-12 h-12 text-stone-900" />
          <Room className="w-12 h-12 text-stone-900" />
        </div>
      </div> */}

      {/* TYPOGRAPHY */}
      {/* <div className="min-h-screen flex flex-col justify-center w-full ml-20 gap-1">
        <p className="text-6xl font-bold">H1 Heading (60px)</p>
        <p className="text-5xl font-bold mt-3">H2 Heading (48px)</p>
        <p className="text-4xl font-bold mt-3">H3 Heading (36px)</p>
        <p className="text-3xl font-bold mt-1">J1 Judul (30px)</p>
        <p className="text-2xl font-bold">J2 Judul (24px)</p>
        <p className="text-xl font-bold">J3 Judul (20px)</p>
        <p className="text-base text-justify font-bold mt-6 w-[40rem]">
          Paragraf biasa berukuran 16 px. Ini adalah kalimat yang ditebalkan.
          Jika terdapat sebuah tag anchor yang mengarahkan ke halaman lain, maka
          tampilannya akan seperti ini "
          <span className="text-gold">
            kalimat ini adalah link yang mengarahkan ke suatu tautan
          </span>
          "
        </p>
        <p className="text-base text-justify mt-2 w-[40rem]">
          Paragraf biasa berukuran 16 px. Ini adalah kalimat yang ditebalkan.
          Jika terdapat sebuah tag anchor yang mengarahkan ke halaman lain, maka
          tampilannya akan seperti ini "
          <span className="text-gold">
            kalimat ini adalah link yang mengarahkan ke suatu tautan
          </span>
          "
        </p>
      </div> */}

      <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 lg:px-2 flex flex-col justify-center">
        {/* Breadcumb */}
        <Breadcumb />
        {/* Judul Halaman */}
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-6 mt-2 lg:mt-4">
          {lang == "id"
            ? "Visi dan Misi KPU Provinsi DKI Jakarta"
            : "Vision and Mission of KPU Jakarta Province"}
        </h1>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-4 lg:py-8 px-2 lg:px-10 bg-white shadow-2xl rounded-2xl">
          {/* Visi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-base md:text-lg lg:text-xl p-3 lg:p-4 text-left font-bold mb-2 lg:mb-4">
            {lang == "id" ? "Visi" : "Vision"}
          </h1>

          <h1 className=" text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ">
            {lang == "id"
              ? "Menjadi penyelenggara Pemilu yang mandiri, profesional, dan berintegritas untuk terwujudnya Pemilu yang luber dan jurdil"
              : "Become an independent, professional and election organizer with integrity to realize free and fair elections"}
          </h1>

          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-base md:text-lg lg:text-xl p-3 lg:p-4 text-left font-bold mt-4 lg:mt-8 mb-2 lg:mb-4">
            {lang == "id" ? "Misi" : "Mission"}
          </h1>

          {/* <h1 className=" text-black text-sm md:text-base lg:text-lg p-2 ">Dalam Pasal 13 Undang Undang 7 Tahun 2017 Tentang Pemilihan Umum, KPU mempunyai kewenangan sebagai berikut:</h1> --> */}
          {/* list */}
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg lg:mt-0 w-6 h-6 md:w-9 md:h-9 flex justify-center items-center lg:w-12 lg:h-a text-gold text-sm md:text-base lg:text-lg p-2 text-center absolute font-bold">
              1
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg lg:leading-normal lg:p-2 ml-9 md:ml-12 lg:ml-14">
              {lang == "id"
                ? "Meningkatkan kualitas penyelenggaraan Pemilu yang efektif dan efisien, transparan, akuntabel, serta aksesibel;"
                : "Improving the quality of effective election administration and efficient, transparent, accountable and accessible;"}
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg lg:mt-0 w-6 h-6 md:w-9 md:h-9 flex justify-center items-center lg:w-12 lg:h-a text-gold text-sm md:text-base lg:text-lg p-2 text-center absolute font-bold">
              2
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg lg:leading-normal lg:p-2 ml-9 md:ml-12 lg:ml-14">
              {lang == "id"
                ? "Meningkatkan integritas, kemandirian, kompetensi sebagai upaya menciptakan profesionalisme penyelenggara Pemilu dengan mengukuhkan code of conduct penyelenggara Pemilu;"
                : "Increasing integrity, independence, competence as an effort creating professionalism in election organizers by confirming the code of conduct for election organizers;"}
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg lg:mt-0 w-6 h-6 md:w-9 md:h-9 flex justify-center items-center lg:w-12 lg:h-a text-gold text-sm md:text-base lg:text-lg p-2 text-center absolute font-bold">
              3
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg lg:leading-normal lg:p-2 ml-9 md:ml-12 lg:ml-14">
              {lang == "id"
                ? "Menyusun regulasi di bidang Pemilu yang memberikan kepastian hukum, progesif, dan partisipatif;"
                : "Develop regulations in the field of elections that provide legal certainty, are progressive and participatory;"}
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg lg:mt-0 w-6 h-6 md:w-9 md:h-9 flex justify-center items-center lg:w-12 lg:h-a text-gold text-sm md:text-base lg:text-lg p-2 text-center absolute font-bold">
              4
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg lg:leading-normal lg:p-2 ml-9 md:ml-12 lg:ml-14">
              {lang == "id"
                ? "Meningkatkan kualitas pelayanan Pemilu khususnya untuk seluruh pemangku kepentingan dan umumnya untuk seluruh masyarakat;"
                : "Improving the quality of election services, especially for all stakeholders and generally for the whole community;"}
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg lg:mt-0 w-6 h-6 md:w-9 md:h-9 flex justify-center items-center lg:w-12 lg:h-a text-gold text-sm md:text-base lg:text-lg p-2 text-center absolute font-bold">
              5
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg lg:leading-normal lg:p-2 ml-9 md:ml-12 lg:ml-14">
              {lang == "id"
                ? " Meningkatkan partisipasi dan kualitas pemilih dalam Pemilu; melalui sosialisasi dan Pendidikan pemilih yang berkelanjutan;"
                : "Increasing voter participation and quality in elections; through ongoing voter outreach and education;"}
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 mb-2">
            <h1 className="bg-maroon-light rounded-lg lg:mt-0 w-6 h-6 md:w-9 md:h-9 flex justify-center items-center lg:w-12 lg:h-a text-gold text-sm md:text-base lg:text-lg p-2 text-center absolute font-bold">
              6
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg lg:leading-normal lg:p-2 ml-9 md:ml-12 lg:ml-14">
              {lang == "id"
                ? " Mengoptimalkan pemanfaatan kemajuan teknologi informasi dalam penyelenggaraan Pemilu"
                : "Optimizing the use of advances in information technology holding elections"}
            </h1>
          </div>
          {/* akhir list */}
        </div>
      </div>
    </div>
  );
};

export default VisiMisiComponent;
