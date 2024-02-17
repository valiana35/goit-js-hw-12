import axios from "axios";

export async function fetchHits(inputValue, page) {
    const searchParams = new URLSearchParams({
        key: "42127236-8bfdbbfbeed8a2dadaca720e8",
        q: inputValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: 15,
    });
    const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
    return response.data;
}