$(document).ready(function(){
  $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
             $('nav').addClass('sticky');
        }else{
             $('nav').removeClass('sticky');
        }
  }, {
    offset: '60px;'
});

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

})
