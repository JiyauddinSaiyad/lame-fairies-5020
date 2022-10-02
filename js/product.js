import { navbar, carouserCode, carouselMainCode, productcarousel1 } from "./menu.js";
import { footer } from "../components/footer.js";


const menuAppend = () => {

    let nav = document.getElementById('header');
    nav.innerHTML = navbar()
}
menuAppend();

const footerSEC = () => {
    let footerDiv = document.getElementById('footer');
    footerDiv.innerHTML = footer()
}
footerSEC()

let data = JSON.parse(localStorage.getItem('selectedProduct'));
console.log(data)

let pro = document.getElementById('productDetails');

let div = document.createElement('div');
div.innerHTML =null;
div.id = "productDetDiv"
let img = document.createElement('img');
img.src = data.link;

let imgdiv = document.createElement('div');
imgdiv.innerHTML =null;
imgdiv.id = "productDetDivimg"

let name = document.createElement('h3');
name.innerText = data.name

let det = document.createElement('p');
det.innerText = data.desc

let price = document.createElement('h4');
price.innerText = `$ ${data.price}`;

let addtoBag = document.createElement('button');
addtoBag.innerText = "ADD TO BAG";
addtoBag.id = "addtobagbtn";

let compDet = document.createElement('h3');
compDet.innerText = 'Shop With ModeSend Concierge';

let CompdetP = document.createElement('p');
CompdetP.innerText = 'ModeSens Concierge helps you shop 500+ stores in one place. A premium benefit exclusively reserved for Silver and above members. Learn more'

imgdiv.append(img,compDet,CompdetP)
div.append(name,det,price,addtoBag);
pro.append(imgdiv, div)