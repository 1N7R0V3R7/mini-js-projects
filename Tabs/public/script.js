let currentTab;
let tabContent = document.getElementById("tab-content");
let buttonContent = document.getElementById("button-content");
let toggleTab = event => {
    currentTab = event.target.id;
    for(let i=0 ; i<tabContent.childElementCount ; i++) {
        if(i===currentTab-1) {
            tabContent.children[i].classList.remove("hidden");
            buttonContent.children[i].classList.add("bg-white");
            buttonContent.children[i].classList.remove("bg-inactiveTab");
        }
        else {
            tabContent.children[i].classList.add("hidden");
            buttonContent.children[i].classList.remove("bg-white");
            buttonContent.children[i].classList.add("bg-inactiveTab");
        }
    }
    console.log(buttonContent);
}