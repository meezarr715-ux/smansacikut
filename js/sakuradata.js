// ========== SAMBUTAN KEPALA SEKOLAH ==========
const sambutanKepalaSekolah = {
    nama: "Bp. Didi Rosidi S.Pd",
    foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776490934/IMG-20220714-WA0011-768x1024_pycgku.jpg",
    sambutan: "Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur kita panjatkan ke hadirat Allah SWT atas segala nikmat dan karunia-Nya. Selamat datang di website resmi SMAN 1 Cikarang Utara. Kami berkomitmen untuk memberikan pendidikan terbaik bagi generasi penerus bangsa. Semoga website ini bermanfaat sebagai sarana informasi dan komunikasi antara sekolah dengan orang tua, alumni, dan masyarakat."
};

// ========== DATA STRUKTUR ORGANISASI ==========
const dataStrukturOrganisasi = {
    kepala: [
        { nama: "Bp. Didi Rosidi S.Pd", jabatan: "Kepala Sekolah", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776490934/IMG-20220714-WA0011-768x1024_pycgku.jpg" }
    ],
    
    wakil: [
        { nama: "Drs. Ahmad Fauzi, M.Pd", jabatan: "Wakil Kepala Sekolah Bidang Kurikulum", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
        { nama: "Dra. Siti Aminah, M.Pd", jabatan: "Wakil Kepala Sekolah Bidang Kesiswaan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
        { nama: "Drs. Budi Santoso", jabatan: "Wakil Kepala Sekolah Bidang Sarpras", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
        { nama: "Hj. Lilis Suryani, S.Pd", jabatan: "Wakil Kepala Sekolah Bidang Humas", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ],
    
    guru: {
        "Matematika": [
            { nama: "Sri Mulyani, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
            { nama: "Drs. Rahmat Hidayat", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Informatika": [
            { nama: "Eka Pratiwi, S.Kom", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
            { nama: "Reynaldi Saputra, S.Kom", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Bahasa Indonesia": [
            { nama: "Drs. Budi Santoso", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Bahasa Inggris": [
            { nama: "Hj. Lilis Suryani, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Bahasa Sunda": [
            { nama: "Drs. Ujang Kosasih", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Bahasa Jepang": [
            { nama: "Rina Febrianti, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "PPKn": [
            { nama: "Drs. Mulyadi, M.Si", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Sejarah": [
            { nama: "Nurhasanah, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Sosiologi": [
            { nama: "Dra. Yuniarti", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Ekonomi": [
            { nama: "Yuniarti, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Geografi": [
            { nama: "Drs. Agus Supriyadi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Biologi": [
            { nama: "Drs. Agus Supriyadi, M.Si", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Fisika": [
            { nama: "Drs. Rahmat Hidayat, M.Si", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Kimia": [
            { nama: "Eka Pratiwi, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Astronomi": [
            { nama: "Dr. Rudi Hermawan, M.Si", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "PJOK": [
            { nama: "Rudi Hartono, S.Pd", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "SBdP": [
            { nama: "Dian Puspita, S.Sn", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "Agama Islam": [
            { nama: "Drs. Ahmad Zaeni, M.Ag", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ],
        "BK": [
            { nama: "Dra. Siti Rohmah", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
            { nama: "Drs. Hermawan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
        ]
    },
    
    staff: [
        { nama: "Asep Saepudin, S.Kom", jabatan: "Kepala Tata Usaha", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
        { nama: "Rina Marlina", jabatan: "Staff Administrasi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
        { nama: "Dedi Mulyadi", jabatan: "Staff Keuangan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
        { nama: "Siti Nurjanah", jabatan: "Staff Perpustakaan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" },
        { nama: "Jajang Supriatna", jabatan: "Staff Sarana Prasarana", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1773484996/WhatsApp_Image_2026-02-24_at_16.24.20_xclmwc.jpg" }
    ]
};