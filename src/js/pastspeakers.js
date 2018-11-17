import flickity from 'flickity';

const pastSpeakers = [
  {
    name: "APJ Abdul Kalam",
    subName: "Former President (2007)",
    img: require("../imgs/speakers/apj.jpeg")
  },
  {
    name: "Jimmy Wales",
    subName: "Founder, Wikipedia (2011)",
    img: require("../imgs/speakers/jimmywales.jpg")
  },
  {
    name: "Walter Lewin",
    subName: "Former Professor of Physics, MIT (2014)",
    img: require("../imgs/speakers/walterlewin.jpg")
  },
  {
    name: "Richard Stallman",
    subName: "Founder, GNU (2016)",
    img: require("../imgs/speakers/richardstallman.jpg")
  },
  {
    name: "Salman Khurshid",
    subName: "Former Minister of Law and Justice (2017)",
    img: require("../imgs/speakers/SalmanKhursheed.jpg")
  },
  {
    name: "Simon Taufel",
    subName: "Retired Elite Cricket Umpire (2017)",
    img: require("../imgs/speakers/simon.jpg")
  },
  {
    name: "Danielle Feinberg",
    subName: "Director of Photography in Lighting, PIXAR (2018)",
    img: require("../imgs/speakers/DanielleFeinberg.jpg")
  },
  {
    name: "Kailash Satyarthi",
    subName: "Nobel Laureate in Peace (2015)",
    img: require("../imgs/speakers/satyarathi.jpeg")
  }
];

const speakers = document.getElementsByClassName("carousel-speaker")[0];
pastSpeakers.forEach(
  speaker => {
    const wrap = document.createElement("div");
    wrap.classList.add("carousel-elem-pastspeakers");

    const speakerImg = document.createElement("div");
    speakerImg.classList.add("pastspeakers-img");
    speakerImg.style.background = `url(${speaker.img})`;
    speakerImg.style.backgroundSize = "cover";

    const speakerName = document.createElement("div");
    speakerName.classList.add("pastspeakers-name");
    speakerName.innerHTML = speaker.name;

    const speakerSubName = document.createElement("div");
    speakerSubName.classList.add("pastspeakers-subname");
    speakerSubName.innerHTML = speaker.subName;

    wrap.appendChild(speakerImg);
    wrap.appendChild(speakerName);
    wrap.appendChild(speakerSubName);

    speakers.appendChild(wrap);
  }
);

const flkty2 = new flickity(
  '.carousel-speaker', {
    wrapAround: true,
    draggable: true,
    pageDots: false,
  }
);

setTimeout(function () {
  flkty2.reloadCells();
  flkty2.reloadCells();
  flkty2.next();
}, 500);