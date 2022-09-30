import {Trending} from "./components/Trending.js";
let trend_div  = document.getElementById("trending-section");
trend_div.innerHTML=Trending();
let arr = [{
    image:"https://cdn.modesens.com/product/8556655_3?w=400&",
    title:"MAISON",
    price:"$79 - $85",
    
},
{
    image:"https://cdn.modesens.com/availability/54594149?w=400&",
    title:"DOLCE & GABBANA",
    price:"$725",
    
},
{
    image:"https://cdn.modesens.com/availability/52210409?w=400&",
    title:"DOLCE & GABBANA",
    price:"$120 - $140",
    
},
{
    image:"https://cdn.modesens.com/product/39093046?w=400&",
    title:"BURBERRY",
    price:"$280",
    
},



];
let trending_div = document.querySelector("#trending")
const getData = () =>{
    trending_div.innerHTML = null;
   arr.forEach((el)=>{
     let div = document.createElement("div");
     let icon = document.createElement("img");
     icon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbtpDKd3f8qcZsHqVkX1vzxFIDrSahCc1oQ&usqp=CAU";
     let poster = document.createElement("img");
     poster.src = el.image;
     let title = document.createElement("h4");
     title.innerText = el.title;
     let price = document.createElement("p");
     price.innerText = el.price;
     console.log(poster,title,price);
     

     div.append(icon,poster,title,price);
     trending_div.append(div);
   });
}

getData(arr);
