// sakura.js - VERSI LENGKAP
// ==================== DISABLE RIGHT CLICK & SHORTCUT KEYS ====================
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.addEventListener("keydown", function(e) {
    if (e.key === "F12") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
    }
    if (e.key === "Escape") {
        closeModal();
        closePetaPeluangPopup();
    }
});

// ==================== HAMBURGER MENU ====================
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

// ==================== POPUP PETA PELUANG ====================
function showPetaPeluangPopup() {
    const popup = document.getElementById('petaPeluangPopup');
    if (popup) {
        popup.classList.add('show');
    }
}

function closePetaPeluangPopup() {
    const popup = document.getElementById('petaPeluangPopup');
    if (popup) {
        popup.classList.remove('show');
    }
}

function handlePetaPopupButton() {
    closePetaPeluangPopup();
    showPage('spmb');
}

function closePetaPopupOnOutsideClick(event) {
    const popup = document.getElementById('petaPeluangPopup');
    const popupContent = document.querySelector('.peta-peluang-popup-content');
    
    if (popup && popup.classList.contains('show')) {
        if (!popupContent.contains(event.target)) {
            closePetaPeluangPopup();
        }
    }
}

// ==================== INTRO SCREEN & POPUP ====================
window.addEventListener('load', function() {
    const introScreen = document.getElementById('introScreen');
    
    if (introScreen) {
        setTimeout(function() {
            introScreen.classList.add('hide');
            setTimeout(function() {
                introScreen.style.display = 'none';
            }, 300);
            
            setTimeout(function() {
                showPetaPeluangPopup();
            }, 200);
        }, 800);
    }
    
    setTimeout(function() {
        const welcomePopup = document.getElementById('welcomePopup');
        if (welcomePopup) {
            welcomePopup.classList.add('show');
            setTimeout(function() {
                welcomePopup.classList.remove('show');
            }, 4000);
        }
    }, 1200);
});

document.addEventListener('DOMContentLoaded', function() {
    const closePetaBtn = document.querySelector('.close-peta-popup');
    if (closePetaBtn) {
        closePetaBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closePetaPeluangPopup();
        });
    }
    
    document.addEventListener('click', closePetaPopupOnOutsideClick);
    document.addEventListener('touchstart', closePetaPopupOnOutsideClick);
    
    const petaPopup = document.getElementById('petaPeluangPopup');
    if (petaPopup) {
        petaPopup.addEventListener('click', function(e) {
            if (e.target === petaPopup) {
                closePetaPeluangPopup();
            }
        });
    }
});

// ==================== PDF VIEWER ====================
let pdfDoc = null;
let currentPage = 1;
let totalPages = 0;

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

function loadPDF() {
    const canvas = document.getElementById('pdfCanvas');
    if (!canvas) return;
    
    const demoPdf = 'https://arxiv.org/pdf/astro-ph/9603019v1.pdf';
    
    pdfjsLib.getDocument(demoPdf).promise.then(function(pdf) {
        pdfDoc = pdf;
        totalPages = pdf.numPages;
        const pageInfo = document.getElementById('pageInfo');
        if (pageInfo) pageInfo.textContent = `Halaman ${currentPage} / ${totalPages}`;
        renderPage(currentPage);
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
        const pageInfo = document.getElementById('pageInfo');
        if (pageInfo) pageInfo.textContent = 'PDF tidak dapat dimuat';
    });
}

function renderPage(pageNum) {
    if (!pdfDoc) return;
    
    pdfDoc.getPage(pageNum).then(function(page) {
        const canvas = document.getElementById('pdfCanvas');
        const ctx = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        
        page.render(renderContext);
        const pageInfo = document.getElementById('pageInfo');
        if (pageInfo) pageInfo.textContent = `Halaman ${pageNum} / ${totalPages}`;
    });
}

function onPrevPage() {
    if (currentPage <= 1) return;
    currentPage--;
    renderPage(currentPage);
}

function onNextPage() {
    if (currentPage >= totalPages) return;
    currentPage++;
    renderPage(currentPage);
}

// ==================== SHOW PAGE FUNCTION ====================
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
    
    if (pageId === 'informasi') {
        setTimeout(function() {
            loadPDF();
        }, 100);
        
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');
        if (prevBtn) {
            prevBtn.onclick = onPrevPage;
        }
        if (nextBtn) {
            nextBtn.onclick = onNextPage;
        }
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// ==================== POLAROID CARD ====================
function createPolaroidCard(item, type) {
    let displayName = item.nama || item.name;
    let subtitle = '';
    
    if (type.includes('guru')) {
        subtitle = `<div class="mapel">${item.mapel || 'Guru'}</div>`;
    } else {
        subtitle = `<div class="jabatan">${item.jabatan || 'Staff'}</div>`;
    }
    
    let fotoUrl = item.foto || 'https://placehold.co/300x300?text=No+Image';
    
    return `
        <div class="polaroid-card" onclick="showImageModal('${fotoUrl}', '${displayName.replace(/'/g, "\\'")}', '${subtitle.replace(/<div class="[^"]*">|<\/div>/g, '').replace(/'/g, "\\'")}')">
            <img src="${fotoUrl}" alt="${displayName}" class="polaroid-photo" onerror="this.src='https://placehold.co/300x300?text=No+Image'">
            <h4>${displayName}</h4>
            ${subtitle}
        </div>
    `;
}

// ==================== LOAD STRUKTUR ====================
function loadStrukturOrganisasi() {
    const sambutanCard = document.getElementById('sambutan-card');
    if (sambutanCard && typeof sambutanKepalaSekolah !== 'undefined') {
        let fotoUrl = sambutanKepalaSekolah.foto || 'https://placehold.co/120x120?text=Kepsek';
        sambutanCard.innerHTML = `
            <img src="${fotoUrl}" alt="${sambutanKepalaSekolah.nama}" class="sambutan-foto" onerror="this.src='https://placehold.co/120x120?text=Kepsek'">
            <h4>${sambutanKepalaSekolah.nama}</h4>
            <p class="sambutan-jabatan">Kepala Sekolah</p>
            <div class="sambutan-text">"${sambutanKepalaSekolah.sambutan}"</div>
        `;
    }
    
    const kepalaContainer = document.getElementById('kepala-sekolah-container');
    if (kepalaContainer && dataStrukturOrganisasi.kepala) {
        kepalaContainer.innerHTML = dataStrukturOrganisasi.kepala.map(k => createPolaroidCard(k, 'kepala')).join('');
    }
    
    const wakilContainer = document.getElementById('wakil-kepala-container');
    if (wakilContainer && dataStrukturOrganisasi.wakilKepala) {
        wakilContainer.innerHTML = dataStrukturOrganisasi.wakilKepala.map(w => createPolaroidCard(w, 'wakil')).join('');
    }
    
    const bkContainer = document.getElementById('bk-container');
    if (bkContainer && dataStrukturOrganisasi.bk) {
        bkContainer.innerHTML = dataStrukturOrganisasi.bk.map(b => createPolaroidCard(b, 'bk')).join('');
    }
    
    const staffTuContainer = document.getElementById('staff-tu-container');
    if (staffTuContainer && dataStrukturOrganisasi.staffTu) {
        staffTuContainer.innerHTML = dataStrukturOrganisasi.staffTu.map(s => createPolaroidCard(s, 'staff')).join('');
    }
    
    const komiteContainer = document.getElementById('komite-container');
    if (komiteContainer && dataStrukturOrganisasi.komite) {
        komiteContainer.innerHTML = dataStrukturOrganisasi.komite.map(k => createPolaroidCard(k, 'komite')).join('');
    }
    
    const guruSosiologi = document.getElementById('guru-sosiologi-container');
    if (guruSosiologi && dataStrukturOrganisasi.guruSosiologi) {
        guruSosiologi.innerHTML = dataStrukturOrganisasi.guruSosiologi.map(g => createPolaroidCard(g, 'guru')).join('');
    }

    const guruBindo = document.getElementById('guru-bindo-container');
    if (guruBindo && dataStrukturOrganisasi.guruBindo) {
        guruBindo.innerHTML = dataStrukturOrganisasi.guruBindo.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruMatematika = document.getElementById('guru-matematika-container');
    if (guruMatematika && dataStrukturOrganisasi.guruMatematika) {
        guruMatematika.innerHTML = dataStrukturOrganisasi.guruMatematika.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruFisika = document.getElementById('guru-fisika-container');
    if (guruFisika && dataStrukturOrganisasi.guruFisika) {
        guruFisika.innerHTML = dataStrukturOrganisasi.guruFisika.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruGeografi = document.getElementById('guru-geografi-container');
    if (guruGeografi && dataStrukturOrganisasi.guruGeografi) {
        guruGeografi.innerHTML = dataStrukturOrganisasi.guruGeografi.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruBasunda = document.getElementById('guru-basunda-container');
    if (guruBasunda && dataStrukturOrganisasi.guruBasunda) {
        guruBasunda.innerHTML = dataStrukturOrganisasi.guruBasunda.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruBinggris = document.getElementById('guru-binggris-container');
    if (guruBinggris && dataStrukturOrganisasi.guruBinggris) {
        guruBinggris.innerHTML = dataStrukturOrganisasi.guruBinggris.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruBajepang = document.getElementById('guru-bajepang-container');
    if (guruBajepang && dataStrukturOrganisasi.guruBajepang) {
        guruBajepang.innerHTML = dataStrukturOrganisasi.guruBajepang.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruSbdp = document.getElementById('guru-sbdp-container');
    if (guruSbdp && dataStrukturOrganisasi.guruSbdp) {
        guruSbdp.innerHTML = dataStrukturOrganisasi.guruSbdp.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruPai = document.getElementById('guru-pai-container');
    if (guruPai && dataStrukturOrganisasi.guruPai) {
        guruPai.innerHTML = dataStrukturOrganisasi.guruPai.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruPakristen = document.getElementById('guru-pakristen-container');
    if (guruPakristen && dataStrukturOrganisasi.guruPakristen) {
        guruPakristen.innerHTML = dataStrukturOrganisasi.guruPakristen.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruKimia = document.getElementById('guru-kimia-container');
    if (guruKimia && dataStrukturOrganisasi.guruKimia) {
        guruKimia.innerHTML = dataStrukturOrganisasi.guruKimia.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruPpkn = document.getElementById('guru-ppkn-container');
    if (guruPpkn && dataStrukturOrganisasi.guruPpkn) {
        guruPpkn.innerHTML = dataStrukturOrganisasi.guruPpkn.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruPjok = document.getElementById('guru-pjok-container');
    if (guruPjok && dataStrukturOrganisasi.guruPjok) {
        guruPjok.innerHTML = dataStrukturOrganisasi.guruPjok.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruPrakarya = document.getElementById('guru-prakarya-container');
    if (guruPrakarya && dataStrukturOrganisasi.guruPrakarya) {
        guruPrakarya.innerHTML = dataStrukturOrganisasi.guruPrakarya.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruSejarah = document.getElementById('guru-sejarah-container');
    if (guruSejarah && dataStrukturOrganisasi.guruSejarah) {
        guruSejarah.innerHTML = dataStrukturOrganisasi.guruSejarah.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruEkonomi = document.getElementById('guru-ekonomi-container');
    if (guruEkonomi && dataStrukturOrganisasi.guruEkonomi) {
        guruEkonomi.innerHTML = dataStrukturOrganisasi.guruEkonomi.map(g => createPolaroidCard(g, 'guru')).join('');
    }
    
    const guruInformatika = document.getElementById('guru-informatika-container');
    if (guruInformatika && dataStrukturOrganisasi.guruInformatika) {
        guruInformatika.innerHTML = dataStrukturOrganisasi.guruInformatika.map(g => createPolaroidCard(g, 'guru')).join('');
    }

    const guruBiologi = document.getElementById('guru-biologi-container');
    if (guruBiologi && dataStrukturOrganisasi.guruBiologi) {
        guruBiologi.innerHTML = dataStrukturOrganisasi.guruBiologi.map(g => createPolaroidCard(g, 'guru')).join('');
    }

    const staffKeamanan = document.getElementById('staff-keamanan-container');
    if (staffKeamanan && dataStrukturOrganisasi.staffKeamanan) {
        staffKeamanan.innerHTML = dataStrukturOrganisasi.staffKeamanan.map(s => createPolaroidCard(s, 'staff')).join('');
    }
    
    const staffKebersihan = document.getElementById('staff-kebersihan-container');
    if (staffKebersihan && dataStrukturOrganisasi.staffKebersihan) {
        staffKebersihan.innerHTML = dataStrukturOrganisasi.staffKebersihan.map(s => createPolaroidCard(s, 'staff')).join('');
    }
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// ==================== IMAGE MODAL ====================
function showImageModal(imgSrc, title, subtitle) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = imgSrc;
        if (caption) {
            caption.innerHTML = `<strong>${title}</strong><br>${subtitle}`;
        }
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ==================== INITIALIZATION ====================
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
    showPage('home');
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});

// SKIP INTRO
function skipIntro() {
    const introScreen = document.getElementById('introScreen');
    if (introScreen && !introScreen.classList.contains('hide')) {
        introScreen.classList.add('hide');
        setTimeout(function() {
            introScreen.style.display = 'none';
        }, 300);
        setTimeout(function() {
            showPetaPeluangPopup();
        }, 100);
    }
}

document.addEventListener('click', function(e) {
    skipIntro();
});

document.addEventListener('touchstart', function(e) {
    skipIntro();
});