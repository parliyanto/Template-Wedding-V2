"use client";

import { FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function InvitationDetail() {
  const [showText, setShowText] = useState(false);

  // 🎯 Tanggal acara
  const weddingDate = new Date("2025-10-20T16:00:00").getTime();

  // State untuk countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

   useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        // Jika waktu sudah lewat, set ke 0 semua
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    "/gallery1.webp",
    "/gallery2.webp",
    "/gallery3.webp",
    "/gallery4.webp",
    "/gallery5.webp",
    "/gallery6.webp",
  ]

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
  <div className="grid md:grid-cols-[65%_35%] grid-cols-1 w-full h-screen">
  {/* === Kiri: gambar fix === */}
  <div className="h-screen sticky top-0 hidden md:block">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/section1.webp')" }}
    ></div>
    <div className="absolute inset-0 bg-black/50"></div>
  </div>



      {/* === Kanan: konten scroll === */}
      <div className="relative h-screen overflow-y-auto shadow-[-8px_0_20px_rgba(0,0,0,0.5)] w-full">
          {/* Section 1: video intro */}
          <section className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/Asset-Vintage-Architecture.mp4"
              autoPlay
              muted
              playsInline
              onEnded={() => setShowText(true)}
            ></video>

            <div className="absolute inset-0"></div>

            {showText && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center text-center text-white px-6"
              >
                <p className="uppercase tracking-widest text-sm md:text-base mb-4">
                  The Wedding of
                </p>
                <h1 className="text-4xl md:text-6xl font-serif italic">Arif</h1>
                <span className="text-lg md:text-xl my-2">and</span>
                <h1 className="text-4xl md:text-6xl font-serif italic">Pasangan</h1>
                <p className="mt-6 text-lg md:text-xl tracking-wide">20 · 10 · 25</p>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-3xl text-white cursor-pointer border-2 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  ⬇
                </motion.div>
              </motion.div>
            )}
          </section>

        {/* Section 2: quote dengan background */}
        <section
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4"
            style={{ backgroundImage: "url('/ASSET-BG.png')" }}
          >
            {/* 🔥 Overlay warna tambahan */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "#b3bdc4", opacity: 0.6 }}
            ></div>

             <motion.div className="relative z-10 w-full max-w-md"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} // sekali muncul pas scroll 30% masuk
              >
              {/* Card dengan arch top */}
              <div className="relative bg-white/80 rounded-t-[150px] shadow-lg overflow-hidden mt-10">
                {/* Background arsitektur */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: "url('/asset_architechture.webp')" }}
                ></div>

                {/* Overlay tipis */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80"></div>

                {/* Konten */}
                <div className="relative z-10 flex flex-col items-center text-center p-8">
                  {/* Frame + Initial */}
                  <div className="relative">
                    <img
                      src="/frame.png"
                      alt="frame"
                      className="mx-auto w-40 opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-3xl font-serif text-gray-800">H W</h2>
                    </div>
                  </div>

                  {/* Quote */}
                  <motion.p className="mt-6 italic text-gray-700 leading-relaxed">
                    “What greater thing is there for two human souls,
                    than to feel that they are joined for life to strengthen each other in all labor,
                    to rest on each other in all sorrow, to minister to each other in all pain,
                    to be with each other to silent unspeakable memories at the moment,
                    of the last parting.”
                  </motion.p>

                  {/* Gambar bawah */}
                  <div className="relative mt-6">
                    {/* Foto pasangan */}
                    <img
                      src="/cover.webp"
                      alt="photo"
                      className="w-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
                  {/* Ornamen bunga */}
                <img
                  src="/ornament_flower.webp"
                  alt="flower decoration"
                  className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-50"
                />
        </section>

       {/* === Section 3: Bride & Groom === */}
<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
  {/* BG Fixed Layer */}
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{ backgroundImage: "url('/Asset_background.webp')" }}
  ></div>
  {/* Overlay tipis */}
  <div className="absolute inset-0 bg-white/40 -z-10"></div>

  {/* Konten */}
  <motion.div
    className="relative z-10 w-full max-w-md"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
    viewport={{ once: true }}
  >
    <div className="relative bg-transparent rounded-[150px] shadow-xl overflow-hidden mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/ASSET-ARCHITECTURE-5.webp')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-10">
        <h2 className="text-3xl md:text-4xl font-serif italic text-gray-800 mb-2">
          Bride & Groom
        </h2>
        <p className="text-gray-700 text-sm mb-6">
          The pleasure of your company is requested at the marriage of:
        </p>

        {/* Groom */}
        <div className="relative w-64 h-80 mx-auto overflow-hidden rounded-[50%] border border-gray-400 shadow-lg">
          <img src="/pria.jpg" alt="Groom" className="w-full h-full object-cover" />
        </div>
        <h3 className="mt-6 text-2xl font-serif italic text-gray-800">[Nama Mempelai Pria]</h3>
        <p className="text-gray-700 text-lg">[Nama Lengkap]</p>
        <p className="text-gray-600 text-sm mt-2">[Nama Ayah] <br /> & [Nama Ibu]</p>
        <a href="https://instagram.com/" target="_blank" className="mt-4 mb-2 text-pink-600 hover:text-pink-800">
          <FaInstagram size={28} />
        </a>

        {/* Simbol & */}
        <h2 className="text-5xl font-serif italic text-gray-800 my-6">&</h2>

        {/* Bride */}
        <div className="relative w-64 h-80 mx-auto overflow-hidden rounded-[50%] border border-gray-400 shadow-lg mt-10">
          <img src="/wanita.jpg" alt="Bride" className="w-full h-full object-cover" />
        </div>
        <h3 className="mt-6 text-2xl font-serif italic text-gray-800">[Nama Mempelai Wanita]</h3>
        <p className="text-gray-700 text-lg">[Nama Lengkap]</p>
        <p className="text-gray-600 text-sm mt-2">[Nama Ayah] <br /> & [Nama Ibu]</p>
        <a href="https://instagram.com/" target="_blank" className="mt-4 mb-2 text-pink-600 hover:text-pink-800">
          <FaInstagram size={28} />
        </a>
      </div>
    </div>
  </motion.div>
</section>


{/* === Section 4: Foto Pasangan === */}
<section className="relative flex items-center justify-center overflow-hidden min-h-screen">
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{ backgroundImage: "url('/Asset_background.webp')" }}
  ></div>
  <div className="absolute inset-0 bg-white/30 -z-10"></div>

  <motion.div
    className="relative z-10 w-full max-w-md flex flex-col items-center mt-20 shadow-2xl"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
    viewport={{ once: true }}
  >
    <img
      src="/pasangan.webp"
      alt="Pasangan"
      className="w-[500px] h-[700px] object-cover rounded-2xl shadow-2xl"
    />
  </motion.div>
</section>


{/* === Section 5: Event Details === */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{ backgroundImage: "url('/Asset_background.webp')" }}
  ></div>
  <div className="absolute inset-0 bg-white/40 -z-10"></div>

  <motion.div
    className="relative z-10 w-full max-w-md space-y-8"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
    viewport={{ once: true }}
  >
    {/* Card 1 */}
    <div className="bg-white/90 rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-2xl font-serif italic text-gray-800 mb-2">Holy Matrimony</h2>
      <p className="text-gray-600 mb-1">Sunday, October 20<sup>th</sup> 2024</p>
      <p className="text-gray-800 font-medium">16.00 – 17.00 WIB</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white/90 rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-2xl font-serif italic text-gray-800 mb-2">Reception</h2>
      <p className="text-gray-600 mb-1">Sunday, October 20<sup>th</sup> 2024</p>
      <p className="text-gray-800 font-medium">18.00 – 21.00 WIB</p>
    </div>
  </motion.div>
</section>


{/* === Section 6: Trailer Embed Youtube === */}
<section className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen px-4 py-12">
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{ backgroundImage: "url('/Asset_background.webp')" }}
  ></div>
  <div className="absolute inset-0 bg-black/40 -z-10"></div>

  <motion.div
    className="relative z-10 w-full max-w-2xl text-center -mt-12"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
    viewport={{ once: true }}
  >
    <div className="w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg mt-10">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-2xl"
        src="https://www.youtube.com/embed/CSN72Je7Hlg?rel=0&modestbranding=1"
        title="Teaser Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </motion.div>
</section>


{/* === Section 7: Our Gallery === */}
<section className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen px-4 py-12">
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{ backgroundImage: "url('/Asset_background.webp')" }}
  ></div>
  <div className="absolute inset-0 bg-gray-700/60 -z-10"></div>

  <motion.div
    className="relative z-10 w-full max-w-4xl text-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-6">Our Gallery</h2>
    {/* Grid Gallery di sini */}
  </motion.div>
</section>


{/* === Section 8: Wedding Gift & Live Streaming === */}
<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12">
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{ backgroundImage: "url('/Asset_background.webp')" }}
  ></div>
  <div className="absolute inset-0 bg-white/40 -z-10"></div>

  <div className="relative z-10 w-full max-w-md space-y-8">
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-2xl font-serif italic text-gray-800 mb-3">Wedding Gift</h2>
      <p className="text-gray-600 text-sm mb-4">Your presence is a present in itself...</p>
      <a href="#" className="inline-flex items-center bg-gray-400 text-white px-5 py-2 rounded-full">🎁 Wedding Gift</a>
    </div>

    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-2xl font-serif italic text-gray-800 mb-3">Live Streaming</h2>
      <p className="text-gray-600 text-sm mb-4">Join us virtually by clicking below:</p>
      <a href="#" className="inline-flex items-center bg-gray-400 text-white px-5 py-2 rounded-full">🎥 Live Streaming</a>
    </div>
  </div>
</section>


        {/* === Section 9: Countdown + RSVP === */}
<section className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen px-4 py-12">
  {/* BG Fixed */}
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{ backgroundImage: "url('/asset_architechture.webp')" }}
  ></div>
  <div className="absolute inset-0 bg-gray-400/60 -z-10"></div>

  <div className="relative z-10 w-full max-w-md text-center">
    {/* Card Foto + Countdown */}
    <div className="relative rounded-t-2xl overflow-hidden shadow-lg">
      <img src="/rsvp.webp" alt="Save the Date" className="w-full h-[500px] object-cover" />

      {/* Countdown di atas foto */}
      <div className="absolute top-0 left-0 w-full flex flex-col items-center mt-6">
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
            <h3 className="text-lg font-bold">{timeLeft.days}</h3>
            <p className="text-xs">Days</p>
          </div>
          <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
            <h3 className="text-lg font-bold">{timeLeft.hours}</h3>
            <p className="text-xs">Hours</p>
          </div>
          <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
            <h3 className="text-lg font-bold">{timeLeft.minutes}</h3>
            <p className="text-xs">Minutes</p>
          </div>
          <div className="bg-gray-700 text-white rounded-lg px-3 py-2">
            <h3 className="text-lg font-bold">{timeLeft.seconds}</h3>
            <p className="text-xs">Seconds</p>
          </div>
        </div>

        <a
          href="https://calendar.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 text-white px-6 py-2 rounded-full shadow hover:bg-gray-700 transition"
        >
          📅 Save The Date
        </a>
      </div>
    </div>

    {/* RSVP Form */}
    <div className="bg-white shadow-lg p-6 text-center rounded-b-2xl">
      <h2 className="text-2xl font-serif italic text-gray-800 mb-3">RSVP FORM</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border rounded-lg p-2 text-black" />
        <input type="text" placeholder="Address" className="w-full border rounded-lg p-2 text-black" />
        <select className="w-full border rounded-lg p-2 text-black">
          <option>Will you attend?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <input type="number" placeholder="Amount of Guest" className="w-full border rounded-lg p-2 text-black" />
        <button type="submit" className="bg-gray-600 text-white px-6 py-2 hover:bg-gray-700 transition w-full">
          Submit
        </button>
      </form>
    </div>
  </div>
</section>


{/* === Section 10: Our Love Story === */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
  {/* BG Fixed */}
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{ backgroundImage: "url('/ASSET-BG.png')" }}
  ></div>
  <div className="absolute inset-0 bg-gray-700/60 -z-10"></div>

  <motion.div
    className="relative z-10 w-full max-w-md text-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-6 mt-10">Our Love Story</h2>

    {/* Foto */}
    <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
      <img src="/ourstory.webp" alt="Our Story" className="w-full h-64 object-cover" />
    </div>

    {/* Timeline */}
    <div className="space-y-8 text-white">
      <div>
        <h3 className="text-4xl font-serif italic mb-2">First Meeting</h3>
        <p className="text-sm leading-relaxed">We met in college... (ceritanya lanjut di sini).</p>
      </div>
      <div>
        <h3 className="text-4xl font-serif italic mb-2">Two Become One</h3>
        <p className="text-sm leading-relaxed">Closer after Chancellors Cup... (lanjut cerita).</p>
      </div>
      <div>
        <h3 className="text-4xl font-serif italic mb-2">New Journey</h3>
        <p className="text-sm leading-relaxed mb-10">Our feelings grew stronger... (lanjut cerita).</p>
      </div>
    </div>
  </motion.div>
</section>


{/* === Section 11: Full Width Photo Only === */}
<section className="w-full relative overflow-hidden">
  <img src="/afterourstory.webp" alt="Couple with Balloon" className="w-full h-auto object-cover" />
</section>


{/* === Section 12: Sharing Memories + QR Check-in === */}
<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-16 space-y-6">
  {/* BG Fixed */}
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{ backgroundImage: "url('/Asset_background.webp')" }}
  ></div>
  <div className="absolute inset-0 bg-black/30 -z-10"></div>

  <div className="relative z-10 w-full max-w-md space-y-6">
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Sharing Memories</h2>
      <p className="text-gray-600 mb-6">Upload your photos during the event...</p>
      <a href="#" className="inline-block bg-gray-600 text-white px-6 py-3 rounded-full">📸 Sharing Memories</a>
    </div>

    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">QR Check in</h2>
      <p className="text-gray-600 mb-6">Show the QR code to scan at the venue...</p>
      <a href="#" className="inline-block bg-gray-600 text-white px-6 py-3 rounded-full">⬇️ Download QR</a>
    </div>
  </div>
</section>


{/* === Section 13: Best Wishes === */}
<section className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen px-4 py-16">
  {/* BG Fixed */}
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{ backgroundImage: "url('/ASSET-BG.png')" }}
  ></div>
  <div className="absolute inset-0 bg-black/50 -z-10"></div>

  <motion.div
    className="relative z-10 w-full max-w-lg text-center bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl mb-4 text-black">Best Wishes</h2>
    <p className="text-gray-700 mb-8">Leave us your beautiful wishes here:</p>
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full rounded-md border border-black px-4 py-2 text-black" />
      <textarea rows={4} maxLength={500} placeholder="Your Best Wishes" className="w-full rounded-md border border-black px-4 py-2 text-black"></textarea>
      <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition">
        Send Wishes
      </button>
    </form>
  </motion.div>
</section>


      {/* === Section 14: Closing === */}
      <section className="relative w-full"> 
        {/* Foto background full container */}
        <div className="relative w-full overflow-hidden">
          <img
            src="/footer.webp" // 👉 ganti dengan foto kamu
            alt="Closing Photo"
            className="w-full h-full object-contain"
          />

        {/* overlay biar gambar agak gelap sedikit */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Overlay text di dalam foto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 font-['Playfair_Display']">
            <p className="text-l mt-40">
              It is a pleasure and honor for us, if you are willing to attend and give us your blessing.
            </p>
            <h2 className="text-2xl md:text-3xl font-['Playfair_Display']">
              [Nama Mempelai Pria] & [Nama Mempelai Wanita]
            </h2>
          </div>

          {/* Ornamen bunga di bagian bawah */}
          <div className="absolute bottom-0 left-0 w-full">
            <img
              src="/ornament_flower.webp" // 👉 gambar ornamen bunga biru
              alt="Flower Ornament"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>









        












        

        </div>
    </div>
  );
}
