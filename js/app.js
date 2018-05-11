(function(){

//Categories Animation

  var toggler = function(){
          var status = "one";

          function togglePage(){
            if(status === "one"){
                $("#lastPageToggle img").css('margin-top', '25px');
                $("#one").css({"background": "none", "border" : "1px solid #276d7b"});
                $("#two").css({"background": "#276d7b", "border" : "none"});
                $("#contactUs").animate({
                  left: "0"
                }, 1000, function(){
                  $('#contactUs #content').fadeTo('slow', '1');
                  $('#contactUs #leftMenu').each(function(){
                    $(this).animate({
                      marginLeft: '0%'
                    }, 1000, function(){
                      status = "two";
                    });
                  });
                });
            }
            if(status === "two"){

              $("#contactUs").animate({
                left: "0"
              }, 0, function(){
                $('#contactUs #leftMenu').each(function(){
                  $(this).animate({
                    marginLeft: '-100%'
                  }, 1000, function() {
                  });
                  $('#contactUs #content').fadeTo('fast', '0');


                  $("#lastPageToggle img").css('margin-top', '-20px');
                  $("#two").css({"background": "none", "border" : "1px solid #276d7b"});
                  $("#one").css({"background": "#276d7b", "border" : "none"});

                  $("#contactUs").animate({
                    left: "100%"
                  }, 1000, function(){
                    $("#two").css({"background": "none", "border" : "1px solid white"});
                    $("#one").css({"background": "white", "border" : "none"});
                      status = "one";
                  });

                });
              });
            }
    }

    return {
      togglePage
    }
  }()
  var login = function(){
var status = 0;
    function togglePage(){
      if(!status){
          $('#loginPage').animate({
            width: "400%",
            height: "400%",
            left: "0%",
            top: "-200%",
          }, 500, function(){
            $('#loginPage').animate({
              width: "100%",
              height: "100%",
              left: "0",
              top: "0",
            }, 0);
            $('#loginPage').css({"border-radius" : "0"});
            $('#mainPage').css({"filter": "blur(13.5px)", "transform" : "scale(1.1)"});

              status = 1;
          });
      }else {
        $('#mainPage').css({"filter": "blur(0)", "transform" : "scale(1)"});

        $('#loginPage').animate({
          width: "300%",
          height: "300%",
          borderRadius: "100%",
          left: "100%",
          top: "-150%"
        }, 400, function(){
          $('#loginPage').animate({
            width: "0",
            height: "0",
            left: "100%",
            top: "-150%"
          }, 0);

            status = 0;
        });
      }

    }
    return {
      togglePage
    }
  }()


  var signup = function(){
  var status = 0;
    function togglePage(){
      if(!status){
          $('#signupPage').animate({
            width: "400%",
            height: "400%",
            left: "0%",
            top: "-200%",
          }, 500, function(){
            $('#signupPage').animate({
              width: "100%",
              height: "100%",
              left: "0",
              top: "0",
            }, 0);
            $('#signupPage').css({"border-radius" : "0"});
            $('#mainPage').css({"filter": "blur(13.5px)", "transform" : "scale(1.1)"});

              status = 1;
          });
      }else {
        $('#mainPage').css({"filter": "blur(0)", "transform" : "scale(1)"});
        $('#signupPage').animate({
          width: "300%",
          height: "300%",
          borderRadius: "100%",
          left: "100%",
          top: "-150%"
        }, 400, function(){
          $('#signupPage').animate({
            width: "0",
            height: "0",
            left: "100%",
            top: "-150%"
          }, 0);
          status = 0;

        });
      }

    }
    return {
      togglePage
    }
  }()



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

  var search = (function(){
    function toggle(){
          var status = 0;
          if(!status){
              $('#searchPage').animate({
                top: '10%'
              }, 600);
              $('navbar button, navbar div').fadeTo('slow', 0)
          }else {

          }
    }

    return {
      toggle
    }
  })();

  $('#categories button').on('click', function(){
    var status = 0;
    if(!status){
      status = 1;
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
        left: "-50px",
        top: "-50px"
      }, 500, function(){
        status = 0;
      });
    }

  });

  $('#navigator').on('click', function(){toggler.togglePage();});
  $('#lastPageToggle').on('click', function(){toggler.togglePage();});

  $('#login').on('click', function(){
    login.togglePage();
  });
  $('#loginClose').on('click', function(){
    login.togglePage();
  });

  $('#signup').on('click', function(){
    signup.togglePage();
  });
  $('#signupClose').on('click', function(){
    signup.togglePage();
  });

  $('#searchForm').on('submit', function(){
    search.toggle();
    return false;
  });

  $('form').on('submit', function(){
    return false;
  });

$("#categories h3, #categories .item img").on('click', function(){

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
    left: "-50px",
    top: "-50px"
  }, 500, function (){
    search.toggle();
  });


});

})();
