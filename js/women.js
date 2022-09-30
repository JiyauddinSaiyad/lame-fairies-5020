import {Trending} from "./components/Trending.js";
let trend_div  = document.getElementById("trending-section");
trend_div.innerHTML=Trending();
let arr = [{
    image:"https://cdn.modesens.com/availability/52075207?w=400&",
    title:"ATTICO",
    price:"$521",
    
},
{
    image:"https://cdn.modesens.com/availability/52075217?w=400&",
    title:"ATTICO",
    price:"$657",
    
},
{
    image:"https://cdn.modesens.com/availability/51176478?w=400&",
    title:"ATTICO",
    price:"$194",
    
},
{
    image:"https://cdn.modesens.com/availability/52075272?w=400&",
    title:"ATTICO",
    price:"$454",
    
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