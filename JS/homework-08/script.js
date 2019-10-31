import items from "./items.js";

// ===============================Gallery=============================
const galleryUl = document.querySelector(".gallery");

function renderGallery(arrGallery, ref) {
  const markup = arrGallery.reduce((acc, el) => {
    const li = `<li class="gallery__item">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"/>
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
  </li>`;
    return (acc += li);
  }, "");
  ref.insertAdjacentHTML("beforeend", markup);
}
renderGallery(items, galleryUl);

// ==================================Modal==============================

const modal = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox__image");

galleryUl.addEventListener("click", e => {
  if (e.target.nodeName === "IMG") {
    lightboxImg.src = e.target.closest(".gallery__image").dataset.source;
    lightboxImg.alt = e.target.closest(".gallery__image").alt;
  }
  modal.classList.add("is-open");
});

modal.addEventListener("click", e => {
  if (
    e.target === document.querySelector(".lightbox__content") ||
    e.target.nodeName === "I" ||
    e.target.dataset.action === "close-lightbox"
  ) {
    modal.classList.remove("is-open");
  }
});

window.addEventListener("keydown", e => {
  if (e.keyCode === 27 && modal.classList.contains("is-open")) {
    modal.classList.toggle("is-open");
  }
});
