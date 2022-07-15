$('.accordion__item').click(function() {
    $('.accordion__slider').css({'animation':'rotate-0 1s forwards'});
    $('.accordion__header').css({'background':'#fff', 'border': 'none'});
    if ($(this).find('.accordion__content').css('display') == 'none'){
        $('.accordion__content').slideUp(500);
        $(this).find('.accordion__slider').css({'animation':'rotate-180 1s forwards'});
        $(this).find('.accordion__header').css({'background':'#909090', 'border':'3px solid black'});
        $(this).find('.accordion__content').slideDown(1000);
    }
    else
        $('.accordion__content').slideUp(500);
    
});