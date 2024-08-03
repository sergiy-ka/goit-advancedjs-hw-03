import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a> 
            </li>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', createGallery);

new SimpleLightbox(`.gallery a`, {
  captionsData: 'alt',
  captionDelay: 250,
});
