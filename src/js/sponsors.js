import flickity from 'flickity';
function init() {
    const sponsors = [
        {
            name: "Asus",
            img: require("../imgs/sponsors/asus.png")
        },
        {
            name: "Bluedart",
            img: require("../imgs/sponsors/bluedart.jpg")
        },
        {
            name: "CC",
            img: require("../imgs/sponsors/cc.png")
        },
        {
            name: "Cetpa",
            img: require("../imgs/sponsors/cetpa.png")
        },
        {
            name: "Coding Blocks",
            img: require("../imgs/sponsors/codingBlocks.png")
        },
        {
            name: "Coke",
            img: require("../imgs/sponsors/coke.png")
        },
        {
            name: "Coverage",
            img: require("../imgs/sponsors/coverage.png")
        },
        {
            name: "Media Partner",
            img: require("../imgs/sponsors/dm1.png")
        },
        {
            name: "Media Partner",
            img: require("../imgs/sponsors/dm2.png")
        },
        {
            name: "Media Partner",
            img: require("../imgs/sponsors/dm3.png")
        },
        {
            name: "Media Partner",
            img: require("../imgs/sponsors/dm4.png")
        },
        {
            name: "Media Partner",
            img: require("../imgs/sponsors/dm5.png")
        },
        {
            name: "Media Partner",
            img: require("../imgs/sponsors/dm6.png")
        },
        {
            name: "Media Partner",
            img: require("../imgs/sponsors/dm7.png")
        },
        {
            name: "HarperCollins",
            img: require("../imgs/sponsors/hc.jpg")
        },
        {
            name: "Honda",
            img: require("../imgs/sponsors/honda.png")
        },
        {
            name: "IBM",
            img: require("../imgs/sponsors/ibm.png")
        },
        {
            name: "ICICI",
            img: require("../imgs/sponsors/icici.png")
        },
        {
            name: "Intel",
            img: require("../imgs/sponsors/intel.png")
        },
        {
            name: "Lalita",
            img: require("../imgs/sponsors/lalita.png")
        },
        {
            name: "Living Foodz",
            img: require("../imgs/sponsors/livingFoodz.jpg")
        },
        {
            name: "Maggi",
            img: require("../imgs/sponsors/maggi.png")
        },
        {
            name: "Media Partner",
            img: require("../imgs/sponsors/om1.png")
        },
        {
            name: "Media Partner",
            img: require("../imgs/sponsors/om2.png")
        },
        {
            name: "Media Partner",
            img: require("../imgs/sponsors/om3.jpg")
        },
        {
            name: "PayPal",
            img: require("../imgs/sponsors/paypal.png")
        },
        {
            name: "payTm",
            img: require("../imgs/sponsors/payTm.png")
        },
        {
            name: "PaisaWapas",
            img: require("../imgs/sponsors/pw.png")
        },
        {
            name: "QA",
            img: require("../imgs/sponsors/qa.png")
        },
        {
            name: "Shiksha",
            img: require("../imgs/sponsors/shiksha.png")
        },
        {
            name: "T4A",
            img: require("../imgs/sponsors/t4a.jpg")
        },
        {
            name: "Tata Sons",
            img: require("../imgs/sponsors/tataSons.jpg")
        },
        {
            name: "Toppr",
            img: require("../imgs/sponsors/toppr.png")
        },
        {
            name: "TSS",
            img: require("../imgs/sponsors/tss.jpg")
        },
        {
            name: "Voot",
            img: require("../imgs/sponsors/voot.jpg")
        },
        {
            name: "YCP",
            img: require("../imgs/sponsors/ycp.png")
        },
    ];

    const sponsorsCarousel = document.getElementsByClassName("carousel-pastsponsors")[0];
    sponsors.forEach(
        event => {
            const wrap = document.createElement("div");
            wrap.classList.add("carousel-elem-pastsponsors");

            const eventImg = document.createElement("div");
            eventImg.classList.add("sponsor-image");
            eventImg.style.background = `url(${event.img})`;
            eventImg.style.backgroundSize = "contain";
            eventImg.style.backgroundPosition = "50%";
            eventImg.style.backgroundRepeat = "no-repeat";

            const eventName = document.createElement("div");
            eventName.classList.add("sponsor-info");
            eventName.innerHTML = event.name;

            // const eventSubName = document.createElement("div");
            // eventSubName.classList.add("pastspeakers-subname");
            // eventSubName.innerHTML = speaker.subName;

            wrap.appendChild(eventImg);
            wrap.appendChild(eventName);
            // wrap.appendChild(eventSubName);

            sponsorsCarousel.appendChild(wrap);
        }
    );

    let flkty5 = new flickity(
        '.carousel-pastsponsors', {
            wrapAround: true,
            draggable: true,
            pageDots: false
        }
    );


    setTimeout(function () {
        flkty5.reloadCells();
        flkty5.reloadCells();
        flkty5.next();
    }, 500);
}

init();