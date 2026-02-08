//TOGGLES
const page = document.getElementById('pageContainer');
const darkModeToggle = document.getElementById('darkMode');
const adModeToggle = document.getElementById('adMode');

darkModeToggle.addEventListener('change', (e) => {
  if(e.target.checked) {
    page.classList.add('darkMode');
  } else {
    page.classList.remove('darkMode');
  }
});

adModeToggle.addEventListener('change', (e) => {
  if(e.target.checked) {
    page.classList.remove('disableAds');
  } else {
    page.classList.add('disableAds');
  }
})

//BANNERS
const banners = [
  { src: "ape.png", alt: "Don't you want your coat to stay lush and shiny?"},
  { src: "bookchains.png", alt: "Buy bookchains now, before your books escape." },
  { src: "horse1.png", alt: "You know why you're here."},
  { src: "horse2.png", alt: "Horse Illustrated. We've got what you want."},
  { src: "moonshoes.png", alt: "PUT ON THE MOON SHOES, SHINJI." },
  { src: "painting.png", alt: "A little dick paint, as a treat." },
  { src: "pigsblood.png", alt: "We don\'t know why you want it. We\'re not here to judge. Consume." },
  { src: "scooter.png", alt: "\"It's so fast it could kill an American.\""},
  { src: "spiders.png", alt: "With apoloies to Rachel." },
  { src: "todd.png", alt: "Surprise your partner. Surprise yourself." },
  { src: "trucknuts.png", alt: "Eww, look at that truck with those dry, cracked nuts." },
  { src: "wiserd.png", alt: "WISERD" }
]

const leftBanner = document.getElementById('leftBanner');
const rightBanner = document.getElementById('rightBanner');

const leftIndex = Math.floor(Math.random() * banners.length);
let rightIndex = Math.floor(Math.random() * banners.length);

while(leftIndex === rightIndex) {
  rightIndex = Math.floor(Math.random() * 6);
}

leftBanner.src = `/imgs/ads/${banners[leftIndex].src}`;
leftBanner.alt = banners[leftIndex].alt;
leftBanner.title = banners[leftIndex].alt;
rightBanner.src = `/imgs/ads/${banners[rightIndex].src}`;
rightBanner.alt = banners[rightIndex].alt;
rightBanner.title = banners[rightIndex].alt;
