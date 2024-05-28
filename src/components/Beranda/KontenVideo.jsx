import YouTube from "react-youtube";

export default function KontenVideo() {
  const optVideoUtama = {
    height: "630",
    width: "1120",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      rel: 0,
      color: "#ffbf00",
    },
  };
  const optVideoSamping = {
    height: "180",
    width: "320",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      rel: 0,
      color: "#ffbf00",
    },
  };
  return (
    <div className="w-full bg-stone-100 p-2 py-4">
      <h1 className="text-maroon-light text-center mx-auto font-extrabold text-4xl mt-8">
        Konten Video
      </h1>
      <div className="flex justify-center w-full mt-8 gap-8 p-2">
        {/* Konten Video Utama */}
        <div className="w-fit">
          <div className="rounded-3xl overflow-hidden border-8 border-gold">
            <YouTube className="" videoId="kiE6xmFOMo0" opts={optVideoUtama} />
          </div>
        </div>
        {/* Konten Video Samping */}
        <div className="w-fit flex flex-col justify-between items-center">
          <div className="rounded-xl overflow-hidden border-[6px] border-gold">
            <YouTube videoId="FaD-VDro_tM" opts={optVideoSamping} />
          </div>
          <div className="rounded-xl overflow-hidden border-[6px] border-gold">
            <YouTube videoId="e0LlHRPdb5Y" opts={optVideoSamping} />
          </div>
          <div className="rounded-xl overflow-hidden border-[6px] border-gold">
            <YouTube videoId="e31l06nhddg" opts={optVideoSamping} />
          </div>
        </div>
      </div>
    </div>
  );
}
