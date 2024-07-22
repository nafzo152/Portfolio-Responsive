document.addEventListener('DOMContentLoaded', () => {
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close')

    /*=============== MENU SHOW ===============*/
    /* Validate if navToggle Exists */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            console.log('Toggle clicked'); // Debugging log
            navMenu.classList.add('show-menu')
        })
    } else {
        console.log('navToggle element not found');
    }

    /*=============== MENU HIDDEN ===============*/
    /* Validate if navClose Exists */
    if (navClose) {
        navClose.addEventListener('click', () => {
            console.log('Close clicked'); // Debugging log
            navMenu.classList.remove('show-menu')
        })
    } else {
        console.log('navClose element not found');
    }

    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')

        // Clicking on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }

    navLink.forEach(n => n.addEventListener('click', linkAction))

    /*=============== ADD BLUR TO HEADER ===============*/
    // Add your code here

    /*=============== EMAIL JS ===============*/
    // Add your code here

    /*=============== SHOW SCROLL UP ===============*/ 
    // Add your code here

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    // Add your code here

    /*=============== SCROLL REVEAL ANIMATION ===============*/
    // Add your code here
});
