const $sliderCards = document.querySelectorAll(".slider-cards");
const scrollIntoView = ($el) => {
  $el.scrollIntoView({ block: "nearest" });
};

$sliderCards.forEach(($sliderCard) => {
  const $cardImages = $sliderCard.querySelectorAll(".images img");
  const $imageButtons = $sliderCard.querySelectorAll(".image-dot");

  $cardImages.forEach(($cardImage, i) => {
    const $imageButton = $imageButtons[i];

    $cardImage.addEventListener("click", () => {
      const $nextImg =
        $cardImage.nextElementSibling ||
        $cardImage.parentElement.firstElementChild;

      scrollIntoView($nextImg);
    });

    $imageButton.addEventListener("click", () => {
      scrollIntoView($cardImage);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        $imageButton.classList.toggle("active", entry.isIntersecting);
      },
      {
        root: $sliderCard,
        threshold: 0.5,
      }
    );
    observer.observe($cardImage);
  });
});
