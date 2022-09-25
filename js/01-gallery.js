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

console.log(galleryItems);

//Wywołanie czegokolwiek na każdym obrazku, AddListener na galerii
/*gallery.addEventListener('click', event => {
  event.target.handleImage();
  alert('addListener is working!!!!!!');
});

function handleImage() {
  return console.log('image was clicked');
}*/

gallery.addEventListener('click', handleImage);

function handleImage(event) {
  event.preventDefault();
  return console.log(event.target);
  //if (event.target === 'gallery__image') {
  // return console.log('image was clicked');
}

/*const image = document.querySelector('.gallery__image');
gallery.addEventListener('click', () => {
  //console.log('addListener is working!!!!!!');
});*/
