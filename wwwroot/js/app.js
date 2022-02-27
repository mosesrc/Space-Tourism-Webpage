function btnOverlay() {
    const btn = document.querySelector('.explore-btn h5 a');
    let overlay = document.querySelector('.circle-overlay');

    btn.addEventListener("mouseenter", () => {
        overlay.style.opacity = '0.1';
    });

    btn.addEventListener("mouseleave", () => {
        overlay.style.opacity = "0";
    });
}

function backgroundImgChange(imageUrl) {
    const body = document.querySelector('body');
    body.style.background = `url(${imageUrl}) no-repeat fixed`;
}

function crewIndicators() {
    const circles = document.querySelectorAll('.circle');

    

    // Add Event Listener for each indicator
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            check(circles);
            circle.classList.toggle('active')
        });
    });
}

function check(list) {
    list.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
    })
}