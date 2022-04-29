import { galleryItems } from './gallery-items.js';
// Change code below this line

const cardsGallery = document.querySelector(".gallery");


function createPictureSetMarup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return (
            `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}"
  alt="${description}" />
</a>
    `
        );
    }).join('');
}



console.log(galleryItems);
