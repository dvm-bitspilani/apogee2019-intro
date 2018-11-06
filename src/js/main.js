document.addEventListener("DOMContentLoaded", function () {

    // set days left
    let currentDate = new Date();
    let targetDate = new Date(2019, 2, 29);
    let oneDay = 24 * 60 * 60 * 1000;
    let diffDays = 0;
    if (currentDate.getTime() < targetDate.getTime())
        diffDays = Math.round(Math.abs((targetDate.getTime() - currentDate.getTime()) / (oneDay)));
    document.getElementById("days-count").innerHTML = diffDays;

    // on scroll event
    let divs = [
        {
            id: "about-image-container",
            background: "#0A81D1",
            fontColor: "#fff"
        },
        {
            id: "paperproject-image-container",
            background: "#faeb4c",
            fontColor: "#000B37"
        }
    ];

    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let scrollTimer;
    window.addEventListener('scroll', function (e) {
        if (scrollTimer) { clearTimeout(scrollTimer); }
        scrollTimer = setTimeout(function () {
            scrollHandler();
        }, 100);
    });
    
    function scrollHandler () {
        // change background
        divs.map(div => {
            if(document.getElementById(div.id).getBoundingClientRect().top >= 0 && document.getElementById(div.id).getBoundingClientRect().top/viewportHeight < 0.7) {
                document.getElementById("main-image-container").style.backgroundColor = div.background;
                // change font color for navbar and footer
                document.getElementById("navbar").style.color = div.fontColor;
                document.getElementById("footer").style.color = div.fontColor;
            }
            if(document.getElementById(div.id).getBoundingClientRect().top <=0 && Math.abs(document.getElementById(div.id).getBoundingClientRect().bottom/viewportHeight) > 0.7) {
                document.getElementById("main-image-container").style.backgroundColor = div.background;
                document.getElementById("navbar").style.color = div.fontColor;
                document.getElementById("footer").style.color = div.fontColor;
            }
        })

    }
});