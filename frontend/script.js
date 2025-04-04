gsap.registerPlugin(ScrollTrigger);

function locoscroll() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0, left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locoscroll();

function cursorEffects() {
    var page1Content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
        });
    });

    page1Content.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        });
    });

    page1Content.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        });
    });
}
cursorEffects();

function pageanimation2() {
    gsap.from(".elem h1", {
        y: 120,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 50%",
            end: "top 30%",
            stagger: 0.5,
            scrub: 2
        }
    });
}
pageanimation2();

function slideranime() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 500,
            disableOnInteraction: true,
        },
    });
}
slideranime();

var t1 = gsap.timeline();
t1.from("#loader h3", {
    x: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});
t1.to("#loader h3", {
    opacity: 0,
    stagger: -0.1,
    duration: 1,
    x: -40
});
t1.to("#loader", {
    opacity: 0
});
t1.to("#loader", {
    display: "none"
});
t1.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    delay: -0.5
});

document.getElementById("homeButton").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ✅✅✅ Login Check for Buy/Sell Section ✅✅✅
const isLoggedIn = localStorage.getItem("isLoggedIn");
const superheroSection = document.querySelector(".superhero-section");

if (!isLoggedIn || isLoggedIn !== "true") {
    superheroSection.style.display = "none"; // Hide if not logged in
}
