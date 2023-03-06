let sidebarToggle = false;
/*
    false -> opening sidebar
    true -> closing sidebar
*/
let sidebar = document.getElementsByTagName("nav")[0];
let hamburgerButton = document.getElementById("hamburgerButton");
let renderSidebar = () => {
    if(!sidebarToggle) {
        sidebar.classList.remove("-translate-x-full");
        hamburgerToggle();
        sidebarToggle = true;
    }
    else {
        sidebar.classList.add("-translate-x-full");
        hamburgerToggle();
        sidebarToggle = false;
    }
}
let hamburgerToggle = () => {
    if(screen.width>640) {
        hamburgerButton.classList.remove("hidden");
    }
    else {
        if(!sidebarToggle) {
            hamburgerButton.classList.add("hidden");
        }
        else {
            hamburgerButton.classList.remove("hidden");
        }
    }
}