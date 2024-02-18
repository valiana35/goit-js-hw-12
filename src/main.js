import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchHits } from "./js/pixabay-api";
import { renderHits } from "./js/render-functions";

export const refs = {
 form: document.querySelector('.form'),
 input: document.querySelector('.form-input'),
 gallery: document.querySelector('.gallery'),
 loader: document.querySelector('.loader'),
 loadBtn: document.querySelector('.loadBtn'),
}

let inputValue;
let page;
let maxHits;

refs.form.addEventListener('submit', onFormSubmit);
refs.loadBtn.addEventListener('click', onLoadBtnClick);

async function onFormSubmit(event) {
    event.preventDefault();
    inputValue = event.target.elements.search.value.trim();
    if (inputValue === "") {
        return;
    }
    page = 1;
    refs.loader.classList.remove("hidden");
    try {
        const data = await fetchHits(inputValue, page);
        if (data.totalHits === 0) {
        iziToast.error({
            position: 'topRight',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        }
        maxHits = Math.ceil(data.totalHits / 15);
        refs.gallery.innerHTML = "";
        renderHits(data.hits);
    } catch (error) {
        console.log(error);
        maxHits = 0;
        refs.gallery.innerHTML = ""; 
    }
    refs.loader.classList.add("hidden");
    if (page >= maxHits) {
        hideLoadBtn();
    } else {
        showLoadBtn();
    };
    event.target.reset();
}

async function onLoadBtnClick() {
    page += 1;
    const data = await fetchHits(inputValue, page);
    renderHits(data.hits);
    refs.loader.classList.add("hidden");
    if (page >= maxHits) {
        hideLoadBtn();
        iziToast.error({
            position: "topRight",
            message: "We're sorry, but you've reached the end of search results",
        });
    } else {
        showLoadBtn();
    }
    const height = refs.gallery.firstElementChild.getBoundingClientRect().height
    window.scrollBy({
        top: height * 2,
        left: 0,
        behavior: "smooth",
      });
}

function showLoadBtn() {
    refs.loadBtn.classList.remove("hidden");
}

function hideLoadBtn() {
    refs.loadBtn.classList.add("hidden");
}