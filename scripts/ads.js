const banners = [
  { src: "bookchains.png", alt: "Buy bookchains now, before your books escape." },
  { src: "moonshoes.png", alt: "PUT ON THE MOON SHOES, SHINJI." },
  { src: "pigsblood.png", alt: "We don\'t know why you want it. We\'re not here to judge. Consume." },
  { src: "spiders.png", alt: "With apoloies to Rachel." },
  { src: "todd.png", alt: "You know you want it." },
  { src: "trucknuts.png", alt: "Eww, look at that truck with those dry, cracked nuts." }
]

const leftBanner = document.getElementById('leftBanner');
const rightBanner = document.getElementById('rightBanner');

const leftIndex = Math.floor(Math.random() * 6);
let rightIndex = Math.floor(Math.random() * 6);

while(leftIndex === rightIndex) {
  rightIndex = Math.floor(Math.random() * 6);
}

leftBanner.src = `/imgs/ads/${banners[leftIndex].src}`;
leftBanner.alt = banners[leftIndex].alt;
rightBanner.src = `/imgs/ads/${banners[rightIndex].src}`;
rightBanner.alt = banners[rightIndex].alt;