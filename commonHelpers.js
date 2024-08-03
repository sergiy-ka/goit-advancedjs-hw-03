import{i as n,S as m}from"./assets/vendor-96ed78f5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="45255368-572b15c7c49880eb3615da83a",p=a=>{const s=new URLSearchParams({key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},g=a=>a.map(({webformatURL:s,largeImageURL:t,tags:o,likes:e,views:r,comments:i,downloads:u})=>`
            <li>
                <a href="${t}">
                    <img class="gallery__image" src="${s}" alt="${o}" />
                </a>
                <div class="gallery__info">
                    <div class="gallery__likes gallery__info__item">
                        <p class="fas fa-heart">Likes</p>
                        <span>${e}</span>
                    </div>
                    <div class="gallery__views gallery__info__item">
                        <p class="fas fa-eye">Views</p>
                        <span>${r}</span>
                    </div>
                    <div class="gallery__comments gallery__info__item">
                        <p class="fas fa-comment">Comments</p>
                        <span>${i}</span>
                    </div>
                    <div class="gallery__downloads gallery__info__item">
                        <p class="fas fa-download">Downloads</p>
                        <span>${u}</span>
                    </div>
                </div>
            </li>
        `).join(""),l=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader");l.addEventListener("submit",y);function y(a){a.preventDefault();const s=a.currentTarget.elements.user_query.value.trim();if(s===""){n.error({title:"Error",message:"Please enter something to search.",position:"topRight"}),l.reset();return}c.innerHTML="",d.classList.remove("is-hidden"),p(s).finally(()=>{d.classList.add("is-hidden")}).then(({hits:t})=>{if(t.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const o=g(t);c.innerHTML=o,new m(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(t=>{n.error({title:"Error",message:"Failed to load images.",position:"topRight"})}),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
