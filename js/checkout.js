import { navbar,carouserCode,carouselMainCode,productcarousel1 } from "./menu.js";
import { footer } from "../components/footer.js";
import {Community} from "../components/community.js"

const menuAppend = () => {

    let nav = document.getElementById('header');
    nav.innerHTML = navbar()
 }
 menuAppend();

 const footerSEC = ()=>{
    let footerDiv = document.getElementById('footer');
    footerDiv.innerHTML = footer()
 }
 footerSEC()

 var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
  var node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})

window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeDropdown)
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}


let checkoutProduct = JSON.parse(localStorage.getItem('checkoutProduct'))
console.log("➡️   ~ file: checkout.js ~ line 64 ~ checkoutProduct", checkoutProduct);

let img = document.getElementById('productImage');
img.src = checkoutProduct.link

let brand = document.querySelector('.thin');
brand.innerHTML = checkoutProduct.name;

let det = document.getElementById('proDet');
det.innerText = checkoutProduct.desc

let more = document.querySelector('#more');
more.innerText ="N/A"

let price = document.querySelector('.price');
price.innerHTML = `$${checkoutProduct.price}`

let total = document.querySelector('#total');
total.innerHTML = `$${checkoutProduct.price}`

let btnCheck = document.getElementById('checkoutBTN');
btnCheck.addEventListener('click',()=>{
    if(confirm(`Your Order For ${checkoutProduct.name} has been placed`)){
        window.location.href='index.html'
    }
})

