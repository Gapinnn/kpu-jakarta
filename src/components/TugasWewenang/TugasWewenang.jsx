import Breadcumb from "./Breadcumb";
import getLanguage from "../../hooks/getLanguage";

const TugasWewenangComponent = () => {
  const lang = getLanguage();
  return (
    <div className="flex flex-col w-full bg-stone-100 relative">
      <div className="w-full flex flex-col gap-0 absolute bottom-0">
        <div className="bg-maroon-light bg-opacity-85 w-full h-52 rounded-t-full"></div>
        <div className="bg-maroon-light bg-opacity-85 w-full h-8"></div>
      </div>

      <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
        {/* Breadcumb */}
        <Breadcumb />
        {/* Judul Halaman */}
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-6 mt-2 lg:mt-4">
          
          {
            lang == "id"
              ?"Tugas dan Wewenang KPU Provinsi DKI Jakarta"
              :"Duties and Authorities of the DKI Jakarta Provincial KPU"
          }
        </h1>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-4 lg:py-8 px-2 lg:px-10 bg-white shadow-2xl rounded-2xl">
          {/* tugas */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-base md:text-lg lg:text-lg p-3 lg:p-4 text-left font-bold mb-2 lg:mb-0">
            
            {
              lang == "id"
                ?"Tugas KPU"
                :"Commission's duties"
            }
          </h1>

          <h1 className=" text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ">
            
            {
              lang == "id"
                ?"Dalam Pasal 12 Undang Undang 7 Tahun 2017 Tentang Pemilihan Umum, KPU mempunyai tugas sebagai berikut:"
                :"In Article 12 of Law 7 of 2017 concerning General Elections, The KPU has the following duties:"
            }
          </h1>
          {/* list */}
          <div className="flex items-start px-2 lg:px-4 mt-2 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              1
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Merencanakan program dan anggaran serta menetapkan jadwal,"
                  :"Plan programs and budgets and set schedules,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              2
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menyusun tata kerja KPU, KPU Provinsi, KPU Kabupaten/Kota, PPK, PPS, KPPS, PPLN, dan KPPSLN,"
                  :"Develop work procedures for the KPU, Provincial KPU, Regency/City KPU, PPK, PPS, KPPS, PPLN, and KPPSLN,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              3
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menyusun Peraturan KPU untuk setiap tahapan pemilu,"
                  :"Prepare KPU regulations for each stage of the election,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              4
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Mengoordinasikan, menyelenggarakan, mengendalikan dan memantau semua tahapan pemilu,"
                  :"Coordinating, organizing, controlling and monitoring all stages of the election,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              5
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menerima daftar pemilih dari KPU Provinsi,"
                  :"Receive voter list from Provincial KPU,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className=" bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              6
            </h1>
            <h1 className=" text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Memutakhirkan data pemilih berdasarkan data pemilu terakhir dengan memperhatikan data kependudukan yang disiapkan dan diserahkan oleh pemerintah dan menetapkannya sebagai daftar pemilih,"
                  :"Updating voter data based on the last election data with pay attention to population data prepared and submitted by government and designate it as a voter list,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              7
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Membuat berita acara dan sertifikat rekapitulasi hasil penghitungan suara serta wajib menyerahkannya kepada saksi peserta pemilu dan Bawaslu,"
                  :"Create minutes and results recapitulation certificates vote counting and must hand it over to participating witnesses elections and Bawaslu,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              8
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Mengumumkan calon anggota DPR, calon anggota DPD, dan Pasangan Calon terpilih serta membuat berita acaranya,"
                  :"Announcing DPR member candidates, DPD member candidates and spouses Candidates are selected and prepare their minutes,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              9
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menindaklanjuti dengan segera putusan Bawaslu atas temuan dan laporan adanya dugaan pelanggaran atau sengketa Pemilu,"
                  :"Following up immediately with Bawaslu's decision on the findings and reports of suspected election violations or disputes,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              10
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menyosialisasikan penyelenggaraan pemilu dan/atau yang berkaitan dengan tugas dan wewenang KPU kepada masyarakat,"
                  :"Socialize the implementation of elections and/or related matters with the duties and authority of the KPU to the community,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              11
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Melakukan evaluasi dan membuat laporan setiap tahapan penyelenggaraan pemilu, dan"
                  :"Conduct evaluations and make reports at each stage holding elections, and"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              12
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
             
              {
                lang == "id"
                  ?" Melaksanakan tugas lain dalam penyelenggaraan pemilu sesuai dengan ketentuan peraturan perundang-undangan."
                  :"Carry out other tasks in organizing elections in accordance with the provisions of the legislation."
              }
            </h1>
          </div>
          {/* akhir list */}

          {/* wewenang */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-base md:text-lg lg:text-lg p-3 lg:p-4 text-left mt-4 lg:mt-12 font-bold mb-2 lg:mb-0">
            
            {
                lang == "id"
                  ?"Wewenang KPU"
                  :"KPU's authority"
              }
          </h1>

          <h1 className=" text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ">
            
            {
                lang == "id"
                  ?"Dalam Pasal 13 Undang Undang 7 Tahun 2017 Tentang Pemilihan Umum, KPU mempunyai kewenangan sebagai berikut:"
                  :"In Article 13 of Law 7 of 2017 concerning General Elections, the KPU has the following authority:"
              }
          </h1>
          {/* list */}
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              1
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menetapkan tata kerja KPU, KPU Provinsi, KPU Kabupaten/Kota, PPK, PPS, KPPS, PPLN, dan KPPSLN,"
                  :"Determine the working procedures of the KPU, Provincial KPU, Regency/City KPU, PPK, PPS, KPPS, PPLN, and KPPSLN,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              2
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menetapkan Peraturan KPU untuk setiap tahapan pemilu,"
                  :"Establish KPU regulations for each stage of the election,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              3
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menetapkan jumlah peserta pemilu,"
                  :"Determining the number of election participants,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              4
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menetapkan dan mengumumkan hasil rekapitulasi penghitungan suara tingkat nasional berdasarkan hasil rekapitulasi penghitungan suara di KPU Provinsi untuk Pemilu Presiden dan Wakil presiden dan untuk pemilu anggota DPR serta hasil rekapitulasi penghitungan suara di setiap KPU provinsi untuk pemilu anggota DPD dengan membuat berita acara penghitungan suara dan sertifikat hasil penghitungan suara,"
                  :"Determine and announce the results of the vote count recapitulation national level based on the results of the vote count recapitulation at the Provincial KPU for the Presidential and Vice-Presidential Elections and for DPR member elections and the results of the vote count recapitulation in each provincial KPU for the election of DPD members by making news vote counting event and certificate of vote counting results,,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              5
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menerbitkan keputusan KPU untuk mengesahkan hasil Pemilu dan mengumumkannya,"
                  :"Issuing the KPU's decision to validate the election results and announced it,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              6
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menetapkan dan mengumumkan perolehan jumlah kursi anggota DPR, anggota DPRD provinsi, dan anggota DPRD kabupaten/kota untuk setiap partai politik peserta pemilu Anggota DPR, anggota DPRD provinsi, dan anggota DPRD kabupaten/kota,"
                  :"Determine and announce the acquisition of the number of seats for members of the DPR, members of the provincial DPRD, and members of the district/city DPRD for every political party participating in the election for DPR members, DPRD member provincial, and district/city DPRD members,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              7
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menetapkan standar serta kebutuhan pengadaan dan pendistribusian perlengkapan,"
                  :"Determine procurement and distribution standards and requirements equipment,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              8
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Membentuk KPU Provinsi, KPU Kabupaten/Kota, dan PPLN,"
                  :"Forming Provincial KPU, Regency/City KPU, and PPLN,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              9
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Mengangkat, membina, dan memberhentikan anggota KPU Provinsi, anggota KPU Kabupaten/Kota, dan anggota PPLN,"
                  :"Appoint, develop and dismiss members of the Provincial KPU, Regency/City KPU members, and PPLN members,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              10
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menjatuhkan sanksi administratif dan/atau menonaktifkan sementara anggota KPU provinsi, anggota KPU Kabupaten/Kota, anggota PPLN, anggota KPPSLN, dan sekretaris Jenderal KPU yang terbukti melakukan tindakan yang mengakibatkan terganggunya tahapan penyelenggaraan pemilu yang sedang berlangsung berdasarkan putusan Bawaslu dan/atau ketentuan peraturan perundang-undangan,"
                  :"Imposing administrative sanctions and/or temporarily disabling Provincial KPU members, Regency/City KPU members, PPLN members, member of the KPPSLN, and proven secretary general of the KPU take action that results in disruption of the stage holding of ongoing elections based on decisions Bawaslu and/or statutory provisions,"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              11
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
              
              {
                lang == "id"
                  ?"Menetapkan kantor akuntan publik untuk mengaudit dana kampanye Pemilu dan mengumumkan laporan sumbangan dana Kampanye Pemilu, dan"
                  :"Establish a public accounting firm to audit campaign funds Elections and announcing reports on donations to Election Campaign funds, and"
              }
            </h1>
          </div>
          <div className="flex items-start px-2 lg:px-4 lg:mt-0 mb-1.5 md:mb-2.5 lg:mb-2">
            <h1 className="bg-maroon-light rounded-lg flex justify-center items-center w-6 h-6 md:w-8 md:h-8 lg:h-auto lg:w-12 text-gold text-sm md:text-base lg:text-lg font-bold lg:mt-0 p-2 text-center absolute">
              12
            </h1>
            <h1 className="text-black text-sm md:text-base lg:text-lg px-2 lg:p-2 ml-7 md:ml-10 lg:ml-14">
             
              {
                lang == "id"
                  ?" Melaksanakan wewenang lain dalam penyelenggaraan Pemilu sesuai dengan ketentuan peraturan perundang-undangan."
                  :"Carry out other authorities in organizing elections as appropriate with the provisions of statutory regulations."
              }
            </h1>
          </div>
          {/* akhir list */}
        </div>
      </div>
    </div>
  );
};

export default TugasWewenangComponent;
