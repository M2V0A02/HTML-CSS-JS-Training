$('.my-dropdown-menu').click(function(){
    let content = $(this).find('.my-dropdown-content')
    if (content.css('display') == 'none'){
        content.show();
        content.css('display', 'flex');
    }
    else
        content.hide();
});