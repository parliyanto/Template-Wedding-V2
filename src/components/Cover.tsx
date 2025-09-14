"use client";

type CoverProps = {
  onOpen: () => void;
};

export default function Cover({ onOpen }: CoverProps) {
  return (
<section
  className="
    absolute inset-0 flex flex-col 
    justify-center items-center gap-64  /* 🔹 default: mobile tengah & rapet */
    sm:justify-between sm:gap-0         /* 🔹 desktop balik normal */
    text-white text-center bg-cover bg-center px-4
  "
  style={{ backgroundImage: "url('/cover.webp')" }}
>
  {/* Overlay gelap */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Bagian atas: Judul */}
  <div className="relative z-10 mt-12 sm:mt-12">
    <p className="uppercase tracking-widest text-xs sm:text-sm md:text-base drop-shadow-md italic">
      The Wedding of
    </p>
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif drop-shadow-lg italic">
      Arif & Pasangan
    </h1>
  </div>

  {/* Bagian bawah: sapaan + tombol */}
  <div className="relative z-10 mb-5 sm:mb-5">
    <p className="text-sm sm:text-base md:text-lg drop-shadow-md mb-2 ">Dear,</p>
    <p className="text-base sm:text-lg md:text-xl font-medium drop-shadow-md ">
      Guest Name
    </p>
    <button
      onClick={onOpen}
      className="mt-6 px-3 py-3 w-full sm:px-10 sm:py-4 bg-gradient-to-r from-gray-800 to-black rounded-full shadow-lg hover:scale-105 transition text-sm sm:text-base cursor-pointer"
    >
      Open Invitation
    </button>
  </div>
</section>


  );
}
