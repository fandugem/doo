const SlideManager = (() => {
  let current = 0;
  let slides = [];
  let maxChapter = 0;

  function init() {
    slides = document.querySelectorAll('.slide');
    const btnWrapper = document.querySelector('.page-buttons');
    const chapterContainer = document.getElementById('chapter-container');

    if (!btnWrapper) {
      console.error('Missing .page-buttons element');
      return;
    }

    btnWrapper.innerHTML = '';
    maxChapter = slides.length + 10;

    // Event delegation - efficient and clean
    btnWrapper.addEventListener('click', handleButtonClick);

    // Generate buttons
    for (let i = 1; i <= maxChapter; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btnWrapper.appendChild(btn);
    }

    loadSavedProgress();
  }

  function handleButtonClick(e) {
    if (e.target.tagName === 'BUTTON') {
      const chapterNum = parseInt(e.target.textContent);
      goToChapter(chapterNum);
    }
  }

  function goToChapter(chapterNum) {
    if (chapterNum < 1 || chapterNum > maxChapter) return;

    if (chapterNum <= slides.length) {
      showSlide(chapterNum - 1);
    } else {
      showExternalChapter(chapterNum);
    }
  }

  function showSlide(index) {
    const slider = document.querySelector('.slider');
    const chapterContainer = document.getElementById('chapter-container');

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    slider.style.display = 'block';
    chapterContainer.style.display = 'none';
    updateUI(index + 1);
    current = index;
  }

  function showExternalChapter(chapterNum) {
    const chapterContainer = document.getElementById('chapter-container');
    const slider = document.querySelector('.slider');

    fetch(`chapter/chapter${chapterNum}.html`)
      .then(res => {
        if (!res.ok) throw new Error(`Chapter ${chapterNum} not found`);
        return res.text();
      })
      .then(html => {
        slides.forEach(slide => slide.classList.remove('active'));
        slider.style.display = 'none';
        chapterContainer.style.display = 'block';
        chapterContainer.innerHTML = `<div class="slide active"><div class="story-section">${html}</div></div>`;

        updateUI(chapterNum);
        current = chapterNum - 1;
      })
      .catch(err => {
        console.error(err);
        alert(`Chapter ${chapterNum} is not available.`);
        showSlide(Math.min(current, slides.length - 1));
      });
  }

  function updateUI(chapterNum) {
    const buttons = document.querySelectorAll('.page-buttons button');
    buttons.forEach((btn, i) => {
      btn.classList.toggle('active', i + 1 === chapterNum);
    });

    saveProgress(chapterNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function saveProgress(chapterNum) {
    try {
      localStorage.setItem('chapterIndex', chapterNum);
    } catch (e) {
      console.warn('localStorage unavailable:', e);
    }
  }

  function loadSavedProgress() {
    try {
      const saved = parseInt(localStorage.getItem('chapterIndex'));
      if (!isNaN(saved) && saved >= 1 && saved <= maxChapter) {
        goToChapter(saved);
      } else {
        showSlide(0);
      }
    } catch (e) {
      console.warn('Could not load saved progress:', e);
      showSlide(0);
    }
  }

  // Public API
  function nextSlide() {
    if (current + 1 >= maxChapter) return;
    goToChapter(current + 2);
  }

  function prevSlide() {
    if (current <= 0) return;
    goToChapter(current);
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    nextSlide,
    prevSlide,
    goToChapter,
    init
  };
})();
