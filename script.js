// ========== Navbar Scroll Effect ==========
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ========== Hamburger Menu Toggle ==========
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Tutup menu saat link diklik
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70; // Offset untuk navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ========== Intersection Observer untuk Animasi Scroll ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

// Observe semua elemen dengan class fade-in
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// ========== Form Submission Handler ==========
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Buat pesan WhatsApp
    const whatsappMessage = `Halo Mirdan, saya ${name} (${email}).\n\n${message}`;
    const whatsappURL = `https://wa.me/6282359082093?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappURL, "_blank");

    // Reset form
    this.reset();

    // Tampilkan notifikasi
    alert("Terima kasih! Pesan Anda akan dikirim via WhatsApp.");
  });

// ========== Animasi Initial Load ==========
window.addEventListener("load", () => {
  // Animasi untuk elemen yang langsung terlihat
  const initialElements = document.querySelectorAll(
    ".hero-image, .hero-content"
  );
  initialElements.forEach((el) => {
    el.style.opacity = "1";
  });
});
