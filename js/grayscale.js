/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})

idx=1+Math.floor(Math.random() * 3);
document.getElementById("intro").style.backgroundImage = "url('img/background"+idx+".png')";
document.getElementById("faiqualcosaspace").src = "img/background"+(1+(idx+1)%3)+".png";
document.getElementById("faiqualcosaspace").style.width="50%";
idx=1+Math.floor(Math.random() * 3);
document.getElementById("approfondimentispace").src = "img/background"+(1+(idx+2)%3)+".png";
document.getElementById("approfondimentispace").style.width="50%";
