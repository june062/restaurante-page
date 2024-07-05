import {generateHomePage} from "./home.js";
import "./style.css";

let {createNavBar, removeDOMElements} = generateHomePage;

export function createContactPage(){
    removeDOMElements();
   

    let contactMain = document.createElement("main");
    let contactContentDiv = document.createElement("div")
        contactContentDiv.classList.add("contact-content");

    let contactHeader = document.createElement('h3');
        contactHeader.textContent = "Contact Information";
        let phoneNumber = document.createElement('span');
        phoneNumber.textContent = "469-123-1234";


    let contactLocation = document.createElement('h3');
        contactLocation.textContent = "Location";
        let address = document.createElement("span");
        address.textContent = "Place St City,State 49332";
    

    contactMain.appendChild(contactContentDiv);
    contactContentDiv.append(contactHeader,phoneNumber,contactLocation,address);

    document.body.appendChild(contactMain);

}