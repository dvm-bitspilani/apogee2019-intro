import flickity from 'flickity';
// import { setTimeout } from 'timers';

const events = [
  {
    name: "IDRL",
    img: require("../imgs/speakers/about-main.png")
  },
  {
    name: "Indian navy demo",
    img: require("../imgs/speakers/about-main.png")
  },
  {
    name: "NAO bot",
    img: require("../imgs/speakers/about-main.png")
  },
  {
    name: "RAW",
    img: require("../imgs/speakers/about-main.png")
  },
  {
    name: "FTGP",
    img: require("../imgs/speakers/about-main.png")
  },
  {
    name: "AIC",
    img: require("../imgs/speakers/about-main.png")
  }
];

const eventsCarousel = document.getElementsByClassName("carousel-events")[0];
events.forEach(
  event => {
    const wrap = document.createElement("div");
    wrap.classList.add("carousel-elem");

    const eventImg = document.createElement("div");
    eventImg.classList.add("event-img");
    eventImg.style.background = `url(${event.img})`;
    eventImg.style.backgroundSize = "cover";

    const eventName = document.createElement("div");
    eventName.classList.add("event-name");
    eventName.innerHTML = event.name;

    // const eventSubName = document.createElement("div");
    // eventSubName.classList.add("pastspeakers-subname");
    // eventSubName.innerHTML = speaker.subName;

    wrap.appendChild(eventImg);
    wrap.appendChild(eventName);
    // wrap.appendChild(eventSubName);

    eventsCarousel.appendChild(wrap);
  }
);

let flkty1 = new flickity(
  '.carousel-events', {
    wrapAround: true,
    draggable: true,
    pageDots: false,
  }
);


setTimeout(function () {
  flkty1.reloadCells();
  flkty1.reloadCells();
  flkty1.next();
}, 500);