
import React from 'react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    title: '1000+ Pelanggan Happy',
    description: 'Ribuan keluarga mempercayakan pakaian mereka kepada kami setiap bulan.',
    icon: 'groups',
    iconBg: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    title: 'Mesin Higienis',
    description: 'Teknologi pencucian modern yang menjamin kebersihan dan kesehatan pakaian.',
    icon: 'sanitizer',
    iconBg: 'bg-green-50 dark:bg-green-900/20',
    iconColor: 'text-green-600 dark:text-green-400'
  },
  {
    title: 'Layanan Kilat',
    description: 'Butuh cepat? Tersedia layanan Same Day dan Next Day service.',
    icon: 'bolt',
    iconBg: 'bg-yellow-50 dark:bg-yellow-900/20',
    iconColor: 'text-yellow-600 dark:text-yellow-400'
  }
];

export const TrustBanner: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-5 group p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
              <span className={`material-symbols-outlined ${feature.iconColor} text-3xl`}>{feature.icon}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-text-main dark:text-white text-lg font-black">{feature.title}</h3>
              <p className="text-neutral-gray dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
