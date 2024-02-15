import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderImages } from "./render-functions";

const input = document.querySelector('.form-input');

export function fetchImages() {
    const searchParams = new URLSearchParams({
        key: "42127236-8bfdbbfbeed8a2dadaca720e8",
        q: `${encodeURIComponent(input.value)}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;
    return fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
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
}