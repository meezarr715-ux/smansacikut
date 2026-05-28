// sakura.js - LENGKAP DENGAN HAMBURGER MENU
document.addEventListener("contextmenu", function(e) { e.preventDefault(); });

document.addEventListener("keydown", function(e) {
    if (e.key === "F12") e.preventDefault();
    if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) e.preventDefault();
    if (e.ctrlKey && e.key === "u") e.preventDefault();
    if (e.ctrlKey && e.key === "s") e.preventDefault();
    if (e.key === "Escape") { closeModal(); closePetaPeluangPopup(); }
});

// HAMBURGER MENU - WAJIB ADA
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

if (hamburgerMenu) {
    hamburgerMenu.onclick = () => {
        navbarNav.classList.toggle('active');
    };
}

// Tutup hamburger menu saat klik di luar
document.addEventListener('click', function(e) {
    if (navbarNav && hamburgerMenu && !hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// POPUP PETA PELUANG
function showPetaPeluangPopup() { const popup = document.getElementById('petaPeluangPopup'); if (popup) popup.classList.add('show'); }
function closePetaPeluangPopup() { const popup = document.getElementById('petaPeluangPopup'); if (popup) popup.classList.remove('show'); }
function handlePetaPopupButton() { closePetaPeluangPopup(); showPage('spmb'); }
function closePetaPopupOnOutsideClick(event) {
    const popup = document.getElementById('petaPeluangPopup');
    const popupContent = document.querySelector('.peta-peluang-popup-content');
    if (popup && popup.classList.contains('show') && !popupContent.contains(event.target)) closePetaPeluangPopup();
}

// INTRO SCREEN
window.addEventListener('load', function() {
    const introScreen = document.getElementById('introScreen');
    if (introScreen) {
        setTimeout(() => {
            introScreen.classList.add('hide');
            setTimeout(() => { introScreen.style.display = 'none'; }, 500);
            setTimeout(() => { showPetaPeluangPopup(); }, 300);
        }, 3000);
    }
    setTimeout(() => {
        const wp = document.getElementById('welcomePopup');
        if (wp) { wp.classList.add('show'); setTimeout(() => wp.classList.remove('show'), 5000); }
    }, 4000);
});

document.addEventListener('DOMContentLoaded', function() {
    const cp = document.querySelector('.close-peta-popup');
    if (cp) cp.addEventListener('click', (e) => { e.stopPropagation(); closePetaPeluangPopup(); });
    document.addEventListener('click', closePetaPopupOnOutsideClick);
    document.addEventListener('touchstart', closePetaPopupOnOutsideClick);
    const pp = document.getElementById('petaPeluangPopup');
    if (pp) pp.addEventListener('click', (e) => { if (e.target === pp) closePetaPeluangPopup(); });
});

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const ap = document.getElementById(`page-${pageId}`);
    if (ap) ap.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) link.classList.add('active');
    });
    if (navbarNav) navbarNav.classList.remove('active');
    if (pageId === 'profil') loadStrukturOrganisasi();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof feather !== 'undefined') feather.replace();
}

function createPolaroidCard(item, type) {
    let displayName = item.nama || item.name;
    let subtitle = type.includes('guru') ? `<div class="mapel">${item.mapel || 'Guru'}</div>` : `<div class="jabatan">${item.jabatan || 'Staff'}</div>`;
    let fotoUrl = item.foto || 'https://placehold.co/300x300?text=No+Image';
    return `<div class="polaroid-card" onclick="showImageModal('${fotoUrl}', '${displayName.replace(/'/g, "\\'")}', '${subtitle.replace(/<div class="[^"]*">|<\/div>/g, '').replace(/'/g, "\\'")}')">
        <img src="${fotoUrl}" alt="${displayName}" class="polaroid-photo" onerror="this.src='https://placehold.co/300x300?text=No+Image'">
        <h4>${displayName}</h4>${subtitle}</div>`;
}

function loadStrukturOrganisasi() {
    const sc = document.getElementById('sambutan-card');
    if (sc && typeof sambutanKepalaSekolah !== 'undefined') {
        sc.innerHTML = `<img src="${sambutanKepalaSekolah.foto}" alt="${sambutanKepalaSekolah.nama}" class="sambutan-foto" onerror="this.src='https://placehold.co/120x120?text=Kepsek'">
            <h4>${sambutanKepalaSekolah.nama}</h4><p class="sambutan-jabatan">Kepala Sekolah</p>
            <div class="sambutan-text">"${sambutanKepalaSekolah.sambutan}"</div>`;
    }
    const containers = ['kepala-sekolah-container', 'wakil-kepala-container', 'bk-container', 'staff-tu-container', 'komite-container', 'guru-sosiologi-container', 'guru-bindo-container', 'guru-matematika-container', 'guru-fisika-container', 'guru-geografi-container', 'guru-basunda-container', 'guru-binggris-container', 'guru-bajepang-container', 'guru-sbdp-container', 'guru-pai-container', 'guru-pakristen-container', 'guru-kimia-container', 'guru-ppkn-container', 'guru-pjok-container', 'guru-prakarya-container', 'guru-sejarah-container', 'guru-ekonomi-container', 'guru-informatika-container', 'guru-biologi-container', 'staff-keamanan-container', 'staff-kebersihan-container'];
    const keys = ['kepala', 'wakilKepala', 'bk', 'staffTu', 'komite', 'guruSosiologi', 'guruBindo', 'guruMatematika', 'guruFisika', 'guruGeografi', 'guruBasunda', 'guruBinggris', 'guruBajepang', 'guruSbdp', 'guruPai', 'guruPakristen', 'guruKimia', 'guruPpkn', 'guruPjok', 'guruPrakarya', 'guruSejarah', 'guruEkonomi', 'guruInformatika', 'guruBiologi', 'staffKeamanan', 'staffKebersihan'];
    for (let i = 0; i < containers.length; i++) {
        const cont = document.getElementById(containers[i]);
        if (cont && dataStrukturOrganisasi[keys[i]]) cont.innerHTML = dataStrukturOrganisasi[keys[i]].map(k => createPolaroidCard(k, keys[i].includes('guru') ? 'guru' : 'staff')).join('');
    }
    if (typeof feather !== 'undefined') feather.replace();
}

function showImageModal(imgSrc, title, subtitle) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = imgSrc;
        if (caption) caption.innerHTML = `<strong>${title}</strong><br>${subtitle}`;
        document.body.style.overflow = 'hidden';
    }
}
function closeModal() { const modal = document.getElementById('imageModal'); if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; } }

document.addEventListener('DOMContentLoaded', function() {
    const cb = document.querySelector('.close-modal');
    if (cb) cb.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === document.getElementById('imageModal')) closeModal(); });
    loadStrukturOrganisasi();
    showPage('home');
    if (typeof feather !== 'undefined') feather.replace();
});

function skipIntro() {
    const intro = document.getElementById('introScreen');
    if (intro && !intro.classList.contains('hide')) { intro.classList.add('hide'); setTimeout(() => intro.style.display = 'none', 300); setTimeout(() => showPetaPeluangPopup(), 100); }
}
document.addEventListener('click', (e) => skipIntro());
document.addEventListener('touchstart', (e) => skipIntro());