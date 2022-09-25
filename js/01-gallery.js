import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItem =>
      `<div class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></div>`
  )
  .join('');

const toHtml = gallery.insertAdjacentHTML('afterbegin', markup);
gallery.addEventListener('click', handleImage);

function handleImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const dataSource = event.target.getAttribute('data-source');
  const instance = basicLightbox.create(`<img src="${dataSource}"></img>`);
  instance.show();

  document.addEventListener('keyup', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
