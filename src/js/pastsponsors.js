import flickity from 'flickity';

const flkty3 = new flickity(
  '.carousel-pastsponsors', {
    wrapAround: true,
    draggable: true,
    pageDots: false
  }
);

setTimeout(function () {
  flkty3.reloadCells();
  flkty3.reloadCells();
  flkty3.next();
}, 500);