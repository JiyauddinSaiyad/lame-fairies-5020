// import {navbar} from "./menu.js";
// let nav_div = document.getElementById("navbar");
// nav_div.innerHTML = navbar();
// import {footer} from "./components/footer.js";
// let footer_div = document.getElementById("footer");
// footer_div.innerHTML = footer();
const getData = async () =>{
    try {
        let res = await fetch(`https://jiyakiapi.herokuapp.com/data`);
        let data = await res.json();
        let actual_data = data.products_m;
        console.log(actual_data);
        append(actual_data)
    } catch (error) {
        console.log(error);
    }
}
getData();

let beauty_div = document.querySelector("#beauty_images")
const append = (actual_data) =>{
    beauty_div.innerHTML = null;
   actual_data.forEach((el)=>{
     let div = document.createElement("div");
     let icon = document.createElement("img");
     icon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbtpDKd3f8qcZsHqVkX1vzxFIDrSahCc1oQ&usqp=CAU";
     let poster = document.createElement("img");
     poster.src = el.link;
     let title = document.createElement("h3");
     title.innerText = el.name;
     let price = document.createElement("h4");
     price.innerText = "$"+el.price;
     let desc = document.createElement("p");
     desc.innerText=el.desc;
     console.log(poster,title,price);
     

     div.append(icon,poster,title,price,desc);
     beauty_div.append(div);
   });
}

