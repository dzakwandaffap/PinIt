import React from 'react';

const Home = () => {
  return (
<div className="relative min-h-screen bg-[#DCDCDC] flex items-center justify-center p-8 bg-white text-gray-900">
      
      {/* Container utama untuk dua kolom */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-6xl mx-auto space-y-12 md:space-y-0 md:space-x-24">
        
        {/* Kolom Kiri: Teks dan Tombol */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 drop-shadow-sm">
            Temukan dan Simpan Ide Tanpa Batas.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Satu tempat untuk semua ide kreatif Anda. Simpan gambar, video, dan artikel, atur dalam koleksi, dan temukan inspirasi dari jutaan pengguna lain.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300">
              Mulai <b>PinIt</b> Sekarang
            </button>
            <button className="bg-transparent text-blue-600 font-semibold py-3 px-6 rounded-md border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300">
              Lihat Contoh
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Ilustrasi */}
        <div className="flex-1 flex justify-center md:justify-start">
          {/* Ganti dengan ilustrasi atau gambar yang relevan dengan tema 'pin' atau 'simpan' */}
          <div className="w-full max-w-md h-auto">
             {/* Anda dapat menambahkan tag gambar di sini */}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;