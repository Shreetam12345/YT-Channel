var menu=document.querySelector("#nav h2 i")
var cross=document.querySelector("#menu i")

var tl=gsap.timeline()
tl.to("#menu",{
    right:0,
    duration:0.8
})
tl.from("#menu h2",{
    x:150,
    duration:0.4,
    stagger:0.28,
    opacity:0
})
tl.pause()
menu.addEventListener("click",function(){
      tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})
// function circlemousefollower(xscale,yscale) {
//     window.addEventListener("mousemove", function (dets) {
//         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
//     })
// }
function circlemousefollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        const x = dets.clientX + window.scrollX;
        const y = dets.clientY + window.scrollY;
        document.querySelector("#minicircle").style.transform = `translate(${x}px, ${y}px)`;
    });
}

circlemousefollower();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// document.addEventListener("DOMContentLoaded", function() {
//         const container = document.getElementById('page33');
//         const iframes = container.querySelectorAll('iframe');

//         // Duplicate the iframes for smooth looping
//         iframes.forEach(iframe => {
//             const clone = iframe.cloneNode(true);
//             container.appendChild(clone);
//         });

//         gsap.to(container, {
//             yPercent: -100 * iframes.length / 2, // Adjust for vertical movement
//             ease: 'none',
//             duration: 20, // Adjust duration for desired speed
//             repeat: -1,
//             modifiers: {
//                 yPercent: gsap.utils.wrap(-100 * iframes.length / 2, 0)
//             }
//         });
// });




