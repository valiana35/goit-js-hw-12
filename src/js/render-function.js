import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

export function renderImages(data) {
    const markup = data.hits.map(data => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${data.largeImageURL}">
            <img 
                class="gallery-image"
                src="${data.webformatURL}" 
                alt="${data.tags}"
            />
        </a>
        <div class="description">
        <p><b>Likes</b>${data.likes}</p>
        <p><b>Views</b>${data.views}</p>
        <p><b>Comments</b>${data.comments}</p>
        <p><b>Downloads</b>${data.downloads}</p>
        </div>
        </li>`;
    })
    .join("");
    gallery.innerHTML = markup;
    let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, });
    lightbox.on('show.simplelightbox', function () {
        lightbox.refresh();  
    });
}