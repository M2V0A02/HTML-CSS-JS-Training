$(function(){
    $('img').css({
        'width' : '20px',
        'height' : '20px'
    });
    alert($('img').css([ "color", "font-size"])['font-size']);
});
