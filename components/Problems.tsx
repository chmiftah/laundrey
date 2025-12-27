
import React from 'react';
import { ProblemProps } from '../types';

const problems: ProblemProps[] = [
  {
    title: 'Tidak Sempat Cuci',
    description: 'Sibuk kerja seharian hingga tidak ada waktu tersisa untuk mencuci dan menyetrika sendiri.',
    icon: 'schedule',
    iconBg: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-600 dark:text-red-400'
  },
  {
    title: 'Cucian Menumpuk',
    description: 'Melihat tumpukan baju kotor di sudut kamar yang semakin tinggi membuat stres dan ruangan berantakan.',
    icon: 'layers',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400'
  },
  {
    title: 'Takut Kurang Bersih',
    description: 'Khawatir baju dicampur dengan milik orang lain, hilang, atau dicuci kurang higienis.',
    icon: 'sentiment_worried',
    iconBg: 'bg-rose-100 dark:bg-rose-900/30',
    iconColor: 'text-rose-600 dark:text-rose-400'
  }
];

export const Problems: React.FC = () => {
  return (
    <div className="px-4 md:px-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -left-10 top-20 w-64 h-64 bg-red-50 dark:bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-20 w-80 h-80 bg-orange-50 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 text-center md:text-left mb-16">
        <div className="inline-flex items-center gap-2 md:self-start self-center px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">Pain Points</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-main dark:text-white leading-tight">
          Sering Mengalami <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400">Masalah Ini?</span>
        </h2>
        <p className="text-neutral-gray dark:text-gray-400 text-lg max-w-2xl">
          Jangan biarkan tumpukan cucian mengganggu produktivitas dan kenyamanan Anda sehari-hari.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((item, idx) => (
          <div key={idx} className="group relative bg-white dark:bg-neutral-800 rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 hover:border-red-100 dark:hover:border-red-900/30 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:-translate-y-2">

            <div className="absolute top-6 right-8 text-6xl text-gray-50 dark:text-white/5 font-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 select-none">
              {(idx + 1).toString().padStart(2, '0')}
            </div>

            <div className={`size-20 rounded-2xl ${item.iconBg} flex items-center justify-center ${item.iconColor} mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
              <span className="material-symbols-outlined text-5xl md:text-6xl leading-none select-none">{item.icon}</span>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black text-text-main dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-gray dark:text-gray-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>

            <div className="mt-8 w-8 h-1 bg-gray-100 dark:bg-white/10 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-500"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20 mb-8 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Kami Punya Solusinya</span>
          <div className="bg-white dark:bg-neutral-800 rounded-full p-2 shadow-lg animate-bounce border border-gray-100 dark:border-white/10">
            <span className="material-symbols-outlined text-primary text-2xl">arrow_downward</span>
          </div>
        </div>
      </div>
    </div>
  );
};
