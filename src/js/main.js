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
            fontColor: "#fff",
            name: "about"
        },
        {
            id: "paperproject-image-container",
            background: "#faeb4c",
            fontColor: "#000B37",
            name: "paperproject"
        },
        {
            id: "teaser-image-container",
            background: "#fafafa",
            fontColor: "#172148",
            name: "teaser"
        }
    ];

    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let scrollTimer;
    window.addEventListener('scroll', function (e) {
        if (scrollTimer) { clearTimeout(scrollTimer); }
        scrollTimer = setTimeout(function () {
            scrollHandler();
        }, 0);
    });

    let currDiv = null;

    function scrollHandler() {
        // change background
        divs.map(div => {
            if (document.getElementById(div.id).getBoundingClientRect().top >= 0 && document.getElementById(div.id).getBoundingClientRect().top / viewportHeight < 0.7) {
                document.getElementById("main-image-container").style.backgroundColor = div.background;
                // change font color for navbar and footer
                document.getElementById("navbar").style.color = div.fontColor;
                document.getElementById("footer").style.color = div.fontColor;
                if (!currDiv)
                    currDiv = div.name;
                let particles = document.getElementsByClassName("particles-js");
                for (let i = 0; i < particles.length; i++) {
                    if (particles[i].id.split('-')[2] !== div.name) {
                        particles[i].style.opacity = 0;
                    } else {
                        particles[i].style.opacity = 1;
                    }
                }
            }
            if (document.getElementById(div.id).getBoundingClientRect().top <= 0 && Math.abs(document.getElementById(div.id).getBoundingClientRect().bottom / viewportHeight) > 0.7) {
                document.getElementById("main-image-container").style.backgroundColor = div.background;
                document.getElementById("navbar").style.color = div.fontColor;
                document.getElementById("footer").style.color = div.fontColor;
                if (!currDiv)
                    currDiv = div.name;
                let particles = document.getElementsByClassName("particles-js");
                for (let i = 0; i < particles.length; i++) {
                    if (particles[i].id.split('-')[2] !== div.name) {
                        particles[i].style.opacity = 0;
                    } else {
                        particles[i].style.opacity = 1;
                    }
                }
                // document.getElementById("particles-js-"+currDiv).style.opacity = 0;
                // document.getElementById("particles-js-"+div.name).style.opacity = 1;
            }
        })
    }

    scrollHandler();
});