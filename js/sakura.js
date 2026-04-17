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
    
    setTimeout(function() {
        introScreen.classList.add('hide');
        
        setTimeout(function() {
            introScreen.style.display = 'none';
        }, 600);
    }, 2500);
    
    // Welcome Popup
    setTimeout(function() {
        const welcomePopup = document.getElementById('welcomePopup');
        welcomePopup.classList.add('show');
        
        setTimeout(function() {
            welcomePopup.classList.remove('show');
        }, 5000);
    }, 3000);
});

// ========== COUNTDOWN TIMER SPMB ==========
function startCountdown() {
    const targetDate = new Date();
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
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const activePage = document.getElementById(`page-${pageId}`);
    if (activePage) {
        activePage.classList.add('active');
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });
    
    navbarNav.classList.remove('active');
    
    if (pageId === 'profil') {
        loadProfilData();
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
            <div class="sambutan-text">
                <h4>${sambutanKepsek.nama}</h4>
                <p>${sambutanKepsek.sambutan}</p>
            </div>
        `;
    }
    
    // Load Kepala Sekolah
    const kepalaCard = document.getElementById('kepala-card');
    if (kepalaCard && strukturData.kepalaSekolah) {
        kepalaCard.innerHTML = `
            <img src="${strukturData.kepalaSekolah.foto}" alt="${strukturData.kepalaSekolah.nama}" class="struktur-foto" onerror="this.src='https://via.placeholder.com/100'">
            <h4>${strukturData.kepalaSekolah.nama}</h4>
            <p>${strukturData.kepalaSekolah.jabatan}</p>
        `;
    }
    
    // Load Kurikulum
    const kurikulumCard = document.getElementById('kurikulum-card');
    if (kurikulumCard && strukturData.kurikulum) {
        kurikulumCard.innerHTML = `
            <img src="${strukturData.kurikulum.foto}" alt="${strukturData.kurikulum.nama}" class="struktur-foto" onerror="this.src='https://via.placeholder.com/100'">
            <h4>${strukturData.kurikulum.nama}</h4>
            <p>${strukturData.kurikulum.jabatan}</p>
        `;
    }
    
    // Load Kesiswaan
    const kesiswaanCard = document.getElementById('kesiswaan-card');
    if (kesiswaanCard && strukturData.kesiswaan) {
        kesiswaanCard.innerHTML = `
            <img src="${strukturData.kesiswaan.foto}" alt="${strukturData.kesiswaan.nama}" class="struktur-foto" onerror="this.src='https://via.placeholder.com/100'">
            <h4>${strukturData.kesiswaan.nama}</h4>
            <p>${strukturData.kesiswaan.jabatan}</p>
        `;
    }
    
    // Load BK
    const bkCard = document.getElementById('bk-card');
    if (bkCard && strukturData.bk) {
        bkCard.innerHTML = `
            <img src="${strukturData.bk.foto}" alt="${strukturData.bk.nama}" class="struktur-foto" onerror="this.src='https://via.placeholder.com/100'">
            <h4>${strukturData.bk.nama}</h4>
            <p>${strukturData.bk.jabatan}</p>
        `;
    }
    
    // Load Guru Berdasarkan Mapel
    const guruMapelGrid = document.getElementById('guru-mapel-grid');
    if (guruMapelGrid) {
        let html = '';
        for (const [mapel, guruList] of Object.entries(dataGuruByMapel)) {
            let guruHtml = '';
            guruList.forEach(guru => {
                guruHtml += `
                    <div class="guru-item">
                        <img src="${guru.foto}" alt="${guru.nama}" class="guru-item-foto" onerror="this.src='https://via.placeholder.com/70'">
                        <h5>${guru.nama}</h5>
                        <p>${mapel}</p>
                    </div>
                `;
            });
            html += `
                <div class="mapel-group">
                    <div class="mapel-title">${mapel}</div>
                    <div class="mapel-guru-list">
                        ${guruHtml}
                    </div>
                </div>
            `;
        }
        guruMapelGrid.innerHTML = html;
    }
    
    // Load Staff
    const staffGrid = document.getElementById('staff-grid');
    if (staffGrid) {
        let html = '';
        dataStaff.forEach((staff, index) => {
            html += `
                <div class="staff-card" style="animation-delay: ${0.03 * index}s">
                    <img src="${staff.foto}" alt="${staff.nama}" class="staff-foto" onerror="this.src='https://via.placeholder.com/80'">
                    <h4>${staff.nama}</h4>
                    <p>${staff.jabatan}</p>
                </div>
            `;
        });
        staffGrid.innerHTML = html;
    }
    
    feather.replace();
}

// ========== FUNGSI UNTUK MODAL GAMBAR ==========
let currentFotoList = [];
let currentFotoIndex = 0;

function openModalKelas(angkatanId, kelas, index) {
    // Coming Soon
}

function openModalEkskul(ekskulId, itemName, index) {
    // Coming Soon
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeModalImage(direction) {
    // Coming Soon
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
    
    startCountdown();
    loadProfilData();
    
    showPage('home');
});