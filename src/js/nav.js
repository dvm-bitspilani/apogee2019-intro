import jump from 'jump.js';
function init() {

  let slideSections = {
    home: {
      id: "landing-text-container",
      menuLink: "home-menu-link",
      name: "home"
    },
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
    pastsponsors: {
      id: "pastsponsors-image-container",
      link: "pastsponsors-link",
      menuLink: "pastsponsors-menu-link",
      name: "pastsponsors"
    },
    pastspeakers: {
      id: "pastspeakers-image-container",
      menuLink: "pastspeakers-menu-link",
      name: "pastspeakers"
    },
    paperproject: {
      id: "paperproject-image-container",
      menuLink: "paperproject-menu-link",
      name: "paperproject"
    },
    ambassador: {
      id: "ambassador-image-container",
      menuLink: "ambassador-menu-link",
      link: "ambassador-link",
      name: "ambassador"
    },
    teaser: {
      id: "teaser-image-container",
      menuLink: "",
      name: "teaser"
    },
    contact: {
      id: "contact-image-container",
      link: "contact-link",
      menuLink: "contact-menu-link",
      name: "contact"
    },
  }

  function goToPage(pageName) {
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
}

init();