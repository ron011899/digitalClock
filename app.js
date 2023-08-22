function calculateTime(){
    let date = new Date();
    let dayNum = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? "PM" :"AM";
    let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

    hour = hour % 12;
    hour = hour ? hour : "12";
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;

    document.getElementById("day").innerHTML = days[dayNum];
    
    document.getElementById("hour").innerHTML = hour;
    
    document.getElementById("minute").innerHTML = minute;
    
    document.getElementById("am_pm").innerHTML = ampm;

    setTimeout(calculateTime, 200);
}
window.addEventListener('load', calculateTime);
