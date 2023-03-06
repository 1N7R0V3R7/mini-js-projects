let videoButton = document.getElementById("video-button");
let preloader = document.getElementById("preloader");
let buttonFlag = true;
let videoElement = document.getElementsByTagName("video")[0];
// true -> play
// false => pause
let playPause = () => {
    if(buttonFlag) {
        videoButton.classList.remove("translate-x-0");
        videoButton.classList.add("translate-x-full");
        videoElement.pause();
    }
    else {
        videoButton.classList.remove("translate-x-full");
        videoButton.classList.add("translate-x-0");
        videoElement.play();
    }
    buttonFlag = !buttonFlag;    
}
window.onload = (event) => {
    setTimeout(load, 2000);
}
let load = () => {
    preloader.classList.add("hidden");
    videoButton.parentElement.parentElement.classList.remove("hidden");
    videoElement.classList.remove("hidden");
}