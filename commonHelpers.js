import{S as u,i as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const f=document.querySelector(".gallery");function a(n){const r=n.hits.map(s=>`<li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}">
            <img 
                class="gallery-image"
                src="${s.webformatURL}" 
                alt="${s.tags}"
            />
        </a>
        <div class="description">
        <p><b>Likes</b>${s.likes}</p>
        <p><b>Views</b>${s.views}</p>
        <p><b>Comments</b>${s.comments}</p>
        <p><b>Downloads</b>${s.downloads}</p>
        </div>
        </li>`).join("");f.innerHTML=r;let t=new u(".gallery a",{captionDelay:250});t.on("show.simplelightbox",function(){t.refresh()})}const p=document.querySelector(".form-input");function d(){const r=`https://pixabay.com/api/?${new URLSearchParams({key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:`${encodeURIComponent(p.value)}`,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(r).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{parseInt(t.totalHits)>0?a(t):m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})}const l=document.querySelector(".form"),y=document.querySelector(".form-input"),g=document.querySelector(".gallery"),c=document.querySelector(".span");l.addEventListener("submit",n=>{if(n.preventDefault(),y.value==="")return!1;g.innerHTML="",c.classList.add("loader"),d().then(r=>a(r)).catch(r=>console.log(r)).finally(()=>c.classList.remove("loader")),l.reset()});
//# sourceMappingURL=commonHelpers.js.map
