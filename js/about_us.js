console.log("check")

import { aboutUs } from "../components/pages.js";
import { navbar } from "./menu.js"
import { footer,conPOPUP } from "../components/footer.js";


console.log("➡️   ~ file: about_us.js ~ line 4 ~ aboutUs", aboutUs);
const menuAppend = () => {

    let nav = document.getElementById('header');
    nav.innerHTML = navbar()
}
menuAppend();

const pageData = () => {
    let page = document.getElementById('about_us');
    page.innerHTML = aboutUs()
}

pageData()

const footerSEC = () => {
    let footerDiv = document.getElementById('footer');
    footerDiv.innerHTML = footer()
}
footerSEC()