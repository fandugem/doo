<script>
  let current = parseInt(localStorage.getItem('currentSlide')) || 0;
  const slides = document.querySelectorAll('.slide');
  const navContainer = document.querySelector('.navigation');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
    document.querySelectorAll('.navigation button.page').forEach((btn, i) => {
      btn.classList.toggle('active-slide', i === index);
    });
    current = index;
    localStorage.setItem('currentSlide', index);
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  // Buat tombol prev
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Prev";
  prevBtn.onclick = prevSlide;
  navContainer.appendChild(prevBtn);

  // Buat tombol angka 1, 2, 3...
  slides.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.textContent = i + 1;
    btn.classList.add("page");
    btn.onclick = () => showSlide(i);
    navContainer.appendChild(btn);
  });

  // Buat tombol next
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.onclick = nextSlide;
  navContainer.appendChild(nextBtn);

  // Tampilkan slide terakhir yang dibuka
  showSlide(current);
</script>
