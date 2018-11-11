document.addEventListener("DOMContentLoaded", function () {
    // when does mobile styling start
    const MOBILE_WIDTH = 1000;

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
            name: "about",
            particlesColor: "#ffffff"
        },
        {
            id: "events-image-container",
            background: "#37CC9C",
            fontColor: "#ffffff",
            name: "events",
            particlesColor: "#ffffff"
        },
        {
            id: "pastsponsors-image-container",
            background: "#4E4E4E",
            fontColor: "#ffffff",
            name: "pastsponsors",
            particlesColor: "#ffffff"
        },
        {
            id: "pastspeakers-image-container",
            background: "#7D2DC7",
            fontColor: "#ffffff",
            name: "pastspeakers",
            particlesColor: "#ffffff"
        },
        {
            id: "paperproject-image-container",
            background: "#faeb4c",
            fontColor: "#000B37",
            name: "paperproject",
            particlesColor: "#000B37"
        },
        {
            id: "ambassador-image-container",
            background: "#F1356B",
            fontColor: "#ffffff",
            name: "ambassador",
            particlesColor: "#ffffff"
        },
        {
            id: "teaser-image-container",
            background: "#fafafa",
            fontColor: "#172148",
            name: "teaser",
            particlesColor: "#172148"
        },
        {
            id: "contact-image-container",
            background: "#000313",
            fontColor: "#ffffff",
            name: "contact",
            particlesColor: "#ffffff"
        }
    ];

    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let scrollTimer;
    window.addEventListener('scroll', function (e) {
        if (scrollTimer) { clearTimeout(scrollTimer); }
        scrollTimer = setTimeout(function () {
            // set navbar-bg height
            if(document.getElementById("navbar-bg").getBoundingClientRect().height === 0) {
                let height = document.getElementById("navbar").offsetHeight;
                document.getElementById("navbar-bg").style.height = height + "px";
            }
            
            if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > MOBILE_WIDTH) {
                desktopScrollHandler();
            } else {
                mobileScrollHandler();
            }
        }, 0);
    });

    function desktopScrollHandler() {
        // change background
        divs.map(div => {
            if (document.getElementById(div.id).getBoundingClientRect().top >= 0 && document.getElementById(div.id).getBoundingClientRect().top / viewportHeight < 0.7) {
                document.getElementById("main-image-container").style.backgroundColor = div.background;

                // change font color for navbar and footer
                document.getElementById("navbar").style.color = div.fontColor;
                document.getElementById("footer").style.color = div.fontColor;

                // change particles
                if (pJSDom[0].pJS.particles.color.value !== div.particlesColor) {
                    pJSDom[0].pJS.particles.color.value = div.particlesColor;
                    pJSDom[0].pJS.particles.line_linked.color = div.particlesColor;
                    pJSDom[0].pJS.fn.particlesRefresh();
                }

                // change color for menu
                document.getElementById("menu").style.color = div.fontColor;
                document.getElementById("menu").style.background = div.background;

                // change colors of svg like apogee logo
                svgColorHandler("apogee-logo", div.fontColor);
                inlineSvgColorHandler("hamburger", div.fontColor);

                // change background of navbar
                document.getElementById("navbar-bg").style.background = div.background;
            }
            if (document.getElementById(div.id).getBoundingClientRect().top <= 0 && document.getElementById(div.id).getBoundingClientRect().bottom > 0 && Math.abs(document.getElementById(div.id).getBoundingClientRect().bottom / viewportHeight) > 0.7) {
                document.getElementById("main-image-container").style.backgroundColor = div.background;

                // change font color for navbar and footer
                document.getElementById("navbar").style.color = div.fontColor;
                document.getElementById("footer").style.color = div.fontColor;

                // change particles
                // console.log(pJSDom[0].pJS.particles.color.value, div.particlesColor);
                if (pJSDom[0].pJS.particles.color.value !== div.particlesColor) {
                    pJSDom[0].pJS.particles.color.value = div.particlesColor;
                    pJSDom[0].pJS.particles.line_linked.color = div.particlesColor;
                    pJSDom[0].pJS.fn.particlesRefresh();
                }

                // change color for menu
                document.getElementById("menu").style.color = div.fontColor;
                document.getElementById("menu").style.background = div.background;

                // change colors of svg like apogee logo
                svgColorHandler("apogee-logo", div.fontColor);
                inlineSvgColorHandler("hamburger", div.fontColor);

                // change background of navbar
                document.getElementById("navbar-bg").style.background = div.background;
            }
        })
    }

    function mobileScrollHandler() {
        // change background
        divs.map(div => {
            if (document.getElementById(div.id).getBoundingClientRect().top >= 0 && document.getElementById(div.id).getBoundingClientRect().top / viewportHeight < 0.2) {
                // change font color for navbar and footer
                document.getElementById("navbar").style.color = div.fontColor;
                document.getElementById("footer").style.color = div.fontColor;

                // change particles
                if (pJSDom[0].pJS.particles.color.value !== div.particlesColor) {
                    pJSDom[0].pJS.particles.color.value = div.particlesColor;
                    pJSDom[0].pJS.particles.line_linked.color = div.particlesColor;
                    pJSDom[0].pJS.fn.particlesRefresh();
                }

                // change color for menu
                document.getElementById("menu").style.color = div.fontColor;
                document.getElementById("menu").style.background = div.background;

                // change colors of svg like apogee logo
                svgColorHandler("apogee-logo", div.fontColor);
                inlineSvgColorHandler("hamburger", div.fontColor);

                // change background of navbar
                document.getElementById("navbar-bg").style.background = div.background;
            }
            if (document.getElementById(div.id).getBoundingClientRect().top <= 0 && document.getElementById(div.id).getBoundingClientRect().bottom > 0 && Math.abs(document.getElementById(div.id).getBoundingClientRect().bottom / viewportHeight) > 0.2) {
                // change font color for navbar and footer
                document.getElementById("navbar").style.color = div.fontColor;
                document.getElementById("footer").style.color = div.fontColor;

                // change particles
                // console.log(pJSDom[0].pJS.particles.color.value, div.particlesColor);
                if (pJSDom[0].pJS.particles.color.value !== div.particlesColor) {
                    pJSDom[0].pJS.particles.color.value = div.particlesColor;
                    pJSDom[0].pJS.particles.line_linked.color = div.particlesColor;
                    pJSDom[0].pJS.fn.particlesRefresh();
                }

                // change color for menu
                document.getElementById("menu").style.color = div.fontColor;
                document.getElementById("menu").style.background = div.background;

                // change colors of svg like apogee logo
                svgColorHandler("apogee-logo", div.fontColor);
                inlineSvgColorHandler("hamburger", div.fontColor);

                // change background of navbar
                document.getElementById("navbar-bg").style.background = div.background;
            }
        })
    }

    // on nav hamburger click
    document.getElementById("hamburger").onclick = function () {
        document.getElementById("menu").style.display = "flex";
        setTimeout(
            function () {
                // document.getElementById("container").style.filter = "blur(20px)";
                document.getElementById("menu").style.opacity = 1;
            },
            100
        );
    }

    // on menu cross click
    document.getElementById("menu-cross").onclick = function () {
        document.getElementById("container").style.filter = "none";
        document.getElementById("menu").style.opacity = 0;
        setTimeout(
            function () {
                document.getElementById("menu").style.display = "none";
            },
            200
        );
    }

    // on menu item span click
    let items = document.getElementsByClassName("menu-item");
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            document.getElementById("container").style.filter = "none";
            document.getElementById("menu").style.opacity = 0;
            setTimeout(
                function () {
                    document.getElementById("menu").style.display = "none";
                },
                100
            );
        }
    }

    // svg color change handler
    function svgColorHandler(svgId, color) {
        document.getElementById(svgId).getSVGDocument().getElementsByTagName("g")[0].style.fill = color;
    }
    function inlineSvgColorHandler(svgId, color) {
        document.getElementById(svgId).getElementsByTagName("g")[0].style.fill = color;
    }
});