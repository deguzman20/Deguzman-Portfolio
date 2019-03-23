$(document).ready(function(){
    // var scrollY = "";
    $(window).scroll(function(){
       parallax();
    });

    function parallax(){
      var wScroll = $(window).scrollTop(); 
      if(wScroll < 10){
        $("#about").hide();
        $("#pic").hide();    
        $(".information-container").hide(); 
      }
      else if(wScroll > 500){
        $("#about").fadeIn();
        $("#pic").show();  
        $(".information-container").show();
      }
    }
    

});