(function(){

//Categories Animation

  $('.categories-toggle').on('click', function(){
    $('#categories').animate({
      width: "300%",
      height: "300%",
      left: "-150%",
      top: "-150%"
    }, 500, function(){
      $('#categories').animate({
        width: "100%",
        height: "100%",
        left: "0",
        top: "0",
        borderRadius: "0"
      }, 0);
      $('#mainPage').css({"filter": "blur(13.5px)", "transform" : "scale(1.1)"});
      $('#categories div').fadeTo("slow", 1);
      $('#categories').css("overflow-y", "scroll");


    });
  });


  $('#categories button').on('click', function(){
    $('#categories div').fadeTo("fast", 0);
    $('#mainPage').css({"filter": "blur(0px)", "transform" : "scale(1)"});
    $('#categories').css("overflow", "hidden");
    $('#categories').animate({
      width: "300%",
      height: "300%",
      left: "-150%",
      top: "-150%",
      borderRadius: "100%"
    }, 0);
    $('#categories').animate({
      width: "50px",
      height: "50px",
      left: "-25px",
      top: "-25px"
    });

  });

})();
