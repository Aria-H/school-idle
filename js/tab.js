
$(function() {  
   $('.tabs li').hover(function(){
   		var i = $(this).index();

   		$(this).parents('.tabs').siblings('.tabCon').children().eq(i).removeClass('tab-show').siblings().addClass('tab-show');
   		$(this).children().addClass('current').parent().siblings().children().removeClass('current');
     },function(){
    })
})

