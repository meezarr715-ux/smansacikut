// ===== DATA GURU & KEPALA SEKOLAH (Menggunakan Link) =====
let dataGuru = [
    { nama: "Dra. Hj. Siti Rohmah, M.Pd", mapel: "Kepala Sekolah", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: true },
    { nama: "Drs. Ahmad Fauzi, M.Pd", mapel: "Wakil Kepala Sekolah", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: false },
    { nama: "Sri Mulyani, S.Pd", mapel: "Matematika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: false },
    { nama: "Drs. Budi Santoso", mapel: "Bahasa Indonesia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: false },
    { nama: "Hj. Lilis Suryani, S.Pd", mapel: "Bahasa Inggris", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: false },
    { nama: "Drs. Rahmat Hidayat, M.Si", mapel: "Fisika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: false },
    { nama: "Eka Pratiwi, S.Pd", mapel: "Kimia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: false },
    { nama: "Drs. Agus Supriyadi", mapel: "Biologi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: false },
    { nama: "Nurhasanah, S.Pd", mapel: "Sejarah", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: false },
    { nama: "Drs. Mulyadi", mapel: "Geografi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: false },
    { nama: "Yuniarti, S.Pd", mapel: "Ekonomi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: false },
    { nama: "Rudi Hartono, S.Pd", mapel: "Penjaskes", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg", isKepala: false }
];

// ===== DATA ANGKATAN (Thumbnail menggunakan link) =====
const dataAngkatan = [
    {
        id: "47",
        number: "Angkatan 47",
        year: "2023/2024",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 120,
        kelas: ["10 A", "10 B", "10 C", "10 D", "10 E", "10 F", "10 G", "10 H", "10 I", "10 J", "10 K", "10 L"]
    },
    {
        id: "48",
        number: "Angkatan 48",
        year: "2024/2025",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 95,
        kelas: ["10 A", "10 B", "10 C", "10 D", "10 E", "10 F", "10 G", "10 H", "10 I", "10 J", "10 K", "10 L"]
    },
    {
        id: "49",
        number: "Angkatan 49",
        year: "2025/2026",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 80,
        kelas: ["10 A", "10 B", "10 C", "10 D", "10 E", "10 F", "10 G", "10 H", "10 I", "10 J", "10 K", "10 L"]
    },
    {
        id: "50",
        number: "Angkatan 50",
        year: "2026/2027",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 150,
        kelas: ["10 A", "10 B", "10 C", "10 D", "10 E", "10 F", "10 G", "10 H", "10 I", "10 J", "10 K", "10 L"]
    }
];

// ===== DATA EKSTRAKULIKULER (Thumbnail menggunakan link) =====
const dataEkskul = [
    {
        id: "pramuka",
        name: "Pramuka",
        category: "Kepramukaan",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 45,
        anggota: ["Latihan Rutin", "Kegiatan Lapangan", "Perkemahan", "Lomba"]
    },
    {
        id: "paskibra",
        name: "Paskibra",
        category: "Baris-berbaris",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 38,
        anggota: ["Latihan Dasar", "Persiapan HUT RI", "Upacara", "Lomba PBB"]
    },
    {
        id: "futsal",
        name: "Futsal",
        category: "Olahraga",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 52,
        anggota: ["Latihan Rutin", "Pertandingan", "Turnamen", "Seleksi"]
    },
    {
        id: "basket",
        name: "Basket",
        category: "Olahraga",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 41,
        anggota: ["Latihan", "Pertandingan", "Liga Sekolah", "Eksebisi"]
    },
    {
        id: "pmr",
        name: "PMR",
        category: "Kesehatan",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 33,
        anggota: ["Latihan Pertolongan Pertama", "Donor Darah", "Simulasi Bencana"]
    },
    {
        id: "rohis",
        name: "Rohis",
        category: "Keagamaan",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 28,
        anggota: ["Peringatan Hari Besar", "Pesantren Kilat", "Buka Puasa Bersama", "Kajian Rutin"]
    },
    {
        id: "silat",
        name: "Pencak Silat",
        category: "Bela Diri",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 36,
        anggota: ["Latihan Teknik", "Sparring", "Pertandingan", "Demonstrasi"]
    },
    {
        id: "tari",
        name: "Tari Tradisional",
        category: "Seni Budaya",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 31,
        anggota: ["Latihan Rutin", "Pentas Seni", "Pembukaan Acara", "Lomba Tari"]
    }
];

// ===== DATA FOTO PER KELAS (Menggunakan Folder) =====
// Format: "image/angkatan/{angkatanId}/{kelas}/{nama-file}.jpg"
const dataFotoKelas = {
    "47": {
        "10 A": [
            { src: "image/angkatan/47/10A/foto1.jpg", nama: "Foto Bersama 10 A" }
        ]
    },
    "48": {},
    "49": {},
    "50": {
        "10 D": [
            { src: "image/angkatan/50/10D/foto1.jpg", nama: "Foto Bersama 10 D" },
            { src: "image/angkatan/50/10D/foto2.jpg", nama: "Study Tour 10 D" },
            { src: "image/angkatan/50/10D/foto3.jpg", nama: "Kegiatan Class Meeting" }
        ]
    }
};

// ===== DATA FOTO PER EKSTRAKULIKULER (Menggunakan Folder) =====
// Format: "image/ekskul/{ekskulId}/{nama-kegiatan}/{nama-file}.jpg"
const dataFotoEkskul = {
    "pramuka": [
        { src: "image/ekskul/pramuka/latihan-rutin/foto1.jpg", nama: "Latihan Rutin Pramuka" }
    ],
    "paskibra": [
        { src: "image/ekskul/paskibra/latihan-dasar/foto1.jpg", nama: "Latihan Dasar PBB" }
    ],
    "futsal": [
        { src: "image/ekskul/futsal/latihan-rutin/foto1.jpg", nama: "Latihan Rutin Futsal" }
    ],
    "basket": [
        { src: "image/ekskul/basket/latihan/foto1.jpg", nama: "Latihan Rutin Basket" }
    ],
    "pmr": [
        { src: "image/ekskul/pmr/latihan/foto1.jpg", nama: "Latihan PMR" }
    ],
    "rohis": [
        { src: "image/ekskul/rohis/kajian/foto1.jpg", nama: "Kajian Rutin Rohis" }
    ],
    "silat": [
        { src: "image/ekskul/silat/latihan/foto1.jpg", nama: "Latihan Pencak Silat" }
    ],
    "tari": [
        { src: "image/ekskul/tari/latihan/foto1.jpg", nama: "Latihan Tari Tradisional" }
    ]
};

// Fungsi untuk mendapatkan foto berdasarkan angkatan dan kelas
function getFotoKelas(angkatanId, kelas) {
    if (dataFotoKelas[angkatanId] && dataFotoKelas[angkatanId][kelas]) {
        return dataFotoKelas[angkatanId][kelas];
    }
    return [];
}

// Fungsi untuk mendapatkan foto berdasarkan ekstrakulikuler
function getFotoEkskul(ekskulId) {
    if (dataFotoEkskul[ekskulId]) {
        return dataFotoEkskul[ekskulId];
    }
    return [];
}