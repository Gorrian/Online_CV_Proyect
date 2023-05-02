
/**
 * Tengo que agredecer este trabajo a internet.
 * Referencia: https://bootstrap-menu.com/detail-fixed-onscroll.html
 */

$(document).ready(function () {
  let navPos=$("#navbar_top").position()["top"];
  window.addEventListener('scroll', function () {
    if (window.scrollY > navPos) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});
    
