// ========== SAMBUTAN KEPALA SEKOLAH ==========
const sambutanKepalaSekolah = {
    nama: "Didi Rosidi S.Pd",
    foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777902306/Didi_Rosidi_S.Pd_gdfr5o.jpg",
    sambutan: "Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur kita panjatkan ke hadirat Allah SWT atas segala nikmat dan karunia-Nya. Selamat datang di website resmi SMAN 1 Cikarang Utara. Kami berkomitmen untuk memberikan pendidikan terbaik bagi generasi penerus bangsa. Semoga website ini bermanfaat sebagai sarana informasi dan komunikasi antara sekolah dengan orang tua, alumni, dan masyarakat."
};

// ========== DATA STRUKTUR ORGANISASI (27 POSISI + BIOLOGI) ==========
const dataStrukturOrganisasi = {
    // 1. KEPALA SEKOLAH
    kepala: [
        { nama: "Didi Rosidi S.Pd", jabatan: "Kepala Sekolah", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777902306/Didi_Rosidi_S.Pd_gdfr5o.jpg" }
    ],
    
    // 2. WAKIL KEPALA SEKOLAH
    wakilKepala: [
        { nama: "Durisa Afrindah, S.Pd.", jabatan: "Waka Kurikulum", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976146/d88d7a8a-f872-4b87-8991-6e5c6189c8f1_mtyxt3.jpg" },
        { nama: "Fifit Fitriani, S.Pd.", jabatan: "Waka Kesiswaan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976142/d5ac6ebd-c53c-4da7-8416-9c43d791b490_dn6def.jpg" },
        { nama: "Fikri Haekal Anwar, S.Pd.", jabatan: "Waka Sarpras", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976141/1d80f33e-58c7-4896-8bc3-36d20ab3484d_epejzg.jpg" },
        { nama: "Ruslan, S.Pd.", jabatan: "Waka Humas", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976150/b6b0918a-243f-4792-a11e-69cc311f2dec_ykckjk.jpg" },
        { nama: "Foto Bersama", jabatan: "", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976154/9659d359-9c7b-46b0-870e-42cdf6aa61ec_gd8jle.jpg" }
    ],
    
    // 4. BK (BIMBINGAN KONSELING)
    bk: [
        { nama: "Ade Cahyadi, S.Ag", jabatan: "Guru BK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777901731/01802d0c-065c-4be4-8418-c6a3a04c886d_fk3xqk.jpg" },
        { nama: "Jernih Saripah Anum, S.Psi", jabatan: "Guru BK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777901875/2ea29eee-c532-4f8a-be56-417baea331fc_aerysm.jpg" },
        { nama: "Nourmarina Fajrin, S.Pd", jabatan: "Guru BK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777901878/1aebc4bb-5a0f-47f8-9239-fb176a021ba6_ubkzhl.jpg" },
        { nama: "Rangga Nugraha Gusti, S.Pd", jabatan: "Guru BK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777901819/a1585cd2-8904-4d9e-b8f4-86544e2a340a_xu8ih8.jpg" },
        { nama: "Sri Rahayu Utami, S.Psi", jabatan: "Guru BK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777901723/50513bc0-cf0f-4f80-8a53-22386e7a6b36_ix7pdq.jpg" }
    ],

    // 6. STAF TATA USAHA
    staffTu: [
        { nama: "Adam Husni Gunawan, ST", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976413/e6f4a894-9866-49ca-bdec-c54b1e77b2f3_kdhuxg.jpg" },
        { nama: "Ade Saputra", jabatan: "Kepala TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976517/0fba2b01-e0e1-4104-982f-4f06048fcf24_itdbod.jpg" },
        { nama: "Sindi Maudina", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976408/dcd16cd1-d33c-4ca6-b38a-f13aac2a6ad2_oisle3.jpg" },
        { nama: "Sri joko Waluyo", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976408/dcd16cd1-d33c-4ca6-b38a-f13aac2a6ad2_oisle3.jpg" },
        { nama: "Rosikin", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976403/cedc8460-6809-452c-90e3-40148b1b17f7_xxy3mv.jpg" },
        { nama: "Pian Sopian", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976472/6f05e323-664e-4c56-9d93-3dee8c232a9c_bxm85m.jpg" },
        { nama: "Subiyanti", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976405/2e9a3df5-0c15-4aab-a51d-6f95e85e1e4f_fusslv.jpg" },
        { nama: "Sutarno", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976488/692a33e3-b0ba-4c45-82bb-12b371912ff9_jbfdyp.jpg" },
        { nama: "Suyanto, A.MD", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976491/0947e6b1-e543-4319-bd77-da1e2df95f5d_duj0yo.jpg" },
        { nama: "Wasiran", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976503/bb3d43fe-8d92-4825-91d2-59b2a9fe0f8d_ahspvj.jpg" },
        { nama: "Wawan Setiawan, S,Kom", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976513/33565217-d25b-4730-910e-e34f3f4e777a_ess8iq.jpg" },
        { nama: "Wifi Kusumah, S.Kom", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976411/2cbb19ae-b2b8-4694-bafe-e5a7d1d07842_iie2wv.jpg" },
        { nama: "Nanu Rahmanu", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976470/85d4806b-a55b-4796-a2c6-1f194b791ba1_vta8e4.jpg" },
        { nama: "Najema Sabrina, S.lpi", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976466/8dd6e2fc-9cd8-4e56-ae81-ccc63708296d_jkuefz.jpg" },
        { nama: "Lilis Siti Juariah", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976464/c8f55087-313d-4137-ae7b-ff2b274563c6_xva8id.jpg" },
        { nama: "Lia Mutiara, S.Sos", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976485/7dbf3567-7af4-4d62-9dcc-b9b208f8729c_r2ww4s.jpg" },
        { nama: "Kartam", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976482/b97f324f-4d8c-475c-ae90-5e05181dff4a_jum2jh.jpg" },
        { nama: "Hana Pertiwi", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976476/c5f85a5c-6f51-4d73-9181-987ee0362191_z483yl.jpg" },
        { nama: "Dewi Marjiati Fatimah, S.IP", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976461/5d797802-ac17-49ca-b732-ade5749332a6_nowk3e.jpg" },
        { nama: "Fatmah, S.Pd.I", jabatan: "Staf TU", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777976479/5e512a67-39b4-4aa0-9ada-3fea8f1c56a2_aiydv1.jpg" }
    ],
    
    // 7. KOMITE SEKOLAH
    komite: [
        { nama: "-", jabatan: "-", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777902438/DSC_0776_my8jlx.jpg" }
    ],
    
    // 8. GURU SOSIOLOGI
    guruSosiologi: [
        { nama: "Elis Mursida, S.Sos.I", mapel: "Sosiologi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777974939/74e45c38-d57d-4afb-88b4-45c511e62b17_dte4zr.jpg" },
        { nama: "Nur Khayati, S.Ant, M.Pd.", mapel: "Sosiologi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777974936/46f53d1f-cd08-4f38-a7cd-d628b434fb78_mxq58b.jpg" },,
        { nama: "Yeni Puspitawati, S.Pd.", mapel: "Sosiologi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777974934/99743e25-ccb1-47c4-b0fd-fb7afbaff3db_jul1wz.jpg" },
    ],

    // 9. GURU BAHASA INDONESIA
    guruBindo: [
        { nama: "Sri Lestariningsih, S.Pd.", mapel: "Bahasa Indonesia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777903616/654cc3ea-21fa-4672-9f88-c961af9a2101_asxj86.jpg" },
        { nama: "Andriyansyah Marjuki, S.S., Gr.", mapel: "Bahasa Indonesia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777903624/bde925a4-f3c6-48b0-8d04-8f32604f3340_rozbqh.jpg" },
        { nama: "Adina Yuni, S.Pd.", mapel: "Bahasa Indonesia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777903677/732ad561-3ed1-4764-8009-2a537241a81e_xjrtep.jpg" },
        { nama: "Devi Puspitasari, S.Pd.", mapel: "Bahasa Indonesia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777903628/baddc7ef-eece-4103-bb73-2446ea0c8317_w7k4mp.jpg" },
        { nama: "Dra. Ning Emi Setiarsi", mapel: "Bahasa Indonesia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777903620/c00ac1c3-19b8-498b-a2ab-f478ac68e764_k3lg6y.jpg" }
    ],
    
    // 10. GURU MATEMATIKA
    guruMatematika: [
        { nama: "Dr. Ghofar Taufik, S.Si,.ME,.M.Si", mapel: "Matematika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777971926/7a28936c-446b-468c-85f0-fb9e430cf4ab_fbbggy.jpg" },
        { nama: "Elisabeth Isandhyta, S.Pd.", mapel: "Matematika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777971930/76a379f5-e9b5-42cf-aff5-e44f3f3c8587_pooy67.jpg" },
        { nama: "Fauziah Sendra Ningsih, S.Pd.", mapel: "Matematika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777971933/6cd1200b-271e-450c-9755-57c8773395d0_osahf1.jpg" },
        { nama: "Hj. Hamdanah, S.T., S.Pd.", mapel: "Matematika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777971941/3f38968c-0bc1-4526-803c-171989efba71_afvdf5.jpg" },
        { nama: "Nurita Yulifatul Janah, S.Pd.", mapel: "Matematika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777971937/20526671-93bb-4998-94d7-30b67b8a4bf3_gvsgi5.jpg" },
        { nama: "Lukman Hasyim Saputro, S.Pd.", mapel: "Matematika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777971938/6627e9dc-19dc-474b-a7bd-4b7fab2bf95f_gzldnt.jpg" },
        { nama: "Roudhotul Fitriyyah, S.Pd.", mapel: "Matematika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777971924/06890348-5c65-4f17-a7d5-b8143d685b8e_gr5ksc.jpg" }
    ],
    
    // 11. GURU FISIKA
    guruFisika: [
        { nama: "Royhanun Athiyyah, S.Pd", mapel: "Fisika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777906404/bcdd58cb-0e3c-4c40-a349-63f07e262cc6_ixofvg.jpg" },
        { nama: "Agus Firman Muhidin, S.Pd.", mapel: "Fisika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777906401/b13ab921-2586-4745-a2be-7a36cafb422d_apxrrr.jpg" },
        { nama: "Tiara Rizkia Agust, S.Si", mapel: "Fisika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777906397/26590ea1-6fb3-4e2d-ac44-aacdcbd73a46_kq9zoi.jpg" },
        { nama: "Ida Rosida, S.Pd.", mapel: "Fisika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777906394/c4a53121-c187-4b66-8fde-e2bcba03f704_xs9wlu.jpg" },
    ],
    
    // 12. GURU GEOGRAFI
    guruGeografi: [
        { nama: "Andri, S.Pd.", mapel: "Geografi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777906697/40789468-232a-431c-a87f-ff2ac71e785a_emzx8p.jpg" },
        { nama: "Meida Nur Hutami, S.Pd.", mapel: "Geografi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777906703/2c2553ea-d4de-4104-9226-9628a4b5140d_ddovjr.jpg" },
        { nama: "Sukarno Wijaya, S.Pd.", mapel: "Geografi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777906706/41361494-385f-4469-910c-9f7af06dcf2d_exm133.jpg" }
    ],
    
    // 13. GURU BAHASA SUNDA
    guruBasunda: [
        { nama: "Agus Subhan, S.H.I.", mapel: "Bahasa Sunda", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777902763/966485c5-bb0c-425e-aacd-a9a3c120e710_crt2sk.jpg" },
        { nama: " Riza Pathulbari Rahman, S.Pd.", mapel: "Bahasa Sunda", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777903399/4e0ea6f4-6d6f-4807-8faf-e61549894ab6_o9f0w1.jpg" },
        { nama: "Erna Ervilyana Rulita S.Pd.", mapel: "Bahasa Sunda", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777903402/44591d39-f668-4d06-9cb5-849bc374fb5d_f2vzbj.jpg" }
    ],
    
    // 14. GURU BAHASA INGGRIS
    guruBinggris: [
        { nama: "Esti Puspitasari, M.Pd.", mapel: "Bahasa Inggris", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777904486/70750df1-0483-4ad4-b818-6afe1542c6ec_dqtuvy.jpg" },
        { nama: "Acep Suryadi, M.Pd.", mapel: "Bahasa Inggris", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777904498/e33e915e-7e76-4e41-8eab-17e7ceec3674_aacmab.jpg" },
        { nama: "Riza Pathulbari Rahman, S.Pd.", mapel: "Bahasa Inggris", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777903399/4e0ea6f4-6d6f-4807-8faf-e61549894ab6_o9f0w1.jpg" },
        { nama: "Niah Kusumawati, S.S, M.Ed", mapel: "Bahasa Inggris", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777904501/b162fc65-8452-4756-88fd-bc8ace3b10f8_aciqwj.jpg" },
        { nama: "Dea Nur Azizah, S.Pd.", mapel: "Bahasa Inggris", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777904495/719d8c7d-6e83-4d9a-9a1f-6a7db8baa468_jdcris.jpg" }
    ],
    
    // 15. GURU BAHASA JEPANG
    guruBajepang: [
        { nama: "Tiara Mukti Hapsari, S.s", mapel: "Bahasa Jepang", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777904786/88bc50d3-7dd7-4857-8d41-349a2fd4fdc0_gh8uek.jpg" },
        { nama: "Soipah, S.Pd.", mapel: "Bahasa Jepang", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777904783/2c21a4f5-4e51-4418-83a0-bcde072cc610_r7cmq1.jpg" }
    ],
    
    // 16. GURU SENI BUDAYA (SBdP)
    guruSbdp: [
        { nama: "Ruslan, S.Pd.", mapel: "Seni Budaya", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777974874/234561ae-fc54-4d70-a239-883f3b4106fa_tovlpo.jpg" },
        { nama: "Farid Pamungkas, S.Sn.", mapel: "Seni Budaya", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777974876/4de037cb-02a1-42e3-9fb7-f7905a29cffd_f12bk1.jpg" },
        { nama: "Budiman Tejasukmana, S.Pd.", mapel: "Seni Budaya", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777974872/c59488f8-3060-4be7-93af-2294d88c1ce8_q5gerz.jpg" }
    ],
    
    // 17. GURU AGAMA ISLAM
    guruPai: [
        { nama: "Fikri Haekal Anwar, S.Pd.", mapel: "Agama Islam", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777972477/e010b0c1-a02a-4b34-a0d3-cbb8a6cb2299_eiizy3.jpg" },
        { nama: "Zulkarnain Rakasiwi, S.Pd.", mapel: "Agama Islam", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777972479/e494dbc6-7daa-4a11-8e3f-7dfd8f8977bf_hnus03.jpg" },
        { nama: "Zen Ashidiqie Arief, S.Pd.", mapel: "Agama Islam", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777972481/eef7a74d-65aa-48ca-8e26-8bb8e99d8b4f_mhbdxc.jpg" },
    ],
    
    // 18. GURU AGAMA KRISTEN
    guruPakristen: [
        { nama: "Dupan Juliando Immanuel, SP", mapel: "Agama Kristen", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777902569/37792863-e181-49d4-80bc-c7cec9593de0_fwqxm7.jpg" }
    ],
    
    // 19. GURU KIMIA
    guruKimia: [
        { nama: "Dewi Kulsum, S.Pd.", mapel: "Kimia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777909731/1b7d03f3-1760-453e-8c48-c5ee682bcedd_zdtahd.jpg" },
        { nama: "Dusria Afrindah, M.Pd.", mapel: "Kimia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777909722/96f85989-ba0e-43a5-8647-01526b515b71_wqbiig.jpg" },
        { nama: "Lusia Darmini, S.Pd.", mapel: "Kimia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777909726/c236707b-fcc9-4ab4-ad83-a292b5061479_w5vwdg.jpg" },
        { nama: "Satrio Indraprasta, S.Si.", mapel: "Kimia", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777909734/4fc9d07e-05fb-4385-b8a1-8a80ed92a13a_gtidi9.jpg" }
    ],
    
    // 20. GURU PPKn
    guruPpkn: [
        { nama: "Fifit Fitriani, S.Pd.", mapel: "PPKn", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777973378/d930be49-fc42-4482-b2fd-3ad5e0bb1248_aiocs8.jpg" },
        { nama: "Nisa Fatarina, S.Pd.", mapel: "PPKn", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777973518/5951bb1f-92be-40c8-91a9-067d7785a558_wlqrzj.jpg" },
        { nama: "Vivi Nuralfiah Diningsih, S.Pd.", mapel: "PPKn", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777973515/32227dd1-cf26-4203-ba1c-c40f0c95bb8a_abeevv.jpg" },
        { nama: "Zulfa Lutfiah, S.Sos", mapel: "PPKn", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777973516/fecbb037-7d5b-463d-a450-bf049d2e33e0_xhqedf.jpg" }
    ],
    
    // 21. GURU PJOK
    guruPjok: [
        { nama: "Haris Akbar Wisnu Aji, S.Pd.", mapel: "PJOK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777972628/dcd722a5-edcb-4c48-8464-83477037bff1_ov8zzm.jpg" },
        { nama: "Dadi Setiadi, S.Pd.", mapel: "PJOK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777972631/5bced4d7-160e-43c3-ac61-8b60c7f3a607_fh9djt.jpg" },
        { nama: "Rosadi Fahmi Nur Hakim, S.Pd.", mapel: "PJOK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777972634/406c3255-9be6-4d14-af15-35696205b994_juq2zp.jpg" },
        { nama: "Husen Mustopa, S.Pd.", mapel: "PJOK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777972636/456335ad-b507-4939-b24d-9ea819087599_rpeci1.jpg" },
        { nama: "Sugeng Siswanto, S.Pd.", mapel: "PJOK", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777972637/229e84f2-9b16-4d09-8b72-93c848029bf2_bdg2ug.jpg" }
    ],
    
    // 22. GURU PRAKARYA
    guruPrakarya: [
        { nama: "Tri Suraningsih, S.Pd.", mapel: "Prakarya", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777974245/c2e7d804-485a-4ba3-90ca-b8567942bbb3_ssfboe.jpg" },
        { nama: "Agung Wijaya, S.Pd.", mapel: "Prakarya", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777974243/0c4e6790-4e8d-443b-883c-942815dfeeb8_uyzq9j.jpg" }
    ],
    
    // 23. GURU SEJARAH
    guruSejarah: [
        { nama: "Indrajaya Simatupang, S.Pd", mapel: "Sejarah", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777974251/b2b33f80-53ae-494c-a49b-9f9fe190207f_jpqk43.jpg" },
        { nama: "Fras Bagasrama Tri Sunasep, S.Pd.", mapel: "Sejarah", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777974248/f43cb396-2675-4b9a-91d7-5acc4450b9b5_loafdn.jpg" },
        { nama: "Desi Rifki Ameilia, S.Pd.", mapel: "Sejarah", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777974253/14310802-70f4-4d73-8726-14a030f61e0a_tnmlsx.jpg" }
    ],
    
    // 24. GURU EKONOMI
    guruEkonomi: [
        { nama: "Anida Febrimayanti, S.Pd", mapel: "Ekonomi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777905918/c47feee5-5086-4e13-b37a-3447e63eb173_hf5sfk.jpg" },
        { nama: "Nova Arif Wicaksono, S.Pd.", mapel: "Ekonomi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777905925/020d3841-a4cf-4139-9747-66a19f00dc3e_rktya8.jpg" },
        { nama: "Rahma Yuniarti, S.Pd.", mapel: "Ekonomi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777905922/3f98b7b2-6e13-4c3b-9a50-c9c6e6992d6d_lggab5.jpg" }
    ],
    
    // 25. GURU INFORMATIKA
    guruInformatika: [
        { nama: "Rakim, S.Kom, MM", mapel: "Informatika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777909541/3a067e66-f39c-419d-b293-7fe4dfbedf46_bimjcq.jpg" },
        { nama: "Syamsuardi, S.Pd, S.Kom", mapel: "Informatika", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777909544/e5c140d2-78ea-42f4-bf20-c2dbe0dbb5f4_j0uvib.jpg" }
    ],
    
    // ========== TAMBAHAN: GURU BIOLOGI ==========
    guruBiologi: [
        { nama: "Mauliddina Trishasti, S.Pd.", mapel: "Biologi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777904966/a01f560c-6fbf-49eb-805b-c39720b021fa_oku6lf.jpg" },
        { nama: "Siti Nuraila Fitrianti, S.SI", mapel: "Biologi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777904974/38efaa51-b196-4954-9b1c-1a7fe4b92f52_dyyou0.jpg" },
        { nama: "Tri Suraningsih, M.Pd.", mapel: "Biologi", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777904970/d9ac35fd-04d8-4161-80c8-b5c4b1aee0c3_ppwros.jpg" },
    ],
    
    // 26. PETUGAS KEAMANAN
    staffKeamanan: [
        { nama: "M. ACHMAD ONNY", jabatan: "Satpam", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777900018/M._ACHMAD_ONNY_ps6edg.jpg" },
        { nama: "Toto Taufik Hidayatulloh", jabatan: "Satpam", foto:"https://res.cloudinary.com/duemncbn0/image/upload/v1777900358/e876bb17-226a-44fc-943f-551ebe4f1120_xsmdwv.jpg" },
        { nama: "Robi Rodiana", jabatan: "Satpam", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777900021/ROBI_RODIANA_geuxpi.jpg" },
        { nama: "Suhendi", jabatan: "Satpam", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777901110/59fe33c2-464c-491a-bc08-5d5d036c15e4_obf7od.jpg" },
        { nama: "Muji Kusnadi", jabatan: "Satpam", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777901114/b238bec8-bc52-4607-a1a1-cee5723c65a2_os19st.jpg" }
    ],
    
    // PETUGAS KEBERSIHAN
    staffKebersihan: [
        { nama: "Agung Priyono", jabatan: "Petugas Kebersihan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777901367/f5274170-1202-4e26-9fbd-1f9499928b40_r5dtlq.jpg" },
        { nama: "Asan", jabatan: "Petugas Kebersihan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777901248/ASAN_rqty6k.jpg" },
        { nama: "Endin", jabatan: "Petugas Kebersihan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777901253/ENDIN_vhpjgv.jpg" },
        { nama: "Pian Sopian", jabatan: "Petugas Kebersihan", foto: "https://res.cloudinary.com/duemncbn0/image/upload/v1777901375/07a517b9-9e10-4908-ad6e-e54e4dbe71d0_g6qdwa.jpg" },
    ]
};