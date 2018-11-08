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
            id: "events-image-container",
            background: "#37CC9C",
            fontColor: "#ffffff",
            name: "events"
        },
        {
            id: "pastspeakers-image-container",
            background: "#7D2DC7",
            fontColor: "#ffffff",
            name: "pastspeakers"
        },
        {
            id: "paperproject-image-container",
            background: "#faeb4c",
            fontColor: "#000B37",
            name: "paperproject"
        },
        {
            id: "ambassador-image-container",
            background: "#F1356B",
            fontColor: "#ffffff",
            name: "ambassador"
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

    function scrollHandler() {
        // change background
        divs.map(div => {
            if (document.getElementById(div.id).getBoundingClientRect().top >= 0 && document.getElementById(div.id).getBoundingClientRect().top / viewportHeight < 0.7) {
                document.getElementById("main-image-container").style.backgroundColor = div.background;
                // change font color for navbar and footer
                document.getElementById("navbar").style.color = div.fontColor;
                document.getElementById("footer").style.color = div.fontColor;

                // change particles
                let particles = document.getElementsByClassName("particles-js");
                for (let i = 0; i < particles.length; i++) {
                    if (particles[i].id.split('-')[2] !== div.name) {
                        particles[i].style.opacity = 0;
                    } else {
                        particles[i].style.opacity = 1;
                    }
                }

                // change color for menu
                // document.getElementById("menu").style.color = div.fontColor;
            }
            if (document.getElementById(div.id).getBoundingClientRect().top <= 0 && Math.abs(document.getElementById(div.id).getBoundingClientRect().bottom / viewportHeight) > 0.7) {
                document.getElementById("main-image-container").style.backgroundColor = div.background;
                document.getElementById("navbar").style.color = div.fontColor;
                document.getElementById("footer").style.color = div.fontColor;

                // change particles
                let particles = document.getElementsByClassName("particles-js");
                for (let i = 0; i < particles.length; i++) {
                    if (particles[i].id.split('-')[2] !== div.name) {
                        particles[i].style.opacity = 0;
                    } else {
                        particles[i].style.opacity = 1;
                    }
                }

                // change color for menu
                // document.getElementById("menu").style.color = div.fontColor;
            }
        })
    }

    // scrollHandler();

    // on nav hamburger click
    document.getElementById("hamburger").onclick = function () {
        document.getElementById("container").style.filter = "blur(20px)";
        document.getElementById("menu").style.display = "flex";
        document.getElementById("menu").style.opacity = 1;
    }

    // on menu cross click
    document.getElementById("menu-cross").onclick = function () {
        document.getElementById("container").style.filter = "blur(0px)";
        document.getElementById("menu").style.opacity = 0;
        document.getElementById("menu").style.display = "none";
    }

    // on menu item span click
    let items = document.getElementsByClassName("menu-item");
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            document.getElementById("container").style.filter = "blur(0px)";
            document.getElementById("menu").style.opacity = 0;
            document.getElementById("menu").style.display = "none";
        }
    }
});