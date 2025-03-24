// Branches Map
function switchBranch(branch) {
    var branches = ["https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3866.1124857059554!2d121.10359854422818!3d14.304896428829071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDE4JzEzLjMiTiAxMjHCsDA2JzIzLjciRQ!5e0!3m2!1sen!2sph!4v1742810471014!5m2!1sen!2sph",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d689.9052294839337!2d121.12297671745326!3d14.303536939973155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d955c343af81%3A0x2f40a770528aeb8c!2sPhase%208%20Multipurpose%20Hall!5e0!3m2!1sen!2sph!4v1721641371033!5m2!1sen!2sph", 
    "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d241.62115211952155!2d121.10615435117043!3d14.315008891780213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d14.3150225!2d121.1061939!5e0!3m2!1sen!2sph!4v1742813007975!5m2!1sen!2sph", 
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406.3566939167589!2d121.10628261011713!3d14.315024041067494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d9b90f2a2b0f%3A0xb8545fefcb2a5f9!2sTiongco%20Subdivision%2C%20Santa%20Rosa%2C%20Laguna!5e0!3m2!1sen!2sph!4v1742810586290!5m2!1sen!2sph"]

    $("iframe").attr("src", branches[branch]);
    $(".branches button").removeClass("active");
    // $(".branches button")[branch].addClass("active");
    console.log($(".branches button")[branch].classList = "active")
}

// Clamp DO NOT REMOVE!
var module = $('.clamp');
for (var i = module.length - 1; i >= 0; i--) {
    $clamp(module[i], {
        clamp: 3
    });
}