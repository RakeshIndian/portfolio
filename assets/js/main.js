// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementsByClassName('header');
var name = '< Rakesh >'
var main = document.getElementsByClassName('main-page');
var x = false;
// Get the offset position of the navbar
var sticky = header[0].offsetTop;
// console.log(header)
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    // console.log(window.pageYOffset + " " + sticky)
    if (window.pageYOffset > sticky) {
        x = true;
        main[0].classList.add("content");
        header[0].classList.add("sticky");
    } else {
        x = false;
        main[0].classList.remove("content");
        header[0].classList.remove("sticky");
    }
    // console.log(header[0].classList)
}
function goHome() {
    window.location('#Home')
}