document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".problemas__conteudo--itens");
  const nextButton = document.querySelector(
    ".problemas__conteudo--seta.direita"
  );
  const prevButton = document.querySelector(
    ".problemas__conteudo--seta.esquerda"
  );
  let currentIndex = 0;
  let visibleItems = 2;

  const updateVisibleItems = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      visibleItems = 1;
    } else {
      visibleItems = 2;
    }

    currentIndex = Math.min(currentIndex, items.length - visibleItems);
    showItems(currentIndex);
  };

  const showItems = (startIndex) => {
    items.forEach((item, index) => {
      item.classList.toggle(
        "active",
        index >= startIndex && index < startIndex + visibleItems
      );
    });
  };

  const nextItems = () => {
    currentIndex = (currentIndex + visibleItems) % items.length;
    showItems(currentIndex);
  };

  const prevItems = () => {
    currentIndex = (currentIndex - visibleItems + items.length) % items.length;
    showItems(currentIndex);
  };

  nextButton.addEventListener("click", nextItems);
  prevButton.addEventListener("click", prevItems);

  window.addEventListener("resize", updateVisibleItems);

  updateVisibleItems();
});
