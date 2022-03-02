// NavBar
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
    const html = document.querySelector('html');
    html.style.backgroundImage = `url(${imageUrl})`;
}

function viewportWidth() {
    const html = document.querySelector('html');
    return html.offsetWidth;
}

function focusOnLink() {
    const navLinks = document.querySelectorAll('.NavRect a');
    let path = window.location.href;

    for (i = 0; i < navLinks.length; i++) {
        if (navLinks[i].href === path)
            navLinks[i].className = 'focus';
        console.log(navLinks[i].classList)
    }


    // mark link active

    //navLinks.forEach(item => {
    //    if (path === item.href)
    //        item.classList.toggle('focus');
    //});

}


// Crew Page in regards of Indicators
function crewIndicators() {
    const circles = document.querySelectorAll('.circle');

    // Add Event Listener for each indicator
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            check(circles, 'active');
            circle.classList.toggle('active')
        });
    });
}

function check(list, str) {
    list.forEach(item => {
        if (item.classList.contains(str)) {
            item.classList.remove(str);
        }
    });
}

function toggleNav() {
    const navigation = document.querySelector('.NavRect');
    const navToggle = document.querySelector('.toggle-nav-icon');
    const visibility = navigation.getAttribute('data-visible');

        if (visibility === "false") {
            navigation.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true)
        } else if (visibility === "true") {
            navigation.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false)
            
        }
}