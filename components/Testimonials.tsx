import React from 'react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Wijaya",
        role: "Ibu Rumah Tangga",
        content: "CleanLife Laundry sangat membantu saya menghemat waktu. Hasil cuciannya bersih, wangi, dan rapi. Layanan antar-jemputnya juga sangat tepat waktu!",
        initials: "SW"
    },
    {
        id: 2,
        name: "Budi Santoso",
        role: "Mahasiswa",
        content: "Harganya sangat terjangkau untuk kantong mahasiswa. Pengerjaannya cepat, jadi saya tidak perlu khawatir kehabisan baju bersih untuk kuliah.",
        initials: "BS"
    },
    {
        id: 3,
        name: "Linda Kusuma",
        role: "Karyawan Swasta",
        content: "Pelayanannya ramah dan profesional. Saya suka fitur tracking cuciannya, jadi saya tahu kapan cucian saya selesai. Sangat recommended!",
        initials: "LK"
    }
];

export const Testimonials: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">
                    Apa Kata Mereka?
                </h2>
                <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
                    Ribuan pelanggan telah mempercayakan kebersihan pakaian mereka kepada CleanLife Laundry.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                {testimonial.initials}
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main dark:text-white">{testimonial.name}</h4>
                                <p className="text-sm text-text-muted dark:text-gray-400">{testimonial.role}</p>
                            </div>
                        </div>

                        <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="material-symbols-outlined text-lg filled-icon">star</span>
                            ))}
                        </div>

                        <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                            "{testimonial.content}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
