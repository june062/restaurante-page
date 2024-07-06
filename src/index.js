import "./style.css";
import {generateHomePage} from "./home.js"
import {createMenuPage} from "./menu.js"
import {createContactPage} from "./contact.js"

(()=>{
    generateHomePage.createNavBar();
    generateHomePage.createAboutSection();
} )()


 let homeButton = document.querySelector(".home-button");
let menuButton = document.querySelector('.menu-button');
let contactButton = document.querySelector(".contact-button");



homeButton.addEventListener("click",()=>{
    generateHomePage.removeDOMElements();
    generateHomePage.createAboutSection();
} );

menuButton.addEventListener("click", createMenuPage);
contactButton.addEventListener("click", createContactPage);   