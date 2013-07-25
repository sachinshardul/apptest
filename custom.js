$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
   defaultPageTransition: 'slide'
  });
});

$(function() {
  setTimeout(hideSplash, 2000);
});

function hideSplash() {
  $.mobile.changePage("#home", "fade");
}