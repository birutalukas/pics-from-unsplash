import axios from "axios";

const unsplash = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID XfL0RAkMm52Jk1PWfkjAqw7N0wB2a-gPGkVAVna5xS4",
    },
});

export default unsplash;
