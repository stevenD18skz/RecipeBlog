export function setupCarousel() {
  const carouselInner = document.querySelector(".carousel-inner");
  const indicators = document.querySelectorAll(".indicator");
  let currentIndex = 0;

  function updateCarousel(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  }

  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      currentIndex =
        currentIndex > 0 ? currentIndex - 1 : indicators.length - 1;
      updateCarousel(currentIndex);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % indicators.length;
      updateCarousel(currentIndex);
    });
  }

  indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      currentIndex = i;
      updateCarousel(currentIndex);
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % indicators.length;
    updateCarousel(currentIndex);
  }, 10000);
}
