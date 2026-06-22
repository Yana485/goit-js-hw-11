/*
екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:
- createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в 
контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
- clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
- showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
- hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
*/
import SimpleLightboxModule from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const SimpleLightbox = SimpleLightboxModule.default;
console.log(SimpleLightbox);
// const gallery = $('.gallery-item a').simpleLightbox();
// new SimpleLightbox('.gallery-item a', { /* options */ });
// gallery.refresh(); // Next Image

export function createGallery(images) {
    return images.map(({ id, webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
      `<li data-id="${id}" class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
          <div class="card">
            <div class="card-img">
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    alt="${tags}"
                />
            </div>
            <div class="card-info">
              <div class="info-box">
                <p class="card-header">Likes</p>
                <p class="card-value">${likes}</p>
              </div>
              <div class="info-box">
                <p class="card-header">Views</p>
                <p class="card-value">${views}</p>
              </div>
              <div class="info-box">
                <p class="card-header">Comments</p>
                <p class="card-value">${comments}</p>
              </div>
              <div class="info-box">
                <p class="card-header">Downloads</p>
                <p class="card-value">${downloads}</p>
              </div>
            </div>
          </div>
          </a>
        </li>`).join("");
}

// new SimpleLightbox('.gallery-item a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

