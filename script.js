
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  
  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".rght-next",
        prevEl: ".lft-prev",
      },
      loop : true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay : {
        delay : 9000,
        disableOnInteraction : false,
      }
    });

    let outermouse = document.querySelector("#mouse-cir-outer");
    let innermouse =document.querySelector("#mouse-cir-inner");

    document.addEventListener("mousemove", (m)=>{
        outermouse.style.left = m.clientX + "px"
        outermouse.style.top = m.clientY + "px"
        innermouse.style.left = m.clientX + "px"
        innermouse.style.top = m.clientY + "px"
    })

    // section2 animation 

   let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '#section2',
		start: '0% 80%', 
    end :' 60% 50%', 
    // markers : true 
	}
});
tl.to(".line_2",
  {
    width : "100%",
    duration : 2
  }
)
// section 3 animation

let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: "#section2",
            start: "0% 100%",
            end: "100% 0%",
            // markers: true,
            scrub: 1
        }
    })

    tl2.to("#image-1",{
        y: 0
    }, 'a')
    .to("#image1-cont h1",{
        y: -50
    }, 'a')
    .to("#image1-cont p",{
        y: -50
    }, 'a')


     let tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: "#section3",
            start: "0% 100%",
            end: "100% 0%",
            // markers: true,
            scrub: 1
        }
    })

    tl3.to("#image-2",{
        y: 0
    }, 'a')
    .to("#image2-cont h1",{
        y: -50
    }, 'a')
    .to("#image2-cont p",{
        y: -50
    }, 'a')

      let tl4 = gsap.timeline({
        scrollTrigger:{
            trigger: "#section4",
            start: "0% 100%",
            end: "100% 0%",
            // markers: true,
            scrub: 1
        }
    })

    tl4.to("#image-3",{
        y: 0
    }, 'a')
    .to("#image3-cont h1",{
        y: -50
    }, 'a')
    .to("#image3-cont p",{
        y: -50
    }, 'a');


let tl5 = gsap.timeline({
	scrollTrigger: {
		trigger: '#section5',
		start: '0% 50%', 
        end :' -50% 0%', 
        markers : true ,
        ease: "power1.inOut",
        scrub : 2,
	}
 });
tl5.to(".video-box",
  {
    width : "100%",
  }
);

// let tl7 = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: '#section6',
// 		start: '0% 30%', 
//         end :' -40% 20%', 
//         markers : true ,
//         // ease: "power1.inOut",
//         scrub : 1,
// 	}
//  });
// // tl7.to("#section7",
//   {
//     display : "flex"
//     // height : "100%"
//   }
// );


});



