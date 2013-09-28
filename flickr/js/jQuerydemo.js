$(function(){
  //事件的委托
  initEleEvents();
});

//事件的委托
function initEleEvents(){
	$(".c5Iopen").mouseover(function(){
		var flag= $(this).attr("openflag");
		$(flag).show();
	});
	$(".c5Iopen").mouseout(function(){
		var flag= $(this).attr("openflag");
		$(flag).hide();
	});

//获取滚动条高度
    var scrollTop=0;
    function getScrollTop()
    {
        
        if(document.documentElement&&document.documentElement.scrollTop)
        {
            scrollTop=document.documentElement.scrollTop;
        }
        else if(document.body)
        {
            scrollTop=document.body.scrollTop;
        }
        return scrollTop;
    } 
	$(window).scroll( function() {
        getScrollTop();
		// var hei=$(document).scrollTop()||document.documentElement.scrollTop ;
		if (scrollTop>=1500&&scrollTop<=4200) {
			$("#content7").slideDown(500);
            $("#content7").css("top",scrollTop);
		} 
		else{
            $("#content7").slideUp(500);
		}; 
	} );

	$("#topmininav").mouseover(function(){
		var flag= $(this).attr("miniflag");
		$(flag).show();
	})
	$("#topmininav").mouseout(function(){
		var flag= $(this).attr("miniflag");
		$(flag).hide();
	})

	$("#topnmImg").mouseover(function(e){
		var xx = e.clientX ; 
        var yy = e.clientY; 
		var flag= $(this).attr("logoflag");
		$(flag).css({
			"top":yy,
			"left":xx
		});
		$(flag).show();
	})
	$("#topnmImg").mouseout(function(){
		var flag= $(this).attr("logoflag");
		$(flag).hide();
	})

    var flag=0;
    var yx;
    $("#c2txtc4B").mouseover(function(e){
    	yx = e.clientX;
    	flag=1;
	})

	$("#c2txtc4B").mousemove(function(e){
		var xx = e.clientX;
		var temp=$(this).css("left");
        var ox=parseInt(temp);
        var tempnx = xx - yx + ox ;
        var nx=tempnx + "px";
        var wordtmp= tempnx - 90;
        var wordxx=wordtmp+"px";
        var wordImg= $(this).attr("wordflag");
        var wordvlueflag = $(this).attr("wordvlue");
        var a = $(wordvlueflag).text();
        
		if (flag==1&&tempnx >= 170 && tempnx <= 1159) { 
        $(this).css("left",nx);
        $(this).show();
        if (tempnx >= 170 && tempnx <= 180) {$(wordvlueflag).text("0.0");};
        if (tempnx > 180 && tempnx <= 190) {$(wordvlueflag).text("0.5");};
        if (tempnx > 190 && tempnx <= 200) {$(wordvlueflag).text("1.0");};
        if (tempnx > 200 && tempnx <= 210) {$(wordvlueflag).text("1.5");};
        if (tempnx > 210 && tempnx <= 220) {$(wordvlueflag).text("2.0");};
        if (tempnx > 220 && tempnx <= 230) {$(wordvlueflag).text("2.5");};
        if (tempnx > 230 && tempnx <= 240) {$(wordvlueflag).text("3.0");};
        if (tempnx > 240 && tempnx <= 250) {$(wordvlueflag).text("3.5");};

        if (tempnx > 250 && tempnx <= 298) {$(wordvlueflag).text("4.0");};
        if (tempnx > 298 && tempnx <= 357) {$(wordvlueflag).text("4.5");};
        if (tempnx > 357 && tempnx <= 407) {$(wordvlueflag).text("5.0");};
        if (tempnx > 407 && tempnx <= 466) {$(wordvlueflag).text("5.5");};
        if (tempnx > 466 && tempnx <= 516) {$(wordvlueflag).text("6.0");};
        if (tempnx > 516 && tempnx <= 575) {$(wordvlueflag).text("6.5");};
        if (tempnx > 575 && tempnx <= 625) {$(wordvlueflag).text("7.0");};
        if (tempnx > 625 && tempnx <= 684) {$(wordvlueflag).text("7.5");};
        if (tempnx > 684 && tempnx <= 734) {$(wordvlueflag).text("8.0");};

        if (tempnx > 734 && tempnx <= 793) {$(wordvlueflag).text("9.0");};
        if (tempnx > 793 && tempnx <= 843) {$(wordvlueflag).text("10");};
        if (tempnx > 843 && tempnx <= 902) {$(wordvlueflag).text("11");};
        if (tempnx > 902 && tempnx <= 952) {$(wordvlueflag).text("12");};
        if (tempnx > 952 && tempnx <= 1011) {$(wordvlueflag).text("13");};
        if (tempnx > 1011 && tempnx <= 1061) {$(wordvlueflag).text("14");};
        if (tempnx > 1061 && tempnx <= 1120) {$(wordvlueflag).text("15");};
        if (tempnx > 1120 && tempnx <= 1159) {$(wordvlueflag).text("16");};
        $(wordImg).css("left",wordxx);
        $(wordImg).show();
        };
	})
	$("#c2txtc4B").mouseout(function(e){
    	flag=0;
	})
}