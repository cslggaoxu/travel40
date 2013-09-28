$(function(){
  //事件的委托
  initEleEvents();
  handle= setInterval("light();",1000000000);
});
var handle
function light(){   
    var flag = Math.floor(Math.random()*4+1); 
    if (flag == "1") {
        $(".totalpage0").css("background-image",'url("css/images/1.png")');
        clickflag=1;
    };
    if (flag == "2") {
        $(".totalpage0").css("background-image",'url("css/images/2.png")');
        clickflag=2;
    };
    if (flag == "3") {
        $(".totalpage0").css("background-image",'url("css/images/3.png")');
        clickflag=3;
    };
    if (flag == "4") {
        $(".totalpage0").css("background-image",'url("css/images/4.png")');
        clickflag=4;
    };    
}
//事件的委托
function initEleEvents(){
	var openflag=0;
    $(".cd1cup3").click(function(){
    	if (openflag==0) {
    		var openitem = $(this).attr("openitem");
    	    $(openitem).fadeIn(600);
    	    openflag=1;
    	    return;
    	};
    	if (openflag==1) {
    		var openitem = $(this).attr("openitem");
    	    $(openitem).fadeOut();
    	    openflag=0;
    	};
    	
    });

    $("#country").mouseover(function(){
    		var countryflag = $(this).attr("countryflag");
            $("#country").css("background-color","#000000");
    	    $(countryflag).show();
            $("#musiclocal").hide();	
    });
    $("#country").mouseout(function(){
    		var countryflag = $(this).attr("countryflag");
            $("#country").css("background-color","");
    	    $(countryflag).hide();
            $("#musiclocal").show(); 

    });

    $("#rightnav").mouseover(function(){
            var rightnav = $(this).attr("rightnav");
            $("#rightnav").css("background-color","#212020")
            $(rightnav).show(); 
             $("#navsearch").hide();     
    });
    $("#rightnav").mouseout(function(){
            var rightnav = $(this).attr("rightnav");
            $("#rightnav").css("background-color","")
            $(rightnav).hide();
             $("#navsearch").show();      
    });
    
    // $(".totalpage1").mouseover(function(){
    //         clearInterval(handle);
    // });
    // $(".totalpage1").mouseout(function(){
    //         handle= setInterval("light();",5000);
    // });
    $("#MJcright").mouseover(function(){
        $("#MJcright").css("background-position","0px -280px");
    });
    $("#MJcleft").mouseover(function(){
        $("#MJcleft").css("background-position","-144px -280px");
    });
    var clickflag=1;
    $("#MJcright").click(function(){
          // var backIMGright  = $("#MJcright").attr("backIMGright");
           if (clickflag == 1) {
            $(".totalpage0").css("background-image",'url("css/images/2.png")');
            clickflag=2;
            return;
           };
           if (clickflag==2) {
            $(".totalpage0").css("background-image",'url("css/images/3.png")');
            clickflag=3;
            return;
           };
           if (clickflag==3) {
            $(".totalpage0").css("background-image",'url("css/images/4.png")');
            clickflag=4;
            return;
           };
           if (clickflag==4) {
            $(".totalpage0").css("background-image",'url("css/images/1.png")');
            clickflag=1;
            return;
           };
    });
     $("#MJcleft").click(function(){
           if (clickflag == 4) {
            $(".totalpage0").css("background-image",'url("css/images/3.png")');
            clickflag=3;
            return;
           };
           if (clickflag==3) {
            $(".totalpage0").css("background-image",'url("css/images/2.png")');
            clickflag=2;
            return;
           };
           if (clickflag==2) {
            $(".totalpage0").css("background-image",'url("css/images/1.png")');
            clickflag=1;
            return;
           };
           if (clickflag==1) {
            $(".totalpage0").css("background-image",'url("css/images/4.png")');
            clickflag=4;
            return;
           };
    });
     var musicflag=1;
     $("#musicstyle2").click(function(){
        
        if (musicflag == 1) {
            $("#music").hide();
            $(this).css("background-position","-48px -4915px");
            musicflag =0;
            return;
        };

        if (musicflag == 0) {
            $("#music").show();
            $(this).css("background-position","-48px -5034px");
            musicflag =1;
            return;
        };
     });

     $("#bottomnavupicon1").mouseover(function(e){
        var xx = e.clientX-20 ; 
        var yy = e.clientY+50; 
        $("#bottomnavupinfo1").css({
            "top":yy,
            "left":xx
        });
        $("#bottomnavupinfo1").show();
    });
    $("#bottomnavupicon1").mouseout(function(){
        $("#bottomnavupinfo1").hide();
    });
    $("#bottomnavupicon2").mouseover(function(e){
         var xx = e.clientX-20 ; 
        var yy = e.clientY+50; 
        $("#bottomnavupinfo2").css({
            "top":yy,
            "left":xx
        });
        $("#bottomnavupinfo2").show();
    });
    $("#bottomnavupicon2").mouseout(function(){
        $("#bottomnavupinfo2").hide();
    });
    $("#bottomnavupicon3").mouseover(function(e){
        var xx = e.clientX-20 ; 
        var yy = e.clientY+50; 
        $("#bottomnavupinfo3").css({
            "top":yy,
            "left":xx
        });
        $("#bottomnavupinfo3").show();
    });
    $("#bottomnavupicon3").mouseout(function(){
        $("#bottomnavupinfo3").hide();
    });
    $("#bottomnavupicon4").mouseover(function(e){
        var xx = e.clientX-20 ; 
        var yy = e.clientY+50; 
        $("#bottomnavupinfo4").css({
            "top":yy,
            "left":xx
        });
        $("#bottomnavupinfo4").show();
    });
    $("#bottomnavupicon4").mouseout(function(){
        $("#bottomnavupinfo4").hide();
    });
    $("#bottomnavupicon5").mouseover(function(e){
        var xx = e.clientX-20 ; 
        var yy = e.clientY+50; 
        $("#bottomnavupinfo5").css({
            "top":yy,
            "left":xx
        });
        $("#bottomnavupinfo5").show();
    });
    $("#bottomnavupicon5").mouseout(function(){
        $("#bottomnavupinfo5").hide();
    });
    $("#bottomnavupicon6").mouseover(function(e){
        var xx = e.clientX-20 ; 
        var yy = e.clientY+50; 
        $("#bottomnavupinfo6").css({
            "top":yy,
            "left":xx
        });
        $("#bottomnavupinfo6").show();
    });
    $("#bottomnavupicon6").mouseout(function(){
        $("#bottomnavupinfo6").hide();
    });
}