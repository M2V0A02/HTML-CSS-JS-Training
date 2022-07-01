$(function(){
    $('img').each(function(){
        
        if($(this).attr('src') == 'img/logo.png'){
            $(this).addClass('each');
        }
    });
});
