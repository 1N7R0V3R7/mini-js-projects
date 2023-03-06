const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9, 'A', 'B', 'C', 'D', 'E', 'F'];
var bodyBackground = document.body;
var colorDisplay = document.getElementsByTagName("span")[0];
function getRandom() {
    var randIndex = Math.floor(Math.random()*16);
    return arr[randIndex];
}
function changeHex() {
    let color = '#';
    for(let i=0 ; i<6 ; i++) {
        let index = getRandom();
        color = color + "" + index;
    }
    bodyBackground.style.backgroundColor = color;
    colorDisplay.style.color = color;
    colorDisplay.innerHTML = color;
}
