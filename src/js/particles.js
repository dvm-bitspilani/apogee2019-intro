document.addEventListener("DOMContentLoaded", function () {
    let particles = document.getElementsByClassName("particles-js");
    for(let i = 0; i<particles.length; i++)
        setParticles(particles[i].id.split('-')[2]);
});

function setParticles(divName) {
    particlesJS.load('particles-js-' + divName, './static/particlesjs-config-' + divName + '.json', function () {
        console.log('callback - particles.js config loaded for ' + divName);
    });
}