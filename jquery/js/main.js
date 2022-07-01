$(function(){
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

    scroll(console.log('qwe'));
});
