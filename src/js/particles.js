document.addEventListener("DOMContentLoaded", function () {
    setParticles("about");

    function setParticles(divName) {
        document.getElementById(divName + "-image").addEventListener("load", function () {

            particlesJS.load('particles-js-' + divName, './static/particlesjs-config-' + divName + '.json', function () {
                console.log('callback - particles.js config loaded for ' + divName);
            });

            let height = document.getElementById(divName).clientHeight;
            console.log(height);
            document.getElementById('particles-js-' + divName).style.height = height - 10 + "px";
        })
    }
});