$(document).ready(function(){
    $(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
                                    // the browser's width is less than 600, the fallback will kick in.
                                });
});

/*
function fadedEls(el, shift) {
    el.css('opacity', 0);

    switch (shift) {
        case undefined: shift = 0;
        break;
        case 'h': shift = el.eq(0).outerHeight();
        break;
        case 'h/2': shift = el.eq(0).outerHeight() / 2;
        break;
    }

    $(window).resize(function() {
        if (!el.hasClass('ani-processed')) {
            el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
        }
    }).scroll(function() {
        if (!el.hasClass('ani-processed')) {
            if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
                el.addClass('ani-processed');
                el.each(function(idx) {
                    $(this).delay(idx * 200).animate({
                        opacity : 1
                    }, 1000);
                });
            }
        }
    });
};

(function($) {
    $(function() {

        // Sections height & scrolling
        $(window).resize(function() {
            var sH = $(window).height();
            $('section.header-10-sub').css('height', (sH - $('header').outerHeight()) + 'px');
           // $('section:not(.header-10-sub):not(.content-11)').css('height', sH + 'px');
       });        

        // Parallax
        $('.header-10-sub, .content-23').each(function() {
            $(this).parallax('50%', 0.3, true);
        });

        // Faded elements
        fadedEls($('.section'), 300);
        // Ani screen
        (function(el) {
            $('img:first-child', el).css('left', '-29.7%');

            
        })($('.screen'));


        (function(el) {
            el.css('left', '-100%');

            $(window).resize(function() {
                if (!el.hasClass('ani-processed')) {
                    el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
                }
            }).scroll(function() {
                if (!el.hasClass('ani-processed')) {
                    if ($(window).scrollTop() >= el.data('scrollPos')) {
                        el.addClass('ani-processed');
                        el.animate({
                            left : 0
                        }, 500);
                    }
                }
            });
        });
        $(window).resize().scroll();

    });

$(window).load(function() {
    $('html').addClass('loaded');
    $(window).resize().scroll();
});

})(jQuery);



*/