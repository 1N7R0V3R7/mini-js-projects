let accordion = document.getElementById("accordion");
let renderAccordion = (event) => {
    let button = getCurrentElement(event);
    let buttonIndex = getButtonIndex(button)-1;
    for(let i=0 ; i<accordion.childElementCount ; i++) {
        if(i===buttonIndex) {
            openAccordionCard(accordion.children[i]);
        }
        else {
            closeAccordionCard(accordion.children[i]);
        }
    }
}
let openAccordionCard = (card) => {
    card.children[0].children[1].classList.add("hidden");
    card.children[0].children[2].classList.remove("hidden");
    card.children[1].classList.remove("hidden");
    card.children[2].classList.remove("hidden");
}
let closeAccordionCard = (card) => {
    card.children[0].children[1].classList.remove("hidden");
    card.children[0].children[2].classList.add("hidden");
    card.children[1].classList.add("hidden");
    card.children[2].classList.add("hidden");
}
let getButtonIndex = (button) => {
    return parseInt(button.id);
};
let getCurrentElement = (event) => {
    let currentElement = event.target;
    if(event.target.id==="svg") {
        currentElement = event.target.parentElement;
    }
    else if(event.target.id==="path") {
        currentElement = event.target.parentElement.parentElement;
    }
    return currentElement;
}