//TOGGLES
//---------------------------------------------------
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

if(adModeToggle) {
  adModeToggle.addEventListener('change', (e) => {
    if(e.target.checked) {
      page.classList.remove('disableAds');
    } else {
      page.classList.add('disableAds');
    }
  });
}

//BANNERS
//---------------------------------------------------
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

//SECRETO FACTS
//---------------------------------------------------
const secretoFacts = [
  "I think he just likes the spreadsheet parts.",
  "Ancient civilizations revered him as a fell god.",
  "He smells like old fish.",
  "I didn't know anyone else could see him.",
  "Some people say he eats the bad gifts.",
  "DO NOT LOOK HIM IN THE EYES.",
  "Be not afraid, he will not harm you.",
  "He has a wife, apparently.",
  "That's not face paint, I think he's very sick.",
  "He calls everyone 'child,' because he's very old.",
  "Think of him as a... hostile mascot."
];
// "I think The Book is his? He had it in <a href=\"https://www.youtube.com/watch?v=XYVMWYVC9U8\" style=\"font-weight: normal;\">the movie.</a>",

const factEle = document.getElementById('secretoFact');
if(factEle) {
  factEle.innerHTML = secretoFacts[Math.floor(Math.random() * secretoFacts.length)]
}