

function countdown(){
    const diff = new Date(Date.UTC(2020, 10, 3)) - new Date();
    console.log('days', diff);
    var totalSeconds = diff / 1000;
    document.getElementById("days").innerHTML = formattime(Math.floor(totalSeconds /3600/24));
    document.getElementById("hours").innerHTML = formattime(Math.floor(totalSeconds /3600)%24);
    document.getElementById("seconds").innerHTML = formattime(Math.floor(totalSeconds) %60);
    document.getElementById("minutes").innerHTML = formattime((Math.floor(totalSeconds /60))%60);
}
function formattime(time){
return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown,1000);