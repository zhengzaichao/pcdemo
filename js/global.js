// JavaScript Document
$(function(){
	var win_width = $(window).width();
	var win_height = $(window).height();

	function transform180($this){$this.children("span").css({"transform":"rotate(180deg)","-webkit-transform":"rotate(180deg)","-mos-transform":"rotate(180deg)"})}
	function transform0($this){$this.children("span").css({"transform":"rotate(0deg)","-webkit-transform":"rotate(0deg)","-mos-transform":"rotate(0deg)"})}

	$(function(){

	//装饰效果头部小导航申拉效果
			
			function topnav(){
			var zsxgnavleng=$(".zsxgnav").length;
			
			for(var i=0;i<zsxgnavleng;i++){
				if($(".zsxgnav").eq(i).find(".zsxgnavright").children("p").height()>42){$(".zsxgnav").eq(i).find(".zsxgnavright").find(".i").show();}
				else{$(".zsxgnav").eq(i).find(".zsxgnavright").find(".i").hide();}
				}
			}
			$(".zsxgnav .zsxgnavright .i").click(function(){
					var $zsxgnav=$(this).parents(".zsxgnav");
					if($zsxgnav.find(".zsxgnavright").height()==42){
					$zsxgnav.find(".zsxgnavright").height($zsxgnav.find(".zsxgnavright").find("p").height());
							$zsxgnav.find(".zsxgnavleft").height($zsxgnav.find(".zsxgnavright").find("p").height());
							transform180($(this).children('i'))
						}else{
							$zsxgnav.find(".zsxgnavright").height(42);
							$zsxgnav.find(".zsxgnavleft").height(42);
							transform0($(this).children('i'))
							}
					
					})
					
		topnav();
	
		$("#m_case_1 a").hover(function(){
		$(this).find(".z_1").fadeIn(100);
			},function(){
		$(this).find(".z_1").fadeOut(100);
	});
	
	 $(function(){
			$(".s_ckgd").click(function(){
					 $(".s_gstxt").toggleClass("h");
					$(this).hide();
						})					 
					 })
	
	})

})