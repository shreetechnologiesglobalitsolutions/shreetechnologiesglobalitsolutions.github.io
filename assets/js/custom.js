/*----------

Template Name: Anaya - Construction & Business HTML5 Template
Template Version: 1.0

----------*/

/*====================
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.WOW Animation JS
3.Toggle Menu Mobile JS
4.Smooth Scrolling JS
5.Active Menu JS
6.Sidebar Menu Toggle JS
7.Scroll To Top JS
8.Banner Slider JS
9.Counter JS
10.Team Swiper JS
11.Testimonial Swiper JS
12.Blog Swiper JS
13.Client Swiper JS
14.Pricing Switching JS
15.Page Loader JS
16.Sticky Header JS
====================*/


jQuery(document).ready(function() {

    /* --------------------------------------------------------
            1. Whole Script Strict Mode Syntax
        -------------------------------------------------------- */
    "use strict";



    /* --------------------------------------------------------
            2. Wow Animation JS
        -------------------------------------------------------- */
    new WOW().init();



    /* --------------------------------------------------------
            3. Toogle Menu Mobile JS Start
        -------------------------------------------------------- */
    jQuery(".menu-toggle").click(function() {
        jQuery(".main-navigation").toggleClass("toggled");
    });
    jQuery(".menu-menu-1-container li a").click(function() {
        jQuery(".main-navigation").removeClass("toggled");
    });



    /* --------------------------------------------------------
            4. Smooth Scrolling JS Start
        -------------------------------------------------------- */

    if (window.location.hash) {
        // smooth scroll to the anchor id
        jQuery('html,body').animate({
            scrollTop: jQuery(window.location.hash).offset().top - 100
        }, 1000, 'swing');
    } else {
        setTimeout(function() { scroll(0, 0); }, 1);
    }

    jQuery('a[href*=\\#]:not([href$=\\#])').on('click', function(evt) {

        evt.preventDefault();
        var url = jQuery(this).attr('href');
        var id = url.substring(url.lastIndexOf('#'));
        if (jQuery(id).length > 0) {
            jQuery('html, body').animate({
                scrollTop: jQuery(id).offset().top - 100
            }, 1000);
        } else {
            window.location.href = url;
        }
    });



    /* --------------------------------------------------------
            5. Active Menu JS Start
        -------------------------------------------------------- */
    var sections = jQuery('section'),
        nav = jQuery('nav'),
        nav_height = nav.outerHeight();

    jQuery(window).on('scroll', function() {
        var cur_pos = jQuery(this).scrollTop() + 80;

        sections.each(function() {
            var top = jQuery(this).offset().top - nav_height,
                bottom = top + jQuery(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active-menu');
                sections.removeClass('active-menu');

                jQuery(this).addClass('active-menu');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-menu');
            }
        });
    });



    /* --------------------------------------------------------
            6. Sidebar Menu Toggle JS Start
        -------------------------------------------------------- */
    jQuery(".site-menu-btn").on('click', function() {
        jQuery(".sidebar-menu").addClass('toggle-menu');
    });
    jQuery(".sidebar-menu-close-btn, .sidebar-menu-overlay").on('click', function() {
        jQuery(".sidebar-menu").removeClass('toggle-menu');
    });



    /* --------------------------------------------------------
            7. Scroll To Top JS Start
        -------------------------------------------------------- */
    jQuery('#scroll-to-top').on('click', function() {
        jQuery("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });
    jQuery(window).on('scroll', function() {
        if (jQuery(window).scrollTop() > 300) {
            jQuery("#scroll-to-top").fadeIn(500);
        } else {
            jQuery("#scroll-to-top").fadeOut(500);
        }
    });



    /* --------------------------------------------------------
            8. Banner Slider JS Start
        -------------------------------------------------------- */
    var bannerSwiper = new Swiper(".bannerSwiper", {
        grabCursor: true,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 3800,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });



    /* --------------------------------------------------------
            9. Counter Number JS Start
        -------------------------------------------------------- */
    jQuery(window).scroll(function() {
        var hT = jQuery('#counter_sec').offset().top,
            hH = jQuery('#counter_sec').outerHeight(),
            wH = jQuery(window).height(),
            wS = jQuery(this).scrollTop();

        if (wS > (hT + hH - wH)) {
            var i = document.getElementById("grid-number-1");
            i.textContent = 500;

            var j = document.getElementById("grid-number-2");
            j.textContent = 450;

            var k = document.getElementById("grid-number-3");
            k.textContent = 25;

            var l = document.getElementById("grid-number-4");
            l.textContent = 100;
        }

    });



    /* --------------------------------------------------------
            10. Team Swiper JS Start
        -------------------------------------------------------- */
    var teamSwiper = new Swiper(".teamSwiper", {
        loop: true,
        speed: 2000,
        centeredSlides: true,
        slidesPerView: "auto",
        effect: 'coverflow',
        autoplay: {
            delay: 3800,
            disableOnInteraction: false
        },
        coverflowEffect: {
            rotate: 20,
            stretch: 20,
            depth: 200,
            modifier: 2.3,
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            0: {
                effect: false,
                slidesPerView: 1,
                centeredSlides: false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                effect: false,
                centeredSlides: false,
            },
            992: {
                slidesPerView: 2
            }
        },
    });



    /* --------------------------------------------------------
            11. Testimonial Swiper JS Start
        -------------------------------------------------------- */
    var testimonialSwiper = new Swiper(".testimonialSwiper", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            768: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                slidesPerView: 2,
            }
        },
    });



    /* --------------------------------------------------------
            12. Blog Swiper JS Start
        -------------------------------------------------------- */
    var blogSwiper = new Swiper(".blogSwiper", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3
            }
        }
    });



    /* --------------------------------------------------------
            13. Client Swiper JS Start
        -------------------------------------------------------- */
    var clientSwiper = new Swiper(".clientSwiper", {
        loop: true,
        slidesPerView: 4,
        speed: 1200,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        },
    });



    /* --------------------------------------------------------
            14. Pricing Switching JS Start
        -------------------------------------------------------- */
    jQuery('body').on('click', '.pricing-switch a', function() {
        jQuery('.pricing-switch a').removeClass('active');
        jQuery(this).addClass('active');
        var id = jQuery(this).attr('id');
        if (id == 'monthly') {
            jQuery('.monthly_text').show();
            jQuery('.yearly_text').hide();
        } else {
            jQuery('.yearly_text').show();
            jQuery('.monthly_text').hide();
        }
    });

});


jQuery(window).on('load', function() {

    /* --------------------------------------------------------
            15. Page Loader JS Start
        -------------------------------------------------------- */
    jQuery('body').removeClass('fixed');
    jQuery('.page-loader').fadeOut();



});



/* --------------------------------------------------------
            16. Sticky Header JS Start
        -------------------------------------------------------- */
jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() >= 100) {
        jQuery('.site-header').addClass('sticky-head');
    } else {
        jQuery('.site-header').removeClass('sticky-head');
    }
});