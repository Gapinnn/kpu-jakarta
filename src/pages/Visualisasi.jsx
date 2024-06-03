import ChartEmpat from "../components/Visualisasi/ChartEmpat";
import ChartSatu from "../components/Visualisasi/ChartSatu";
import ChartTiga from "../components/Visualisasi/ChartTiga";

export default function Visualisasi() {
  return (
    <>
      <div className="flex flex-col h-fit gap-8 p-4 xl:p-8 bg-stone-200">
        <div className="container mx-auto">
          <h1 className="text-3xl text-maroon-light font-bold">
            Visualisasi Karakteristik Pemilih Lokal
          </h1>
          <div className="grid grid-cols-1 justify-center gap-4">
            <ChartSatu />
          </div>
        </div>

        <div className="container mx-auto">
          <h1 className="text-3xl text-maroon-light font-bold">
            Visualisasi Indikator Pemilu
          </h1>
          <div className="grid grid-cols-1 justify-center gap-4">
            <ChartTiga />
            <ChartEmpat />
          </div>
        </div>
      </div>
    </>
  );
}
