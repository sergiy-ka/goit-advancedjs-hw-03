import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import { fetchPhotos } from './js/pixabay-api';
import { galleryMarkup } from './js/render-functions';

const searchForm = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchedValue = event.currentTarget.elements.user_query.value.trim();

  if (searchedValue === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter something to search.',
      position: 'topRight',
    });
    searchForm.reset();
    return;
  }

  gallery.innerHTML = '';

  loader.classList.remove('is-hidden');

  fetchPhotos(searchedValue)
    .finally(() => {
      loader.classList.add('is-hidden');
    })
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      const markup = galleryMarkup(hits);

      gallery.innerHTML = markup;
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to load images.',
        position: 'topRight',
      });
    });
  searchForm.reset();
}
