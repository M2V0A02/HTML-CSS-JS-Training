$(document).ready(function(){
    $('.menu__burger').click(function(event){
        if ($(".menu__burger").hasClass('menu-active'))
            $(".menu__row, .menu__burger").removeClass('menu-active')
        else
            $(".menu__row, .menu__burger").addClass("menu-active");
    });
});