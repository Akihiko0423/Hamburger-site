$(function(){
    $('.p-header-menu-btn').click(function(){
        //メニューとbackgroundの表示
        $('.l-sidebar').addClass('open');
        $('.c-tablet-background--gray').addClass('open');
    });

    $('.p-close-btn').click(function(){
        //メニューとbackgroundの非表示
        $('.l-sidebar').removeClass('open');
        $('.c-tablet-background--gray').removeClass('open');
    });    
});