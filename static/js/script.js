/*gsap.to("#main1 h1",{
    color: "red",
    scale:1.5,
    duration: 1,
    delay: 1,
    opacity: 1,
    

})
*/

// Initialize speak-tts and use it to speak text


/*
var crsr = document.querySelector("#cursor")
var crsrblur = document.querySelector("#cursorblur")




document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px",
    crsr.style.top = dets.y + "px",
    
    crsrblur.style.left= dets.x-100 +"px"
    crsrblur.style.top= dets.y-100  +"px"

})
*/




gsap.from("#welcome h1", {
    color: "red",
    x: 1500,
    duration: 0.8,
    delay: 0.4,
    opacity: 0,


})
gsap.to("#team h1", {
    color: "red",
    scale: 1,
    duration: 1.6,
    delay: 0.9,
    opacity: 1,
    stagger: 0.2,

})
gsap.to("#proj h1", {
    opacity: 1,
    scale: 1.4,
    duration: 0.8,
    delay: 2.4,
    opacity: 1,
    stagger: 0.2,

})
gsap.to("#box1 img", {
    opacity: 1,
    duration: 0.8,
    delay: 3.1,
})
gsap.to("#box2 p", {
    opacity: 1,
    duration: 0.8,
    delay: 3.5,
})

gsap.from("#page2 h1", {

    x: -600,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        start: "top 40%",
        end: "top 30%"

    }

})
gsap.from("#page2 p", {

    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    scrollTrigger: {
        trigger: "#page2 p",
        scroller: "body",
        start: "top 40%",
        end: "top 30%"
    }


})


var elem = document.querySelectorAll("#elem")

elem.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = 1,
            val.childNodes[3].style.scale = 1.4

    });

    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = 0
    });
    val.addEventListener("mousemove", function (dets) {
        val.childNodes[3].style.left = dets.x + "px"


    })
})

let button = document.getElementById("try_me")
button.addEventListener('click', () => {
    
    fetch('http://127.0.0.1:5000/process_image').then((res) => {
        console.log(res)
    })
})