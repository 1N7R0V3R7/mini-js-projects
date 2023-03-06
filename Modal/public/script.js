let body = document.getElementsByTagName("body")[0];
body.style.backgroundImage = "url('hero.jpeg')";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundPosition = "center center";
body.style.backgroundSize = "cover";
let modalOpenFlag = false;
let hero = document.getElementById("hero");
let modalMenu = document.getElementById("modalMenu");
let renderModal = () => {
    if(modalOpenFlag) {
        modalMenu.classList.add("hidden");
        modalOpenFlag = false;
    }
    else {
        modalMenu.classList.remove("hidden");
        modalOpenFlag = true;
    }
}