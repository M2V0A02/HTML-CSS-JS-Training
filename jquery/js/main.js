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

    

    $(':submit').click(function(e){
        e.preventDefault();
        value = "";
        $('.form1 :input').each(function(){
            value += $(this).val();
        })
        alert(value);
    });
});
