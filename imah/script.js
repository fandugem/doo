const SlideManager = (() => {
  let current = 0;
  let slides;
  let maxChapter = 0;

  function init() {
    slides = document.querySelectorAll('.slide');
    const btnWrapper = document.querySelector('.page-buttons');
    const chapterContainer = document.getElementById('chapter-container');
    const slider = document.querySelector('.slider');

    btnWrapper.innerHTML = "";
    maxChapter = slides.length + 10; // Adjust based on your actual external chapters

    // Event delegation instead of per-button handlers
    btnWrapper.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        goToChapter(parseInt(e.target.textContent));
      }
    });

    // Generate buttons efficiently
    for (let i = 1; i <= maxChapter; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btnWrapper.appendChild(btn);
    }

    loadSavedProgress();

    window.nextSlide = () => goToChapter(current + 2);
    window.prevSlide = () => goToChapter(current);
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
        slider.style.display = "none";
        chapterContainer.style.display = "block";
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

    try {
      localStorage.setItem('chapterIndex', chapterNum);
    } catch (e) {
      console.warn('localStorage unavailable:', e);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function loadSavedProgress() {
    try {
      const saved = parseInt(localStorage.getItem('chapterIndex'));
      if (!isNaN(saved) && saved >= 1) {
        goToChapter(saved);
      } else {
        showSlide(0);
      }
    } catch (e) {
      console.warn('Could not load saved progress:', e);
      showSlide(0);
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();      showSlide(current);
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
  fetch(`chapter/chapter${index}.html`)
    .then(res => {
      if (!res.ok) throw new Error("Not Found");
      return res.text();
    })
    .then(html => {
      slides.forEach(slide => slide.classList.remove('active'));

      slider.style.display = "none";
      chapterContainer.style.display = "block";

      chapterContainer.innerHTML = `
        <div class="slide active">
          <div class="story-section">
            ${html}
          </div>
        </div>`;

      current = index - 1;
      updateButtons(current);
      localStorage.setItem("chapterIndex", index);
    })
    .catch(() => {
      // Kalau gagal, BALIK ke chapter sebelumnya
      slider.style.display = "block";
      chapterContainer.style.display = "none";

      if (current < slides.length) {
        showSlide(current);
      }

      alert("Chapter " + index + " belum tersedia.");
    });
}

  function updateButtons(index) {
    const buttons = document.querySelectorAll('.page-buttons button');
    buttons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  }

function nextSlide() {
  if (current + 1 >= MAX_CHAPTER) return;

  if (current + 1 < slides.length) {
    showSlide(current + 1);
  } else {
    showExternalChapter(current + 2);
  }
}

  function prevSlide() {
  if (current <= 0) return;

  if (current - 1 < slides.length) {
    showSlide(current - 1);
  } else {
    showExternalChapter(current);
  }
}

  window.prevSlide = prevSlide;
  window.nextSlide = nextSlide;
});
