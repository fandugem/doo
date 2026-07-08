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
  // <--- Update this as needed

  // Generate ALL chapter buttons: 1..MAX_CHAPTER
  for (let i = 1; i <= MAX_CHAPTER; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.onclick = () => {
      if (i <= slides.length) {
        showSlide(current);
      } else {
        showExternalChapter(i);
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
