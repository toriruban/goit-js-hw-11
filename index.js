import{S as d,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=t=>{const s=new URLSearchParams({key:"49835598-9f74b1000f2ba2b610eab7f75",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},p=t=>`
  <li class="gallery-item">
    <a href="${t.largeImageURL}">
      <img src="${t.webformatURL}" alt="${t.tags}" />
    </a>
    <div class="comment-box">
      <p class="img-comment"><b>Likes:</b> ${t.likes}</p>
      <p class="img-comment"><b>Views:</b> ${t.views}</p>
      <p class="img-comment"><b>Comments:</b> ${t.comments}</p>
      <p class="img-comment"><b>Downloads:</b> ${t.downloads}</p>
    </div>
  </li>`,m=document.querySelector(".form"),l=document.querySelector(".input-search"),u=document.querySelector(".gallery"),n=document.querySelector(".loader");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});const y=t=>{t.preventDefault();const s=l.value.trim();if(!s){a.error({title:"Error",message:"The search field cannot be empty. Please try again!",position:"topRight"});return}u.innerHTML="",l.value="",n.classList.remove("hidden"),f(s).then(o=>{if(n.classList.add("hidden"),o.hits.length===0){a.warning({title:"No results",message:"No images found for your query!",position:"topRight"});return}u.innerHTML=o.hits.map(p).join(""),h.refresh()}).catch(o=>{n.classList.add("hidden"),a.error({title:"Error",message:"An error occurred. Please try again!",position:"topRight"}),console.error(o)}).finally(()=>{m.reset()})};m.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
