import { tentang, tautan } from "../contents/footer";
import { Link } from "react-router-dom";


const VisiMisi = () => {
  return (
          <div className="flex flex-col w-full">
          <div className="bg-maroon-light p-2 py-4 relative h-[233px]"></div>
            
            <div className="bg-stone-100 p-2 relative h-[600px]">
              <div className="container rounded-lg mx-auto bg-stone-100 shadow-lg p-10 absolute -top-32 left-1/2 transform -translate-x-1/2">
              <h1 className="text-maroon-light font-bold text-3xl mb-4">Visi dan Misi KPU Provinsi DKI Jakarta</h1>
                {/* Visi */}
                <h1 className="bg-maroon-light rounded-xl text-gold text-[28] p-4  text-left font-bold">Visi</h1>
                
                  <h1 className=" text-black text-lg p-2 ">Menjadi penyelenggara Pemilu yang mandiri, profesional, dan berintegritas untuk terwujudnya Pemilu yang luber dan jurdil</h1>
    
                  {/* Misi */}
                <h1 className="bg-maroon-light rounded-xl text-gold text-xl p-4 text-left font-bold mt-10 mb-4">Misi</h1>
                
                {/* <h1 className=" text-black text-lg p-2 ">Dalam Pasal 13 Undang Undang 7 Tahun 2017 Tentang Pemilihan Umum, KPU mempunyai kewenangan sebagai berikut:</h1> --> */}
                {/* list */}
                <div className="flex px-4 mb-2">
                  <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">1</h1>
                  <h1 className="text-black text-lg p-2 ml-14">Meningkatkan kualitas penyelenggaraan Pemilu yang efektif dan efisien, transparan, akuntabel, serta aksesibel;</h1>
                </div>
                <div className="flex px-4 mb-2">
                  <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">2</h1>
                  <h1 className="text-black text-lg p-2 ml-14">Meningkatkan integritas, kemandirian, kompetensi sebagai upaya menciptakan profesionalisme penyelenggara Pemilu dengan mengukuhkan code of conduct penyelenggara Pemilu;</h1>
                </div>  
                <div className="flex px-4 mb-2">
                  <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">3</h1>
                  <h1 className="text-black text-lg p-2 ml-14">Menyusun regulasi di bidang Pemilu yang memberikan kepastian hukum, progesif, dan partisipatif;</h1>
                </div>
                <div className="flex px-4 mb-2">
                  <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">4</h1>
                  <h1 className="text-black text-lg p-2 ml-14">Meningkatkan kualitas pelayanan Pemilu khususnya untuk seluruh pemangku kepentingan dan umumnya untuk seluruh masyarakat;</h1>
                </div>
                <div className="flex px-4 mb-2">
                  <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">5</h1>
                  <h1 className="text-black text-lg p-2 ml-14">Meningkatkan partisipasi dan kualitas pemilih dalam Pemilu; melalui sosialisasi dan Pendidikan pemilih yang berkelanjutan;</h1>
                </div>
                <div className="flex px-4 mb-2">
                  <h1 className="bg-maroon-light rounded-lg w-12 text-gold text-lg p-2 text-center absolute font-bold">6</h1>
                  <h1 className="text-black text-lg p-2 ml-14">Mengoptimalkan pemanfaatan kemajuan teknologi informasi dalam penyelenggaraan Pemilu</h1>
                </div>
                {/* akhir list */}
              </div>
            </div>
          </div>
        
      );
    
      
    }
    

export default VisiMisi;
