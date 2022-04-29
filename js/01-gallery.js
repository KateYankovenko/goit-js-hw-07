import { galleryItems } from './gallery-items.js';
// Change code below this line


const cardsMarkup = createPictureSetMarup(galleryItems);

cardsGallery.insertAdjacentHTML("beforeend", cardsMarkup);

//Делегування на галерею
cardsGallery.addEventListener("click", onGalleryClick);


function createPictureSetMarup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return (
            `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
        );
    }).join('');
}

//Реалізація делегування на div.gallery

function onGalleryClick(e) {
    e.preventDefault();

    if (!e.target.tagName === "IMG") {
        return;
    }
    const originalImg = e.target.dataset.source;
    console.log(originalImg);

    //Відкриття img
    if (originalImg) {

        const instanceModal = basicLightbox.create(`
    <img src="${originalImg}"
    alt="${e.target.alt}"/>
`, {
            onShow: () => cardsGallery.addEventListener("keydown", onEscKeyClose),
            onClose: () => cardsGallery.removeEventListener("keydown", onEscKeyClose)
        });
        instanceModal.show();
    }
}

function onEscKeyClose(e) {
    if (e.code == "Escape") {
        instanceModal.onClose();
    }
}
console.log(galleryItems);










