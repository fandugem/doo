alert(slides.length);
const SlideManager = (() => {
  let currentChapter = 1;  // Always 1-indexed
  let slides = [];
  let maxChapter = 0;

  function init() {
    slides = document.querySelectorAll('.slide');
    const btnWrapper = document.querySelector('.page-buttons');
    const slider = document.querySelector('.slider');
    const chapterContainer = document.getElementById('chapter-container');

    // Validate required DOM elements
    if (!btnWrapper || !slider || !chapterContainer) {
      console.error('Missing required DOM elements');
      return;
    }

    btnWrapper.innerHTML = '';
    maxChapter = 34;
    btnWrapper.addEventListener('click', handleButtonClick);

    for (let i = 1; i <= maxChapter; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.setAttribute('aria-label', `Chapter ${i}`);
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


    if (chapterNum <= 34) {
        showSlide(chapterNum);
    } else {
        showExternalChapter(chapterNum);
    }

    currentChapter = chapterNum;
}

  function showSlide(chapterNum) {
    const slider = document.querySelector('.slider');
    const chapterContainer = document.getElementById('chapter-container');
    currentChapter = chapterNum;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i + 1 === chapterNum);
    });

    slider.style.display = 'block';
    chapterContainer.style.display = 'none';
    updateUI(chapterNum);
    currentChapter = chapterNum;
  }

  function showExternalChapter(chapterNum) {
    const slider = document.querySelector(".slider");
    const chapterContainer = document.getElementById("chapter-container");

    fetch(`chapter/chapter${chapterNum}.html`)
        .then(res => {
            if (!res.ok) throw new Error("404");
            return res.text();
        })
        .then(html => {
            slider.style.display = "none";
            chapterContainer.style.display = "block";

            chapterContainer.innerHTML = `
                <div class="slide active">
                    ${html}
                </div>
            `;

            currentChapter = chapterNum;
            updateUI(chapterNum);
        })
        .catch(err => {
            console.error(err);
            alert("Gagal buka: chapter/chapter" + chapterNum + ".html");
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
        goToChapter(1);
      }
    } catch (e) {
      console.warn('Could not load saved progress:', e);
      goToChapter(1);
    }
  }

  function nextSlide() {
    currentChapter++;
    goToChapter(currentChapter);
}

function prevSlide() {
    if (currentChapter > 1) {
        currentChapter--;
        goToChapter(currentChapter);
    }
}
  document.addEventListener("DOMContentLoaded", init);

return {
    nextSlide,
    prevSlide,
    goToChapter
};

})();


window.SlideManager = SlideManager;
