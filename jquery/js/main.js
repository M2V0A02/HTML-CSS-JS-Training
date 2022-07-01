$(function(){
    
    document.getElementsByClassName('mainText')[0].onclick = function (){ alert('123');};
    $('img, a').mouseover(function(){
        console.log('mouserOver');
    });
    $('img, a').mouseout(function(){
        console.log('mouserOut');
    });
    $('img, a').click(function(){
        console.log('mouserclick');
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
    })
});
