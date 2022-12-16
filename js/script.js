$(function(){
   
    $('#js-btn-menu').on('click', function(){
        $('#js-btn-menu').toggleClass('active');
        $('.gnav').addClass('show');
        $('.gnav').animate({width: 'toggle'}, 200);
    });
});