
    $('.js--mobile-nav').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav i');
        nav.slideToggle(200);
        if(icon.hasClass('icon ion-ios-menu')){
             icon.addClass('icon ion-md-close');
             icon.removeClass('icon ion-ios-menu');
        }else{
             icon.addClass('icon ion-ios-menu');
             icon.removeClass('icon ion-md-close');
        }
    });

    $('.js--mobile-left-nav').click(function(){
        var nav = $('.js--main-mobile-nav');
        var icon = $('.js--mobile-left-nav i');
        nav.slideToggle(200);
        if(icon.hasClass('icon ion-ios-menu')){
             icon.addClass('icon ion-md-close');
             icon.removeClass('icon ion-ios-menu');
        }else{
             icon.addClass('icon ion-ios-menu');
             icon.removeClass('icon ion-md-close');
        }
    });
