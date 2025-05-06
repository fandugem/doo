let current = 0;
const slides = document.querySelectorAll('.slide');

// Buat tombol nomor
const nav = document.querySelector('.navigation');
const btnWrapper = document.createElement('div');
btnWrapper.classList.add('page-buttons');

const chapterContainer = document.getElementById('chapter-container');

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

// Tambah tombol manual buat chapter 35 (external)
const btn35 = document.createElement('button');
btn35.textContent = '35';
btn35.onclick = () => {
  current = 34; // index untuk penanda posisi aktif
  goToSlide(35);
};
btnWrapper.appendChild(btn35);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });

  document.querySelectorAll('.page-buttons button').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  localStorage.setItem('chapterIndex', index);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextSlide() {
  if (current + 1 < slides.length) {
    current++;
    showSlide(current);
  } else {
    goToSlide(35);
  }
}

function prevSlide() {
  if (current > 0) {
    current--;
    showSlide(current);
  } else {
    goToSlide(35);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = parseInt(localStorage.getItem('chapterIndex'));
  if (!isNaN(saved)) current = saved;
  showSlide(current);
});

window.prevSlide = prevSlide;
window.nextSlide = nextSlide;

function goToSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
chapterContainer.innerHTML = '';
chapterContainer.style.display = 'none';
  current = slides.length;
  if (index <= slides.length) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index - 1);
    });
    chapterContainer.style.display = 'none';
  } else {
    slides.forEach(slide => slide.classList.remove('active'));
    chapterContainer.style.display = 'block';
    fetch(`chapter/chapter${index}.html`)
      .then(res => res.text())
      .then(html => {
        chapterContainer.innerHTML = html;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(() => {
        chapterContainer.innerHTML = "<p>loading chapter...</p>";
      });
  }

  localStorage.setItem('chapterIndex', index);
  updateButtons();
}

function updateButtons() {
  const buttons = document.querySelectorAll('.page-buttons button');
  buttons.forEach((btn, i) => {
    const isActive = (
      i === current || 
      (i === slides.length && current + 1 > slides.length) // untuk tombol "35"
    );
    btn.classList.toggle('active', isActive);
  });
}
