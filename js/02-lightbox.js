import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItem =>
      `<a class="gallery__item" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/></a>`
  )
  .join('');
const toHtml = gallery.insertAdjacentHTML('afterbegin', markup);

console.log(galleryItems);

gallery.addEventListener('click', () => {
  console.log('image was clicked');
});
