import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api"
import createGallery from "./js/render-functions"

const searchButton = document.querySelector("button");
const searchField = document.querySelector("input");
const container = document.querySelector(".gallery");

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (searchField.value.trim().length > 0) {
        container.innerHTML = '';
        getImagesByQuery(searchField.value)
          // .then(value => { console.log(value) })
          .then(response => {
            console.log(`response.length = ${response.length}`);
            if (response.length > 0) {
                console.log(`I'm going to call createGallery now: ${response}`);
                // return response.data.hits;
                container.insertAdjacentHTML("beforeend",createGallery(response));
            } else {
                throw new Error();
            }
        })
        .catch//(error => { return error });
        (error => {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });    
        };
        searchField.value = "";
    }
});
