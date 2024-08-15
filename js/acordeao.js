document.addEventListener("DOMContentLoaded", () => {
  const acordeaoItems = document.querySelectorAll(".item-acordeao");

  acordeaoItems.forEach((item) => {
    const header = item.querySelector(".cabecalho-item");
    const imgSeta = header.querySelector(".img-seta");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("aberto");

      acordeaoItems.forEach((el) => {
        el.classList.remove("aberto");
        const elImgSeta = el.querySelector(".img-seta");
        if (elImgSeta) {
          elImgSeta.src = "seta-para-baixo.png";
        }
      });

      if (!isOpen) {
        item.classList.add("aberto");
        imgSeta.src = "seta-para-cima.png";
      } else {
        imgSeta.src = "seta-para-baixo.png";
      }
    });
  });
});
