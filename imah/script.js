let current = 0;
const slides = document.querySelectorAll('.slide');

// Buat tombol nomor
const nav = document.querySelector('.navigation');
const btnWrapper = document.createElement('div');
btnWrapper.classList.add('page-buttons');

slides.forEach((_, i) => {
  const btn = document.createElement('button');
  btn.textContent = i + 1;
  btn.onclick = () => {
    current = i;
    showSlide(current);
  };
  btnWrapper.appendChild(btn);
});
nav.appendChild(btnWrapper);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });

  // Update tombol aktif
  document.querySelectorAll('.page-buttons button').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  // Simpan posisi
  localStorage.setItem('chapterIndex', index);

  // Scroll ke atas window
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Cek localStorage
document.addEventListener('DOMContentLoaded', () => {
  const saved = parseInt(localStorage.getItem('chapterIndex'));
  if (!isNaN(saved)) {
    current = saved;
  }
  showSlide(current);
});

// Biarkan tombol HTML bisa manggil fungsi ini
window.prevSlide = prevSlide;
window.nextSlide = nextSlide;
