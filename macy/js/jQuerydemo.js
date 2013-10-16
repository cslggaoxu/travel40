$(function(){
  //事件的委托
  initEleEvents();
  handle=setInterval("light()",1500);
  $("#bagcontent").hide();
});
     var handle;
     var lightflag=1;
     function light(){
          if (lightflag == 1) {
            $("#headerImg").css("background-image",'url("css/images/1125_1126_INT_CyberMon_hp_gna_3_1080464.png")');
            lightflag =2;
            return;
          };
          if (lightflag == 2) {
            $("#headerImg").css("background-image",'url("css/images/2012_gnas_12_1079936.png")');
            lightflag =3;
            return;
          };
          if (lightflag == 3) {
            $("#headerImg").css("background-image",'url("css/images/2012_gnas_14_1079145.png")');
            lightflag =1;
            return;
          };
     }
//事件的委托
function initEleEvents(){
    $(".headerword").mouseover(function(){
        $(this).css("text-decoration","underline");
    });
    $(".headerword").mouseout(function(){
        $(this).css("text-decoration","none");
    });

    $("#headerImg").mouseover(function(){
            clearInterval(handle);
    });
    $("#headerImg").mouseout(function(){
            handle= setInterval("light();",1500);
    });
    
    $(".globalbag").mouseover(function(){
            $(this).addClass("globalborderstyle");
            $("#bagcontent").show();
    });
    $(".globalbag").mouseout(function(){
             $(this).removeClass("globalborderstyle");
             $("#bagcontent").hide();
    });

    

    $(".footertitle1").mouseover(function(){
            $(this).css("text-decoration","underline");
    });
    $(".footertitle1").mouseout(function(){
             $(this).css("text-decoration","none");
    });
    $(".footercontent1").mouseover(function(){
            $(this).css("text-decoration","underline");
    });
    $(".footercontent1").mouseout(function(){
             $(this).css("text-decoration","none");
    });
    $(".footercontent2").mouseover(function(){
            $(this).css("text-decoration","underline");
    });
    $(".footercontent2").mouseout(function(){
             $(this).css("text-decoration","none");
    });
     $(".ftopcbcontent").mouseover(function(){
            $(this).css("text-decoration","underline");
    });
    $(".ftopcbcontent").mouseout(function(){
             $(this).css("text-decoration","none");
    });
    $(".fbottomword3").mouseover(function(){
            $(this).css("text-decoration","underline");
    });
    $(".fbottomword3").mouseout(function(){
             $(this).css("text-decoration","none");
    });
    $(".fbottomword4").mouseover(function(){
            $(this).css("text-decoration","underline");
    });
    $(".fbottomword4").mouseout(function(){
             $(this).css("text-decoration","none");
    });


    $(".gnc1").mouseover(function(){
            $(this).css("background-color","#fff");
            $(".gncchangeword1").css("color","#000");
            $(this).css("box-shadow","5px -2px 3px #000");
            // $(this).css("text-shadow","3px 2px 4px red");
            $(".gncmenu1").show();
    });
    $(".gnc1").mouseout(function(){
             $(this).css("background-color","transparent");
             $(".gncchangeword1").css("color","#fff");
             $(this).css("box-shadow","");
             // $(this).css("text-shadow","");
             $(".gncmenu1").hide();
    });
     $(".gnc2").mouseover(function(){
            $(this).css("background-color","#fff");
            $(".gncchangeword2").css("color","#000");
            $(this).css("box-shadow","5px -2px 3px #000");
            // $(this).css("text-shadow","3px 2px 4px red");
            $(".gncmenu2").show();
    });
    $(".gnc2").mouseout(function(){
             $(this).css("background-color","transparent");
             $(".gncchangeword2").css("color","#fff");
             $(this).css("box-shadow","");
             // $(this).css("text-shadow","");
             $(".gncmenu2").hide();
    });

    $(".gncitemtitle1").mouseover(function(){
            $(this).css("text-decoration","underline");
    });
    $(".gncitemtitle1").mouseout(function(){
             $(this).css("text-decoration","none");
    });
    $("#gncitem6").mouseover(function(){
            $(this).css("text-decoration","underline");
    });
    $("#gncitem6").mouseout(function(){
             $(this).css("text-decoration","none");
    });
}