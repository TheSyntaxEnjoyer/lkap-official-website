var colors = {
    primary: "#171717",
    primary_tint: "#3d3d3d",
    primary_shade: "#000000",
    secondary: "#ebe8e0",
    secondary_tint: "#ffffff",
    secondary_shade: "#cec7b1",
    accent: "#ad0023",
    accent_tint: "#fa0032",
    accent_shade: "#610013",
};

var timing = {
    f: 300,
    mf: 500,
    ms: 1000,
    s: 1500,
    xs: 1800,
    xxs: 2150,
};

var offset = {
    xf: 150,
    f: 250,
    mf: 400,
    ms: 850,
    s: 1250,
    xs: 1500,
    xxs: 1800,
};

// function once(subject) {
//     var first = true;
//     console.log(first)
//     return function() {
//         if (first) {
//             first = false;
//             console.log("ONCE")
//             return subject();
//         } el.selectorse {
//             return null;
//         }
//     };
// }
var first = true;

function once(subject) {
    if (first) {
        first = false;
        subject();
    } else {
        first = false;
    }
}

var controller = new ScrollMagic.Controller();

$(window).load(() => {
    setTimeout(() => {
        anime({
            targets: ".hero .hero__transition .transition__left div",
            scaleX: 0,
            easing: "easeInOutCubic",
            duration: timing.f,
            delay: anime.stagger(offset.xf, {
                easing: "linear",
            }),
        });
        anime({
            targets: ".hero .hero__transition .transition__right div",
            scaleX: 0,
            easing: "easeInOutCubic",
            duration: timing.f,
            delay: anime.stagger(offset.xf, {
                easing: "linear",
            }),
            complete: () => {
                $("body").css({
                    "overflow-y": "scroll",
                });

                $(".hero .hero__transition").css({
                    display: "none",
                });

                console.log("COMPLETE");
            },
        });
    }, timing.f);

    new ScrollMagic.Scene({
        triggerElement: "body",
        triggerHook: "onStart",
        duration: "100%",
    }).on("progress", () => {
        switchBG("dark");
    })

    new ScrollMagic.Scene({
        triggerElement: ".about",
        triggerHook: "onStart",
        duration: "100%",
    })
        .addTo(controller)
        .on("start", (e) => {
            // switchBG("dark");
            anime({
                targets: ".about .fx__group-fadeIn > *",
                translateY: -10,
                opacity: 1,
                easing: "easeInOutCubic",
                duration: timing.f,
                delay: anime.stagger(offset.xf, {
                    easing: "linear",
                }),
            });
        })
        .on("progress", (e) => {
            switchBG("dark");
            let translateY = Math.floor(2500 * e.progress) / 100;
            let translateX = Math.floor(2.5 * e.progress);
            let rotate = Math.floor(5 * e.progress);

            // console.log(Math.floor(translateY * translateY));
            // console.log(translateY)

            $("#about__img2").css({
                transform: `translate(calc(-15% + -${translateX}%), calc(-50% + -${translateY}%))`,
                rotate: `calc(-10deg + -${rotate}deg)`,
            });

            $("#about__img3").css({
                transform: `translate(calc(15% + ${translateX}%), calc(-50% + -${translateY}%))`,
                rotate: `calc(10deg + ${rotate}deg)`,
            });

            $("#about__img1").css({
                transform: `translateY(-${translateY}%)`,
            });
        });

    // TIMELINE
    new ScrollMagic.Scene({
        triggerElement: ".timeline",
        triggerHook: "onStart",
    })
        .addTo(controller)
        .on("progress", () => {
            switchBG("light");
        })
        .on("start", (e) => {
            var tl = anime.timeline();

            // switchBG("light");

            tl.add({
                targets: ".timeline .fx__group-fadeIn > *",
                translateY: -10,
                opacity: 1,
                easing: "easeInOutCubic",
                duration: timing.f,
                delay: anime.stagger(offset.xf, {
                    easing: "linear",
                }),
            });

            tl.add({
                targets: ".timeline .fx__group-fadeIn-Right .event",
                translateX: 0,
                opacity: 1,
                easing: "easeInOutCubic",
                duration: timing.f,
                delay: anime.stagger(offset.f, {
                    easing: "linear",
                }),
            },
                `+=${offset.f}`
            );
        });
});

const switchBG = (bg) => {
    if (bg === "dark") {
        $("body").removeClass("bg__light");
        $("body").addClass("bg__dark");
    } else {
        $("body").removeClass("bg__dark");
        $("body").addClass("bg__light");
    }
};