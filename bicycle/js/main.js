$(document).ready(function(){
    $('.menu__burger').click(function(event){
        if ($(".menu__burger").hasClass('menu__active'))
            $(".menu__row, .menu__burger").removeClass('menu__active')
        else
            $(".menu__row, .menu__burger").addClass("menu__active");
    });
});