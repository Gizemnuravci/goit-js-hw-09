import{S as o}from"./vendor-CgTBfC_f.js";const e=[{preview:"https://cdn.pixabay.com/photo/2019/06/25/16/34/flowers-4299081__340.jpg",original:"https://cdn.pixabay.com/photo/2019/06/25/16/34/flowers-4299081_1280.jpg",description:"Flowers"},{preview:"https://cdn.pixabay.com/photo/2019/06/25/16/20/road-4299047__340.jpg",original:"https://cdn.pixabay.com/photo/2019/06/25/16/20/road-4299047_1280.jpg",description:"Road"}],i=document.querySelector(".gallery"),l=e.map(a=>`
<li class="gallery-item">
  <a class="gallery-link" href="${a.original}">
    <img
      class="gallery-image"
      src="${a.preview}"
      alt="${a.description}"
    />
  </a>
</li>`).join("");i.insertAdjacentHTML("beforeend",l);new o(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=01-gallery-1LcMKbdD.js.map
