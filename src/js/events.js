import flickity from 'flickity';
function init() {
  // import { setTimeout } from 'timers';

  const events = [
    {
      name: "IDRL",
      img: require("../imgs/events/idrl.jpg")
    },
    {
      name: "Indian navy demo",
      img: require("../imgs/events/indianNavy.png")
    },
    {
      name: "NAO bot",
      img: require("../imgs/events/nao.png")
    },
    {
      name: "RAW",
      img: require("../imgs/events/raw.jpg")
    },
    {
      name: "FTGP",
      img: require("../imgs/events/ftgp.jpg")
    },
    {
      name: "AIC",
      img: require("../imgs/events/aic.jpg")
    }
  ];

  const eventsCarousel = document.getElementsByClassName("carousel-events")[0];
  events.forEach(
    event => {
      const wrap = document.createElement("div");
      wrap.classList.add("carousel-elem-events");

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
      pageDots: false
    }
  );


  setTimeout(function () {
    flkty1.reloadCells();
    flkty1.reloadCells();
    flkty1.next();
  }, 500);
}

init();