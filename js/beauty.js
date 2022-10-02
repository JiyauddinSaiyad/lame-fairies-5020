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


const data = async () => {
    try {
        let data = await fetch(`https://jiyakiapi.herokuapp.com/data`);
        let maindata = await data.json();
        let beautydata = maindata.products_b
        appendProduct(beautydata);
        console.log("➡️   ~ file: beauty.js ~ line 23 ~ data ~ maindata", beautydata);
    } catch (error) {
        console.log("➡️   ~ file: beauty.js ~ line 23 ~ data ~ error", error);
    }
}
data()

let filterbyGender = document.getElementById('filterbyBrands');
filterbyGender.addEventListener('change', async () => {
    let options = document.getElementById('filterbyBrands').value;

    console.log(options)
    if (options === "All") {
        let data = await fetch(`https://jiyakiapi.herokuapp.com/data`);
        let maindata = await data.json();
        let beautydata = maindata.products_b
        // let dataFiltered = beautydata.filter(list => list.name == options)
        appendProduct(beautydata);
    } else {
        try {
            let data = await fetch(`https://jiyakiapi.herokuapp.com/data`);
            let maindata = await data.json();
            let beautydata = maindata.products_b
            let dataFiltered = beautydata.filter(list => list.name == options)
            appendProduct(dataFiltered);

        } catch (error) {
            console.log("➡️   ~ file: beauty.js ~ line 41 ~ filterbyGender.addEventListener ~ error", error);
        }
    }

})

let filterbyPrice = document.getElementById('priceFilter');
filterbyPrice.addEventListener('change', async () => {

    try {
        let data = await fetch(`https://jiyakiapi.herokuapp.com/data`);
        let maindata = await data.json();
        let beautydata = maindata.products_b;
        let options = document.getElementById('priceFilter').value;
        if (options === "lToh") {
            let lowestToHighest = beautydata.sort((a, b) => a.price - b.price);
            appendProduct(lowestToHighest);
        } else if (options === "hTol") {
            let HighestTolowest = beautydata.sort((a, b) => b.price - a.price);
            appendProduct(HighestTolowest);
        }

    } catch (error) {
        console.log("➡️   ~ file: beauty.js ~ line 64 ~ filterbyPrice.addEventListener ~ error", error);
    }

})


const appendProduct = (beautydata) => {
    let maindiv = document.getElementById('beauty_images');
    maindiv.innerHTML = null;

    beautydata.forEach(el => {
        let div = document.createElement("div");
        div.id = "productDIV"
        let icon = document.createElement("img");
        icon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbtpDKd3f8qcZsHqVkX1vzxFIDrSahCc1oQ&usqp=CAU";
        let poster = document.createElement("img");
        poster.src = el.link;
        let title = document.createElement("h3");
        title.innerText = el.name;
        let price = document.createElement("h4");
        price.innerText = `$ ${el.price}`;
        let desc = document.createElement("p");
        desc.innerText = el.desc;
        // console.log(poster,title,price);

        div.addEventListener('click',()=>{
            productSelected(el)
        });
        div.append(icon, poster, title, price, desc);
        maindiv.append(div);
    });

}

const productSelected = (el) =>{
    console.log(el)
    let proData = localStorage.setItem('selectedProduct',JSON.stringify(el))
    console.log("➡️   ~ file: beauty.js ~ line 111 ~ productSelected ~ proData", proData);
    window.location.href='product.html'
    
}