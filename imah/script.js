let current = 0;
let slides;

document.addEventListener('DOMContentLoaded', () => {
  slides = document.querySelectorAll('.slide');
  const nav = document.querySelector('.navigation');
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('page-buttons');
  const chapterContainer = document.getElementById('chapter-container');
  const slider = document.querySelector('.slider');

  // Set this to the total number of chapters you have (including slides + external files)
  const MAX_CHAPTER = 40; // <--- Update this as needed

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

  nav.appendChild(btnWrapper);

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
    slides.forEach(slide => slide.classList.remove('active'));
    slider.style.display = 'none';
    chapterContainer.style.display = 'block';
    chapterContainer.innerHTML = '<div class="slide active"><div class="story-section">Loading chapter...</div></div>';

    fetch(`chapter/chapter${index}.html`)
      .then(res => {
        if (!res.ok) throw new Error('Not Found');
        return res.text();
      })
      .then(html => {
        chapterContainer.innerHTML = `
          <div class="slide active">
            <div class="story-section">${html}</div>
          </div>`;
        updateButtons(index - 1); // Note: button index is 0-based
        localStorage.setItem('chapterIndex', index);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(() => {
        chapterContainer.innerHTML = "<div class='slide active'><p>Chapter belum tersedia.</p></div>";
      });
  }

  function updateButtons(index) {
    const buttons = document.querySelectorAll('.page-buttons button');
    buttons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  }

  // Only call next/prev for visible range; after last slide => loads next external chapter.
  function nextSlide() {
    if (current + 1 < MAX_CHAPTER) {
      if (current + 1 < slides.length) {
        showSlide(current + 1);
      } else {
        showExternalChapter(current + 2); // chapters are 1-based
      }
      current++;
    }
  }

  function prevSlide() {
    if (current > 0) {
      if (current - 1 < slides.length) {
        showSlide(current - 1);
      } else {
        showExternalChapter(current);
      }
      current--;
    }
  }

  window.prevSlide = prevSlide;
  window.nextSlide = nextSlide;
});
