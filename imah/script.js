let current = 0;
let slides;

document.addEventListener('DOMContentLoaded', () => {
  slides = document.querySelectorAll('.slide');
  const nav = document.querySelector('.navigation');
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('page-buttons');
  const chapterContainer = document.getElementById('chapter-container');
  const slider = document.querySelector('.slider');

  // Generate buttons untuk semua slide
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    btn.onclick = () => {
      current = i;
      showSlide(current);
    };
    btnWrapper.appendChild(btn);
  });

  // Tombol untuk chapter 35 (external)
  const btn35 = document.createElement('button');
  btn35.textContent = '35';
  btn35.onclick = () => {
    current = slides.length;
    goToSlide(35);
  };
  btnWrapper.appendChild(btn35);

  nav.appendChild(btnWrapper);

  const saved = parseInt(localStorage.getItem('chapterIndex'));
  if (!isNaN(saved)) {
    if (saved >= slides.length) {
      goToSlide(saved);
    } else {
      current = saved - 1;
      showSlide(current);
    }
  } else {
    showSlide(0);
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });

    slider.style.display = 'block';
    chapterContainer.style.display = 'none';
    chapterContainer.innerHTML = '';

    updateButtons(index);
    localStorage.setItem('chapterIndex', index + 1);
    current = index;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goToSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    chapterContainer.innerHTML = '';
    chapterContainer.style.display = 'none';
    slider.style.display = 'block';

    if (index <= slides.length) {
      slides[index - 1].classList.add('active');
      current = index - 1;
    } else {
      slider.style.display = 'none';
      chapterContainer.style.display = 'block';
      chapterContainer.innerHTML = '<div class="slide active"><div class="story-section">Loading chapter...</div></div>';

      fetch(`chapter/chapter${index}.html`)
        .then(res => res.text())
        .then(html => {
          chapterContainer.innerHTML = '<div class="slide active"><div class="story-section">' + html + '</div></div>';
          current = slides.length;
          window.scrollTo({ top: 0, behavior: 'smooth' });
          updateButtons(current);
        })
        .catch(() => {
          chapterContainer.innerHTML = "<div class='slide active'><p>Chapter belum tersedia.</p></div>";
        });
    }

    localStorage.setItem('chapterIndex', index);
    updateButtons(index - 1);
  }

  function updateButtons(index) {
    const buttons = document.querySelectorAll('.page-buttons button');
    buttons.forEach((btn, i) => {
      const isActive = i === index || (i === slides.length && current >= slides.length);
      btn.classList.toggle('active', isActive);
    });
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

  window.prevSlide = prevSlide;
  window.nextSlide = nextSlide;
});
