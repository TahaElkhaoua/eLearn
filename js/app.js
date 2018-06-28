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
  $('#lastPageToggle').on('click', function(){toggler.togglePage();});

  $('#navigator').on('click', function(){toggler.togglePage();});

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

    var keyword = $("#searchKeyword").val();
    var xml = new XMLHttpRequest();
    xml.open("GET", "includes/search_videos.php?keyword=" + keyword, true);
    xml.onreadystatechange = function(){
      if(xml.status == 200 && xml.readyState == 4){
        $("#searchPageItems").html("");
          if(xml.response.length === 0){
          }else {
            var Objects = JSON.parse(xml.response);
            Objects.forEach(function(element){
              var Div = '<div id="searchItem" class=" d-flex flex-row justify-content-between"><div id="box"></div><div id="text"><h3>'+ element["title"] +'</h3><p>'+ element["description"] +'<br/><p>Categorie&nbsp;&nbsp;&nbsp;<span>'+ element["categorie"] +'<br><a href="course.php?id='+ element["id"] +'">CONTINUE TO COURSE</a></p></div><div id="level"><p>Level&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Beginner</span></p></span></p><p>Creator&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>'+ element["uploader"] +'</span></p><p>Score&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="img/search/star.png" alt=""><img src="img/search/star.png" alt=""><img src="img/search/star.png" alt=""><img src="img/search/star.png  " alt=""></span></p></div></div>';
              $("#searchPageItems").html($("#searchPageItems").html()+Div);
            });
          }
          search.toggle();
      }
    };
    xml.send();


    return false;
  });

  $('form').on('submit', function(){
    return false;
  });

$("#categories h3, #categories .item img").on('click', function(){
  var keyword = ($(this).parent().children("h3").html());
  var xml = new XMLHttpRequest();
  xml.open("GET", "includes/search_videos_cat.php?keyword=" + keyword, true);
  xml.onreadystatechange = function(){
    if(xml.status == 200 && xml.readyState == 4){
      $("#searchPageItems").html("");
        if(xml.response.length === 0){
        }else {
          var Objects = JSON.parse(xml.response);
          Objects.forEach(function(element){
            var Div = '<div id="searchItem" class=" d-flex flex-row justify-content-between"><div id="box"></div><div id="text"><h3>'+ element["title"] +'</h3><p>'+ element["description"] +'<br/><p>Categorie&nbsp;&nbsp;&nbsp;<span>'+ element["categorie"] +'<br><a href="course.php?id='+ element["id"] +'">CONTINUE TO COURSE</a></p></div><div id="level"><p>Level&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Beginner</span></p></span></p><p>Creator&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>'+ element["uploader"] +'</span></p><p>Score&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="img/search/star.png" alt=""><img src="img/search/star.png" alt=""><img src="img/search/star.png" alt=""><img src="img/search/star.png  " alt=""></span></p></div></div>';
            $("#searchPageItems").html($("#searchPageItems").html()+Div);
          });
        }
        search.toggle();
    }
  };
  xml.send();



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


    $("#submitSignup").click(function(){
        var email = document.getElementById("signupEmail").value;
        var name = document.getElementById("signupName").value;
        var profession = document.getElementById("signupProfession").value;
        var password = document.getElementById("signupPassword").value;

        var xml = new XMLHttpRequest();
        xml.open("GET", "includes/insert_user.php?email="+email+"&name="+name+"&profession="+profession+"&password="+password, true);
        xml.onreadystatechange = function(){
          if(xml.status == 200 && xml.readyState == 4){
            if(xml.response != "success"){
              alert("ERROR");
            }
            window.location.replace("index.php");
          }
        };

        xml.send();

    });

    $("#submitLogin").click(function(){
      var email = document.getElementById("loginEmail").value;
      var password = document.getElementById("loginPassword").value;

      var xml = new XMLHttpRequest();
      xml.open("GET", "includes/connect_user.php?email="+email+"&password="+password, true);
      xml.onreadystatechange = function(){
        if(xml.status == 200 && xml.readyState == 4){
          if(xml.response != "success"){
            alert("User not found or Password Incorrect!!!");
          }else {
            window.location.replace("index.php");
          }

        }
      };

      xml.send();
    });

    $("#logout").click(function(){
      var xml = new XMLHttpRequest();
      xml.open("GET", "includes/logout.php", true);
      xml.onreadystatechange = function(){
        if(xml.status == 200 && xml.readyState == 4){
            window.location.replace("index.php");
        }
      };
      xml.send();
    });


  

})();
