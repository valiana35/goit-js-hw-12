import{a as b,S as L,i as u}from"./assets/vendor-64b55ca9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();async function m(r,e){const i=new URLSearchParams({key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});return(await b.get(`https://pixabay.com/api/?${i}`)).data}function w(r){const{largeImageURL:e,webformatURL:i,tags:n,likes:t,views:o,comments:l,downloads:y}=r;return`<li class="gallery-item">
    <a class="gallery-link" href="${e}">
        <img 
            class="gallery-image"
            src="${i}" 
            alt="${n}"
        />
    </a>
    <div class="description">
    <p><b>Likes</b>${t}</p>
    <p><b>Views</b>${o}</p>
    <p><b>Comments</b>${l}</p>
    <p><b>Downloads</b>${y}</p>
    </div>
    </li>`}function v(r){return r.map(w).join("")}function f(r){const e=v(r);s.gallery.insertAdjacentHTML("beforeend",e),p.refresh()}let p=new L(".gallery a",{captionDelay:250});p.on("show.simplelightbox");const s={form:document.querySelector(".form"),input:document.querySelector(".form-input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".loadBtn")};let c,a,d;s.form.addEventListener("submit",S);s.loadBtn.addEventListener("click",B);async function S(r){if(r.preventDefault(),c=r.target.elements.search.value.trim(),c!==""){a=1,s.loader.classList.remove("hidden");try{const e=await m(c,a);e.totalHits===0&&u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d=Math.ceil(e.totalHits/15),s.gallery.innerHTML="",f(e.hits)}catch(e){console.log(e),d=0,s.gallery.innerHTML=""}s.loader.classList.add("hidden"),a>=d?g():h(),r.target.reset()}}async function B(){a+=1;const r=await m(c,a);f(r.hits),s.loader.classList.add("hidden"),a>=d?(g(),u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results"})):h();const e=s.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}function h(){s.loadBtn.classList.remove("hidden")}function g(){s.loadBtn.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
