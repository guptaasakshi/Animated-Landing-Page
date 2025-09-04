// gsap.to("#box",{
//     x: 1200,
//     //y: 500,
//     duration : 2,
//     delay : 1,
//     rotate : 360,
//     backgroundColor : "blue",
//     borderRadius : "50%",
// })

// gsap.from("h1",{
//     color: "red",
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     y: 30,
//     stagger: 0.3, // one by one show hoga 

// })

// gsap.to("#box1",{
//     x: 1200,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     repeat: -1,  //infinite move krega
//     yoyo: true,
// })

// var tl = gsap.timeline()

// tl.from("h2",{
//     y: -20,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
// })

// tl.from("h4",{
//     y: -20,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.3,
// })

// tl.from("h1", {
//     y: 20,
//     opacity: 0,
//     duration: 0.5,
//     scale: 0.2,
// })

// gsap.from("#page1 #box",{
//     scale: 0,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
// })

// gsap.from("#page2 #box",{
//     scale: 0,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     scrollTrigger: {
//         trigger : "#page2 #box",
//         scroller : "body",
//         markers : true,
//         start : "top 60%"

//     }
// })

// gsap.from("#page3 #box",{
//     scale: 0,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     scrollTrigger: {
//         trigger : "#page3 #box",
//         scroller : "body",
//         markers : true,
//         start : "top 60%"

//     }
// })

// gsap.from("#page2 h1" ,{
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger : {
//         trigger : "#page2 h1",
//         scroller : "body",
//         markers : true,
//         start : "top 50%"
//     }
// })

// gsap.from("#page2 h2" ,{
//     opacity: 0,
//     duration: 2,
//     x: -500,
//     scrollTrigger : {
//         trigger : "#page2 h2",
//         scroller : "body",
//         markers : true,
//         start : "top 50%"
//     }
// })


// gsap.from("#page2 #box", {
//     opacity: 0,
//     scale: 0,
//     rotate: 720,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller : "body",
//         markers : true,
//         start : "top 60%",
//         end: "top 30%",
//         // scrub: true,
//         scrub: 2,
//         pin: true,
//     }
// })

// gsap.to("#page2 h1",{
//     transform : "translateX(-150%)",
//     scrollTrigger: {
//         trigger: "#page2 ",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 2,
//         pin: true,
//     }
// })

// scalable vector graphic -- it is a container

// var Path = "M 10 100 Q 550 100 990 100"

// var finalPath ="M 10 100 Q 550 100 990 100"

// var string = document.querySelector("#string")


// string.addEventListener("click",function(){
//     console.log("entered")
// })

// string.addEventListener("mousemove",function(dets){
//     path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    
//     gsap.to("svg path", {
//         attr: {d: path},
//         duration: 0.3,
//         ease: "power3.out"
//     })
// })


// string.addEventListener("mouseleave",function(){
//     gsap.to("svg path", {
//         attr: {d:finalPath},
//         duration: 0.8,
//         ease: "elastic.out(1,0.2)"
//     })
// })

// project 2

// var main = document.querySelector("#main")
// var cursor = document.querySelector("#cursor")
// var imageDiv = document.querySelector("#image")

// main.addEventListener("mousemove",function(dets){   //
//     gsap.to(cursor,{
//         x:dets.x,
//         y:dets.y,
//         duration:0.6,
//         // ease: "back.out",
//     })
// })

// imageDiv.addEventListener("mouseenter",function() {
//     cursor.innerHTML = "View More"
//     gsap.to(cursor,{
//         scale: 4,
//         backgroundColor: "#ffffff8a",
//     })
// })

// imageDiv.addEventListener("mouseleave",function(){
//     cursor.innerHTML = ""

//     gsap.to(cursor,{
//         scale: 1,
//         backgroundColor: "brown",
//     })
// })

// project 3

// var menu = document.querySelector("#nav i")
// var cross = document.querySelector("#full i")
// var tl = gsap.timeline()

// tl.to("#full", {
//     right: 0,
//     duration: 0.5,
// })

// tl.from("#full h4",{
//     x: 150,
//     stagger: 0.2,
//     duration: 0.6,
//     opacity: 0,
// })

// tl.from("#full i",{
//     opacity: 0,
// })

// tl.pause()

// menu.addEventListener("click",function(){
//     tl.play()
// })

// cross.addEventListener("click",function(){
//     tl.reverse()
// })

// project - 4 text animation

// function breakTheText() {
// var h1 = document.querySelector("h1")
// var h1Text = h1.textContent

// var splittedtText= h1Text.split("")
// var halfValue = splittedtText.length/2

// var clutter = ""

// splittedtText.forEach(function (elem,idx){
//     if(idx<halfValue){
//         clutter += `<span class="a">${elem}</span>`
//     }else{
//         clutter += `<span class="b">${elem}</span>`
//     }
// })

// h1.innerHTML = clutter
// }

// breakTheText()

// gsap.from("h1 .a",{
//     y:80,
//     opacity: 0,
//     duration: 0.6,
//     delay: 0.5,
//     stagger: 0.15,
// })

// gsap.from("h1 .b",{
//     y:80,
//     opacity: 0,
//     duration: 0.6,
//     delay: 0.5,
//     stagger: -0.15,
// })

// project 4
// function marqueAnimation() {
//     window.addEventListener("wheel",function(dets) {
//         if(dets.deltaY>0) {

//             gsap.to(".marque",{
//                 transform: "translateX(-200%)",
//                 repeat: -1,
//                 duration: 4,
//                 ease: "none"
//             })
//             gsap.to(".marque img",{
//                 rotate: 180
//             })

//         }else {
//             gsap.to(".marque",{
//                 transform:"translateX(0%)",
//                 repeat: -1,
//                 duration: 4,
//                 ease: "none",
//             })
//             gsap.to(".marque img",{
//                 rotate: 0
//             })
//         }
//     })
// }

// marqueAnimation()

// project 5

function page1Animation() {
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        y:-40,
        duration: 0.7,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.5,
    },"-=0.3")

    tl.from(".center-part1 p", {
        x: -800,
        opaacity: 0,
        duration: 0.4
    })

    tl.from(".center-part1 button",{
        opacity: 0,
        duration: 0.4
    })

    tl.from(".center-part2 img",{
        opacity: 0,
        duration: 0.5
    },"-=0.3")

    tl.from(".section1bottom img",{
        opacity: 0,
        y: 30,
        stagger:0.15,
        duration:0.6
    })
}

function page2Animation() {

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller: "body",
        start: "top 50%",
        end: "top -60%",
        scrub: 2,
    }
})

tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})

//Line1

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"anim1")

tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"anim1")

//Line2 

tl2.from(".elem.line2.left",{
    x: -300,
    opacity: 0,
    duration:1
},"anim2")

tl2.from(".elem.line2.right",{
    x: 300,
    opacity: 0,
    duration:1
},"anim2")

//line 3

tl2.from(".elem.line3.left",{
    x: -300,
    opacity: 0,
    duration:1
},"anim3")

tl2.from(".elem.line3.right",{
    x: 300,
    opacity: 0,
    duration:1
},"anim3")

//Line4

tl2.from(".elem.line4.left",{
    x: -300,
    opacity: 0,
    duration:1
},"anim4")

tl2.from(".elem.line4.right",{
    x: 300,
    opacity: 0,
    duration:1
},"anim4")
}

function page3Animation() {

 gsap.registerPlugin(ScrollTrigger);

  // Box1 animation
  gsap.from(".box1-part1 h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".box1",
      start: "top 80%",
      toggleActions: "play reverse play reverse" 
      // appear on scroll down, disappear on scroll up
    }
  });

  gsap.from(".box1-part1 p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".box1",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from("#box1-button", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".box1",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(".box1-part2", {
    opacity: 0,
    x: 100,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".box1",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  // Case Study
  gsap.from(".caseStudy h3", {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      trigger: ".caseStudy",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(".caseStudy p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".caseStudy",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(".box2 > div", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".box2",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    }
  });
}

page1Animation()
page2Animation()
page3Animation()