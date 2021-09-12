$(function(){
    $('.p-header__menu-btn').click(function(){
        $('.l-sidebar').addClass('open-slide'); //サイドバーのスライド
        $('.c-tablet-background--gray').addClass('open');//グレー背景の表示
    });

    $('.p-close-btn').click(function(){
        $('.l-sidebar').removeClass('open-slide');//サイドバーのスライド
        $('.c-tablet-background--gray').removeClass('open');//グレー背景の非表示
    });    
});