// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

// console.log(galleryItems);

const refs = { imageList: document.querySelector('ul.gallery') };

function createGalleryCard({ preview, original, description }) {
  return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
}

function createGalleryList(Items) {
  refs.imageList.innerHTML = Items.map(item => createGalleryCard(item)).join(
    ''
  );
}

createGalleryList(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
