import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderImages } from "./render-functions";

const input = document.querySelector('.form-input');

let page = 1;
let per_page = 15;
const inputValue = `${encodeURIComponent(input.value)}`;

export async function fetchImages() {
    const searchParams = new URLSearchParams({
        key: "42127236-8bfdbbfbeed8a2dadaca720e8",
        q: inputValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: per_page,
    });
    const response = await axios.get(`https://pixabay.com/api/?${searchParams}`)
    .then((data) => {
        if (parseInt(data.totalHits) > 0) {
        renderImages(data);
        } else {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            })
        }
    });
    return response.data;
}