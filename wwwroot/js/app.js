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
    const body = document.querySelector('body')
    body.style.background = `url(${imageUrl}) no-repeat fixed`;
}