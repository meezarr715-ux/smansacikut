// HAMBURGER MENU
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

if (hamburgerMenu) {
    hamburgerMenu.onclick = () => {
        navbarNav.classList.toggle('active');
    };
}

document.addEventListener('click', function(e) {
    if (navbarNav && hamburgerMenu && !hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// INTRO SCREEN
window.addEventListener('load', function() {
    const introScreen = document.getElementById('introScreen');
    if (introScreen) {
        setTimeout(function() {
            introScreen.classList.add('hide');
            setTimeout(function() {
                introScreen.style.display = 'none';
            }, 500);
        }, 2500);
    }
    
    setTimeout(function() {
        const welcomePopup = document.getElementById('welcomePopup');
        if (welcomePopup) {
            welcomePopup.classList.add('show');
            setTimeout(function() {
                welcomePopup.classList.remove('show');
            }, 5000);
        }
    }, 3000);
});

// COUNTDOWN TIMER
function startCountdown() {
    const targetDate = new Date();
    targetDate.setFullYear(2026, 0, 15, 0, 0, 0);
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (!daysEl) return;
        
        if (diff <= 0) {
            daysEl.innerHTML = '00';
            hoursEl.innerHTML = '00';
            minutesEl.innerHTML = '00';
            secondsEl.innerHTML = '00';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        daysEl.innerHTML = days.toString().padStart(2, '0');
        hoursEl.innerHTML = hours.toString().padStart(2, '0');
        minutesEl.innerHTML = minutes.toString().padStart(2, '0');
        secondsEl.innerHTML = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// SHOW PAGE FUNCTION
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
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });
    
    if (navbarNav) {
        navbarNav.classList.remove('active');
    }
    
    if (pageId === 'profil') {
        loadStrukturOrganisasi();
    }
    
    if (pageId === 'spmb') {
        startCountdown();
    }
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// LOAD STRUKTUR ORGANISASI
function loadStrukturOrganisasi() {
    const sambutanCard = document.getElementById('sambutan-card');
    if (sambutanCard && typeof sambutanKepalaSekolah !== 'undefined') {
        sambutanCard.innerHTML = `
            <img src="${sambutanKepalaSekolah.foto}" alt="${sambutanKepalaSekolah.nama}" class="sambutan-foto" onerror="this.src='https://via.placeholder.com/100'">
            <h4>${sambutanKepalaSekolah.nama}</h4>
            <p class="sambutan-jabatan">Kepala Sekolah</p>
            <div class="sambutan-text">"${sambutanKepalaSekolah.sambutan}"</div>
        `;
    }
    
    const kepalaContainer = document.getElementById('kepala-sekolah-card');
    if (kepalaContainer && typeof dataStrukturOrganisasi !== 'undefined' && dataStrukturOrganisasi.kepala && dataStrukturOrganisasi.kepala.length > 0) {
        const kepala = dataStrukturOrganisasi.kepala[0];
        kepalaContainer.innerHTML = `
            <div class="struktur-card" style="width: 250px;">
                <img src="${kepala.foto}" alt="${kepala.nama}" class="struktur-foto" onerror="this.src='https://via.placeholder.com/80'">
                <h4>${kepala.nama}</h4>
                <p>${kepala.jabatan}</p>
            </div>
        `;
    }
    
    const wakilContainer = document.getElementById('wakil-container');
    if (wakilContainer && typeof dataStrukturOrganisasi !== 'undefined' && dataStrukturOrganisasi.wakil) {
        let wakilHtml = '';
        dataStrukturOrganisasi.wakil.forEach((wakil) => {
            wakilHtml += `
                <div class="struktur-card">
                    <img src="${wakil.foto}" alt="${wakil.nama}" class="struktur-foto" onerror="this.src='https://via.placeholder.com/80'">
                    <h4>${wakil.nama}</h4>
                    <p>${wakil.jabatan}</p>
                </div>
            `;
        });
        wakilContainer.innerHTML = wakilHtml;
    }
    
    const guruContainer = document.getElementById('guru-container');
    if (guruContainer && typeof dataStrukturOrganisasi !== 'undefined' && dataStrukturOrganisasi.guru) {
        let guruHtml = '';
        for (const [mapel, guruList] of Object.entries(dataStrukturOrganisasi.guru)) {
            guruList.forEach((guru) => {
                guruHtml += `
                    <div class="struktur-card">
                        <img src="${guru.foto}" alt="${guru.nama}" class="struktur-foto" onerror="this.src='https://via.placeholder.com/80'">
                        <h4>${guru.nama}</h4>
                        <p>Guru ${mapel}</p>
                    </div>
                `;
            });
        }
        guruContainer.innerHTML = guruHtml;
    }
    
    const staffContainer = document.getElementById('staff-container');
    if (staffContainer && typeof dataStrukturOrganisasi !== 'undefined' && dataStrukturOrganisasi.staff) {
        let staffHtml = '';
        dataStrukturOrganisasi.staff.forEach((staff) => {
            staffHtml += `
                <div class="struktur-card">
                    <img src="${staff.foto}" alt="${staff.nama}" class="struktur-foto" onerror="this.src='https://via.placeholder.com/80'">
                    <h4>${staff.nama}</h4>
                    <p>${staff.jabatan}</p>
                </div>
            `;
        });
        staffContainer.innerHTML = staffHtml;
    }
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// CLOSE MODAL
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// INITIALIZATION
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
    
    loadStrukturOrganisasi();
    startCountdown();
    showPage('home');
});