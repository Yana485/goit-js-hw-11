import axios from "axios";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import { preview } from "vite";

const searchButton = document.querySelector("button");
const searchField = document.querySelector("input");
const container = document.querySelector(".gallery");

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    //перевірка на те що рядок не пустий .trim()
    const data = getImagesByQuery(searchField.value);
    console.log(data);

});
    
function getImagesByQuery(query) {
    return axios({
        method: 'get',
        url: 'https://pixabay.com/api/',
        params: {
            key: '55834577-c76a71f95ca6f1bd2bcdd4e54',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true'
        }
    })
    .then(response => {
        if (response.data.hits.length > 0) {
            console.log(response.data.hits);
            container.insertAdjacentHTML("beforeend", createMarkup(response.data.hits));
        } else {
            throw new Error();
        }
    })
    .catch(error => {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        });
    });
}

function createMarkup(arr) {
    return arr.map(({ id, previewURL, tags }) =>
        `<li data-id="${id}">
        <img src='${previewURL}' alt='${tags}' width="300">
    </li>`).join("");
}
// export default function getImagesByQuery(query);