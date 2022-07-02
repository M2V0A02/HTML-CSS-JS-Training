$(function(){
    
    $('img, a').mouseover(function(){
        console.log('mouserOver');
    });
    $('img, a').mouseout(function(){
        console.log('mouserOut');
    });
    $('img, a').click(function(e){
        e.preventDefault();
        console.log('mouserclick');
        console.log(e.pageX + " " + e.pageY);
        console.log(e.altKey + " " + e.ctrlKey + " " + e.shiftKey + " " + e.target);
    });
    $('img, a').mousemove(function(){
        console.log('mousermove');
    });
    $('img, a').mouseup(function(){
        console.log('mouserUp');
    })

    $(window).scroll(function(){
        console.log('событие scroll');
    });

    $('.arrowDown').click(function(){
        var clone = $(this).clone();
        $(this).after(clone);
    });

    var link = $('menu li a');

    link.hover(function() {
            $(this).addClass('border');
        }, function() {
            $(this).removeClass('border');
        }
    );

    
    $('.form1').submit(function(e){
       
        if ($('.text1').val() == "") {
            e.preventDefault();
            alert('1 поле не введено');
        }
    });

    $(':input').focus(function(e){
        console.log("есть фокус!");
    });

    $("#select1").change(function(e){
        if($(this).val() == 1){
            $("#select2").html("<option value='1' selected=''>disabled 1</option>")
        }
        if($(this).val() == 2){
            $("#select2").html("<option value='1' selected=''>disabled 1</option><option value='2' selected=''>disabled 2</option>")
        }
        if($(this).val() == 3){
            $("#select2").html("<option value='3' selected=''>disabled 3</option>")
        }
        if($(this).val() == 4){
            $("#select2").html("<option value='4' selected=''>disabled 4</option>")
        }
    })
});
