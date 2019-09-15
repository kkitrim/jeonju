$(document).ready(function () {

    /* mobile menu */
    $(".btn_lnb").click(function() {
        $(".btn_lnb").toggleClass("active");
        $(".span_top").toggleClass("span1");
        $(".span_middle").toggleClass("span2");
        $(".span_bottom").toggleClass("span3");
        $(".nav_lnb").toggleClass("active");
    });


    /* scroll effect */ 
    var speed = 700;	
	
	function scrolling(obj){
		if (!obj){	// 예외처리, 현재는 기능적으로 필요한 부분은 아님, 관례적 사용
			$('html, body').animate({scrollTop:0},speed);
		}else{
			var posTop = $(obj).offset().top -80;	// posTop = 매개변수로 들어온 컨텐츠 obj 의 offset().top - 네비게이션 높이
			$('html, body').animate({scrollTop:posTop}, speed )	// body의 스크롤이동 : posTop
		}
	};
	
	$("#header .nav_lnb ul li a").click(function(){	
		var direction = $(this).attr("href");
		scrolling( direction );	// direction 을 인자로 함수 실행
		return false;	// 본래 이벤트 방지 
    });
    

    /* my tap menu */
    $(".div_tapBtnBox .span_btn").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    $(".btn_course").click(function () {
        $(".show_course").addClass("active");
        $(".show_course").siblings().removeClass("active");
    });

    $(".btn_food").click(function () {
        $(".show_food").addClass("active");
        $(".show_food").siblings().removeClass("active");
    });

    $(".btn_hotel").click(function () {
        $(".show_hotel").addClass("active");
        $(".show_hotel").siblings().removeClass("active");
    });


})
 
