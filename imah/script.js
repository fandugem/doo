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
    localStorage.setItem('chapterIndex', current);
  };
  btnWrapper.appendChild(btn);
});
nav.insertBefore(btnWrapper, nav.children[1]);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });

  // Update local storage tiap kali pindah slide
  localStorage.setItem('chapterIndex', index);
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Cek localStorage dan tampilkan chapter terakhir
document.addEventListener('DOMContentLoaded', () => {
  const saved = parseInt(localStorage.getItem('chapterIndex'));
  if (!isNaN(saved)) {
    current = saved;
    showSlide(current);
  } else {
    showSlide(0);
  }
});

// Biar prev/next tetap bisa dipanggil dari HTML
window.prevSlide = prevSlide;
window.nextSlide = nextSlide;
