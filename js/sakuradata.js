// ========== SAMBUTAN KEPALA SEKOLAH ==========
const sambutanKepalaSekolah = {
    nama: "Bp. Didi Rosidi S.Pd",
    foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776490934/IMG-20220714-WA0011-768x1024_pycgku.jpg",
    sambutan: "Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur kita panjatkan ke hadirat Allah SWT atas segala nikmat dan karunia-Nya. Selamat datang di website resmi SMAN 1 Cikarang Utara. Kami berkomitmen untuk memberikan pendidikan terbaik bagi generasi penerus bangsa. Semoga website ini bermanfaat sebagai sarana informasi dan komunikasi antara sekolah dengan orang tua, alumni, dan masyarakat."
};

// ========== DATA STRUKTUR ORGANISASI (26 POSISI) ==========
const dataStrukturOrganisasi = {
    // 1. KEPALA SEKOLAH
    kepala: [
        { nama: "Bp. Didi Rosidi S.Pd", jabatan: "Kepala Sekolah", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776490934/IMG-20220714-WA0011-768x1024_pycgku.jpg" }
    ],
    
    // 2. WAKIL KEPALA SEKOLAH
    wakilKepala: [
        { nama: "Dra. Hj. Lilis Suryani", jabatan: "Waka Kurikulum", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762590/unnamed_ntfktk.jpg" },
        { nama: "H. Saepuloh, S.Pd.I", jabatan: "Waka Kesiswaan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762595/unnamed_x8zu3q.jpg" },
        { nama: "Dra. Hj. Enung Nuraeni", jabatan: "Waka Sarpras", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762570/unnamed_bp6fp1.jpg" },
        { nama: "Drs. H. Ahmad Fauzi", jabatan: "Waka Humas", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762581/unnamed_havk6j.jpg" }
    ],
    
    // 3. KURIKULUM
    kurikulum: [
        { nama: "Dra. Hj. Lilis Suryani", jabatan: "Koordinator Kurikulum", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762590/unnamed_ntfktk.jpg" },
        { nama: "Esti Puspitasari, M.Pd.", jabatan: "Wakil Koordinator", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762590/unnamed_ntfktk.jpg" }
    ],
    
    // 4. BK (BIMBINGAN KONSELING)
    bk: [
        { nama: "Dr. H. Ahmad Fauzi, M.Pd", jabatan: "Koordinator BK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762581/unnamed_havk6j.jpg" },
        { nama: "Dewi Sartika, S.Psi", jabatan: "Guru BK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762584/unnamed_w5ljlo.jpg" },
        { nama: "Rina Marliana, S.Pd", jabatan: "Guru BK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762590/unnamed_ntfktk.jpg" }
    ],
    
    // 5. KESISWAAN
    kesiswaan: [
        { nama: "H. Saepuloh, S.Pd.I", jabatan: "Koordinator Kesiswaan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762595/unnamed_x8zu3q.jpg" },
        { nama: "Rian Firmansyah, S.Pd", jabatan: "Pembina OSIS", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762586/unnamed_mclufv.jpg" },
        { nama: "Acep Suryadi, M.Pd.", jabatan: "Pembina Ekskul", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762567/unnamed_kp42kg.jpg" }
    ],
    
    // 6. STAF TATA USAHA
    staffTu: [
        { nama: "Hj. Enung Nuraeni, S.E.", jabatan: "Kepala TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762570/unnamed_bp6fp1.jpg" },
        { nama: "Asep Hermawan, S.Kom.", jabatan: "Staf Administrasi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762581/unnamed_havk6j.jpg" },
        { nama: "Rina Marlina, S.Pd.", jabatan: "Staf Kesiswaan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762590/unnamed_ntfktk.jpg" },
        { nama: "Dedi Mulyadi, A.Md.", jabatan: "Staf Keuangan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762584/unnamed_w5ljlo.jpg" },
        { nama: "Siti Aminah, S.Sos.", jabatan: "Staf Perpustakaan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762595/unnamed_x8zu3q.jpg" }
    ],
    
    // 7. KOMITE SEKOLAH
    komite: [
        { nama: "Drs. H. Udin Samsudin", jabatan: "Ketua Komite", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762573/unnamed_jgkj7c.jpg" },
        { nama: "Hj. Yayah Rohayati", jabatan: "Sekretaris Komite", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762522/unnamed_wbtwx9.jpg" }
    ],
    
    // 8. GURU SOSIOLOGI
    guruSosiologi: [
        { nama: "Dusria Afrindah, M.Pd.", mapel: "Sosiologi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762576/unnamed_flyfnn.jpg" }
    ],

        // 9. GURU BAHASA INDONESIA
    guruBindo: [
        { nama: "Purna Dewi, S.Pd.", mapel: "Bahasa Indonesia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762581/unnamed_havk6j.jpg" },
        { nama: "Andriyansyah Marjuki, S.S., Gr.", mapel: "Bahasa Indonesia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762509/unnamed_rzfgsy.png" }
    ],
    
    // 10. GURU MATEMATIKA
    guruMatematika: [
        { nama: "Royhanun Athiyyah, S.Pd", mapel: "Matematika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762522/unnamed_wbtwx9.jpg" },
        { nama: "Drs. H. Ahmad Fauzi", mapel: "Matematika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762581/unnamed_havk6j.jpg" }
    ],
    
    // 11. GURU FISIKA
    guruFisika: [
        { nama: "Royhanun Athiyyah, S.Pd", mapel: "Fisika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762522/unnamed_wbtwx9.jpg" },
        { nama: "Haris Akbar Wisnu Aji, S.Pd.", mapel: "Fisika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762570/unnamed_bp6fp1.jpg" }
    ],
    
    // 12. GURU GEOGRAFI
    guruGeografi: [
        { nama: "Richi Arisman, S.Pd.", mapel: "Geografi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762586/unnamed_mclufv.jpg" }
    ],
    
    // 13. GURU BAHASA SUNDA
    guruBasunda: [
        { nama: "Agus Subhan, S.H.I.", mapel: "Bahasa Sunda", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762584/unnamed_w5ljlo.jpg" }
    ],
    
    // 14. GURU BAHASA INGGRIS
    guruBinggris: [
        { nama: "Esti Puspitasari, M.Pd.", mapel: "Bahasa Inggris", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762590/unnamed_ntfktk.jpg" },
        { nama: "Acep Suryadi, M.Pd.", mapel: "Bahasa Inggris", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762567/unnamed_kp42kg.jpg" }
    ],
    
    // 15. GURU BAHASA JEPANG
    guruBajepang: [
        { nama: "Ganjar Sutendi, S.Pd.", mapel: "Bahasa Jepang", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762595/unnamed_x8zu3q.jpg" },
        { nama: "Soipah, S.Pd.", mapel: "Bahasa Jepang", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762541/unnamed_lk9ljv.jpg" }
    ],
    
    // 16. GURU SENI BUDAYA (SBdP)
    guruSbdp: [
        { nama: "Tri Suraningsih, S.Pd.", mapel: "Seni Budaya", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762573/unnamed_jgkj7c.jpg" },
        { nama: "Farid Pamungkas, S.Sn.", mapel: "Seni Budaya", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762538/unnamed_v7ucdk.png" },
        { nama: "Budiman Tejasukmana, S.Pd.", mapel: "Seni Budaya", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762557/unnamed_eutirt.jpg" }
    ],
    
    // 17. GURU AGAMA ISLAM
    guruPai: [
        { nama: "Fikri Haekal Anwar, S.Pd.", mapel: "Agama Islam", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762527/unnamed_qpczkz.jpg" },
        { nama: "Zulkarnain Rakasiwi, S.Pd.", mapel: "Agama Islam", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762597/unnamed_zdulev.jpg" }
    ],
    
    // 18. GURU AGAMA KRISTEN
    guruPakristen: [
        { nama: "Pdt. Maria Simanjuntak, S.Th", mapel: "Agama Kristen", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762570/unnamed_bp6fp1.jpg" }
    ],
    
    // 19. GURU KIMIA
    guruKimia: [
        { nama: "Dusria Afrindah, M.Pd.", mapel: "Kimia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762576/unnamed_flyfnn.jpg" }
    ],
    
    // 20. GURU PPKn
    guruPpkn: [
        { nama: "Richi Arisman, S.Pd.", mapel: "PPKn", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762586/unnamed_mclufv.jpg" }
    ],
    
    // 21. GURU PJOK
    guruPjok: [
        { nama: "Haris Akbar Wisnu Aji, S.Pd.", mapel: "PJOK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762570/unnamed_bp6fp1.jpg" }
    ],
    
    // 22. GURU PRAKARYA
    guruPrakarya: [
        { nama: "Tri Suraningsih, S.Pd.", mapel: "Prakarya", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762573/unnamed_jgkj7c.jpg" }
    ],
    
    // 23. GURU SEJARAH
    guruSejarah: [
        { nama: "Richi Arisman, S.Pd.", mapel: "Sejarah", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762586/unnamed_mclufv.jpg" }
    ],
    
    // 24. GURU EKONOMI
    guruEkonomi: [
        { nama: "Dusria Afrindah, M.Pd.", mapel: "Ekonomi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762576/unnamed_flyfnn.jpg" }
    ],
    
    // 25. GURU INFORMATIKA
    guruInformatika: [
        { nama: "Asep Hermawan, S.Kom.", mapel: "Informatika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762581/unnamed_havk6j.jpg" },
        { nama: "Zaenul Enka Azwar", mapel: "Informatika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1775106911/IMG-20240929-WA0036_ohrnnr.jpg" }
    ],
    
    // 26. PETUGAS KEAMANAN
    staffKeamanan: [
        { nama: "Ujang Supriatna", jabatan: "Satpam", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762586/unnamed_mclufv.jpg" },
        { nama: "Jajang Nurjaman", jabatan: "Satpam", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762522/unnamed_wbtwx9.jpg" }
    ],
    
    // PETUGAS KEBERSIHAN
    staffKebersihan: [
        { nama: "Ibu Sumiati", jabatan: "Petugas Kebersihan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762576/unnamed_flyfnn.jpg" },
        { nama: "Ibu Siti Rohmah", jabatan: "Petugas Kebersihan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762570/unnamed_bp6fp1.jpg" },
        { nama: "Bapak Eko Prasetyo", jabatan: "Petugas Kebersihan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1776762573/unnamed_jgkj7c.jpg" }
    ]
};