$(function(){
    $('.items-menu a, .menu-mobile a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop})
    })

})
