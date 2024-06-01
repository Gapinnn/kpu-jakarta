import ChartDua from "../components/Visualisasi/ChartDua";
import ChartEmpat from "../components/Visualisasi/ChartEmpat";
import ChartSatu from "../components/Visualisasi/ChartSatu";
import ChartTiga from "../components/Visualisasi/ChartTiga";

export default function Visualisasi() {
  return (
    <>
      <div className="flex flex-col h-fit gap-8 p-4 xl:p-8 bg-stone-100">
        <div className="container mx-auto min-h-screen">
          <h1 className="text-3xl text-maroon-light font-bold">
            Visualisasi Karakteristik Pemilih
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-4">
            <ChartSatu />
            <ChartDua />
          </div>
        </div>

        <div className="container mx-auto min-h-screen">
          <h1 className="text-3xl text-maroon-light font-bold">
            Visualisasi Indikator Pemilu
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-4">
            <ChartTiga />
            <ChartEmpat />
          </div>
        </div>
      </div>
    </>
  );
}
