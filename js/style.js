var m_ul_left,m_ul_left;
$(function(){
	//顶部搜索开始
	$("#header .m_select").click(function(){
		$("#header .m_option").slideToggle(10);
	});
	$("#header .m_option li").click(function(){
		$("#header .m_select").html($(this).html());
		$("#header .m_option").slideUp(10);
	});
	//顶部搜索结束
	
	
	//导航开始
	$("#nav li").width(parseInt(1200/$("#nav li").size()));
	//导航结束
	
	
	//首页banner下的位置开始
	$(".m_ms_form .m_left li").eq(0).hover(function(){
		$(".m_ms_form .m_left li").eq(1).addClass("m_on");
	},function(){
		$(".m_ms_form .m_left li").eq(1).removeClass("m_on");
	});
	$(".m_ms_form .m_left li").eq(1).hover(function(){
		$(".m_ms_form .m_left li").eq(2).addClass("m_on");
	},function(){
		$(".m_ms_form .m_left li").eq(2).removeClass("m_on");
	});
	$(".m_ms_form .m_left li").eq(2).hover(function(){
		$(".m_ms_form .m_left li").eq(3).addClass("m_on");
	},function(){
		$(".m_ms_form .m_left li").eq(3).removeClass("m_on");
	});
	//首页banner下的位置结束
	
	//banner上的表单切换开始
	$(".m_ms_form .m_right .m_tab span").click(function(){
		$(this).addClass("m_on").siblings().removeClass("m_on");
		$(".m_ms_form .m_right .m_bodys .tab_1").removeClass("tab_body_show");
		$(".m_ms_form .m_right .m_bodys .tab_1").eq($(this).index()).addClass("tab_body_show")
	});
	//banner上的表单切换结束
	
	$(".m_ms_form .m_right .m_tab span").click(function(){
		$(this).addClass("m_on").siblings().removeClass("m_on");
		$(".m_ms_form .m_right .m_bodys .tab_1").removeClass("tab_body_show");
		$(".m_ms_form .m_right .m_bodys .tab_1").eq($(this).index()).addClass("tab_body_show")
	});
	
	//首页装修效果图开始
	$(".m_xgt .tab span").click(function(){
		$(this).addClass("m_on").siblings().removeClass("m_on");
		$(".m_xgt .tab_1").removeClass("tab_show");
		$(".m_xgt .tab_1").eq($(this).index()).addClass("tab_show");
	});
	$(".s_lsbanner .ycbid .m_tab span").click(function(){
		$(this).addClass("m_on").siblings().removeClass("m_on");
		$(".s_lsbanner .ycbid .m_bodys .tab_1").removeClass("tab_show");
		$(".s_lsbanner .ycbid .m_bodys .tab_1").eq($(this).index()).addClass("tab_show");
	});
	//首页装修效果图结束
	
	//焦点在的时候，外边框
	$(".m_zxjf .zx_2 .m_1 input,.m_zxjf .zx_2 .m_1 select").focus(function(){
		$(this).css("outline","2px solid #666666");
	});
	$(".m_zxjf .zx_2 .m_1 input,.m_zxjf .zx_2 .m_1 select").focusout(function(){
		$(this).css("outline","none");
	});
	
	//效果图弹框
	$("#m_xgt_list .btn_1,#m_xgt_list .btn_2").click(function(){
		$("#m_tan_form").addClass("m_tan_form_show");
		$(".m_tan_bg").show();
		return false;
	});
	$("#m_tan_form .m_close").click(function(){
		$("#m_tan_form").removeClass("m_tan_form_show");
		$(".m_tan_bg").hide();
	});
	
	//软装商城
	$("#m_rmfl .tabs span").width(parseInt(1200/$("#m_rmfl .tabs span").size())-1);
	$("#m_rmfl .tabs span").eq(-1).width(1200-parseInt(($("#m_rmfl .tabs span").width()+1)*($("#m_rmfl .tabs span").size()-1))-2);
	$("#m_rmfl .tabs span").hover(function(){
		$(this).addClass("curr").siblings().removeClass("curr");
		$("#m_rmfl .tab_body").removeClass("tab_body_show");
		$("#m_rmfl .tab_body").eq($(this).index()).addClass("tab_body_show");
	});
	
	$("#m_rmsp .li").size()
	for(var i=0;i<$("#m_rmsp li").size();i++){
		if(i%2 == 1){
			$("#m_rmsp li").eq(i).find(".m_1").eq(0).attr("class","m_1 m_right");
			$("#m_rmsp li").eq(i).find(".m_2").eq(0).attr("class","m_2 m_left");
		};
		
	}
	//软装商城结束
	
	
	
	
	$(window).resize(function(){_resize();});
	_resize();
	function _resize(){
		//首页banner开始
		$("#banner ul").width($("#banner ul li").size()*$(window).width());
		$("#banner ul li").width($(window).width());
		m_ul_left = (1-$("#banner ul li").size())*$(window).width();//最小的left值
		$("#banner .m_pro").click(function(){
			$("#banner ul").stop(false,true);
			m_ul_left_now = parseInt($("#banner ul").css("left"));
			if(m_ul_left_now >= 0){
				m_ul_left_now = 0;
			}else{
				m_ul_left_now += $(window).width();
			}
			$("#banner ul").animate({
				"left" : m_ul_left_now+"px",
			},400);
		});
		$("#banner .m_next").click(function(){
			$("#banner ul").stop(false,true);
			m_ul_left_now = parseInt($("#banner ul").css("left"));
			if(m_ul_left_now <= m_ul_left){
				m_ul_left_now = m_ul_left;
			}else{
				m_ul_left_now -= $(window).width();
			}
			$("#banner ul").animate({
				"left" : m_ul_left_now+"px",
			},400);
		});
		var m_t = setInterval('banner_show()',5000);
		$("#banner").hover(function(){
			clearInterval(m_t);
		},function(){
			m_t = setInterval('banner_show()',5000);
		});
		//首页banner结束
		
		//首页装修公司开始
		$("#m_zxgs .bd .m_1").click(function(){
			$(".m_tan_bg").fadeIn(200);
			$("#tan_box_1").slideDown(300);
			$("#tan_box_1").html($(this).find(".box").html());
		});
		$(".m_tan_box .close").live("click",function(){
			$(".m_tan_bg").fadeOut(200);
			$(".m_tan_box").slideUp(300);
		});
		//首页装修公司结束
		
		//我的投标开始
		for(var i=0;i<$("#mybid .m_btn_2").size();i++){
			if($("#mybid .m_btn_2").eq(i).html()=="收起"){
				$("#mybid .m_btn_2").eq(i).prev().height(parseInt($("#mybid .m_btn_2").eq(i).prev().find("dd").size()/2)*59);
			}
		}
		
		$("#mybid .m_btn_2").click(function(){
			//$(this).prev().slideToggle(300);
			
			if($(this).html()=="收起"){
				$(this).html("详情");
				$(this).prev().height(0);
			}else{
				$(this).html("收起");
				$(this).prev().height(parseInt($(this).prev().find("dd").size()/2)*59);
			}
			$(this).parent().toggleClass("curr");
			
		});
		//我的投标结束
		
		//上传文件显示文件名
		$("#file").change(function(){
			var file = $("#file").val();
			var fileName = getFileName(file);
		});
		function getFileName(o){
			var pos=o.lastIndexOf("\\");
			$("#file_text").val(o.substring(pos+1))
		}
		//上传文件显示文件名结束
		
		//右侧表单切换
		$("#m_tab_1 .m_tab_right span").click(function(){
			$(this).addClass("curr").siblings().removeClass("curr");
			$("#m_tab_1 .m_tab_1").eq($(this).index()).addClass("m_tab_show").siblings().removeClass("m_tab_show");
		});
		//右侧表单切换结束
		
		//右侧热文推荐
		$("#m_hotnews li.curr .img").height($("#m_hotnews li.curr .img img").attr("height"))
		$("#m_hotnews .oi").click(function(){
			if($(this).parent().attr("class")=="curr"){
				$(this).parent().removeClass("curr");
				$(this).prev().find(".img").eq(0).height(0);
			}else{
				$(this).parent().addClass("curr");
				$(this).parent().siblings().removeClass("curr");
				$("#m_hotnews .img").height(0);
				$(this).prev().find(".img").eq(0).height($(this).prev().find(".img").eq(0).find("img").attr("height"));
			}
			
		});
		//右侧热文推荐
	}
	
})

//首页banner定时轮播开始
function banner_show(){
	m_ul_left_now = parseInt($("#banner ul").css("left"));
	if(m_ul_left_now <= m_ul_left){
		m_ul_left_now = 0;
	}else{
		m_ul_left_now -= $(window).width();
	}
	$("#banner ul").animate({
		"left" : m_ul_left_now+"px",
	},400);
}
//首页banner定时轮播结束

//图片大小居中开始
function AutoResizeImage(maxWidth,maxHeight,objImg){
    var img = new Image();
    img.src = objImg.src;
    var hRatio;
    var wRatio;
    var Ratio = 1;
    var w = img.width;
    var h = img.height;
    wRatio = maxWidth / w;
    hRatio = maxHeight / h;
    if (maxWidth ==0 && maxHeight==0){
    Ratio = 1;
    }else if (maxWidth==0){//
    if (hRatio<1) Ratio = hRatio;
    }else if (maxHeight==0){
    if (wRatio<1) Ratio = wRatio;
    }else if (wRatio<1 || hRatio<1){
    Ratio = (wRatio<=hRatio?wRatio:hRatio);
    }
    if (Ratio<1){
    w = w * Ratio;
    h = h * Ratio;
    }
    objImg.height = h;
    objImg.width = w;
    objImg.style.marginTop=((maxHeight-h)/2+10)+"px"
}
//图片大小居中结束

//右侧热文推荐图片高度
function AutoImage(objimg){
	var img = new Image();
    img.src = objimg.src;
    var h = img.height*288/img.width;
	objimg.height = h;
    objimg.width = 288;
}
//右侧热文推荐图片高度结束

//效果图
var m_height 	= 0,
	height_1	= 0,
	height_2	= 0,
	height_3	= 0
function reImage(objimg){
	var img = new Image();
    img.src = objimg.src;
    var h = img.height*280/img.width;
	objimg.height = h;
    objimg.width = 280;
	if(height_1 == 0){
		$(objimg).parent().parent().css({
			"top":0,
			"left":0
		});
		height_1 = parseInt(h)+parseInt(height_1)+66;
	}else if(height_2 == 0){
		$(objimg).parent().parent().css({
			"top":0,
			"left":'300px'
		});
		height_2 = parseInt(h)+parseInt(height_2)+66;
	}else if(height_3 == 0){
		$(objimg).parent().parent().css({
			"top":0,
			"right":0
		});
		height_3 = parseInt(h)+parseInt(height_3)+66;
	}else{
		if(height_1 < height_2){
			if(height_1 < height_3){
				$(objimg).parent().parent().css({
					"top":height_1+'px',
					"left":'0'
				});
				height_1 += h+66;
			}else{
				$(objimg).parent().parent().css({
					"top":height_3+'px',
					"right":'0'
				});
				height_3 += h+66;
			}
		}else{
			if(height_2 < height_3){
				$(objimg).parent().parent().css({
					"top":height_2+'px',
					"left":'300px'
				});
				height_2 += h+66;
			}else{
				$(objimg).parent().parent().css({
					"top":height_3+'px',
					"right":'0'
				});
				height_3 += h+66;
			}
		}
	}
	if(height_1>height_2){
		height = height_1;
		if(height_1<height_3){
			height = height_3;
		}
	}else{
		height = height_2;
		if(height_2<height_3){
			height = height_3;
		}
	}
	//alert(height_1+','+height_2+','+height_3);
	$("#m_xgt_list").height(height);
}
