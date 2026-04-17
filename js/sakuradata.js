// ===== SAMBUTAN KEPALA SEKOLAH =====
// Ubah sesuai keinginan Anda
const sambutanKepsek = {
    nama: "Dra. Hj. Siti Rohmah, M.Pd",
    jabatan: "Kepala Sekolah",
    foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
    teks: "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di website resmi SMAN 1 Cikarang Utara. Kami berkomitmen untuk memberikan pendidikan terbaik bagi generasi penerus bangsa. Semoga website ini bermanfaat bagi seluruh civitas akademika dan masyarakat umum."
};

// ===== DATA STRUKTUR ORGANISASI =====
// Struktur Level 1: Kepala Sekolah
const kepalaSekolah = {
    nama: "Dra. Hj. Siti Rohmah, M.Pd",
    jabatan: "Kepala Sekolah",
    foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg"
};

// Struktur Level 2: Koordinator (Kurikulum, Kesiswaan, dll)
// Tambahkan atau ubah sesuai keinginan Anda
const koordinator = [
    { nama: "Drs. Ahmad Fauzi, M.Pd", jabatan: "Wakil Kepala Sekolah Bidang Kurikulum", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
    { nama: "Hj. Lilis Suryani, S.Pd", jabatan: "Wakil Kepala Sekolah Bidang Kesiswaan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
    { nama: "Drs. Rahmat Hidayat, M.Si", jabatan: "Koordinator BK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
    { nama: "Eka Pratiwi, S.Pd", jabatan: "Koordinator Sarana Prasarana", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
];

// ===== DATA GURU BERDASARKAN MATA PELAJARAN =====
// Tambahkan atau ubah sesuai keinginan Anda
const guruByMapel = {
    "Matematika": [
        { nama: "Sri Mulyani, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
        { nama: "Drs. Budi Santoso", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ],
    "Bahasa Indonesia": [
        { nama: "Nurhasanah, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ],
    "Bahasa Inggris": [
        { nama: "Yuniarti, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ],
    "Fisika": [
        { nama: "Drs. Agus Supriyadi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ],
    "Kimia": [
        { nama: "Rudi Hartono, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ],
    "Biologi": [
        { nama: "Drs. Mulyadi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ],
    "Sejarah": [
        { nama: "Drs. Mulyadi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ],
    "Geografi": [
        { nama: "Drs. Mulyadi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ],
    "Ekonomi": [
        { nama: "Yuniarti, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ],
    "Penjaskes": [
        { nama: "Rudi Hartono, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ],
    "BK": [
        { nama: "Drs. Rahmat Hidayat, M.Si", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ]
};

// ===== DATA ANGKATAN (Untuk Album - COMING SOON) =====
const dataAngkatan = [];

// ===== DATA EKSTRAKULIKULER (COMING SOON) =====
const dataEkskul = [];

// ===== DATA FOTO PER KELAS =====
const dataFotoKelas = {};

// ===== DATA FOTO PER EKSTRAKULIKULER =====
const dataFotoEkskul = {};

// Fungsi untuk mendapatkan foto berdasarkan angkatan dan kelas
function getFotoKelas(angkatanId, kelas) {
    return [];
}

// Fungsi untuk mendapatkan foto berdasarkan ekstrakulikuler
function getFotoEkskul(ekskulId) {
    return [];
}