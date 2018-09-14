

$(function(){
	
	
//	首页导航切换样式
	$(".nav ul li").click(function(){
		$(this).children('a').addClass('active').parent().siblings().children('a').removeClass('active');
		
	});
		
//	消息页面切换tab	
	$(".menu p").click(function(){
		var i = $(this).index();
		$(this).parent().parent().parent().siblings('.right').children('.right-content').eq(i).addClass('tab-show').siblings().removeClass('tab-show');
		$(this).addClass('current').siblings().removeClass('current');
		//console.log($(this).eq(i).addClass().siblings());		
		
	});
		
		
	
//		订单页面下拉展示更多
	$(".btn-slide").click(function(){ 
        $(".panel").slideToggle("slow"); 
      //  $(this).toggleClass("active"); 
        $(this).toggleClass('bg1').toggleClass('bg2');
        return false;
   }); 
		
	
	
//	搜索框获取焦点,隐藏icon
	$(".search-input").focus(function(){
		$(this).css('background-image','none');
	});
	$(".search-input").blur(function(){
		$(this).css('background-image','url(../img/sprite/001.png) no-repeat 1.5rem center');
	});
	
	
		
//	goods-lease页面checkbox状态	
	$(".two-level a").each(function(index, element) {
        $(this).click(function(e) {
            if($(" .two-level input").eq(index).prop("checked")){
                $(".two-level input").eq(index).prop({"checked":false});
            }
            else{
                $(".two-level input").eq(index).prop({"checked":true});
            }
        });
    });
	

	
//	more-goods-lease页面切换tab
	$(".goods-menu li").hover(function(){
		var i = $(this).index();
		$(this).parent().parent().siblings().children().eq(i).addClass('tab-show').siblings().removeClass('tab-show');
		$(this).addClass('current1').siblings().removeClass('current1');	
		alert("hi");
		
	});
	
	
	
//	临时聊天界面
    var $img = ("img//miniPortrait02.jpg");
    $("#send").click(function(){
    	
    	var $v1=$("textarea").val();
    	if($v1.length==""){
            alert("发送消息不能为空");
        }else{
        	$(".chatBody").append("<div>"+"<span>"+$v1+"</span>"+"<img  src='"+$img+"'/>"+"</div>");
        	$(".chatBody div").addClass("chatStr");
        	$("textarea").val("");
        };		
		
    });

	
//	标准登陆与快速登陆界面切换
	$('.login-title span').click(function(){
		var i = $(this).index();
		$(this).parent().parent().siblings().children().eq(i).addClass('tab-show').siblings().removeClass('tab-show');
		$(this).addClass('current').siblings().removeClass('current')
	});
	










	

})