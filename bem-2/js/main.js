$('.horizontal-charts__item').each(function(){
    let percent = $(this).find('.horizontal-charts__percent').text().replace('%', "");
    let widthParent = $(this).find('.horizontal-charts__line').css('width').replace('px', '');
    $(this).find('.horizontal-charts__line').append('<div style="width:' + percent * widthParent / 100 + 'px; height: 2px; background-color: #1D1D1D; position: absolute"> </div>');
    $(this).find('.horizontal-charts__percent').css('left', (widthParent * percent / 100 - 9) + 'px');
});