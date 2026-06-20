// sakura.js - LENGKAP DENGAN HAMBURGER MENU
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "F12") e.preventDefault();
  if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key))
    e.preventDefault();
  if (e.ctrlKey && e.key === "u") e.preventDefault();
  if (e.ctrlKey && e.key === "s") e.preventDefault();
  if (e.key === "Escape") {
    closeModal();
    closePetaPeluangPopup();
  }
});

// HAMBURGER MENU - WAJIB ADA
var navbarNav = document.querySelector(".navbar-nav");
var hamburgerMenu = document.querySelector("#hamburger-menu");

if (hamburgerMenu) {
  hamburgerMenu.onclick = function () {
    navbarNav.classList.toggle("active");
  };
}

// Tutup hamburger menu saat klik di luar
document.addEventListener("click", function (e) {
  if (
    navbarNav &&
    hamburgerMenu &&
    !hamburgerMenu.contains(e.target) &&
    !navbarNav.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }
});

// POPUP PETA PELUANG
function showPetaPeluangPopup() {
  var popup = document.getElementById("petaPeluangPopup");
  if (popup) popup.classList.add("show");
}

function closePetaPeluangPopup() {
  var popup = document.getElementById("petaPeluangPopup");
  if (popup) popup.classList.remove("show");
}

function handlePetaPopupButton() {
  closePetaPeluangPopup();
  showPage("spmb");
}

function closePetaPopupOnOutsideClick(event) {
  var popup = document.getElementById("petaPeluangPopup");
  var popupContent = document.querySelector(".peta-peluang-popup-content");
  if (
    popup &&
    popup.classList.contains("show") &&
    popupContent &&
    !popupContent.contains(event.target)
  ) {
    closePetaPeluangPopup();
  }
}

// INTRO SCREEN - FIXED!
window.addEventListener("load", function () {
  var introScreen = document.getElementById("introScreen");
  if (introScreen) {
    setTimeout(function () {
      introScreen.classList.add("hide");
      setTimeout(function () {
        introScreen.style.display = "none";
      }, 500);
      setTimeout(function () {
        showPetaPeluangPopup();
      }, 300);
    }, 3000);
  }
  setTimeout(function () {
    var wp = document.getElementById("welcomePopup");
    if (wp) {
      wp.classList.add("show");
      setTimeout(function () {
        wp.classList.remove("show");
      }, 5000);
    }
  }, 4000);
});

document.addEventListener("DOMContentLoaded", function () {
  var cp = document.querySelector(".close-peta-popup");
  if (cp) {
    cp.addEventListener("click", function (e) {
      e.stopPropagation();
      closePetaPeluangPopup();
    });
  }
  document.addEventListener("click", closePetaPopupOnOutsideClick);
  document.addEventListener("touchstart", closePetaPopupOnOutsideClick);
  var pp = document.getElementById("petaPeluangPopup");
  if (pp) {
    pp.addEventListener("click", function (e) {
      if (e.target === pp) closePetaPeluangPopup();
    });
  }

  // Load struktur organisasi dan show home
  loadStrukturOrganisasi();
  showPage("home");
  if (typeof feather !== "undefined") feather.replace();
});

function showPage(pageId) {
  var pages = document.querySelectorAll(".page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active");
  }
  var ap = document.getElementById("page-" + pageId);
  if (ap) ap.classList.add("active");

  var links = document.querySelectorAll(".nav-link");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
    if (links[i].dataset.page === pageId) links[i].classList.add("active");
  }

  if (navbarNav) navbarNav.classList.remove("active");
  if (pageId === "profil") loadStrukturOrganisasi();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (typeof feather !== "undefined") feather.replace();
}

function createPolaroidCard(item, type) {
  var displayName = item.nama || item.name;
  var subtitle = "";
  if (type && type.includes("guru")) {
    subtitle = '<div class="mapel">' + (item.mapel || "Guru") + "</div>";
  } else {
    subtitle = '<div class="jabatan">' + (item.jabatan || "Staff") + "</div>";
  }
  var fotoUrl = item.foto || "https://placehold.co/300x300?text=No+Image";
  var escapedName = displayName.replace(/'/g, "\\'");
  var escapedSubtitle = subtitle
    .replace(/<div class="[^"]*">|<\/div>/g, "")
    .replace(/'/g, "\\'");
  return (
    '<div class="polaroid-card" onclick="showImageModal(\'' +
    fotoUrl +
    "', '" +
    escapedName +
    "', '" +
    escapedSubtitle +
    "')\">" +
    '<img src="' +
    fotoUrl +
    '" alt="' +
    displayName +
    '" class="polaroid-photo" onerror="this.src=\'https://placehold.co/300x300?text=No+Image\'">' +
    "<h4>" +
    displayName +
    "</h4>" +
    subtitle +
    "</div>"
  );
}

function loadStrukturOrganisasi() {
  var sc = document.getElementById("sambutan-card");
  if (sc && typeof sambutanKepalaSekolah !== "undefined") {
    sc.innerHTML =
      '<img src="' +
      sambutanKepalaSekolah.foto +
      '" alt="' +
      sambutanKepalaSekolah.nama +
      '" class="sambutan-foto" onerror="this.src=\'https://placehold.co/120x120?text=Kepsek\'">' +
      "<h4>" +
      sambutanKepalaSekolah.nama +
      '</h4><p class="sambutan-jabatan">Kepala Sekolah</p>' +
      '<div class="sambutan-text">"' +
      sambutanKepalaSekolah.sambutan +
      '"</div>';
  }

  var containers = [
    "kepala-sekolah-container",
    "wakil-kepala-container",
    "bk-container",
    "staff-tu-container",
    "komite-container",
    "guru-sosiologi-container",
    "guru-bindo-container",
    "guru-matematika-container",
    "guru-fisika-container",
    "guru-geografi-container",
    "guru-basunda-container",
    "guru-binggris-container",
    "guru-bajepang-container",
    "guru-sbdp-container",
    "guru-pai-container",
    "guru-pakristen-container",
    "guru-kimia-container",
    "guru-ppkn-container",
    "guru-pjok-container",
    "guru-prakarya-container",
    "guru-sejarah-container",
    "guru-ekonomi-container",
    "guru-informatika-container",
    "guru-biologi-container",
    "staff-keamanan-container",
    "staff-kebersihan-container",
  ];

  var keys = [
    "kepala",
    "wakilKepala",
    "bk",
    "staffTu",
    "komite",
    "guruSosiologi",
    "guruBindo",
    "guruMatematika",
    "guruFisika",
    "guruGeografi",
    "guruBasunda",
    "guruBinggris",
    "guruBajepang",
    "guruSbdp",
    "guruPai",
    "guruPakristen",
    "guruKimia",
    "guruPpkn",
    "guruPjok",
    "guruPrakarya",
    "guruSejarah",
    "guruEkonomi",
    "guruInformatika",
    "guruBiologi",
    "staffKeamanan",
    "staffKebersihan",
  ];

  for (var i = 0; i < containers.length; i++) {
    var cont = document.getElementById(containers[i]);
    if (cont && dataStrukturOrganisasi[keys[i]]) {
      var items = dataStrukturOrganisasi[keys[i]];
      var html = "";
      for (var j = 0; j < items.length; j++) {
        var type = keys[i].includes("guru") ? "guru" : "staff";
        html += createPolaroidCard(items[j], type);
      }
      cont.innerHTML = html;
    }
  }
  if (typeof feather !== "undefined") feather.replace();
}

function showImageModal(imgSrc, title, subtitle) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var caption = document.getElementById("modalCaption");
  if (modal && modalImg) {
    modal.style.display = "block";
    // Force reflow
    void modal.offsetWidth;
    modal.classList.add("show");
    modalImg.src = imgSrc;
    if (caption)
      caption.innerHTML = "<strong>" + title + "</strong><br>" + subtitle;
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  if (modal) {
    modal.classList.remove("show");
    setTimeout(function () {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }, 400);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var cb = document.querySelector(".close-modal");
  if (cb) cb.addEventListener("click", closeModal);
  window.addEventListener("click", function (e) {
    if (e.target === document.getElementById("imageModal")) closeModal();
  });
});

function skipIntro() {
  var intro = document.getElementById("introScreen");
  if (intro && !intro.classList.contains("hide")) {
    intro.classList.add("hide");
    setTimeout(function () {
      intro.style.display = "none";
    }, 300);
    setTimeout(function () {
      showPetaPeluangPopup();
    }, 100);
  }
}

document.addEventListener("click", function (e) {
  // skip intro hanya jika klik di luar intro dan intro masih terlihat
  var intro = document.getElementById("introScreen");
  if (intro && !intro.classList.contains("hide") && !intro.contains(e.target)) {
    skipIntro();
  }
});

document.addEventListener("touchstart", function (e) {
  var intro = document.getElementById("introScreen");
  if (intro && !intro.classList.contains("hide") && !intro.contains(e.target)) {
    skipIntro();
  }
});

// ========== RE-ANIMASI POLAROID CARD SAAT SCROLL ==========
// Fungsi untuk memicu animasi ulang saat elemen masuk viewport
function setupPolaroidAnimation() {
  var polaroidCards = document.querySelectorAll(".polaroid-card");

  // Hapus animasi delay yang sudah ada
  polaroidCards.forEach(function (card) {
    card.style.animation = "none";
    card.style.opacity = "0";
    card.style.transform = "translateY(30px) scale(0.95)";
  });

  // Gunakan Intersection Observer untuk mendeteksi saat card masuk viewport
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            // Tambahkan delay berdasarkan index
            var delay = 0.05 + index * 0.05;
            if (delay > 1.0) delay = 1.0;

            entry.target.style.animation = "none";
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(30px) scale(0.95)";

            // Force reflow
            void entry.target.offsetWidth;

            entry.target.style.animation =
              "fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
            entry.target.style.animationDelay = delay + "s";

            // Hentikan observasi setelah animasi selesai
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    polaroidCards.forEach(function (card) {
      observer.observe(card);
    });
  } else {
    // Fallback untuk browser yang tidak support IntersectionObserver
    polaroidCards.forEach(function (card, index) {
      var delay = 0.05 + index * 0.05;
      if (delay > 1.0) delay = 1.0;
      card.style.animation =
        "fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
      card.style.animationDelay = delay + "s";
    });
  }
}

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Tunggu sebentar sampai data struktur selesai dimuat
  setTimeout(function () {
    setupPolaroidAnimation();
  }, 500);
});

// Panggil ulang saat halaman profil ditampilkan
var originalShowPage = showPage;
showPage = function (pageId) {
  originalShowPage(pageId);
  if (pageId === "profil") {
    setTimeout(function () {
      setupPolaroidAnimation();
    }, 300);
  }
};
