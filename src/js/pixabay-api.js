import axios from "axios";
export default getImagesByQuery;


    
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
            return response.data.hits;
            // container.insertAdjacentHTML("beforeend",createMarkup(response.data.hits));
        } else {
            throw new Error();
        }
    })
    .catch(error => { return error });
    // (error => {
    // iziToast.error({
    //     message: 'Sorry, there are no images matching your search query. Please try again!',
    //     position: 'topRight'
    // });    
}

// function createMarkup(arr) {
//     return arr.map(({ id, webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
//         `<li data-id="${id}" class="gallery-item">
//           <div class="card">
//             <div class="card-img">
//                 <a class="gallery-link" href="${largeImageURL}">
//                 <img
//                     class="gallery-image"
//                     src="${webformatURL}"
//                     alt="${tags}"
//                 />
//               </a>
//             </div>
//             <div class="card-info">
//               <div class="info-box">
//                 <p class="card-header">Likes</p>
//                 <p class="card-value">${likes}</p>
//               </div>
//               <div class="info-box">
//                 <p class="card-header">Views</p>
//                 <p class="card-value">${views}</p>
//               </div>
//               <div class="info-box">
//                 <p class="card-header">Comments</p>
//                 <p class="card-value">${comments}</p>
//               </div>
//               <div class="info-box">
//                 <p class="card-header">Downloads</p>
//                 <p class="card-value">${downloads}</p>
//               </div>
//             </div>
//           </div>
//         </li>`).join("");
// }
// export default function getImagesByQuery(query);