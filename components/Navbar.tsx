
import React from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">local_laundry_service</span>
          </div>
          <h1 className="text-xl font-black tracking-tight text-text-main dark:text-white">
            CleanLife<span className="text-primary">Laundry</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#home" className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-200">Home</a>
          <a href="#services" className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-200">Layanan</a>
          <a href="#problems" className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-200">Tentang Kami</a>
          <a href="#testimonials" className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-200">Testimoni</a>
          <a href="#cta" className="text-sm font-semibold hover:text-primary transition-colors dark:text-gray-200">Kontak</a>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-muted dark:text-gray-300"
          >
            <span className="material-symbols-outlined text-xl">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button
            onClick={onOpenBooking}
            className="bg-primary hover:bg-primary-dark text-text-main font-bold py-2.5 px-6 rounded-lg text-sm transition-all shadow-md shadow-primary/20"
          >
            Pesan Sekarang
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode} className="text-text-muted dark:text-gray-300">
            <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button className="text-text-main dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
