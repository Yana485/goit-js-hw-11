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
            return response.data.hits;
        } else {
            throw new Error();
        }
    })
    .catch(error => { return error });
}
