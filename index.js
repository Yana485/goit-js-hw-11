import{r as e}from"./assets/rolldown-runtime-DMWpINJ5.js";import{n as t,r as n,t as r}from"./assets/vendor-D2-Fsq9Z.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=o;function o(e){return t({method:`get`,url:`https://pixabay.com/api/`,params:{key:`55834577-c76a71f95ca6f1bd2bcdd4e54`,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:`true`}}).then(e=>{if(e.data.hits.length>0)return console.log(e.data.hits),e.data.hits;throw Error()}).catch(e=>e)}r();var s=c;function c(e){return e.map(({id:e,webformatURL:t,largeImageURL:n,tags:r,likes:i,views:a,comments:o,downloads:s})=>`<li data-id="${e}" class="gallery-item">
          <div class="card">
            <div class="card-img">
                <a class="gallery-link" href="${n}">
                <img
                    class="gallery-image"
                    src="${t}"
                    alt="${r}"
                />
              </a>
            </div>
            <div class="card-info">
              <div class="info-box">
                <p class="card-header">Likes</p>
                <p class="card-value">${i}</p>
              </div>
              <div class="info-box">
                <p class="card-header">Views</p>
                <p class="card-value">${a}</p>
              </div>
              <div class="info-box">
                <p class="card-header">Comments</p>
                <p class="card-value">${o}</p>
              </div>
              <div class="info-box">
                <p class="card-header">Downloads</p>
                <p class="card-value">${s}</p>
              </div>
            </div>
          </div>
        </li>`).join(``)}var l=document.querySelector(`button`),u=document.querySelector(`input`),d=document.querySelector(`.gallery`);l.addEventListener(`click`,function(e){e.preventDefault(),u.value.trim().length>0&&(d.innerHTML=``,a(u.value).then(e=>{if(console.log(`response.length = ${e.length}`),response.length>0)return console.log(`I'm going to call createGallery now: ${e}`),d.insertAdjacentHTML(`beforeend`,s(e));throw Error()}).catch(e=>{i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`})}),u.value=``)});
//# sourceMappingURL=index.js.map