import axios from "axios";

export async function fetchHits(inputValue, curentPage) {
    const searchParams = new URLSearchParams({
        key: "42127236-8bfdbbfbeed8a2dadaca720e8",
        q: inputValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: curentPage,
        per_page: 15,
    });
    const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
    return response.data;
}