$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
   defaultPageTransition: 'slide'
  });
});

$(document).ready(function(){ 
var myPhotoSwipe = $("#Gallery a").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
 }); 