$(function(){
  //事件的委托
  initEleEvents();
  handle= setInterval("light();",1500);
});
var handle;
    var flag=1 ; 
    function point(){
        for (var i = 1; i <= 5; i++) {
            var pointsum = ".point" + i;
            $(pointsum).css("background-position","-442px -52px");
        };
    }
    function wordlocal(){
        for (var i = 1; i <= 5; i++) {
            var wordlocal = ".wordlocal" + i;
            $(wordlocal).hide();
        };
    }
    function light(){   
    if (flag == "1") {
        $("#pcImg").css("background-image",'url("css/images/1.jpg")');
        point();
        $(".point1").css("background-position","-467px -52px");
        wordlocal();
        $(".wordlocal1").show();
        flag=2;
        return;
    };
    if (flag == "2") {
        $("#pcImg").css("background-image",'url("css/images/2.jpg")');
        point();
        $(".point2").css("background-position","-467px -52px");
        wordlocal();
        $(".wordlocal2").show();
        flag=3;
        return;
    };
    if (flag == "3") {
        $("#pcImg").css("background-image",'url("css/images/3.jpg")');
        point();
        $(".point3").css("background-position","-467px -52px");
        wordlocal();
        $(".wordlocal3").show();
        flag=4;
        return;
    };
    if (flag == "4") {
        $("#pcImg").css("background-image",'url("css/images/4.jpg")');
        point();
        $(".point4").css("background-position","-467px -52px");
        wordlocal();
        $(".wordlocal4").show();
        flag=5;
        return;
    }; 
    if (flag == "5") {
        $("#pcImg").css("background-image",'url("css/images/5.jpg")');
        point();
        $(".point5").css("background-position","-467px -52px");
        wordlocal();
        $(".wordlocal5").show();
        flag=1;
        return;
    };   
}
//事件的委托
function initEleEvents(){
    $("#pcImg").mouseover(function(){
            clearInterval(handle);
    });
    $("#pcImg").mouseout(function(){
            handle= setInterval("light();",1500);
    });

    $(".point1").mouseover(function(){
            clearInterval(handle);
             $("#pcImg").css("background-image",'url("css/images/1.jpg")');
            point();
            $(".point1").css("background-position","-467px -52px");
            wordlocal();
            $(".wordlocal1").show();
            flag=2;
    });
    $(".point2").mouseover(function(){
            clearInterval(handle);
             $("#pcImg").css("background-image",'url("css/images/2.jpg")');
            point();
            $(".point2").css("background-position","-467px -52px");
            wordlocal();
            $(".wordlocal2").show();
            flag=3;
    });
    $(".point3").mouseover(function(){
            clearInterval(handle);
             $("#pcImg").css("background-image",'url("css/images/3.jpg")');
            point();
            $(".point3").css("background-position","-467px -52px");
            wordlocal();
            $(".wordlocal3").show();
            flag=4;
    });
    $(".point4").mouseover(function(){
            clearInterval(handle);
             $("#pcImg").css("background-image",'url("css/images/4.jpg")');
            point();
            $(".point4").css("background-position","-467px -52px");
            wordlocal();
            $(".wordlocal4").show();
            flag=5;
    });
    $(".point5").mouseover(function(){
            clearInterval(handle);
             $("#pcImg").css("background-image",'url("css/images/5.jpg")');
            point();
            $(".point5").css("background-position","-467px -52px");
            wordlocal();
            $(".wordlocal5").show();
            flag=1;
    });
    $(".newpoint").mouseout(function(){
            handle= setInterval("light();",1500);
    });

    $("#topnavc1").mouseover(function(){
            $(".topnavc1box").css("color","red");
            $(".topnavc1sum").css("color","red");
            $(".topnavc1Img").css("background-position","-182px -78px");
    });
    $("#topnavc1").mouseout(function(){
            $(".topnavc1box").css("color","rgb(250, 250, 250)");
            $(".topnavc1sum").css("color","rgb(250, 250, 250)");
            $(".topnavc1Img").css("background-position","-182px -52px");
    });
    $("#topnavc2").mouseover(function(){
            $(".topnavc2box").css("color","red");
            $(".topnavc2sum").css("color","red");
            $(".topnavc2Img").css("background-position","-156px -78px");
    });
    $("#topnavc2").mouseout(function(){
            $(".topnavc2box").css("color","rgb(250, 250, 250)");
            $(".topnavc2sum").css("color","rgb(250, 250, 250)");
            $(".topnavc2Img").css("background-position","-156px -52px");
    });
    $("#topnavc3").mouseover(function(){
            $(".topnavc3a").css("color","red");
    });
    $("#topnavc3").mouseout(function(){
            $(".topnavc3a").css("color","rgb(250, 250, 250)");
    });
    $("#topnavc4").mouseover(function(){
            $(".topnavc4a").css("color","red");
    });
    $("#topnavc4").mouseout(function(){
            $(".topnavc4a").css("color","rgb(250, 250, 250)");
    });

    $(".cbarright1").click(function(){
        $("#countryinfo").animate({
        top: 1719, opacity: 'show'
 }, 1000);
    });
    $("#close").click(function(){
        $("#countryinfo").hide();
    });

    $(".padded").mouseover(function(){
            $(this).css("background-color","#1d1d1f");
    });
    $(".padded").mouseout(function(){
            $(this).css("background-color","");
    });

    $(".mainnavword").mouseover(function(){
            $(this).css("color","red");
    });
    $(".mainnavword").mouseout(function(){
            $(this).css("color","rgb(250, 250, 250)");
    });
}