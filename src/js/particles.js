document.addEventListener("DOMContentLoaded", function () {
	particlesJS.load('particles-js-about', './static/particlesjs-config.json', function () {
        console.log('callback - particles.js config loaded');
    });

    setParticlesHeight("about");
    
    function setParticlesHeight (divName) {
        document.getElementById(divName + "-image").addEventListener("load", function () {
            let height = document.getElementById(divName).clientHeight;
            document.getElementById('particles-js-' + divName).style.height = height - 10+ "px";
            let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if((1.33*height) > viewportWidth)
                document.getElementById('particles-js-' + divName).style.width = (1.33 * height) - 10 + "px";
        })
    }
});