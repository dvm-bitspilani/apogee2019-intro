document.addEventListener("DOMContentLoaded", function () {
    setParticles("particles-js");
});

function setParticles(divName) {
    particlesJS.load(divName, './static/particlesjs-config.json', function () {
        console.log('callback - particles.js config loaded for ' + divName);
    });
}