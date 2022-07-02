$(document).ready(function () {
    $('.button').click(function(){
        $('.gallery').slideToggle(1000);
        if ($(this).children("p").text() == "-"){
            $(this).children("p").hide().text("+").slideDown(1000);
        } else {
            $(this).children("p").hide().text("-").slideDown(1000);
        }
    });
    $('.small a').click(function(e){
        e.preventDefault();
        let big = $('.big img');
        if (big.attr('src') != $(this).attr('href')){
            big.hide().attr('src', $(this).attr('href')).fadeIn(1000);
        }
    });

    $(".small > a > img").click(function(){
        $(".small > a > img").fadeTo(500, 1).css("border", 'none');
        $(this).fadeTo(500, 0.6).css("border", "1px dotted red");
    });

});