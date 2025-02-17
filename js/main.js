// Navbar
var collapse__btn = $("button.collapse");
var navbar = $("div.navbar__collapse");

collapse__btn.click(() => {
    collapse__btn[0].classList.toggle("is-active");
    navbar[0].classList.toggle("is-active");
})

// SCROLL BASED ANIMS
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// CLAMP
var module = $('.clamp');
for (var i = module.length - 1; i >= 0; i--) {
    $clamp(module[i], {
        clamp: 3
    });
}