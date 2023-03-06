
var counter = document.getElementById("counter");
var inc = document.getElementById("increment");
var dec = document.getElementById("decrement");
function decreaseCounter() {
    let temp = counter.innerHTML-1;
    counter.innerHTML = temp;
    colorChange(temp);
}
function increaseCounter() {
    let temp = counter.innerHTML;
    temp = Number(temp);
    counter.innerHTML = temp+1; 
    colorChange(temp+1);
}
function resetCounter() {
    counter.innerHTML = 0;
    colorChange(0);
}
function colorChange(temp) {
    if(temp>0) {
        counter.style.color = "#059669";
    }
    else if(temp<0) {
        counter.style.color = "#DC2626";
    }
    else {
        counter.style.color = "#142643";
    }
}