(function () {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.1}% ${50 - (_mouseY - _h) * 0.2}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.2}% ${50 - (_mouseY - _h) * 0.4}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();