let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const weeks = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
let deadlineDate = document.getElementById("deadline-date");
let remainder = document.getElementById("remaining-days");
let getFutureDate = () => {
    let f_date = new Date();
    f_date.setDate(f_date.getDate()+10);
    return f_date
}
let setFututeDate = () => {
    deadlineDate.textContent = "Giveaway Ends on " + weeks[futureDate.getDay()] + ", " + futureDate.getDate() + " " + months[futureDate.getMonth()] + " " + futureDate.getFullYear() + " " + `${futureDate.getHours()>=12 ? `${futureDate.getHours()-12}:${futureDate.getMinutes()}pm` : `${futureDate.getHours()}:${futureDate.getMinutes()}am`}`
}
let futureDate = getFutureDate();
setFututeDate();


let countdownTimer = () => {
    let cd_time_mil = futureDate.getTime() - new Date().getTime();
    remainder.children[0].children[0].textContent = Math.floor(cd_time_mil/(1000*60*60*24));
    remainder.children[1].children[0].textContent = Math.floor((cd_time_mil%(1000*60*60*24))/(1000*60*60));
    remainder.children[2].children[0].textContent = Math.floor((cd_time_mil%(1000*60*60))/(1000*60));
    remainder.children[3].children[0].textContent = Math.floor((cd_time_mil%(1000*60))/1000);
}
setInterval(() => {
    countdownTimer();
}, 500);