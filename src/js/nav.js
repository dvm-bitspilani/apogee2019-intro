import jump from 'jump.js';

let slideSections = {
  about: {
    id: "about-image-container",
    link: "about-link",
    menuLink: "about-menu-link",
    name: "about"
  },
  events: {
    id: "events-image-container",
    menuLink: "events-menu-link",
    name: "events"
  },
  pastspeakers: {
    id: "pastspeakers-image-container",
    menuLink: "pastspeakers-menu-link",
    name: "pastspeakers"
  },
  paperproject: {
    id: "paperproject-image-container",
    menuLink: "",
    name: "paperproject"
  },
  ambassador: {
    id: "ambassador-image-container",
    menuLink: "ambassador-menu-link",
    name: "ambassador"
  },
  teaser: {
    id: "teaser-image-container",
    menuLink: "",
    name: "teaser"
  }
}

function goToPage (pageName) {
  jump(document.getElementById(slideSections[pageName].id));
}

for (let page in slideSections) {
  (
    function () {
      let linkElem = document.getElementById(slideSections[page].link),
          menuLinkElem = document.getElementById(slideSections[page].menuLink);

      if (linkElem) {
        linkElem.addEventListener("click", function () {
          goToPage(slideSections[page].name);
        })
      }

      if (menuLinkElem) {
        menuLinkElem.addEventListener("click", function () {
          goToPage(slideSections[page].name);
        })
      }
    }
  )();
}