
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-16 md:py-24 lg:py-32 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
              <span className="material-symbols-outlined text-sm text-primary filled-icon">verified</span>
              <span className="text-xs font-black text-primary uppercase tracking-widest">Premium Laundry Solution</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-text-main dark:text-white">
              Laundry Bersih, Wangi, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-500 to-secondary">
                Tinggal Tunggu di Rumah
              </span>
            </h1>
            <div className="flex items-center gap-3 flex-wrap text-neutral-gray dark:text-gray-400 text-base md:text-xl font-medium mt-2">
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span> Pickup gratis</span>
              <span className="hidden md:inline opacity-30">•</span>
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span> Proses cepat</span>
              <span className="hidden md:inline opacity-30">•</span>
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span> Antar tepat waktu</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 h-16 px-8 rounded-2xl bg-primary hover:bg-primary-dark text-text-main text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
              <span className="material-symbols-outlined filled-icon">chat</span>
              <span>Order via WhatsApp</span>
            </button>
            <button className="flex items-center justify-center gap-2 h-16 px-8 rounded-2xl bg-secondary hover:bg-blue-700 text-white text-lg font-bold shadow-xl shadow-secondary/20 transition-all hover:scale-[1.02]">
              <span className="material-symbols-outlined">local_shipping</span>
              <span>Booking Pickup Sekarang</span>
            </button>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                  alt="Customer"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark shadow-sm"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-gray-100 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                +1k
              </div>
            </div>
            <p className="text-sm text-neutral-gray dark:text-gray-400">
              Dipercaya oleh <span className="font-bold text-text-main dark:text-white">1000+ pelanggan</span> bulan ini
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 dark:border-white/5">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ1w5Nh0W_46q-IRKMz_-Qkn3QPNiJ_Uz1CRNw6QxyMeHuKQkt9dBT0YBab2cT1R1L_VgayDesGZPuyMUmCqThOzFXdkMayaFFqn1eHiSm9YsWqdLTPkkg5tH9JqQb9szTnUZx8SkO3H_AS_HNiGLHcFqrSLRQAE4Fugx_spKWj-M2rhQ7QjWSmYMvdC0R7RTsCqB05xbBipT2TCq9_pzyx7ri2e7cH01nPds31G1Q9fDQc1bfbkT0mw0YHZHS_GAKPJvD9REzyBg"
              alt="Folded clean laundry" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-4 max-w-[240px] translate-y-0 hover:-translate-y-1 transition-transform">
              <div className="bg-secondary/10 dark:bg-secondary/20 p-2.5 rounded-full text-secondary">
                <span className="material-symbols-outlined text-2xl filled-icon">verified</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Jaminan Layanan</span>
                <span className="text-sm font-black text-text-main dark:text-white">Anti Hilang & Rusak</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
