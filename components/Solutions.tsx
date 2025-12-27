
import React from 'react';

const solutions = [
  {
    title: 'Pickup & Delivery',
    description: 'Gratis antar jemput langsung ke depan pintu rumah Anda. Hemat waktu dan tenaga.',
    icon: 'local_shipping',
    color: 'from-blue-400 to-blue-600',
    shadow: 'shadow-blue-500/20'
  },
  {
    title: 'Dicuci Terpisah',
    description: 'Pakaian Anda dicuci mesin sendiri (1 pelanggan 1 mesin), tidak dicampur dengan orang lain.',
    icon: 'water_drop',
    color: 'from-cyan-400 to-cyan-600',
    shadow: 'shadow-cyan-500/20'
  },
  {
    title: 'Premium & Higienis',
    description: 'Menggunakan deterjen & pewangi premium grade A yang tahan lama dan anti-bakteri.',
    icon: 'verified',
    color: 'from-emerald-400 to-emerald-600',
    shadow: 'shadow-emerald-500/20'
  }
];

export const Solutions: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="order-2 lg:order-1 relative">
          {/* Abstract shape decoration */}
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text-main dark:text-white leading-tight mb-6">
            Solusi Cerdas <br />
            <span className="text-primary relative">
              CleanLife
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00026 6.99996C18.4475 9.99996 99.8669 1 120.306 4.49996C163.606 12.6999 178.886 4.49996 198.006 3.49996" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
            </span>
          </h2>
          <p className="text-neutral-gray dark:text-gray-400 text-lg leading-relaxed max-w-lg">
            Kami hadirkan standar baru dalam layanan laundry. Lebih bersih, lebih higienis, dan tentunya lebih praktis untuk gaya hidup modern Anda.
          </p>

          <div className="mt-8 flex gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-neutral-900 bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 material-symbols-outlined text-lg filled-icon">star</span>
                <span className="font-bold text-text-main dark:text-white">4.9/5.0</span>
              </div>
              <span className="text-xs text-neutral-gray dark:text-gray-500">dari 2,000+ pelanggan</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 grid gap-6">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-neutral-800 border border-gray-100 dark:border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`
                w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-lg
                bg-gradient-to-br ${item.color} ${item.shadow} group-hover:scale-110 transition-transform duration-500
              `}>
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-gray dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Hover effect background */}
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
