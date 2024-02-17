import{a as y,S as b,i as u}from"./assets/vendor-64b55ca9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();async function f(r,e){const a=new URLSearchParams({key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});return(await y.get(`https://pixabay.com/api/?${a}`)).data}function L(r){const{largeImageURL:e,webformatURL:a,tags:i,likes:t,views:o,comments:n,downloads:g}=r;return`<li class="gallery-item">
    <a class="gallery-link" href="${e}">
        <img 
            class="gallery-image"
            src="${a}" 
            alt="${i}"
        />
    </a>
    <div class="description">
    <p><b>Likes</b>${t}</p>
    <p><b>Views</b>${o}</p>
    <p><b>Comments</b>${n}</p>
    <p><b>Downloads</b>${g}</p>
    </div>
    </li>`}function w(r){return r.map(L).join("")}function m(r){const e=w(r);s.gallery.insertAdjacentHTML("beforeend",e);let a=new b(".gallery a",{captionDelay:250});a.on("show.simplelightbox",function(){a.refresh()})}const s={form:document.querySelector(".form"),input:document.querySelector(".form-input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".loadBtn")};let c,l=1,d;s.form.addEventListener("submit",v);s.loadBtn.addEventListener("click",S);async function v(r){if(r.preventDefault(),c=r.target.elements.search.value.trim(),c!==""){s.loader.classList.remove("hidden");try{const e=await f(c,l);e.totalHits===0&&u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d=Math.ceil(e.totalHits/15),s.gallery.innerHTML="",m(e.hits)}catch(e){console.log(e),d=0,s.gallery.innerHTML=""}s.loader.classList.add("hidden"),l>=d?h():p(),r.target.reset()}}async function S(){l+=1;const r=await f(c,l);m(r.hits),s.loader.classList.add("hidden"),l>=d?(h(),u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results"})):p();const e=s.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}function p(){s.loadBtn.classList.remove("hidden")}function h(){s.loadBtn.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
