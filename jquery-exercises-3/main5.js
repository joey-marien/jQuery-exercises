$(function() {
  $(document).keydown(function(e){
switch (e.which){
case 37:    //left arrow key
    $(".box").finish().animate({
        left: "-=10"
    });
    break;
case 38:    //up arrow key
    $(".box").finish().animate({
        top: "-=10"
    });
    break;
case 39:    //right arrow key
    $(".box").finish().animate({
        left: "+=10"
    });
    break;
case 40:    //bottom arrow key
    $(".box").finish().animate({
        top: "+=10"
    });
    break;
}
});
});
