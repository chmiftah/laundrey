import React, { useState } from 'react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        laundryType: 'Kiloan',
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "628918727818";
        const message = `Halo CleanLife Laundry, saya ingin pesan laundry.%0A%0ANama: ${formData.name}%0AAlamat: ${formData.address}%0AJenis Laundry: ${formData.laundryType}`;

        // Open WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative bg-white dark:bg-[#1a2c20] rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 animate-fade-in-up">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <h3 className="text-2xl font-black text-text-main dark:text-white mb-2">
                    Pesan Laundry
                </h3>
                <p className="text-text-muted dark:text-gray-400 mb-6 text-sm">
                    Isi form di bawah ini untuk pemesanan via WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-text-main dark:text-gray-200 mb-1">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                            placeholder="Masukkan nama anda"
                        />
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-bold text-text-main dark:text-gray-200 mb-1">
                            Alamat Lengkap
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            required
                            rows={3}
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white resize-none"
                            placeholder="Masukkan alamat lengkap penjemputan"
                        />
                    </div>

                    <div>
                        <label htmlFor="laundryType" className="block text-sm font-bold text-text-main dark:text-gray-200 mb-1">
                            Jenis Laundry
                        </label>
                        <select
                            id="laundryType"
                            name="laundryType"
                            value={formData.laundryType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                        >
                            <option value="Kiloan (Cuci Setrika)">Kiloan (Cuci Setrika)</option>
                            <option value="Kiloan (Cuci Kering Lipat)">Kiloan (Cuci Kering Lipat)</option>
                            <option value="Kiloan (Setrika Saja)">Kiloan (Setrika Saja)</option>
                            <option value="Satuan (Dry Clean)">Satuan (Dry Clean)</option>
                            <option value="Sepatu/Tas">Sepatu/Tas</option>
                            <option value="Karpet/Bedcover">Karpet/Bedcover</option>
                            <option value="Lainnya">Lainnya</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-dark text-text-main font-bold py-3.5 rounded-lg shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
                    >
                        <span className="material-symbols-outlined filled-icon">send</span>
                        Kirim Pesan
                    </button>
                </form>
            </div>
        </div>
    );
};
