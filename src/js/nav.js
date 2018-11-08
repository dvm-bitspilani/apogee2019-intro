import jump from 'jump.js';

let slideSections = {
  about: {
    id: "about-image-container",
    link: "about-link",
    name: "about"
  },
  events: {
    id: "events-image-container",
    name: "events"
  },
  pastspeakers: {
    id: "pastspeakers-image-container",
    name: "pastspeakers"
  },
  paperproject: {
    id: "paperproject-image-container",
    name: "paperproject"
  },
  ambassador: {
    id: "ambassador-image-container",
    name: "ambassador"
  },
  teaser: {
    id: "teaser-image-container",
    name: "teaser"
  }
}

function goToPage (pageName) {
  jump(document.getElementById(slideSections[pageName].id));
}

document.getElementById(slideSections.about.link).addEventListener("click", function () {
  goToPage("about");
});