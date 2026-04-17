// ===== SAMBUTAN KEPALA SEKOLAH (Bisa diubah) =====
const sambutanKepsek = {
    nama: "Dra. Hj. Siti Rohmah, M.Pd",
    foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg",
    sambutan: "Assalamualaikum Warahmatullahi Wabarakatuh. Puji syukur kehadirat Allah SWT atas segala rahmat dan karunia-Nya sehingga website resmi SMAN 1 Cikarang Utara dapat hadir sebagai media informasi dan komunikasi bagi seluruh civitas akademika. Kami berkomitmen untuk terus meningkatkan kualitas pendidikan dan pelayanan kepada masyarakat. Selamat bergabung dan semoga bermanfaat."
};

// ===== DATA STRUKTUR ORGANISASI =====
// Format folder: image/struktur/{jabatan}/{nama-file.jpg}

const strukturData = {
    kepalaSekolah: {
        nama: "Dra. Hj. Siti Rohmah, M.Pd",
        jabatan: "Kepala Sekolah",
        foto: "image/struktur/kepala-sekolah/foto.jpg"
    },
    kurikulum: {
        nama: "Drs. Ahmad Fauzi, M.Pd",
        jabatan: "Wakil Kepala Sekolah Bidang Kurikulum",
        foto: "image/struktur/kurikulum/foto.jpg"
    },
    kesiswaan: {
        nama: "Sri Mulyani, S.Pd",
        jabatan: "Wakil Kepala Sekolah Bidang Kesiswaan",
        foto: "image/struktur/kesiswaan/foto.jpg"
    },
    bk: {
        nama: "Drs. Budi Santoso, M.Pd",
        jabatan: "Koordinator Bimbingan Konseling",
        foto: "image/struktur/bk/foto.jpg"
    }
};

// ===== DATA GURU BERDASARKAN MAPEL =====
// Format folder: image/guru/{mapel}/{nama-file.jpg}

const dataGuruByMapel = {
    "Matematika": [
        { nama: "Sri Mulyani, S.Pd", foto: "image/guru/matematika/sri-mulyani.jpg" },
        { nama: "Drs. Rahmat Hidayat, M.Si", foto: "image/guru/matematika/rahmat-hidayat.jpg" }
    ],
    "Informatika": [
        { nama: "Eka Pratiwi, S.Kom", foto: "image/guru/informatika/eka-pratiwi.jpg" }
    ],
    "SBdP": [
        { nama: "Nurhasanah, S.Sn", foto: "image/guru/sbdp/nurhasanah.jpg" }
    ],
    "Agama": [
        { nama: "Drs. Mulyadi, M.Ag", foto: "image/guru/agama/mulyadi.jpg" }
    ],
    "Sosiologi": [
        { nama: "Yuniarti, S.Sos", foto: "image/guru/sosiologi/yuniarti.jpg" }
    ],
    "Sejarah": [
        { nama: "Drs. Agus Supriyadi", foto: "image/guru/sejarah/agus-supriyadi.jpg" }
    ],
    "Kimia": [
        { nama: "Drs. Rahmat Hidayat, M.Si", foto: "image/guru/kimia/rahmat-hidayat.jpg" }
    ],
    "Bahasa Sunda": [
        { nama: "Hj. Lilis Suryani, S.Pd", foto: "image/guru/bahasa-sunda/lilis-suryani.jpg" }
    ],
    "Bahasa Indonesia": [
        { nama: "Drs. Budi Santoso", foto: "image/guru/bahasa-indonesia/budi-santoso.jpg" }
    ],
    "Bahasa Inggris": [
        { nama: "Hj. Lilis Suryani, S.Pd", foto: "image/guru/bahasa-inggris/lilis-suryani.jpg" }
    ],
    "PPKn": [
        { nama: "Drs. Mulyadi", foto: "image/guru/ppkn/mulyadi.jpg" }
    ],
    "Biologi": [
        { nama: "Drs. Agus Supriyadi", foto: "image/guru/biologi/agus-supriyadi.jpg" }
    ],
    "Astronomi": [
        { nama: "Eka Pratiwi, S.Pd", foto: "image/guru/astronomi/eka-pratiwi.jpg" }
    ],
    "Bahasa Jepang": [
        { nama: "Rudi Hartono, S.Pd", foto: "image/guru/bahasa-jepang/rudi-hartono.jpg" }
    ],
    "PJOK": [
        { nama: "Rudi Hartono, S.Pd", foto: "image/guru/pjok/rudi-hartono.jpg" }
    ],
    "Ekonomi": [
        { nama: "Yuniarti, S.Pd", foto: "image/guru/ekonomi/yuniarti.jpg" }
    ],
    "Geografi": [
        { nama: "Drs. Mulyadi", foto: "image/guru/geografi/mulyadi.jpg" }
    ],
    "Fisika": [
        { nama: "Drs. Rahmat Hidayat, M.Si", foto: "image/guru/fisika/rahmat-hidayat.jpg" }
    ]
};

// ===== DATA STAFF TATA USAHA =====
// Format folder: image/staff/{nama-file.jpg}

const dataStaff = [
    { nama: "Ahmad Syarif, S.Kom", jabatan: "Kepala TU", foto: "image/staff/kepala-tu.jpg" },
    { nama: "Dewi Kartika, A.Md", jabatan: "Bendahara", foto: "image/staff/bendahara.jpg" },
    { nama: "Rina Febriani, S.E", jabatan: "Administrasi", foto: "image/staff/administrasi-1.jpg" },
    { nama: "Budi Setiawan", jabatan: "Administrasi", foto: "image/staff/administrasi-2.jpg" },
    { nama: "Siti Nurjanah", jabatan: "Perpustakaan", foto: "image/staff/perpus.jpg" },
    { nama: "Eko Prasetyo", jabatan: "Keamanan", foto: "image/staff/keamanan.jpg" },
    { nama: "Joko Susilo", jabatan: "Kebersihan", foto: "image/staff/kebersihan.jpg" }
];

// ===== DATA UNTUK GAMBAR (Coming Soon) =====
const dataFotoKelas = {};
const dataFotoEkskul = {};

function getFotoKelas(angkatanId, kelas) { return []; }
function getFotoEkskul(ekskulId) { return []; }