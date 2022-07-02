$(function(){
    
    $('img, a').mouseover(function(){
        console.log('mouserOver');
    });
    $('img, a').mouseout(function(){
        console.log('mouserOut');
    });
    $('img, a').click(function(e){
        e.preventDefault();
        console.log('mouserclick');
        console.log(e.pageX + " " + e.pageY);
        console.log(e.altKey + " " + e.ctrlKey + " " + e.shiftKey + " " + e.target);
    });
    $('img, a').mousemove(function(){
        console.log('mousermove');
    });
    $('img, a').mouseup(function(){
        console.log('mouserUp');
    })

    $(window).scroll(function(){
        console.log('событие scroll');
    });

    $('.arrowDown').click(function(){
        var clone = $(this).clone();
        $(this).after(clone);
    });

    var link = $('menu li a');

    link.hover(function() {
            $(this).addClass('border');
        }, function() {
            $(this).removeClass('border');
        }
    );

    $(':checkbox').fadeOut(1000).fadeIn(1000);
    $(':radio').fadeOut(1000).fadeIn(1000);
    $(':submit').fadeOut(1000).fadeIn(1000);
    $(':reset').fadeOut(1000).fadeIn(1000);
    $(':file').fadeOut(1000).fadeIn(1000);
    $(':button').fadeOut(1000).fadeIn(1000);
    $(':text').fadeOut(1000).fadeIn(1000);
    $(':password').fadeOut(1000).fadeIn(1000);
    $(':input').fadeOut(1000).fadeIn(1000);
});
