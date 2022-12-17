/** data shoes */

let carouselEl = document.querySelector("#carousel");

fetch("./static/shoes.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const { id, name, image, oldPrice, price } = item;
      carouselEl.innerHTML += `
        <div class="item">
            <div class="image">
              <img
                src="${image}"
                alt="${name + "_" + id}"
                draggable="false"
              />
            </div>
            <div class="info">
              <span class="name">${name}</span>
              <span class="oldPrice">U$ ${oldPrice}</span>
              <span class="price">U$ ${price}</span>
            </div>
          </div>
      `;
    });
  })
  .catch(console.error);

/** buttons */
let arrowLeft = document.querySelector(".buttons #btn-left");
let arrowRight = document.querySelector(".buttons #btn-right");

arrowLeft.addEventListener("click", (e) => {
  e.preventDefault();
  carouselEl.scrollLeft -= carouselEl.clientWidth;
});
arrowRight.addEventListener("click", (e) => {
  e.preventDefault();
  carouselEl.scrollLeft += carouselEl.clientWidth;
});
