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

// Fungsi untuk mengganti halaman
function showPage(pageId) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Tampilkan halaman yang dipilih
    document.getElementById(`page-${pageId}`).classList.add('active');
    
    // Update active class di navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });
    
    // Tutup menu mobile jika terbuka
    navbarNav.classList.remove('active');
    
    // Load data jika halaman album
    if (pageId === 'album') {
        loadAngkatan();
        loadEkskul();
    }
    
    // Refresh feather icons
    feather.replace();
}

// ===== FUNGSI UNTUK TAB ALBUM =====
function showAlbumTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show selected tab content
    document.querySelectorAll('.album-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`album-${tabName}`).classList.add('active');
    
    // Hide detail if showing
    document.getElementById('album-detail').style.display = 'none';
    if (tabName === 'angkatan') {
        document.querySelector('.angkatan-grid').style.display = 'grid';
    } else {
        document.querySelector('.ekskul-grid').style.display = 'grid';
    }
}

// ===== FUNGSI UNTUK ANGKATAN =====
let currentAngkatan = null;
let currentKelas = null;

// Load daftar angkatan
function loadAngkatan() {
    const grid = document.getElementById('angkatan-grid');
    if (!grid) return;
    
    let html = '';
    dataAngkatan.forEach(angkatan => {
        html += `
            <div class="angkatan-card" onclick="showAngkatan('${angkatan.id}')">
                <div class="angkatan-thumbnail">
                    <img src="${angkatan.thumbnail}" alt="${angkatan.number}">
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

// Show detail angkatan (daftar kelas)
function showAngkatan(angkatanId) {
    currentAngkatan = angkatanId;
    const angkatan = dataAngkatan.find(a => a.id === angkatanId);
    if (!angkatan) return;
    
    const detailDiv = document.getElementById('album-detail');
    
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
            
            <!-- Search Bar -->
            <div class="search-container">
                <input type="text" id="search-kelas" placeholder="Cari kelas... (contoh: 10 A)" onkeyup="searchKelas()">
            </div>
            
            <div class="kelas-grid" id="kelas-grid">
                ${kelasHtml}
            </div>
        </div>
    `;
    
    detailDiv.style.display = 'block';
    document.querySelector('.angkatan-grid').style.display = 'none';
    
    // Scroll ke detail
    detailDiv.scrollIntoView({ behavior: 'smooth' });
    
    feather.replace();
}

// Search kelas
function searchKelas() {
    const input = document.getElementById('search-kelas');
    const filter = input.value.toUpperCase();
    const kelasCards = document.querySelectorAll('.kelas-card');
    
    kelasCards.forEach(card => {
        const kelasName = card.querySelector('h4').textContent;
        if (kelasName.toUpperCase().indexOf(filter) > -1) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show detail kelas (foto-foto)
function showKelas(angkatanId, kelas) {
    currentKelas = kelas;
    const angkatan = dataAngkatan.find(a => a.id === angkatanId);
    const fotoList = getFotoKelas(angkatanId, kelas);
    
    const detailDiv = document.getElementById('album-detail');
    
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
    
    feather.replace();
}

// Kembali ke daftar angkatan
function backToAngkatan() {
    document.getElementById('album-detail').style.display = 'none';
    document.querySelector('.angkatan-grid').style.display = 'grid';
    currentAngkatan = null;
    currentKelas = null;
}

// ===== FUNGSI UNTUK EKSTRAKULIKULER =====
let currentEkskul = null;
let currentEkskulItem = null;

// Load daftar ekstrakulikuler
function loadEkskul() {
    const grid = document.getElementById('ekskul-grid');
    if (!grid) return;
    
    let html = '';
    dataEkskul.forEach(ekskul => {
        html += `
            <div class="ekskul-card" onclick="showEkskul('${ekskul.id}')">
                <div class="ekskul-thumbnail">
                    <img src="${ekskul.thumbnail}" alt="${ekskul.name}">
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

// Show detail ekstrakulikuler (daftar kegiatan/anggota)
function showEkskul(ekskulId) {
    currentEkskul = ekskulId;
    const ekskul = dataEkskul.find(e => e.id === ekskulId);
    if (!ekskul) return;
    
    const detailDiv = document.getElementById('album-detail');
    
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
            
            <!-- Search Bar -->
            <div class="search-container">
                <input type="text" id="search-ekskul" placeholder="Cari kegiatan..." onkeyup="searchEkskulItems()">
            </div>
            
            <div class="ekskul-items-grid" id="ekskul-items-grid">
                ${anggotaHtml}
            </div>
        </div>
    `;
    
    detailDiv.style.display = 'block';
    document.querySelector('.ekskul-grid').style.display = 'none';
    
    // Scroll ke detail
    detailDiv.scrollIntoView({ behavior: 'smooth' });
    
    feather.replace();
}

// Search kegiatan ekstrakulikuler
function searchEkskulItems() {
    const input = document.getElementById('search-ekskul');
    const filter = input.value.toUpperCase();
    const itemCards = document.querySelectorAll('.ekskul-item-card');
    
    itemCards.forEach(card => {
        const itemName = card.querySelector('h4').textContent;
        if (itemName.toUpperCase().indexOf(filter) > -1) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show detail kegiatan ekstrakulikuler (foto-foto)
function showEkskulItem(ekskulId, itemName) {
    currentEkskulItem = itemName;
    const ekskul = dataEkskul.find(e => e.id === ekskulId);
    const semuaFoto = getFotoEkskul(ekskulId);
    const fotoList = semuaFoto.filter(f => f.nama.includes(itemName));
    
    const detailDiv = document.getElementById('album-detail');
    
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
    
    feather.replace();
}

// Kembali ke daftar ekstrakulikuler
function backToEkskul() {
    document.getElementById('album-detail').style.display = 'none';
    document.querySelector('.ekskul-grid').style.display = 'grid';
    currentEkskul = null;
    currentEkskulItem = null;
}

// ===== FUNGSI UNTUK MODAL GAMBAR =====
let currentFotoList = [];
let currentFotoIndex = 0;

// Buka modal untuk foto kelas
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

// Buka modal untuk foto ekstrakulikuler
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

// Tutup modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Ganti gambar di modal
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
    // Tutup modal ketika klik tombol close
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Tutup modal ketika klik di luar gambar
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
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
    
    loadAngkatan();
    loadEkskul();
    
    // Set active page based on URL hash or default to home
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'album', 'kontak'].includes(hash)) {
        showPage(hash);
    } else {
        showPage('home');
    }
});