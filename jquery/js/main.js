$(function(){
    $('img').addClass('img');
    alert($('img').attr('class').split(' '));
    $('img').toggleClass('img');
    alert($('img').hasClass('img'));
});
