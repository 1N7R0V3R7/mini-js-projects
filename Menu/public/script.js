const menu = [
    {
        id: 1,
        item: "buttermilk pancakes",
        price: 15.99,
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        img: "./images/item-1.jpeg",
        category: "breakfast"
    },
    {
        id: 2,
        item: "diner double",
        price: 13.99,
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        img: "./images/item-2.jpeg",
        category: "lunch"
    },
    {
        id: 3,
        item: "godzilla milkshake",
        price: 6.99,
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        img: "./images/item-3.jpeg",
        category: "shakes"
    },
    {
        id: 4,
        item: "country delight",
        price: 20.99,
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        img: "./images/item-4.jpeg",
        category: "breakfast"
    },
    {
        id: 5,
        item: "egg attack",
        price: 22.99,
        description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        img: "./images/item-5.jpeg",
        category: "lunch"
    },
    {
        id: 6,
        item: "oreo dream",
        price: 18.99,
        description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        img: "./images/item-6.jpeg",
        category: "shakes"
    },
    {
        id: 7,
        item: "bacon overflow",
        price: 8.99,
        description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        img: "./images/item-7.jpeg",
        category: "breakfast"
    },
    {
        id: 8,
        item: "american classic",
        price: 12.99,
        description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        img: "./images/item-8.jpeg",
        category: "lunch"
    },
    {
        id: 9,
        item: "quarantine buddy",
        price: 16.99,
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        img: "./images/item-9.jpeg",
        category: "shakes"
    },
    {
        id: 10,
        item: "bison steak",
        price: 22.99,
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        img: "./images/item-10.jpeg",
        category: "dinner"
    }
];
let menuPlane = document.getElementById("menuPlane");
let newMenu;
window.addEventListener("load", function(){
    renderAll();
});
let renderAll = () => {
    newMenu = menu.map( (item) => createItemCard(item) );
    renderNewMenu();
}
let renderBreakfast = () => {
    let breakfastMenu = menu.filter( (item) => item.category==="breakfast");
    newMenu = breakfastMenu.map( (item) => createItemCard(item) );
    renderNewMenu();
}
let renderLunch = () => {
    let lunchMenu = menu.filter( (item) => item.category==="lunch");
    newMenu = lunchMenu.map( (item) => createItemCard(item) );
    renderNewMenu();
}
let renderShakes = () => {
    let shakesMenu = menu.filter( (item) => item.category==="shakes");
    newMenu = shakesMenu.map( (item) => createItemCard(item) );
    renderNewMenu();
}
let renderDinner = () => {
    let dinnerMenu = menu.filter( (item) => item.category==="dinner");
    newMenu = dinnerMenu.map( (item) => createItemCard(item) );
    renderNewMenu();
}
let renderNewMenu = () => {
    removeCurrentMenu();
    for(let i=0 ; i<newMenu.length ; i++) {
        menuPlane.append(newMenu[i]);
    }
}
let removeCurrentMenu = () => {
    while(menuPlane.childElementCount!=0) {
        menuPlane.removeChild(menuPlane.children[0]);
    }
}
let createItemCard = (menuItem) => {
    let div = document.createElement("div");
    div.classList.add("menuItem");
     
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image");
    imgContainer.style.backgroundImage = "url('" + menuItem.img + "')";
    imgContainer.style.backgroundRepeat = "no-repeat";
    imgContainer.style.backgroundPosition = "center center";
    imgContainer.style.backgroundSize = "cover";
    div.append(imgContainer);

    let nameAndPriceContainer = document.createElement("div");
    nameAndPriceContainer.classList.add("itemNameAndPrice");
    let itemName = document.createElement("p");
    itemName.classList.add("capitalize");
    itemName.textContent = menuItem.item;

    let itemPrice = document.createElement("p");
    itemPrice.classList.add("text-golden");
    itemPrice.textContent = menuItem.price;

    nameAndPriceContainer.append(itemName);
    nameAndPriceContainer.append(itemPrice);

    let descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description");
    descriptionContainer.textContent = menuItem.description;

    let wrapperDiv = document.createElement("div");
    wrapperDiv.append(nameAndPriceContainer);
    wrapperDiv.append(descriptionContainer);
    div.append(wrapperDiv);
    return div;
}