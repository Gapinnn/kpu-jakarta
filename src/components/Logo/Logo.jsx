const Logo = () => {
  return (
    <div className="flex gap-2.5 py-2">
      <img src="./images/kpu.png" alt="Logo KPU" className="w-[3.75rem]" />
      <div className="flex flex-col justify-center gap-1">
        <p className="m-0 p-0 text-3xl font-extrabold leading-none">
          K<span className="text-black">P</span>U
        </p>
        <p>
          <p className="text-xs">Komisi Pemilihan Umum</p>
          <p className="text-xs">Provinsi DKI Jakarta</p>
        </p>
      </div>
    </div>
  );
};

export default Logo;
