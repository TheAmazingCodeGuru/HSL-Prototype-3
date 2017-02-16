/* == Strip Hover animation trigger ==*/
$(".strip").hover(
    function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    }
);
/* == Strip Hover animation ==*/

/* == Nav color animation trigger == */
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if (wScroll > $(".space-box").position().top + $(".space-box").outerHeight(true)-100) {
        $(".main-nav").addClass("color");
    }
    else if (wScroll < $(".space-box").position().top + $(".space-box").outerHeight(true)-100) {
        $(".main-nav").removeClass("color");
    }
});
/* == Nav color animation trigger == */