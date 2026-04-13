// ===== DATA ANGKATAN, KELAS, DAN FOTO =====
// TODO: Untuk menambahkan angkatan baru, cukup tambahkan objek baru ke array dataAngkatan
const dataAngkatan = [
    {
        id: "47",
        number: "Angkatan 47",
        year: "2023/2024",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 120,
        kelas: [
            "10 A", "10 B", "10 C", "10 D", "10 E", "10 F", "10 G", "10 H", "10 I", "10 J", "10 K", "10 L",
        ]
    },
    {
        id: "48",
        number: "Angkatan 48",
        year: "2024/2025",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 95,
        kelas: [
            "10 A", "10 B", "10 C", "10 D", "10 E", "10 F", "10 G", "10 H", "10 I", "10 J", "10 K", "10 L",
        ]
    },
    {
        id: "49",
        number: "Angkatan 49",
        year: "2025/2026",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 80,
        kelas: [
            "10 A", "10 B", "10 C", "10 D", "10 E", "10 F", "10 G", "10 H", "10 I", "10 J", "10 K", "10 L",
        ]
    },
    {
        id: "50",
        number: "Angkatan 50",
        year: "2026/2027",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 150,
        kelas: [
            "10 A", "10 B", "10 C", "10 D", "10 E", "10 F", "10 G", "10 H", "10 I", "10 J", "10 K", "10 L",
        ]
    }
];

// ===== DATA EKSTRAKULIKULER =====
// TODO: Untuk menambahkan ekstrakulikuler baru, tambahkan objek baru ke array dataEkskul
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
        anggota: ["Latihan Pertolongan Pertama"]
    },
    {
        id: "rohis",
        name: "Rohis",
        category: "Keagamaan",
        thumbnail: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
        fotoCount: 28,
        anggota: ["Peringatan Hari Besar", "Pesantren Kilat", "Buka Puasa Bersama"]
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
        anggota: ["Pentas Seni", "Pembukaan Acara"]
    }
];

// ===== DATA FOTO PER KELAS =====
// TODO: Untuk menambahkan foto ke kelas tertentu, tambahkan ke objek dataFotoKelas
const dataFotoKelas = {
    "47": {
    },
    "48": {
    },
    "49": {
    },
    "50": {
        "10 D": [
            { src: "image/angkatan/50/X.D/contoh.jpg", nama: "Foto Bersama" },
            { src: "image/angkatan/50/X.D/contoh.jpg", nama: "Foto Bersama" }
        ]
    }
};

// ===== DATA FOTO PER EKSTRAKULIKULER =====
// TODO: Untuk menambahkan foto ke ekstrakulikuler tertentu, tambahkan ke objek dataFotoEkskul
const dataFotoEkskul = {
    "pramuka": [
        { src: "../image/ekskul/pramuka/latihan1.jpg", nama: "Latihan Rutin Pramuka" }
    ],
    "paskibra": [
        { src: "../image/ekskul/paskibra/latihan1.jpg", nama: "Latihan Dasar PBB" }
    ],
    "futsal": [
        { src: "../image/ekskul/futsal/latihan1.jpg", nama: "Latihan Rutin" }
    ],
    "basket": [
        { src: "../image/ekskul/basket/latihan1.jpg", nama: "Latihan Rutin" }
    ],
    "pmr": [
        { src: "../image/ekskul/pmr/latihan1.jpg", nama: "Latihan Pertolongan Pertama" }
    ],
    "rohis": [
        { src: "../image/ekskul/rohis/kajian1.jpg", nama: "Kajian Rutin" }
    ],
    "silat": [
        { src: "../image/ekskul/silat/latihan1.jpg", nama: "Latihan Teknik" }
    ],
    "tari": [
        { src: "../image/ekskul/tari/latihan1.jpg", nama: "Latihan Tari" }
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