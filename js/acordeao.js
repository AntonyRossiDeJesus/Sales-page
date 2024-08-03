// document.addEventListener("DOMContentLoaded", () => {
//   const acordeaoItems = document.querySelectorAll(".item-acordeao");

//   acordeaoItems.forEach((item) => {
//     const header = item.querySelector(".cabecalho-item");

//     header.addEventListener("click", () => {
//       const isOpen = item.classList.contains("aberto");
//       const isOpenImg = item.classList.contains("img-top");

//       acordeaoItems.forEach((el) => el.classList.remove("aberto"));

//       if (!isOpen) {
//         item.classList.add("aberto");
//       }

//       if (!isOpenImg) {
//         item.classList.add("img-top");
//       }
//     });
//   });
// });

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
          elImgSeta.src = "/img/seta-para-baixo.png";
        }
      });

      if (!isOpen) {
        item.classList.add("aberto");
        imgSeta.src = "/img/seta-para-cima.png";
      } else {
        imgSeta.src = "/img/seta-para-baixo.png";
      }
    });
  });
});
