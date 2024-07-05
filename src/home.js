
let generateHomePage =  (function (){
    const header = document.createElement("header");
    

    function removeDOMElements(){
        let main = document.querySelector('main');
         while (main.hasChildNodes()){
            main.removeChild(main.lastChild);
        }  
        main.remove();
       /* console.log(document.body.firstElementChild) */

    }

    function createNavBar(){
            const restaurantName = document.createElement("h1");
                restaurantName.textContent = "Ethiopian Restaurant"

        const nav = document.createElement("nav");
        const homeButton = document.createElement("button");
            homeButton.textContent = "Home";
            homeButton.classList.add("home-button")

        const menuButton = document.createElement("button");
            menuButton.textContent = "Menu";
            menuButton.classList.add('menu-button');

        const contactButton = document.createElement("button");
            contactButton.textContent = "Contact";
            contactButton.classList.add("contact-button");

        nav.append(homeButton,menuButton,contactButton);
        header.append(restaurantName,nav);

        document.body.append(header);
        
    }
  

function createAboutSection(){
    const main = document.createElement("main");
    const containerDiv = document.createElement("div");
        containerDiv.setAttribute("id", "content");

    const about = document.createElement("h2");
        about.textContent = "About";

    const description = document.createElement("p");
        description.textContent = `Welcome to my authentic Ethiopian restaurant! We have everything you can think of that will
        either clog your arteries or give you diabetes! My family comes from a long line people with 
        dietary-caused health problems and we would love to share the tradition with you and your family!
        Come on down, we can't wait to see you.`;

     main.appendChild(containerDiv)
     containerDiv.append(about, description);

    document.body.append( main);
}

  return {createNavBar, createAboutSection, removeDOMElements}

})();
export {generateHomePage};