let slider = document.querySelector(".peopleSay-slide")
let slide = document.querySelectorAll(".slide")
let nextBtn =document.querySelector(".btn__next")
let prevBtn =document.querySelector(".btn__prev")
let counter = 1
let size = slide[0].clientWidth
let first = document.querySelector(".peopleSay-slide__one")
let second =document.querySelector(".peopleSay-slide__two")
let last =document.querySelector(".peopleSay-slide__three")
let status =true

slider.style.transform='translateX(' + (-size * counter) + 'px)';
let slideAct = ()=>{
    
    nextBtn.addEventListener("click",()=>{
        if (counter<slide.length-1) {
            slider.style.transition= "transform 0.4s ease-in-out";
            counter++
            slider.style.transform='translateX(' + (-size * counter) + 'px)';
        } else {
            counter=slide.length-1
            slider.style.transform='translateX(' + (-size * counter) + 'px)';
        }
        
    })

    prevBtn.addEventListener("click",()=>{
        if (counter>0) {
            slider.style.transition= "transform 0.4s ease-in-out";
            counter--
            slider.style.transform='translateX(' + (-size * counter) + 'px)';
        } else {
            counter=0
            slider.style.transform='translateX(' + (-size * counter) + 'px)';
        }
        
    })
    slider.addEventListener('transitionend',()=>{
        if (slide[counter]===first) {
            counter = slide.length-2
            slider.style.transform='translateX(' + (-size * counter) + 'px)';
            slider.style.transition="none"
        } 
        if (slide[counter]===last) {
            counter=slide.length-counter
            slider.style.transform='translateX(' + (-size * counter) + 'px)';
            slider.style.transition="none"
        } 
    })
    
}
slideAct()

let slideAuto =()=>{
    for (let i = 0; i < counter; i++) {
        if (counter<slide.length-1) {
            slider.style.transition= "transform 0.4s ease-in-out";
            counter++
            slider.style.transform='translateX(' + (-size * counter) + 'px)';
        }
    }
    setTimeout(slideAuto,3000)

}
slideAuto()
addEventListener('resize', function() {
    size = slide[0].clientWidth
    let rsSize = slider.style.transform='translateX(' + (-size * counter) + 'px)';
    return rsSize
})
//     if(status == true){
//         size = slide[1].clientWidth
//         return status = false
        
//     }
//     else{
//         slideAuto()
//         return status = true
//     }
// });
// second.addEventListener('mousedown',()=>{
//     status=true
// })
// second.addEventListener('mouseleave',()=>{
//     status=false
    
// })
// second.addEventListener('mouseup',()=>{
//     status=false
// })
// second.addEventListener('mousemove',()=>{
//     console.log(status);
//     console.log("ok");
// })

//Counter 
jQuery(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('.counter__box').offset().top,
        hH = jQuery('.counter__box').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT + hH - wH) {
        jQuery(window).off("scroll", startCounter);
jQuery('.counter__box-number').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}
//===== Scroll Sticky Menu =====//

// $(document).ready(function() {
//     $(".owl-carousel").owlCarousel();
// });

$('.client__detail-img').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
//===== Scroll Sticky Menu =====//
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

//===== Click Toggle Menu =====//
let body = document.querySelector("body")
let menuMobile = document.querySelector(".header__menu-mobile")
let menu = document.querySelector(".header__menu")
let overlay = document.querySelector(".overlay-header")
let openButton = document.querySelector(".header__menu-button")
let closeButton = document.querySelector(".fa-times")
openButton.addEventListener("click",()=>{
    body.classList.add('overflow-hidden')
    menuMobile.classList.add('show')
    menu.classList.add('hide')
    overlay.classList.add('active')
})
closeButton.addEventListener("click",()=>{
    body.classList.remove('overflow-hidden')
    menuMobile.classList.remove('show')
    menu.classList.remove('hide')
    overlay.classList.remove('active')
})
overlay.addEventListener("click",()=>{
    body.classList.remove('overflow-hidden')
    menuMobile.classList.remove('show')
    menu.classList.remove('hide')
    overlay.classList.remove('active')
})

//===== Modal =====//
var modalBtns = Array.from(document.querySelectorAll(".icon__search"));
modalBtns.forEach(function (btn) {
    btn.onclick = function () {
        var modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
        document.querySelector("body").classList.add("hidden-scroll-y");
        document.querySelector("body").classList.add("p-r-17");
        document.getElementById("header").classList.add("p-r-17");

        var closeButton = Array.from(document.querySelectorAll(".closes"));
        closeButton.forEach(function (btn) {
            btn.onclick = function () {
                var modal = btn.closest(".modal");
                modal.style.display = "none";
                document.querySelector("body").classList.remove("hidden-scroll-y");
                document.querySelector("body").classList.remove("p-r-17");
                document.getElementById("header").classList.remove("p-r-17");
            };
        });
        var closeBtns = Array.from(document.querySelectorAll(".close-top"));
        closeBtns.forEach(function (btn) {
            btn.onclick = function () {
                var modal = btn.closest(".modal");
                modal.style.display = "none";
                document.querySelector("body").classList.remove("hidden-scroll-y");
                document.querySelector("body").classList.remove("p-r-17");
                document.getElementById("header").classList.remove("p-r-17");
            };
        });
    };
});

window.onclick = function (event) {
if (event.target.className === "modal") {
        event.target.style.display = "none";
        document.querySelector("body").classList.remove("hidden-scroll-y");
        document.querySelector("body").classList.remove("p-r-17");
        document.getElementById("header").classList.remove("p-r-17");
    }
};
$(function () {
    // Cause Carousel
    $(".cause__carousel").owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
    // Number auto run
    const counters = document.querySelectorAll(".counters");

    console.log(counters);
    const speed = 100; // The lower the slower

    counters.forEach((counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;
            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = Math.ceil(count + inc);
                // Call function every ms
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});
//Jquery Scroll
jQuery(function ($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function () {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function (i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });
    }
});

// CounterUp
$('.counter__slider').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        768: {
            items: 3,
            nav: false
        },
        1024: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})
// Hook doAnimations on scroll, and trigger a scroll
$(window).on('scroll', doAnimations);
$(window).trigger('scroll');

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 4
        },
        1024: {
            items: 4
        }
    }
});