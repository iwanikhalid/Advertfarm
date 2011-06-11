/* 
 * author: Mohd Rashidi Mohd Zin (rashidi@mohdrashidi.com)
 */

$(function() {
    setInterval("slide()", 5000);
});

function slide() {
    var $active = $('#slideshow-step DIV.active');

    if ( $active.length == 0 ) $active = $('#slideshow-step DIV:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slideshow-step DIV:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}


