
import React from 'react';
import { ServiceCardProps } from '../types';
interface ServicesProps {
  onOpenBooking: () => void;
}

const serviceList: ServiceCardProps[] = [
  {
    title: 'Laundry Kiloan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy2S-LA7jAjbFqsMGWQPs-_1PZ6rp5F38sFwm9JHm2ZFP6kBI2QpgeotXnZeC5Qw6cZOITyj3G6az6eNitMRDoIKvRHLtJEFFdh6bfGHw28ahSRsYmfbm4de6MEJuqnqce1hn6iqPgWrzZvmby8TpsrgE1hdR_Y0zu9ucDtN8Ye2Njs6GtFk9EOHhxSF81Xctug4yidb28We1pIuaW2FAAKPriSw7m_EJTr2NUaa8XgI5VzOXcyznf6PoWevK8ZPf4-CiNau97O8M',
    badge: 'Regular',
    badgeColor: 'bg-primary',
    estimate: '2-3 Days',
    price: 'Rp 7.000 / kg',
    icon: 'scale'
  },
  {
    title: 'Laundry Express',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOpJyh3H5WIk7e5VNxZT_oiuHt4kKuiz2HiNA-vtQaCN41pgKPESz7Qx4_EnDOQftaieDXFE1RcnlTUePAwODSs40FUcf4qmYEgNRWLvzVUdPq-nP4h5M8kteDrO9cU3yBGQ7ZHAiTleeFoK7g5hmCvQ4U4tuQjJZ_BgvBTW-Siq8EVM3yJGC2GagWrsoG1Zglxilcp7bFW-40LDTcndgS0DfOGRJmCjAdoFlSct-kJIBoc3HaLkUdEBv15SAkcfhGI7mrVTknWKI',
    badge: 'Fast',
    badgeColor: 'bg-yellow-400',
    estimate: '5 Hours',
    price: 'Rp 15.000 / kg',
    icon: 'bolt'
  },
  {
    title: 'Selimut & Bed Cover',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUj3YmjEXdlIgy0IREuzgEhiKrgcmQYflMafqv_GPadmCOUEWJIutlm8_Nip1qpNhDAzQP3sZjnQOdPRijZzzpaiGDnhttSpTKXgbCoJLrcxHVjTrrcUiwnhEgBcadfjTt6ucPGCgDPd3JH548G-NavPuI5RRV54flik4CpTCWEnrdhZO7e2AIMWI14OJUpbsVhVBB8vNV-rAIqC9T6vbu7nZeZJJl1ZQT6X7wD0t-NwuHOhILwuYQhkAG7J0Ip8M87t1HvBjhBAs',
    badge: 'Heavy',
    badgeColor: 'bg-blue-400',
    estimate: '3 Days',
    price: 'Rp 25.000',
    icon: 'bed'
  },
  {
    title: 'Laundry Satuan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnU8rwlTa4NDIwjTwrCJwwkm5swJKWj3XYWBql4A0kVLR1D8KxaRmjyVgyKf1DyBQALKrcnPkXmOchVw-f3q1-djsK5ll58IfOyLK7Mg6HtZuhHuU-Ai9NjadL1N1PrN-h3Y8mApWK9Njl9a28ev_K9bJE9pDZyH3CTicqjxrF93WSH0d-OW_gMk_c2zW5ZYHF86UuXU9yu8SY3NTbPCREASSjK7HiA4-4SNgENyICzdpQzr4BATyVFC8WRMzqpy-nWDiyG8t69GY',
    badge: 'Dry Clean',
    badgeColor: 'bg-purple-400',
    estimate: '3-4 Days',
    price: 'Rp 15.000 / item',
    icon: 'styler'
  }
];

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-10">
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-main dark:text-white">
          Layanan <span className="text-primary">Profesional</span> Kami
        </h2>
        <p className="text-neutral-gray dark:text-gray-400 text-lg max-w-2xl">
          Pilih layanan yang paling sesuai dengan kebutuhan Anda. Dari pakaian harian hingga kain halus, kami menanganinya dengan penuh perhatian.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceList.map((service, idx) => (
          <div
            key={idx}
            className="group relative h-[480px] rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="absolute inset-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
            </div>

            <div className="absolute top-4 right-4 z-20 size-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">{service.icon}</span>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end gap-4 z-10">
              <div className="flex">
                <span className={`px-3 py-1 rounded-full ${service.badgeColor} text-text-main text-xs font-black uppercase tracking-wider`}>
                  {service.badge}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">{service.title}</h3>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-gray-200 font-medium">
                  <span className="material-symbols-outlined text-primary text-xl">timer</span>
                  <span className="text-sm">Est: {service.estimate}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200 font-medium">
                  <span className="material-symbols-outlined text-primary text-xl">payments</span>
                  <span className="text-sm">Mulai {service.price}</span>
                </div>
              </div>

              <button onClick={onOpenBooking} className="w-full mt-2 flex items-center justify-center gap-3 rounded-2xl h-12 bg-primary hover:bg-primary-dark text-text-main font-bold transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-xl">chat</span>
                <span>Chat WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
