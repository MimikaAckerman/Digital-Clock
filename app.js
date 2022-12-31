setInterval(showTime,1000);
function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if(hour > 12){
        hour -= 12;
        am_pm = 'PM';
    }
    if(hour == 0){
        hr = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

let currentTime = hour + ":"
            + min + ":" + sec + am_pm;
 
    document.getElementById("clock")
            .innerHTML = currentTime;


}

showTime();








/* function showTime(){
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    const session = "AM";

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h= h -12;
        session = "PM";
    }
    h = (h <10) ? "0" + h : h;
    m = (m <10) ? "0" + m : m;
    s = (s <10) ? "0" + s : s;

    const time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime,1000);

}
showTime(); */