import flickity from 'flickity';
function init() {

  // if (window.innerWidth <= 600) {
  let flkty4 = new flickity(
    '.carousel-contact', {
      wrapAround: true,
      draggable: true,
      pageDots: false
    }
  );


  setTimeout(function () {
    document.getElementById("contact-container").style.display = "block";
    flkty4.reloadCells();
    flkty4.reloadCells();
    flkty4.next();
  }, 500);
  // }
}

init();