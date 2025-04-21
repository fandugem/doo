let current = parseInt(localStorage.getItem('currentSlide')) || 0;
const slides = document.querySelectorAll('.slide');
const nav = document.querySelector('.navigation');

// Function buat nampilin slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });

  // Update tombol angka
  document.querySelectorAll('.page-btn').forEach((btn, i) => {
    btn.classList.toggle('active-slide', i === index);
  });

  localStorage.setItem('currentSlide', index);
  current = index;
}

// Function buat tombol Prev
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Function buat tombol Next
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Generate tombol angka (1, 2, 3,...)
function createPagination() {
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    btn.className = 'page-btn';
    btn.addEventListener('click', () => showSlide(i));
    nav.insertBefore(btn, nav.lastElementChild); // taruh sebelum tombol Next
  });
}

createPagination();
showSlide(current);

// Attach tombol Prev dan Next biar bisa dipanggil dari HTML
window.prevSlide = prevSlide;
window.nextSlide = nextSlide;
