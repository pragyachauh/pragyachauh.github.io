document.addEventListener('DOMContentLoaded', function () {
    const coffeeMaker = document.getElementById('coffeeMaker');
    const foodBeverage = document.getElementById('foodBeverage');
    const coffeeMenu = document.getElementById('coffeeMenu');
    const teaMenu = document.getElementById('teaMenu');

    fadeIn(coffeeMenu);
    coffeeMaker.classList.add('active');
    // Toggling
    coffeeMaker.addEventListener('click', function () {
        toggleMenu('coffeeMenu', this);
    });

    foodBeverage.addEventListener('click', function () {
        toggleMenu('teaMenu', this);
    });

    // Hover event listeners
    coffeeMaker.addEventListener('mouseover', function () {
        hoverIcon(this);
    });

    coffeeMaker.addEventListener('mouseout', function () {
        unhoverIcon(this);
    });

    foodBeverage.addEventListener('mouseover', function () {
        hoverIcon(this);
    });

    foodBeverage.addEventListener('mouseout', function () {
        unhoverIcon(this);
    });

    // Ensure the coffee menu is initially visible
    
});
// Function to toggle the visibility of a menu and update the active state of an element
function toggleMenu(menuId, element) {
    const coffeeMenu = document.getElementById('coffeeMenu');
    const teaMenu = document.getElementById('teaMenu');
 // Remove the 'active' class from all elements with the 'material-symbols-outlined' class
    document.querySelectorAll('.material-symbols-outlined').forEach(el => {
        el.classList.remove('active');
    });

    element.classList.add('active');
// Hide both by default
    if (menuId === 'coffeeMenu') {
        fadeIn(coffeeMenu);
        fadeOut(teaMenu);
    } else if (menuId === 'teaMenu') {
        fadeIn(teaMenu);
        fadeOut(coffeeMenu);
    }
}

function fadeIn(element) {
    element.style.display = 'block';
    element.style.height = 'auto';
    let opacity = 0;
    const fadeInInterval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval);
        }
    }, 0);
}

function fadeOut(element) {
    element.style.height = '0';
    let opacity = 1;
    const fadeOutInterval = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.2;
            element.style.opacity = opacity;
        } else {
            element.style.display = 'none';
            clearInterval(fadeOutInterval);
        }
    }, 0);
}

function hoverIcon(element) {
    element.classList.add('hovered');
}

function unhoverIcon(element) {
    element.classList.remove('hovered');
}