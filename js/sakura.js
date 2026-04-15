// ========== Toggle Navbar Mobile ==========
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerBtn = document.querySelector('#hamburger-menu');

if (hamburgerBtn) {
    hamburgerBtn.onclick = function(e) {
        e.preventDefault();
        navbarNav.classList.toggle('active');
    };
}

document.addEventListener('click', function(e) {
    if (hamburgerBtn && navbarNav) {
        if (!hamburgerBtn.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove('active');
        }
    }
});

// ========== INTRO SCREEN ==========
function hideIntroAndShowWebsite() {
    const introScreen = document.getElementById('introScreen');
    const navbar = document.getElementById('mainNavbar');
    const pagesContainer = document.getElementById('pagesContainer');
    
    if (introScreen) {
        introScreen.classList.add('hide');
    }
    
    if (navbar) {
        navbar.classList.add('show');
    }
    
    if (pagesContainer) {
        pagesContainer.classList.add('show');
    }
    
    // Hapus intro dari DOM setelah animasi selesai
    setTimeout(function() {
        if (introScreen) {
            introScreen.style.display = 'none';
        }
    }, 600);
}

// Jalankan intro dengan timeout
setTimeout(function() {
    hideIntroAndShowWebsite();
}, 2500);

// ========== FUNGSI UNTUK MENGGANTI HALAMAN ==========
function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Tampilkan halaman yang dipilih
    const activePage = document.getElementById(`page-${pageId}`);
    if (activePage) {
        activePage.classList.add('active');
    }
    
    // Update active class di navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });
    
    // Tutup menu mobile
    if (navbarNav) {
        navbarNav.classList.remove('active');
    }
    
    // Load data spesifik per halaman
    if (pageId === 'album') {
        loadAngkatan();
        loadEkskul();
    }
    
    if (pageId === 'profil') {
        loadGuruData();
    }
    
    // Refresh feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== FUNGSI UNTUK GURU ==========
function loadGuruData() {
    const kepalaCard = document.getElementById('kepala-sekolah-card');
    const guruGrid = document.getElementById('guru-grid');
    
    if (!kepalaCard || !guruGrid) return;
    
    const kepala = dataGuru.find(g => g.isKepala === true);
    const guruLain = dataGuru.filter(g => g.isKepala !== true);
    
    if (kepala) {
        kepalaCard.innerHTML = `
            <div class="kepala-card">
                <img src="${kepala.foto}" alt="${kepala.nama}" class="kepala-foto" onerror="this.src='https://via.placeholder.com/180?text=Kepala+Sekolah'">
                <h4>${kepala.nama}</h4>
                <p>${kepala.mapel}</p>
            </div>
        `;
    }
    
    let guruHtml = '';
    guruLain.forEach(guru => {
        guruHtml += `
            <div class="guru-card">
                <img src="${guru.foto}" alt="${guru.nama}" class="guru-foto" onerror="this.src='https://via.placeholder.com/150?text=Guru'">
                <h4>${guru.nama}</h4>
                <p>${guru.mapel}</p>
            </div>
        `;
    });
    
    guruGrid.innerHTML = guruHtml;
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// ========== FUNGSI UNTUK TAMBAH GURU ==========
function openAddGuruModal() {
    const modal = document.getElementById('addGuruModal');
    if (modal) modal.style.display = 'block';
}

function closeAddGuruModal() {
    const modal = document.getElementById('addGuruModal');
    if (modal) modal.style.display = 'none';
}

function addGuru(event) {
    event.preventDefault();
    
    const nama = document.getElementById('guruNama').value;
    const mapel = document.getElementById('guruMapel').value;
    const foto = document.getElementById('guruFoto').value;
    
    if (nama && mapel && foto) {
        dataGuru.push({
            nama: nama,
            mapel: mapel,
            foto: foto,
            isKepala: false
        });
        
        loadGuruData();
        closeAddGuruModal();
        document.getElementById('addGuruForm').reset();
        alert('Guru berhasil ditambahkan!');
    } else {
        alert('Mohon isi semua data!');
    }
}

// ========== FUNGSI UNTUK TAB ALBUM ==========
function showAlbumTab(tabName, event) {
    // Update tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Show selected tab content
    const albumAngkatan = document.getElementById('album-angkatan');
    const albumEkskul = document.getElementById('album-ekskul');
    
    if (tabName === 'angkatan') {
        if (albumAngkatan) albumAngkatan.classList.add('active');
        if (albumEkskul) albumEkskul.classList.remove('active');
    } else {
        if (albumAngkatan) albumAngkatan.classList.remove('active');
        if (albumEkskul) albumEkskul.classList.add('active');
    }
    
    // Hide detail
    const detailDiv = document.getElementById('album-detail');
    if (detailDiv) detailDiv.style.display = 'none';
    
    if (tabName === 'angkatan') {
        const angkatanGrid = document.querySelector('.angkatan-grid');
        if (angkatanGrid) angkatanGrid.style.display = 'grid';
    } else {
        const ekskulGrid = document.querySelector('.ekskul-grid');
        if (ekskulGrid) ekskulGrid.style.display = 'grid';
    }
}

// ========== FUNGSI UNTUK ANGKATAN ==========
let currentAngkatan = null;
let currentKelas = null;

function loadAngkatan() {
    const grid = document.getElementById('angkatan-grid');
    if (!grid) return;
    
    let html = '';
    dataAngkatan.forEach(angkatan => {
        html += `
            <div class="angkatan-card" onclick="showAngkatan('${angkatan.id}')">
                <div class="angkatan-thumbnail">
                    <img src="${angkatan.thumbnail}" alt="${angkatan.number}" onerror="this.src='https://via.placeholder.com/300?text=Thumbnail'">
                    <div class="thumbnail-overlay">
                        <span>Lihat Album</span>
                    </div>
                </div>
                <div class="angkatan-info">
                    <div class="angkatan-number">${angkatan.number}</div>
                    <div class="angkatan-year">${angkatan.year}</div>
                    <p>${angkatan.fotoCount} Foto • ${angkatan.kelas.length} Kelas</p>
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

function showAngkatan(angkatanId) {
    currentAngkatan = angkatanId;
    const angkatan = dataAngkatan.find(a => a.id === angkatanId);
    if (!angkatan) return;
    
    const detailDiv = document.getElementById('album-detail');
    if (!detailDiv) return;
    
    let kelasHtml = '';
    angkatan.kelas.forEach(kelas => {
        const fotoCount = getFotoKelas(angkatanId, kelas).length;
        kelasHtml += `
            <div class="kelas-card" onclick="showKelas('${angkatanId}', '${kelas}')">
                <h4>Kelas ${kelas}</h4>
                <p>${fotoCount} Foto</p>
            </div>
        `;
    });
    
    detailDiv.innerHTML = `
        <div class="kelas-container">
            <div class="kelas-header">
                <h3>${angkatan.number} - Daftar Kelas</h3>
                <button class="back-button" onclick="backToAngkatan()">
                    <i data-feather="arrow-left"></i> Kembali
                </button>
            </div>
            <div class="search-container">
                <input type="text" id="search-kelas" placeholder="Cari kelas... (contoh: 10 A)" onkeyup="searchKelas()">
            </div>
            <div class="kelas-grid" id="kelas-grid">
                ${kelasHtml}
            </div>
        </div>
    `;
    
    detailDiv.style.display = 'block';
    const angkatanGrid = document.querySelector('.angkatan-grid');
    if (angkatanGrid) angkatanGrid.style.display = 'none';
    
    detailDiv.scrollIntoView({ behavior: 'smooth' });
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function searchKelas() {
    const input = document.getElementById('search-kelas');
    if (!input) return;
    
    const filter = input.value.toUpperCase();
    const kelasCards = document.querySelectorAll('.kelas-card');
    
    kelasCards.forEach(card => {
        const kelasName = card.querySelector('h4')?.textContent || '';
        if (kelasName.toUpperCase().indexOf(filter) > -1) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

function showKelas(angkatanId, kelas) {
    currentKelas = kelas;
    const angkatan = dataAngkatan.find(a => a.id === angkatanId);
    const fotoList = getFotoKelas(angkatanId, kelas);
    
    const detailDiv = document.getElementById('album-detail');
    if (!detailDiv) return;
    
    let fotoHtml = '';
    if (fotoList.length > 0) {
        fotoList.forEach((foto, index) => {
            fotoHtml += `
                <div class="foto-kelas-item" onclick="openModalKelas('${angkatanId}', '${kelas}', ${index})">
                    <img src="${foto.src}" alt="${foto.nama}" onerror="this.src='https://via.placeholder.com/300?text=Foto+Tidak+Tersedia'">
                    <div class="foto-kelas-caption">
                        <p>${foto.nama}</p>
                    </div>
                </div>
            `;
        });
    } else {
        fotoHtml = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Belum ada foto untuk kelas ini</p>';
    }
    
    detailDiv.innerHTML = `
        <div class="kelas-detail">
            <div class="kelas-detail-header">
                <div>
                    <h3>${angkatan.number} - Kelas ${kelas}</h3>
                    <p>${fotoList.length} foto tersedia</p>
                </div>
                <div>
                    <button class="back-button" onclick="showAngkatan('${angkatanId}')">
                        <i data-feather="arrow-left"></i> Kembali ke Kelas
                    </button>
                </div>
            </div>
            
            <div class="foto-kelas-grid">
                ${fotoHtml}
            </div>
        </div>
    `;
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function backToAngkatan() {
    const detailDiv = document.getElementById('album-detail');
    if (detailDiv) detailDiv.style.display = 'none';
    
    const angkatanGrid = document.querySelector('.angkatan-grid');
    if (angkatanGrid) angkatanGrid.style.display = 'grid';
    
    currentAngkatan = null;
    currentKelas = null;
}

// ========== FUNGSI UNTUK EKSTRAKULIKULER ==========
let currentEkskul = null;
let currentEkskulItem = null;

function loadEkskul() {
    const grid = document.getElementById('ekskul-grid');
    if (!grid) return;
    
    let html = '';
    dataEkskul.forEach(ekskul => {
        html += `
            <div class="ekskul-card" onclick="showEkskul('${ekskul.id}')">
                <div class="ekskul-thumbnail">
                    <img src="${ekskul.thumbnail}" alt="${ekskul.name}" onerror="this.src='https://via.placeholder.com/300?text=Thumbnail'">
                    <div class="thumbnail-overlay">
                        <span>Lihat Album</span>
                    </div>
                </div>
                <div class="ekskul-info">
                    <div class="ekskul-name">${ekskul.name}</div>
                    <div class="ekskul-category">${ekskul.category}</div>
                    <p>${ekskul.fotoCount} Foto • ${ekskul.anggota.length} Kegiatan</p>
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

function showEkskul(ekskulId) {
    currentEkskul = ekskulId;
    const ekskul = dataEkskul.find(e => e.id === ekskulId);
    if (!ekskul) return;
    
    const detailDiv = document.getElementById('album-detail');
    if (!detailDiv) return;
    
    let anggotaHtml = '';
    ekskul.anggota.forEach(anggota => {
        const fotoCount = getFotoEkskul(ekskulId).filter(f => f.nama.includes(anggota)).length;
        anggotaHtml += `
            <div class="ekskul-item-card" onclick="showEkskulItem('${ekskulId}', '${anggota}')">
                <h4>${anggota}</h4>
                <p>${fotoCount} Foto</p>
            </div>
        `;
    });
    
    detailDiv.innerHTML = `
        <div class="ekskul-items-container">
            <div class="ekskul-items-header">
                <h3>${ekskul.name} - Kegiatan</h3>
                <button class="back-button" onclick="backToEkskul()">
                    <i data-feather="arrow-left"></i> Kembali
                </button>
            </div>
            
            <div class="search-container">
                <input type="text" id="search-ekskul" placeholder="Cari kegiatan..." onkeyup="searchEkskulItems()">
            </div>
            
            <div class="ekskul-items-grid" id="ekskul-items-grid">
                ${anggotaHtml}
            </div>
        </div>
    `;
    
    detailDiv.style.display = 'block';
    const ekskulGrid = document.querySelector('.ekskul-grid');
    if (ekskulGrid) ekskulGrid.style.display = 'none';
    
    detailDiv.scrollIntoView({ behavior: 'smooth' });
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function searchEkskulItems() {
    const input = document.getElementById('search-ekskul');
    if (!input) return;
    
    const filter = input.value.toUpperCase();
    const itemCards = document.querySelectorAll('.ekskul-item-card');
    
    itemCards.forEach(card => {
        const itemName = card.querySelector('h4')?.textContent || '';
        if (itemName.toUpperCase().indexOf(filter) > -1) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

function showEkskulItem(ekskulId, itemName) {
    currentEkskulItem = itemName;
    const ekskul = dataEkskul.find(e => e.id === ekskulId);
    const semuaFoto = getFotoEkskul(ekskulId);
    const fotoList = semuaFoto.filter(f => f.nama.includes(itemName));
    
    const detailDiv = document.getElementById('album-detail');
    if (!detailDiv) return;
    
    let fotoHtml = '';
    if (fotoList.length > 0) {
        fotoList.forEach((foto, index) => {
            fotoHtml += `
                <div class="foto-ekskul-item" onclick="openModalEkskul('${ekskulId}', '${itemName}', ${index})">
                    <img src="${foto.src}" alt="${foto.nama}" onerror="this.src='https://via.placeholder.com/300?text=Foto+Tidak+Tersedia'">
                    <div class="foto-ekskul-caption">
                        <p>${foto.nama}</p>
                    </div>
                </div>
            `;
        });
    } else {
        fotoHtml = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Belum ada foto untuk kegiatan ini</p>';
    }
    
    detailDiv.innerHTML = `
        <div class="ekskul-detail">
            <div class="ekskul-detail-header">
                <div>
                    <h3>${ekskul.name} - ${itemName}</h3>
                    <p>${fotoList.length} foto tersedia</p>
                </div>
                <div>
                    <button class="back-button" onclick="showEkskul('${ekskulId}')">
                        <i data-feather="arrow-left"></i> Kembali ke Kegiatan
                    </button>
                </div>
            </div>
            
            <div class="foto-ekskul-grid">
                ${fotoHtml}
            </div>
        </div>
    `;
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function backToEkskul() {
    const detailDiv = document.getElementById('album-detail');
    if (detailDiv) detailDiv.style.display = 'none';
    
    const ekskulGrid = document.querySelector('.ekskul-grid');
    if (ekskulGrid) ekskulGrid.style.display = 'grid';
    
    currentEkskul = null;
    currentEkskulItem = null;
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
    
    if (modal && modalImg && modalCaption) {
        modal.style.display = 'block';
        modalImg.src = currentFotoList[index].src;
        modalCaption.innerHTML = `${currentFotoList[index].nama} - Kelas ${kelas} (${index + 1}/${currentFotoList.length})`;
        document.body.style.overflow = 'hidden';
    }
}

function openModalEkskul(ekskulId, itemName, index) {
    const semuaFoto = getFotoEkskul(ekskulId);
    currentFotoList = semuaFoto.filter(f => f.nama.includes(itemName));
    currentFotoIndex = index;
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (modal && modalImg && modalCaption) {
        modal.style.display = 'block';
        modalImg.src = currentFotoList[index].src;
        modalCaption.innerHTML = `${currentFotoList[index].nama} (${index + 1}/${currentFotoList.length})`;
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

function changeModalImage(direction) {
    currentFotoIndex += direction;
    
    if (currentFotoIndex < 0) {
        currentFotoIndex = currentFotoList.length - 1;
    } else if (currentFotoIndex >= currentFotoList.length) {
        currentFotoIndex = 0;
    }
    
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (modalImg && modalCaption && currentFotoList[currentFotoIndex]) {
        modalImg.src = currentFotoList[currentFotoIndex].src;
        modalCaption.innerHTML = `${currentFotoList[currentFotoIndex].nama} (${currentFotoIndex + 1}/${currentFotoList.length})`;
    }
}

// ========== EVENT LISTENER ==========
document.addEventListener('DOMContentLoaded', function() {
    // Modal close button
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Click outside modal
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('imageModal');
        if (modal && modal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                changeModalImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeModalImage(1);
            }
        }
    });
    
    // Modal guru
    const addGuruModal = document.getElementById('addGuruModal');
    const closeGuruBtn = document.querySelector('.close-guru-modal');
    const guruForm = document.getElementById('addGuruForm');
    
    if (closeGuruBtn) {
        closeGuruBtn.addEventListener('click', closeAddGuruModal);
    }
    
    if (guruForm) {
        guruForm.addEventListener('submit', addGuru);
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === addGuruModal) {
            closeAddGuruModal();
        }
    });
    
    // Load initial data
    loadGuruData();
    loadAngkatan();
    loadEkskul();
});