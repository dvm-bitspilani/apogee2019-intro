function init() {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (w > 1000) {
        document.addEventListener("DOMContentLoaded", function () {
            setParticles("particles-js-desktop");
        });
    } else {
        document.addEventListener("DOMContentLoaded", function () {
            setParticles("particles-js-mobile");
        });
    }

    function setParticles(divName) {
        particlesJS.load(divName, './static/particlesjs-config.json', function () {
            console.log('callback - particles.js config loaded for ' + divName);
        });
    }
}
init();