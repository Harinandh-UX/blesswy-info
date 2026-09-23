const Locoscroll = new LocomotiveScroll({ el: document.querySelector("[data-scroll-container]"), smooth: !0, smartphone: { smooth: !0 } });
var typed = new Typed(".auto-input", { strings: ["I am Blesswy", "I am Anu", "I am a student","I'm not a Whiz student ","I am a Girl", "I am not a weeb \uD83D\uDE44", "I am Batman", "I am 17 y/o",], typeSpeed: 100, backSpeed: 100, showCursor: !1, loop: !0 });
const coords = { x: 0, y: 0 }, 
circles = document.querySelectorAll(".circle"),
colors = ["#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060", "#680060", "#60005f", "#48005f", "#3d005e"];
function animateCircles() { 
    let e = coords.x, c = coords.y;
    circles.forEach(function (o, t) { 
        o.style.left = e - 12 + "px", o.style.top = c - 12 + "px",
        o.style.scale = (circles.length - t) / circles.length,
         o.x = e, o.y = c; let l = circles[t + 1] || circles[0];
         e += (l.x - e) * .3,
         c += (l.y - c) * .3 }),
         requestAnimationFrame(animateCircles) }
function rickRoll() {
     window.open("https://youtu.be/dQw4w9WgXcQ") 
    }
     circles.forEach(function (e, c){
        e.x = 0,
        e.y = 0,
        e.style.backgroundColor = colors[c % colors.length]
    }),
    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX, coords.y = e.clientY
    }),animateCircles();
