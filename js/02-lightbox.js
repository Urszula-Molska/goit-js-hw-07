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

gallery.addEventListener('click', handleImage);
function handleImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  let LightboxGallery = new SimpleLightbox('.gallery a');
  LightboxGallery.on('show.simplelightbox');
  //captionsData;
  //captionPosition;
  //captionDelay;

  LightboxGallery.defaultOptions.captionsData = 'alt';

  LightboxGallery.defaultOptions.captionDelay = 250;
  document.addEventListener('keyup', event => {
    if (event.code === 'Escape') {
      LightboxGallery.close;
    }
  });
}
