import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api"


const searchButton = document.querySelector("button");
const searchField = document.querySelector("input");
const container = document.querySelector(".gallery");

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (searchField.value.trim().length > 0) {
        container.innerHTML = '';
        getImagesByQuery(searchField.value).then(value => { console.log(value) });
        searchField.value = "";
        // console.log(data);
    }
});
