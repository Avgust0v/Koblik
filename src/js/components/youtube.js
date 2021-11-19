$(function(){
    $('.intro-modal__close-btn').click(function(){
        $('.intro-modal__video').attr('src', $('iframe').attr('src'));
    });
});

$(function(){
    $('.intro-modal__overlay').click(function(){
        $('.intro-modal__video').attr('src', $('iframe').attr('src'));
    });
});
