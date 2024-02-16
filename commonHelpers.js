import{S as m,a as d,i as f}from"./assets/vendor-527658dd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g=document.querySelector(".gallery");function l(r){const o=r.hits.map(s=>`<li class="gallery-item">
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
        </li>`).join("");g.insertAdjacentHTML("beforeend",o);let n=new m(".gallery a",{captionDelay:250});n.on("show.simplelightbox",function(){n.refresh()})}const y=document.querySelector(".form-input");let h=1,b=15;const L=`${encodeURIComponent(y.value)}`;async function p(){const r=new URLSearchParams({key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:L,image_type:"photo",orientation:"horizontal",safesearch:!0,page:h,per_page:b});return(await d.get(`https://pixabay.com/api/?${r}`).then(n=>{parseInt(n.totalHits)>0?l(n):f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})).data}const c=document.querySelector(".form"),v=document.querySelector(".form-input"),$=document.querySelector(".gallery"),u=document.querySelector(".span"),i=document.querySelector(".loadBtn");c.addEventListener("submit",r=>{if(r.preventDefault(),v.value==="")return!1;$.innerHTML="",u.classList.add("loader"),p().then(o=>l(o)).catch(o=>console.log(o)).finally(()=>u.classList.remove("loader")),c.reset()});i.addEventListener("click",async()=>{if(page>totalHits)return i.classList.remove("loadBtn"),iziToast.error({position:"topRight",message:"We're sorry, but you've reached the end of search results"});try{const r=await p();l(r),page+=1,page>1&&(i.textContent="Load more")}catch(r){console.log(r)}});
//# sourceMappingURL=commonHelpers.js.map
