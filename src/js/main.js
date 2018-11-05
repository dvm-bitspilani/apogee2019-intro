document.addEventListener("DOMContentLoaded", function() {
    let currentDate = new Date();
    let targetDate = new Date(2019, 2, 29);
    let oneDay = 24*60*60*1000;
    let diffDays = 0;
    if(currentDate.getTime() < targetDate.getTime())
        diffDays = Math.round(Math.abs((targetDate.getTime() - currentDate.getTime())/(oneDay)));
    document.getElementById("days-count").innerHTML = diffDays;
});