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
}


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/


);