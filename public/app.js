const backtoTop = document.querySelector('#backtoTop');
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        backtoTop.style.display = 'block';
    } else {
        backtoTop.style.display = 'none';
    }
}
const nav = document.querySelector('#nav');
window.addEventListener('scroll', scrolFunction);

function scrolFunction() {
    if (window.pageYOffset == 0) {
        nav.classList.add('bg')
        nav.classList.remove('color1')
    } else {
        nav.classList.add('color1')
        nav.classList.remove('bg')
    }
}