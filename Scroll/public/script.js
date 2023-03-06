//mobile dropdown toggle
let mobileDropdownSection = document.getElementById("mobile-dropdown-section");
let navigationToggle = false;
let mobileNavigationTrigger = () => {
    if(!navigationToggle) {
        mobileDropdownSection.classList.remove("-translate-y-full");
        mobileDropdownSection.classList.add("shadow-lg");
    }
    else {
        mobileDropdownSection.classList.add("-translate-y-full");
        mobileDropdownSection.classList.remove("shadow-lg");
    }
    navigationToggle = !navigationToggle;
}

//Setting background image
let heroSection = document.getElementById("hero-section");
heroSection.style.backgroundImage = "url('hero-bcg.jpeg')";
heroSection.style.backgroundRepeat = "no-repeat";
heroSection.style.backgroundPosition = "center center";
heroSection.style.backgroundSize = "cover";

//function to return to the top of page
let topButton = document.getElementById("top-button");
let goToTop = () => {
    document.documentElement.scrollTop = 0;
}

let navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
	let scrollHeight = window.pageYOffset;
	let navHeight = navbar.clientHeight;
	if(scrollHeight > navHeight) {
		navbar.classList.add("fixed");
		navbar.classList.remove("md:absolute");
		navbar.classList.remove("md:shadow-none");
		navbar.classList.remove("md:bg-transparent");
		navbar.children[0].classList.remove("md:bg-transparent");
		for(let i=0 ; i<4 ; i++) {
			navbar.children[0].lastElementChild.children[i].classList.add("text-darkBlue");
		}
		topButton.classList.remove("hidden");
	}
	else {
		navbar.classList.remove("fixed");
		navbar.classList.add("md:absolute");
		navbar.classList.add("md:shadow-none");
		navbar.classList.add("md:bg-transparent");
		navbar.children[0].classList.add("md:bg-transparent");
		for(let i=0 ; i<4 ; i++) {
			navbar.children[0].lastElementChild.children[i].classList.remove("text-darkBlue");
		}
		topButton.classList.add("hidden");
	}
});

let scrollEvent = (event) => {
	let targetPosition = document.getElementById(event.target.name).offsetTop;
	window.scrollTo(0, targetPosition-navbar.clientHeight);
}

