'use strict';

import axios from "axios";
import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.span');

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