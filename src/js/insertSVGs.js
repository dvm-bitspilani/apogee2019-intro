import hamburgerSVG from '../images/hamburger.svg'
import closeSVG from '../images/close.svg';
//import playIconSVG from '../images/youtube_play.svg'

const navContent = document.getElementById('nav-content');
navContent.insertAdjacentHTML('beforeend', hamburgerSVG);

const closeDiv = document.getElementById('menu-cross');
closeDiv.insertAdjacentHTML('beforeend', closeSVG);
//const previewImage = document.getElementById('teaser-preview-image');
//previewImage.insertAdjacentHTML('beforeend', playIconSVG);

