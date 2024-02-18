import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { refs } from '../main';

function hitTemplate(hit) {
    const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = hit;
    return `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
        <img 
            class="gallery-image"
            src="${webformatURL}" 
            alt="${tags}"
        />
    </a>
    <div class="description">
    <p><b>Likes</b>${likes}</p>
    <p><b>Views</b>${views}</p>
    <p><b>Comments</b>${comments}</p>
    <p><b>Downloads</b>${downloads}</p>
    </div>
    </li>`
}

function hitsTemplate(hits) {
    return hits.map(hitTemplate).join("");
}

export function renderHits(hits) {
    const markup = hitsTemplate(hits);
    refs.gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

let lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250, });
lightbox.on('show.simplelightbox'); 