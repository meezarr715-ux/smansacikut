// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// ========== INTRO SCREEN ==========
window.addEventListener('load', function() {
    const introScreen = document.getElementById('introScreen');
    
    // Intro hilang setelah 2.5 detik (bisa diatur)
    setTimeout(function() {
        introScreen.classList.add('hide');
        
        setTimeout(function() {
            introScreen.style.display = 'none';
        }, 800);
    }, 2500);
    
    // Welcome Popup - muncul setelah intro selesai
    setTimeout(function() {
        const welcomePopup = document.getElementById('welcomePopup');
        welcomePopup.classList.add('show');
        
        // Popup hilang setelah 5 detik
        setTimeout(function() {
            welcomePopup.classList.remove('show');
        }, 5000);
    }, 3300);
});

// ========== FUNGSI UNTUK KARYA SAKURA (Redirect) ==========
function openKaryaSakura() {
    window.open('https://sites.google.com/guru.sma.belajar.id/karyasakura', '_blank');
    // Tetap aktifkan nav yang diklik
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

// ========== COUNTDOWN TIMER SPMB ==========
function startCountdown() {
    const targetDate = new Date();
    // ATUR TANGGAL TARGET DISINI - format: tahun, bulan-1, tanggal, jam, menit, detik
    // Contoh: 15 Januari 2026 jam 00:00:00
    targetDate.setFullYear(2026, 0, 15, 0, 0, 0);
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            document.getElementById('days').innerHTML = '00';
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('seconds').innerHTML = '00';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ========== FUNGSI UNTUK MENGGANTI HALAMAN ==========
function showPage(pageId) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Tampilkan halaman yang dipilih
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update active class di navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });
    
    // Tutup menu mobile
    navbarNav.classList.remove('active');
    
    // Load data spesifik per halaman
    if (pageId === 'profil') {
        loadProfilData();
    }
    
    // PERBAIKAN: Untuk halaman home, pastikan animasi hero content berjalan
    // dengan mereset dan memicu ulang animasi
    if (pageId === 'home') {
        const heroContent = document.querySelector('#page-home .hero .content');
        if (heroContent) {
            // Reset animasi dengan menghapus dan menambahkan kembali class
            heroContent.style.animation = 'none';
            heroContent.offsetHeight; // Trigger reflow
            heroContent.style.animation = 'heroContentFade 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        }
    }
    
    feather.replace();
}

// ========== LOAD PROFIL DATA ==========
function loadProfilData() {
    // Load Sambutan Kepsek
    const sambutanCard = document.getElementById('sambutan-card');
    if (sambutanCard) {
        sambutanCard.innerHTML = `
            <img src="${sambutanKepsek.foto}" alt="${sambutanKepsek.nama}" class="sambutan-foto" onerror="this.src='https://via.placeholder.com/120'">
            <h4>${sambutanKepsek.nama}</h4>
            <p class="sambutan-jabatan">${sambutanKepsek.jabatan}</p>
            <p class="sambutan-teks">"${sambutanKepsek.teks}"</p>
        `;
    }
    
    // Load Kepala Sekolah (Struktur Level 1)
    const kepalaCard = document.getElementById('kepala-sekolah-card');
    if (kepalaCard) {
        kepalaCard.innerHTML = `
            <div class="struktur-card" style="animation-delay: 0.05s">
                <img src="${kepalaSekolah.foto}" alt="${kepalaSekolah.nama}" class="struktur-foto" onerror="this.src='https://via.placeholder.com/100'">
                <h4>${kepalaSekolah.nama}</h4>
                <p>${kepalaSekolah.jabatan}</p>
            </div>
        `;
    }
    
    // Load Koordinator (Struktur Level 2)
    const koordinatorContainer = document.getElementById('koordinator-container');
    if (koordinatorContainer) {
        let koordinatorHtml = '';
        koordinator.forEach((item, index) => {
            koordinatorHtml += `
                <div class="struktur-card" style="animation-delay: ${0.1 + (index * 0.05)}s">
                    <img src="${item.foto}" alt="${item.nama}" class="struktur-foto" onerror="this.src='https://via.placeholder.com/100'">
                    <h4>${item.nama}</h4>
                    <p>${item.jabatan}</p>
                </div>
            `;
        });
        koordinatorContainer.innerHTML = koordinatorHtml;
    }
    
    // Load Guru Berdasarkan Mapel
    const guruContainer = document.getElementById('guru-by-mapel');
    if (guruContainer) {
        let guruHtml = '';
        
        for (const [mapel, guruList] of Object.entries(guruByMapel)) {
            let guruItems = '';
            guruList.forEach(guru => {
                guruItems += `
                    <div class="struktur-card">
                        <img src="${guru.foto}" alt="${guru.nama}" class="struktur-foto" onerror="this.src='https://via.placeholder.com/100'">
                        <h4>${guru.nama}</h4>
                        <p>${mapel}</p>
                    </div>
                `;
            });
            
            guruHtml += `
                <div class="mapel-group">
                    <h4 class="mapel-title">${mapel}</h4>
                    <div class="mapel-grid">
                        ${guruItems}
                    </div>
                </div>
            `;
        }
        
        guruContainer.innerHTML = guruHtml;
    }
}

// ========== FUNGSI UNTUK MODAL GAMBAR ==========
let currentFotoList = [];
let currentFotoIndex = 0;

function openModalKelas(angkatanId, kelas, index) {
    currentFotoList = getFotoKelas(angkatanId, kelas);
    currentFotoIndex = index;
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImg.src = currentFotoList[index].src;
    modalCaption.innerHTML = `${currentFotoList[index].nama} - Kelas ${kelas} (${index + 1}/${currentFotoList.length})`;
    
    document.body.style.overflow = 'hidden';
}

function openModalEkskul(ekskulId, itemName, index) {
    const semuaFoto = getFotoEkskul(ekskulId);
    currentFotoList = semuaFoto.filter(f => f.nama.includes(itemName));
    currentFotoIndex = index;
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImg.src = currentFotoList[index].src;
    modalCaption.innerHTML = `${currentFotoList[index].nama} (${index + 1}/${currentFotoList.length})`;
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeModalImage(direction) {
    currentFotoIndex += direction;
    
    if (currentFotoIndex < 0) {
        currentFotoIndex = currentFotoList.length - 1;
    } else if (currentFotoIndex >= currentFotoList.length) {
        currentFotoIndex = 0;
    }
    
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modalImg.src = currentFotoList[currentFotoIndex].src;
    modalCaption.innerHTML = `${currentFotoList[currentFotoIndex].nama} (${currentFotoIndex + 1}/${currentFotoList.length})`;
}

// Event listener untuk modal
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('imageModal');
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                changeModalImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeModalImage(1);
            }
        }
    });
    
    // Load data awal
    loadProfilData();
    startCountdown();
    
    // Set active page default
    showPage('home');
});