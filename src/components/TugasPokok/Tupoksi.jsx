import Breadcumb from "./Breadcumb";
import getLanguage from "../../hooks/getLanguage";

const TupoksiComponent = () => {
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
          {lang == "id"
            ? "Tugas Pokok dan Fungsi KPU Provinsi DKI Jakarta"
            : "Main Duties and Functions of the DKI Jakarta Provincial KPU"}
        </h1>
        {/* Konten */}
        <div className="w-full z-20 flex flex-col justify-center mx-auto py-4 lg:py-8 px-2 lg:px-10 bg-white shadow-2xl rounded-2xl">
          <h1 className=" text-black text-sm md:text-base lg:text-lg px-2 lg:px-0">
            {lang == "id"
              ? "Pemilihan umum diselenggarakan oleh suatu komisi pemilihan umum yang bersifat nasional, tetap, dan mandiri. Dalam menyelenggarakan Pemilihan Umum, Komisi Pemilihan Umum terdiri atas KPU Provinsi yang menjadi Penyelenggara Pemilu di Provinsi. KPU Provinsi DKI Jakarta dipimpin oleh anggota KPU Provinsi yang terdiri atas 1 (satu) orang ketua merangkap anggota dan 6 (enam) orang anggota. Masa jabatan anggota KPU Provinsi adalah selama 5 (lima) tahun dan dapat dipilih kembali untuk 1 (satu) kali masa jabatan pada tingkatan yang sama. Anggota KPU Provinsi dalam melaksanakan tugas, wewenang, dan kewajibannya, melakukan pembagian tugas dalam bentuk Divisi dan Korwil. Pembagian Divisi di KPU Provinsi DKI Jakarta adalah sebagai berikut:"
              : "Elections are organized by an election commission that is national, permanent, and independent. In organizing elections, the Election Commission consists of Provincial Election Commissions that act as Election Organizers at the provincial level. The Provincial Election Commission of DKI Jakarta is led by members of the Provincial Election Commission, consisting of one chairperson who also serves as a member and six members. The term of office for members of the Provincial Election Commission is five years and they can be re-elected for one additional term at the same level. Members of the Provincial Election Commission, in carrying out their duties, authorities, and obligations, divide their tasks into Divisions and Regional Coordinators. The division of tasks in the Provincial Election Commission of DKI Jakarta is as follows:"}
          </h1>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-base md:text-lg lg:text-xl p-3 lg:p-4 text-left font-bold mb-0 lg:mb-4 mt-4 md:mt-6 lg:mt-10">
            {lang == "id"
              ? "1. Divisi Keuangan, Umum, dan Rumah Tangga"
              : "1. Finance, General and Household Divisions"}
          </h1>
          {/* list */}
          <div className="flex px-2 lg:px-4 mb-0 lg:mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">1</h1> */}
            <div className="text-black text-sm md:text-base lg:text-lg mt-2">
              {lang == "id"
                ? "Divisi Keuangan, Umum, dan Rumah Tangga mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:"
                : "The Finance, General and Household Divisions have duties to coordinating, organizing, controlling, monitoring, supervision and evaluation related to policy:"}
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Administrasi perkantoran, rumah tangga, dan kearsipan;"
                    : "Office administration, household and archives"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Protokol dan persidangan"
                    : "Protocol and trial"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengelolaan dan pelaporan barang milik negara"
                    : "Management and reporting of state property"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pelaporan dan pertanggungjawaban keuangan"
                    : "Financial reporting and accountability"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengusulan peresmian keanggotaan dan pelaksanaan sumpah/janji DPRD Provinsi"
                    : "Proposing the inauguration of membership and implementation of the oath/promise Provincial DPRD"}
                </h1>
              </div>
            </div>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-base md:text-lg lg:text-xl p-3 lg:p-4 text-left font-bold mt-4 md:mt-6 lg:mt-10">
            {lang == "id"
              ? "2. Divisi Sosialisasi, Pendidikan Pemilih, dan Partisipasi Masyarakat"
              : "2. Division of Socialization, Voter Education and Participation Public"}
          </h1>

          <div className="flex px-2 lg:px-4 mb-0 lg:mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">2</h1> */}
            <h1 className="text-black text-sm md:text-base lg:text-lg mt-2">
              {lang == "id"
                ? "Divisi Sosialisasi, Pendidikan Pemilih, dan Partisipasi Masyarakat mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:"
                : "The Division of Socialization, Voter Education and Community Participation has the task of coordinating, organizing, controlling, monitoring, supervising and evaluating policies related to:"}
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Sosialisasi kepemiluan"
                    : "Electoral socialization"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Partisipasi masyarakat dan pendidikan pemilih"
                    : "Community participation and voter education"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? " Publikasi dan kehumasan"
                    : "Publication and public relations"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Kampanye pemilu dan pemilihan"
                    : "Election campaigns and elections"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Kerja sama antar lembaga"
                    : "Cooperation between institutions"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengelolaan dan penyediaan informasi publik."
                    : "Management and provision of public information."}
                </h1>
              </div>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-base md:text-lg lg:text-xl p-3 lg:p-4 text-left font-bold mt-4 md:mt-6 lg:mt-10">
            {lang == "id"
              ? "3. Divisi Data dan Informasi"
              : "3. Data and Information Division"}
          </h1>

          <div className="flex px-2 lg:px-4 mb-0 lg:mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">3</h1> */}
            <h1 className="text-black text-sm md:text-base lg:text-lg mt-2">
              {lang == "id"
                ? "Divisi Data dan Informasi mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:"
                : "The Data and Information Division has the task of coordinating, organize, control, monitor, supervise and evaluate related to policy:"}
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? " Pemutakhiran dan pemeliharaan data pemilih"
                    : "Updating and maintaining voter data;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Sistem informasi yang berkaitan dengan tahapan pemilu;"
                    : "Information systems related to election stages;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengelolaan sarana dan prasarana teknologi informasi;"
                    : "Management of information technology facilities and infrastructure;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengelolaan dan penyajian data hasil pemilu nasional;"
                    : "Management and presentation of national election results data;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengendalian informasi;"
                    : "Information control;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengelolaan dan pengolahan data hasil pemilu dan pemilihan."
                    : "Management and processing of election and election results data."}
                </h1>
              </div>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-base md:text-lg lg:text-xl p-3 lg:p-4 text-left font-bold mt-4 md:mt-6 lg:mt-10">
            {lang == "id"
              ? " 4. Divisi Perencanaan dan Logistik"
              : "4. Planning and Logistics Division"}
          </h1>

          <div className="flex px-2 lg:px-4 mb-0 lg:mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">4</h1> */}
            <h1 className="text-black text-sm md:text-base lg:text-lg mt-2">
              {lang == "id"
                ? "Divisi Perencanaan dan Logistik mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:"
                : "The Planning and Logistics Division has the task of: coordinating, organizing, controlling, monitoring, supervision and evaluation related to policy:"}
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Penyusunan program dan anggaran;"
                    : "Preparation of programs and budgets;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Perencanaan, pengadaan barang dan jasa, serta distribusi logistik;"
                    : "Planning, procurement of goods and services, and distribution logistics;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Monitoring, evaluasi, dan pengendalian program dan anggaran;"
                    : "Monitoring, evaluating and controlling programs and budgets;"}
                </h1>
              </div>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-base md:text-lg lg:text-xl p-3 lg:p-4 text-left font-bold mt-4 md:mt-6 lg:mt-10">
            {lang == "id"
              ? "5. Divisi Teknis Penyelenggaraan"
              : "5. Technical Implementation Division"}
          </h1>

          <div className="flex px-2 lg:px-4 mb-0 lg:mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">5</h1> */}
            <h1 className="text-black text-sm md:text-base lg:text-lg mt-2">
              {lang == "id"
                ? "Divisi Teknis Penyelenggaraan mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:"
                : "The Technical Implementation Division has the task of: coordinating, organizing, controlling, monitoring, supervision and evaluation related to policy:"}
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengusulan daerah pemilihan dan alokasi kursi;"
                    : "Proposing electoral districts and seat allocation;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Verifikasi partai politik dan anggota DPD;"
                    : "Verification of political parties and DPD members;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pencalonan peserta pemilu dan pemilihan;"
                    : "Nomination of election and election participants;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pemungutan, penghitungan suara, dan rekapitulasi penghitungan suara;"
                    : "Voting, vote counting and counting recapitulation voice;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Penetapan hasil dan pendokumentasian hasil pemilu dan pemilihan;"
                    : "Determination of results and documentation of election results and election;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pelaporan dana kampanye;"
                    : "Campaign finance reporting;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Penggantian antar waktu anggota DPRD Provinsi."
                    : "Interim replacement of Provincial DPRD members."}
                </h1>
              </div>
            </h1>
          </div>
          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-base md:text-lg lg:text-xl p-3 lg:p-4 text-left font-bold mt-4 md:mt-6 lg:mt-10">
            {lang == "id"
              ? "6. Divisi Hukum dan Pengawasan"
              : "6. Legal and Supervision Division."}
          </h1>

          <div className="flex px-2 lg:px-4 mb-0 lg:mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">6</h1> */}
            <h1 className="text-black text-sm md:text-base lg:text-lg mt-2">
              {lang == "id"
                ? "Divisi Hukum dan Pengawasan mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:"
                : "The Legal and Supervision Division has the task of: coordinating, organizing, controlling, monitoring, supervision and evaluation related to policy:"}
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Penyusunan rancangan keputusan KPU Provinsi;"
                    : "Preparation of draft Provincial KPU decisions;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Telaah hukum dan advokasi hukum;"
                    : "Legal studies and legal advocacy;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Penyelesaian sengketa proses, tahapan, hasil pemilu dan pemilihan, serta non tahapan pemilu dan pemilihan;"
                    : "Dispute resolution processes, stages, election results and election, as well as non-election and election stages;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Dokumentasi dan publikasi hukum;"
                    : "Legal documentation and publications;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengawasan dan pengendalian internal;"
                    : "Internal supervision and control;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Penanganan pelanggaran administrasi, kode etik, dan kode perilaku."
                    : "Handling administrative violations, codes of ethics and codes behavior."}
                </h1>
              </div>
            </h1>
          </div>

          {/* Misi */}
          <h1 className="bg-maroon-light rounded-xl text-gold text-base md:text-lg lg:text-xl p-3 lg:p-4 text-left font-bold mt-4 md:mt-6 lg:mt-10">
            {lang == "id"
              ? "7. Divisi Sumber Daya Manusia, Penelitian, dan Pengembangan"
              : "7. Human Resources, Research and Development Division"}
          </h1>

          <div className="flex px-2 lg:px-4 mb-0 lg:mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">6</h1> */}
            <h1 className="text-black text-sm md:text-base lg:text-lg mt-2">
              {lang == "id"
                ? "Divisi Sumber Daya Manusia dan Litbang mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:"
                : "The Human Resources and R&D Division has the task of: coordinating, organizing, controlling, monitoring, supervision and evaluation related to policy:"}
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengusulan penggantian antar waktu anggota KPU Kabupaten/Kota;"
                    : "Proposing interim replacement of Regency/City KPU members;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengawasan proses rekrutmen anggota PPK, PPS, dan KPPS;"
                    : "Supervision of the recruitment process for PPK, PPS and KPPS members;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pembinaan etika dan evaluasi kinerja sumber daya manusia;"
                    : "Ethical development and evaluation of human resource performance;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pengembangan budaya kerja, tata laksana dan organisasi;"
                    : "Development of work culture, management and organization;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Pendidikan dan pelatihan, serta pengembangan sumber daya manusia;"
                    : "Education and training, as well as resource development man;"}
                </h1>
              </div>
              <div className="flex items-start gap-1.5 lg:gap-2 mt-1.5">
                <h1 className="bg-maroon-light rounded-lg text-gold text-md py-0 px-1.5 font-semibold flex justify-center items-center">
                  #
                </h1>
                <h1 className="text-black text-sm md:text-base lg:text-lg">
                  {lang == "id"
                    ? "Penelitian dan pengembangan kepemiluan."
                    : "Electoral research and development."}
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
