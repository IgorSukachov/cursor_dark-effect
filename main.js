$(document).mousemove(function(e){
    var X = e.pageX;
    var Y = e.pageY;
    $('.focus').css('background', 'radial-gradient(circle at '+X+'px '+Y+'px, transparent, #000 30%)')
})