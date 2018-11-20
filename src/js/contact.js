import flickity from 'flickity';

// if (window.innerWidth <= 600) {
  console.log("asdf");
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