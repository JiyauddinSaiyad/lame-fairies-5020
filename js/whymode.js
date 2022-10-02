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