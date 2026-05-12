/*
екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:
- createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в 
контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
- clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
- showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
- hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
*/
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// import data from "./pixabay-api";
// console.log(`FILE #2: ${data}`);

import makeMessage from "./pixabay-api.js";

console.log(makeMessage("Jacob"));
