import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/25/16/34/flowers-4299081__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/25/16/34/flowers-4299081_1280.jpg',
    description: 'Flowers',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/25/16/20/road-4299047__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/25/16/20/road-4299047_1280.jpg',
    description: 'Road',
  },
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    image => `
<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
