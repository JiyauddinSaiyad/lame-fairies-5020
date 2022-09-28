
// Menu Start
// Menu Import
import { navbar,carouserCode,carouselMainCode } from "./menu.js";

// Menu Append
const menuAppend = () => {

   let nav = document.getElementById('header');
   nav.innerHTML = navbar()
}
menuAppend();

const carouselappend = () =>{
   let carousel = document.getElementById('carouselSection1');
   carousel.innerHTML=carouserCode()
}
carouselappend();

const carouselappendMain = () =>{
   let carousel = document.getElementById('carouselSection');
   carousel.innerHTML=carouselMainCode()
}
carouselappendMain();

// Menu Functions
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
   if (!menu.classList.contains("active")) {
      return;
   }
   if (e.target.closest(".menu-item-has-children")) {
      const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
});
goBack.addEventListener("click", () => {
   hideSubMenu();
})
menuTrigger.addEventListener("click", () => {
   toggleMenu();
})
closeMenu.addEventListener("click", () => {
   toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click", () => {
   toggleMenu();
})
function toggleMenu() {
   menu.classList.toggle("active");
   document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML = menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() => {
      subMenu.classList.remove("active");
   }, 300);
   menu.querySelector(".current-menu-title").innerHTML = "";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
   if (this.innerWidth > 991) {
      if (menu.classList.contains("active")) {
         toggleMenu();
      }

   }
}

// Menu End


//search



// Carousel 

var imgList = document.getElementById('imgList');
var scrollRight = document.getElementById('scroll-right');
var scrollLeft = document.getElementById('scroll-left');

// When a user clicks on the right arrow, the ul will scroll 750px to the right
scrollRight.addEventListener('click', (event) => {
   imgList.scrollBy(1100, 0);
});

// When a user clicks on the left arrow, the ul will scroll 750px to the left
scrollLeft.addEventListener('click', (event) => {
   imgList.scrollBy(-5500, 0);
});


var imgList2 = document.getElementById('imgList2');
var scrollRight2 = document.getElementById('scroll-right2');
var scrollLeft2 = document.getElementById('scroll-left2');

// When a user clicks on the right arrow, the ul will scroll 750px to the right
scrollRight2.addEventListener('click', (event) => {
   imgList2.scrollBy(1100, 0);
});

// When a user clicks on the left arrow, the ul will scroll 750px to the left
scrollLeft2.addEventListener('click', (event) => {
   imgList2.scrollBy(-5500, 0);
});


var specialProductsList = document.getElementById('specialProductsList');
var rightSpeacialOffers = document.getElementById('scroll-rightSpeacialOffers');
var leftSpeacialOffers = document.getElementById('scroll-leftSpeacialOffers');

// When a user clicks on the right arrow, the ul will scroll 750px to the right
rightSpeacialOffers.addEventListener('click', (event) => {
   specialProductsList.scrollBy(1100, 0);
});

// When a user clicks on the left arrow, the ul will scroll 750px to the left
leftSpeacialOffers.addEventListener('click', (event) => {
   specialProductsList.scrollBy(-5500, 0);
});
