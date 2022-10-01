import { conPOPUP } from "../components/footer.js";


const dataOfCon = () => {
    let div = document.getElementById('popup-1');
    div.innerHTML = conPOPUP()
}

dataOfCon()

let togPOP = document.getElementById('togPOP');
togPOP.addEventListener('click',togglePopup)

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}
let clsPOP= document.getElementById('clsPOP');
clsPOP.addEventListener('click',closePopup);

function closePopup() {
    window.location.href = "contact_us.html";
}
