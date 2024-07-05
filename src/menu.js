import {generateHomePage} from "./home.js";
import "./style.css";

let {createNavBar, removeDOMElements} = generateHomePage;

export function createMenuPage(){
    removeDOMElements();
    

    let menuMain = document.createElement("main");
    let menuContentDiv = document.createElement("div")
        menuContentDiv.classList.add("menu-content");


    let menu1 = document.createElement("div");
        let menu1Item  = document.createElement("span");
            menu1Item.textContent = "Tibs";
        let menu1Price= document.createElement("span");
            menu1Price.textContent = "$17.99";


    let menu2 = document.createElement("div");
        let menu2Item = document.createElement("span");
            menu2Item.textContent = "Kitfo";
        let menu2Price= document.createElement("span");
            menu2Price.textContent = "$18.99";


    let menu3 = document.createElement("div");
        let menu3Item = document.createElement("span");
            menu3Item.textContent = "DoroWot";
        let menu3Price= document.createElement("span");
            menu3Price.textContent = "$15.99";


    menuMain.appendChild(menuContentDiv);

    menuContentDiv.append(menu1,menu2,menu3);

    menu1.append(menu1Item,menu1Price);
    menu2.append(menu2Item,menu2Price);
    menu3.append(menu3Item,menu3Price);

    document.body.appendChild(menuMain);
   
   
}