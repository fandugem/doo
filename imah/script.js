let current = 0;
let slides;

document.addEventListener('DOMContentLoaded', () => {
  slides = document.querySelectorAll('.slide');
  const nav = document.querySelector('.navigation');
  const btnWrapper = document.querySelector('.page-buttons');
btnWrapper.innerHTML = ""; 
  const chapterContainer = document.getElementById('chapter-container');
  const slider = document.querySelector('.slider');

  // Set this to the total number of chapters you have (including slides + external files)
  const MAX_CHAPTER = 9999; // <--- Update this as needed

  // Generate ALL chapter buttons: 1..MAX_CHAPTER
  for (let i = 1; i <= MAX_CHAPTER; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.onclick = () => {
      if (i <= slides.length) {
        current = i - 1;
        showSlide(current);
      } else {
        showExternalChapter(i);
        current = i - 1;
      }
    };
    btnWrapper.appendChild(btn);
  }

  // Load dari localStorage
  const saved = parseInt(localStorage.getItem('chapterIndex'));
  if (!isNaN(saved)) {
    if (saved > slides.length) {
      showExternalChapter(saved);
      current = saved - 1;
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

  function showExternalChapter(index) {
  current = index - 1;

  slides.forEach(slide => slide.classList.remove('active'));

  slider.style.display = "none";
  chapterContainer.style.display = "block";

  fetch(`chapter/chapter${index}.html`)
    .then(r => {
      if (!r.ok) throw new Error();
      return r.text();
    })
    .then(html => {
      chapterContainer.innerHTML = `
        <div class="slide active">
          <div class="story-section">
            ${html}
          </div>
        </div>`;

      updateButtons(current);
      localStorage.setItem("chapterIndex", index);
    })
    .catch(() => {
      chapterContainer.innerHTML = `
      <div class="slide active">
      <div class="story-section">
      Chapter ${index} belum tersedia.
      </div>
      </div>`;
    });
}

  function updateButtons(index) {
    const buttons = document.querySelectorAll('.page-buttons button');
    buttons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  }

function nextSlide() {
  current++;

  if (current < slides.length) {
    showSlide(current);
  } else {
    showExternalChapter(current + 1);
  }
}

  function prevSlide() {
  if (current <= 0) return;

  current--;

  if (current < slides.length) {
    showSlide(current);
  } else {
    showExternalChapter(current + 1);
  }
}

  window.prevSlide = prevSlide;
  window.nextSlide = nextSlide;
});
