focusonLink();

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
    const body = document.querySelector('body');
    body.style.background = `url(${imageUrl}) no-repeat fixed`;
  /*  focusOnLink();*/
}

//function focusOnLink() {
//    const navLinks = document.querySelectorAll('.NavRect a');
//    let path = window.location.href;
//    check(navLinks, 'focus');

//    navLinks.forEach(item => {
//        item.addEventListener('click', () => {
//            if (path === item.href) {
//                item.classList.add('focus');
//            } else {
//                item.classList.remove('focus');
//            }
//        })
//    });
    
//}


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
    })
}