import axios from "axios";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchButton = document.querySelector("button");
const searchField = document.querySelector("input");


searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    const data = getImagesByQuery(searchField.value);
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
        if (response.data.hits.length === 0) {
            throw new Error();
        } else {
            return response.data;
        }
    })
    .catch(error => {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        });
    });
}

// export default function getImagesByQuery(query);