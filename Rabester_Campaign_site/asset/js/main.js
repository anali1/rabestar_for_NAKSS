$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times')
        $(this).toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

});

