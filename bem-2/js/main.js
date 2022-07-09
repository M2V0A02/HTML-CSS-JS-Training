$('.header__hamburger').click(function(){
    
    if($('.header__menu-wrapper').css('display') == 'block')
        $('.header__menu-wrapper').fadeOut(1000);
    else
        $('.header__menu-wrapper').fadeIn(1000);
});

$('.horizontal-charts__item').each(function(){
    let percent = $(this).find('.horizontal-charts__percent').text().replace('%', "");
    let widthParent = $(this).find('.horizontal-charts__line').css('width').replace('px', '');
    $(this).find('.horizontal-charts__line').append('<div style="width:' + percent * widthParent / 100 + 'px; height: 2px; background-color: #1D1D1D; position: absolute"> </div>');
    $(this).find('.horizontal-charts__percent').css('left', (widthParent * percent / 100 - 9) + 'px');
});

let controlPanel = $('.slider__control-panel');
for (let i = 0; i < $('.slider__item').length; i++){
    let appendToControlPanel = document.createElement("div");
    appendToControlPanel.className = "slider__page";
    appendToControlPanel.setAttribute('page', i);
    if (i == 0 ){
        appendToControlPanel.className += " slider__page--active";
    }
    controlPanel.append(appendToControlPanel);
} 

$('.slider__page').click(function(){
    $('.slider__item').css('display', 'none');
    $('.slider__item').eq($(this).attr('page')).css('display', 'inline-block');
    $('.slider__page').removeClass('slider__page--active');
    $(this).addClass('slider__page--active');
});

$('.slider__forward').click(function(){
    if ($('.slider__page').last().attr('page') == $('.slider__page--active').attr('page'))
        return
    let nextSliderItem = $('.slider__page--active').removeClass('slider__page--active').next();
    nextSliderItem.addClass('slider__page--active');
    $('.slider__item').css('display', 'none');
    $('.slider__item').eq(nextSliderItem.attr('page')).css('display', 'inline-block');
});

$('.slider__back').click(function(){
    if ($('.slider__page').first().attr('page') == $('.slider__page--active').attr('page'))
        return 
    let nextSliderItem = $('.slider__page--active').removeClass('slider__page--active').prev();
    nextSliderItem.addClass('slider__page--active');
    $('.slider__item').css('display', 'none');
    $('.slider__item').eq(nextSliderItem.attr('page')).css('display', 'inline-block');
});