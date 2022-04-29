import { galleryItems } from './gallery-items.js';
// Change code below this line

const cardsGallery = document.querySelector(".gallery");
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
console.log(galleryItems);

//Реалізація делегування на div.gallery

function onGalleryClick(e) {
    e.preventDefault();

    if (!e.target.tagName === "IMG") {
        return;
    }
    const originalImg = e.target.dataset.source;
    console.log(originalImg);

    //Відкриття img

    const instanceModal = basicLightbox.create(`
    <img src="${originalImg}"
    src="${preview}"
    alt="${e.target.alt}"/>
`);
    instanceModal.show();

}










// Створи галерею з можливістю кліку по її елементах і 
// перегляду повнорозмірного зображення у модальному вікні.
// Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01 - gallery.html і 01 - gallery.js.
// Розбий його на декілька підзавдань:

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems 
// і наданого шаблону елемента галереї.
// 2.Реалізація делегування на div.gallery і отримання url великого зображення.
// 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) 
// файли бібліотеки.
// 4.Відкриття модального вікна по кліку на елементі галереї.Для цього ознайомся з 
// документацією і прикладами.
// 4.Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки
// basicLightbox.
