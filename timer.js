const daysEl = document.getElementById("da");
const hoursEl = document.getElementById("hr");
const minutesEl = document.getElementById("min");
const secondsEl = document.getElementById("sec");

const dl = "24 October 2023";

function countdown(){
    const deadlineDate = new Date(dl)
    const currentDate = new Date(); 

    const totalSeconds = (deadlineDate - currentDate)/1000;
    
    const da = Math.floor(totalSeconds / 3600 / 24);
    const hr = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds % 3600 / 60);
    const sec = Math.floor(totalSeconds % 60) 
    
    // console.log(days,hours,minutes,seconds);
    daysEl.innerHTML = da;
    hoursEl.innerHTML = hr;
    minutesEl.innerHTML = min;
    secondsEl.innerHTML = sec;
}
countdown()

setInterval(countdown,1000);