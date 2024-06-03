import { tentang, tautan } from "../contents/footer";
import { Link } from "react-router-dom";


const Tupoksi = () => {
  return (
    <div className="flex flex-col w-full">
    <div className="bg-maroon-light p-2 py-4 relative h-[233px]"></div>
      
      <div className="bg-stone-100 p-2 relative h-[2500px]">
        <div className="container rounded-lg mx-auto bg-stone-100 shadow-lg p-10 absolute -top-32 left-1/2 transform -translate-x-1/2">
        <h1 className="text-maroon-light font-bold text-3xl mb-4">Tugas Pokok dan Fungsi KPU DKI Jakarta</h1>

          
          <h1 className=" text-black text-lg p-2 ">Pemilihan umum diselenggarakan oleh suatu komisi pemilihan umum yang bersifat nasional, tetap, dan mandiri. 
            Dalam menyelenggarakan Pemilihan Umum, Komisi Pemilihan Umum terdiri atas KPU Provinsi yang menjadi Penyelenggara Pemilu di Provinsi. 
            KPU Provinsi DKI Jakarta dipimpin oleh anggota KPU Provinsi yang terdiri atas 1 (satu) orang ketua merangkap anggota dan 6 (enam) orang anggota. 
            Masa jabatan anggota KPU Provinsi adalah selama 5 (lima) tahun dan dapat dipilih kembali untuk 1 (satu) kali masa jabatan pada tingkatan yang sama.
            Anggota KPU Provinsi dalam melaksanakan tugas, wewenang, dan kewajibannya, melakukan pembagian tugas dalam bentuk Divisi dan Korwil. Pembagian Divisi di KPU Provinsi DKI Jakarta adalah sebagai berikut:</h1>
            {/* Misi */}
            <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">1. Divisi Keuangan, Umum, dan Rumah Tangga;</h1>
            {/* list */}
          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">1</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">Divisi Keuangan, Umum, dan Rumah Tangga mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:
              <p>a. Administrasi perkantoran, rumah tangga, dan kearsipan;</p>
              <p>b. Protokol dan persidangan;</p>
              <p>c. Pengelolaan dan pelaporan Barang Milik Negara;</p>
              <p>d. Pelaporan dan pertanggungjawaban keuangan;</p>
              <p>e. Pengusulan peresmian keanggotaan dan pelaksanaan sumpah/janji DPRD Provinsi.</p></h1>
          </div>
          {/* Misi */}
            <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">2. Divisi Sosialisasi, Pendidikan Pemilih, dan Partisipasi Masyarakat;</h1>
            
          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">2</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">Divisi Sosialisasi, Pendidikan Pemilih, dan Partisipasi Masyarakat mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:
              <p> a. Sosialisasi kepemiluan;</p>
              <p> b. Partisipasi masyarakat dan pendidikan pemilih;</p>
              <p> c. Publikasi dan kehumasan;</p>
              <p> d. Kampanye Pemilu dan Pemilihan;</p>
              <p> e. Kerja sama antar lembaga; dan</p>
              <p> f. Pengelolaan dan penyediaan informasi publik.</p></h1>
          </div>  
          {/* Misi */}
            <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">3. Divisi Data dan Informasi;</h1>
            
          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">3</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">Divisi Data dan Informasi mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:
              <p> a. Pemutakhiran dan pemeliharaan data pemilih;</p>
              <p> b. Sistem informasi yang berkaitan dengan tahapan pemilu;</p>
              <p> c. Pengelolaan sarana dan prasarana teknologi informasi;</p>
              <p> d. Pengelolaan dan penyajian data hasil Pemilu nasional;</p>
              <p> e. Pengendalian informasi; dan</p>
              <p> f. Pengelolaan dan pengolahan data hasil Pemilu dan Pemilihan</p></h1>
          </div>
          {/* Misi */}
            <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">4. Divisi Perencanaan dan Logistik;</h1>
            
          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">4</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">Divisi Perencanaan dan Logistik mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:
              <p> a. Penyusunan program dan anggaran;</p>
              <p> b. Perencanaan, pengadaan barang dan jasa, serta distribusi logistik; dan</p>
              <p> c. Monitoring, evaluasi, dan pengendalian program dan anggaran.</p></h1>
          </div>
          {/* Misi */}
            <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">5. Divisi Teknis Penyelenggaraan;</h1>
            
          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">5</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">Divisi Teknis Penyelenggaraan mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:
              <p> a. Pengusulan daerah pemilihan dan alokasi kursi;</p>
              <p> b. Verifikasi partai politik dan anggota DPD;</p>
              <p> c. Pencalonan Peserta Pemilu dan Pemilihan;</p>
              <p> d. Pemungutan, penghitungan suara, dan rekapitulasi penghitungan suara;</p>
              <p> e. Penetapan hasil dan pendokumentasian hasil Pemilu dan Pemilihan;</p>
              <p> f. Pelaporan dana kampanye; dan</p>
              <p> g. Penggantian antar waktu anggota DPRD Provinsi.</p></h1>
          </div>
          {/* Misi */}
            <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">6. Divisi Hukum dan Pengawasan;</h1>
            
          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">6</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">Divisi Hukum dan Pengawasan mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:
              <p> a. Penyusunan rancangan Keputusan KPU Provinsi;</p>
              <p> b. Telaah hukum dan advokasi hukum;</p>
              <p> c. Penyelesaian sengketa proses, tahapan, hasil Pemilu dan Pemilihan, serta non tahapan Pemilu dan Pemilihan;</p>
              <p> d. Dokumentasi dan publikasi hukum;</p>
              <p> e. Pengawasan dan pengendalian internal; dan</p>
              <p> f. Penanganan pelanggaran administrasi, Kode Etik, dan Kode Perilaku.</p></h1>
          </div>

          {/* Misi */}
            <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10">7. Divisi Sumber Daya Manusia, Penelitian, dan Pengembangan</h1>
            
          <div className="flex px-4 mb-2">
            {/* <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">6</h1> */}
            <h1 className="text-black text-lg p-2 ml-14">Divisi Sumber Daya Manusia dan Litbang mempunyai tugas untuk mengoordinasikan, menyelenggarakan, mengendalikan, memantau, supervisi, dan evaluasi terkait dengan kebijakan:
              <p> a. Pengusulan penggantian antar waktu anggota KPU Kabupaten/Kota;</p>
              <p> b. Pengawasan proses rekrutmen anggota PPK, PPS, dan KPPS;</p>
              <p> c. Pembinaan etika dan evaluasi kinerja sumber daya manusia;</p>
              <p> d. Pengembangan budaya kerja, tata laksana dan organisasi;</p>
              <p> e. Pendidikan dan pelatihan, serta pengembangan sumber daya manusia; dan</p>
              <p> f. Penelitian dan pengembangan kepemiluan.</p></h1>
          </div>
          {/* akhir list */}
        </div>
      </div>
    </div>


  
);


}

export default Tupoksi;

