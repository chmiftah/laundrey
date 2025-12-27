
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { Problems } from './components/Problems';
import { Solutions } from './components/Solutions';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handleOpenBooking = () => setIsBookingModalOpen(true);
  const handleCloseBooking = () => setIsBookingModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onOpenBooking={handleOpenBooking} />

      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />

      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>

        <section id="trust" className="border-y border-gray-100 dark:border-white/5">
          <TrustBanner />
        </section>

        <section id="problems" className="bg-white dark:bg-[#0c1a11]">
          <div className="max-w-7xl mx-auto py-16 md:py-24">
            <Problems />
          </div>
        </section>

        <section id="solutions" className="bg-background-light dark:bg-background-dark">
          <Solutions />
        </section>

        <section id="services" className="bg-white dark:bg-[#0c1a11]">
          <Services onOpenBooking={handleOpenBooking} />
        </section>

        <section id="testimonials" className="bg-background-light dark:bg-background-dark">
          <Testimonials />
        </section>

        <section id="cta" className="bg-background-light dark:bg-background-dark py-20 px-4">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight dark:text-white">
              Siap Hidup Lebih Santai?
            </h2>
            <p className="text-lg text-neutral-gray dark:text-gray-400 max-w-2xl mx-auto">
              Serahkan urusan cucian kepada ahlinya. Klik tombol di bawah untuk pemesanan via WhatsApp sekarang juga. Kami siap menjemput cucian Anda.
            </p>
            <button
              onClick={handleOpenBooking}
              className="group flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-text-main font-bold py-4 px-10 rounded-full shadow-xl shadow-primary/30 transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined filled-icon">chat</span>
              <span className="text-lg">Pesan Laundry Sekarang</span>
            </button>
            <p className="text-xs text-neutral-gray dark:text-gray-500 italic">
              *Layanan tersedia Senin - Minggu, 07:00 - 20:00 WIB
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
