import {Recent} from "./components/recentView.js";
let rec_div  = document.getElementById("recent-section");
rec_div.innerHTML=Recent();
let arr = [{
    image:"https://cdn.modesens.com/product/13476099_46?w=400&",
    title:"MAISON FRANCIS KURKDJIAN",
    price:"$250",
    
},
];
let recent_div = document.querySelector("#recent")
const getData = () =>{
    recent_div.innerHTML = null;
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
     recent_div.append(div);
   });
}

getData(arr);