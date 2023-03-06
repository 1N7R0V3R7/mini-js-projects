let navigation = document.getElementById("navigation");
let nav = document.getElementsByTagName("nav")[0];
let navigationOpen = false;
function showNavigation() {
    if(!navigationOpen) {
        navigation.classList.remove("-translate-y-full");
        navigationOpen = true;
    }
    else {
        navigation.classList.add("-translate-y-full");
        navigationOpen = false;
    }
}