'use strict';

import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.span');
const loadBtn = document.querySelector('.loadBtn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value === "") {
        return false;
    }
    gallery.innerHTML = "";
    loader.classList.add("loader");
    fetchImages()
    .then((data) => renderImages(data))
    .catch((error) => console.log(error))
    .finally(() => loader.classList.remove("loader"));
    form.reset();
});

loadBtn.addEventListener('click', async () => {
    if (page > totalHits) {
        loadBtn.classList.remove("loadBtn");
        return iziToast.error({
            position: "topRight",
            message: "We're sorry, but you've reached the end of search results",
        });
    }
    try {
        const images = await fetchImages();
        renderImages(images);
        page += 1;
        if (page > 1) {
            loadBtn.textContent = 'Load more'; 
        }
    } catch (error) {
        console.log(error)
    }
})
function scrollPage() {
    if (searchParams.page > 1) {
      const rect = document
        .querySelector('.gallery-item')
        .getBoundingClientRect();
      window.scrollBy({ top: rect.height * 2, left: 0, behavior: 'smooth' });
    }
  }