
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0c1a11] border-t border-gray-100 dark:border-white/5 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6 col-span-1 md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">local_laundry_service</span>
            <h2 className="text-xl font-black text-text-main dark:text-white">CleanLife Laundry</h2>
          </div>
          <p className="text-neutral-gray dark:text-gray-400 leading-relaxed">
            Layanan laundry profesional terbaik di kota Anda. Kami memberikan kemudahan, kebersihan, dan kewangian maksimal untuk setiap helai pakaian Anda.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-black text-text-main dark:text-white">Layanan</h4>
          <ul className="flex flex-col gap-4 text-neutral-gray dark:text-gray-400">
            <li><a href="#" className="hover:text-primary transition-colors">Laundry Kiloan</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Laundry Satuan</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Cuci Karpet</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Dry Cleaning</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-black text-text-main dark:text-white">Bantuan</h4>
          <ul className="flex flex-col gap-4 text-neutral-gray dark:text-gray-400">
            <li><a href="#" className="hover:text-primary transition-colors">Cara Pemesanan</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Daftar Harga</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Pusat Bantuan</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-black text-text-main dark:text-white">Ikuti Kami</h4>
          <div className="flex gap-4">
             {['facebook', 'instagram', 'twitter'].map(social => (
               <a key={social} href="#" className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center hover:bg-primary transition-colors hover:text-text-main text-neutral-gray dark:text-gray-400">
                 <span className="material-symbols-outlined text-xl capitalize">{social}</span>
               </a>
             ))}
          </div>
          <p className="text-sm text-neutral-gray dark:text-gray-400 mt-2">
            Email: hello@cleanlife.com<br/>
            WA: +62 812 3456 7890
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-gray dark:text-gray-500 text-sm">
        <p>© 2024 CleanLife Laundry. Semua Hak Dilindungi.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-primary">Privasi</a>
           <a href="#" className="hover:text-primary">Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};
