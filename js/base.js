var URLS=window.location.href.split(window.location.pathname)[0],acg_xt_text_focus=!1,_acg_xt_com_history_top=0,liveScroll=0,liveScrollWindow=0;
$(function(){
    $(".acgxt_com_header .acgxt_com_header_nav .right .avatar").hover(function(){
        $("#xt_user_avatar").addClass("hover");$(".acgxt_com_header .acgxt_com_header_nav .right .avatar .user_info").slideDown(80)},function(){$("#xt_user_avatar").removeClass("hover");$(".acgxt_com_header .acgxt_com_header_nav .right .avatar .user_info").slideUp(20)});$(".acgxt_com_header .acgxt_com_header_center .search #xtSearchKey").focus(function(){acg_xt_text_focus=!0;liveScrollWindow=$(window).scrollTop();$(this).parents("form").addClass("xt_search_focus");
        $(".acgxt_com_header .acgxt_com_header_center .xt_history_warp").fadeIn(200)});$(".acgxt_com_header .acgxt_com_header_center .search #xtSearchKey").blur(function(a){$(this).parents("form").removeClass("xt_search_focus")});$(document).click(function(a){a=a.target.id;"xtSearchKey"!=a&&"xt_scroll_main"!=a&&"xt_scroll_warp"!=a&&(acg_xt_text_focus=!1,$(".acgxt_com_header .acgxt_com_header_center .xt_history_warp").fadeOut(100))});$("#openRandomPage").click(function(){xt.ajax("get","Home/data/rand","json",
        {},function(a){0==a.status?(xt.toast("\u5f00\u59cb\u4f20\u9001!",4),window.location.href=a.url):xt.toast("\u566b,\u5f53\u524d\u65e0\u6cd5\u4f7f\u7528\u4efb\u610f\u95e8\u5462~",2)},function(){xt.toast("\u566b,\u5f53\u524d\u65e0\u6cd5\u4f7f\u7528\u4efb\u610f\u95e8\u5462~",2)})});$(".acgxt_com_header .acgxt_com_header_bottom .xt_menu .xt_menu_one").hover(function(){$(this).children(".xt_sub_menu").fadeIn(0)},function(){$(this).children(".xt_sub_menu").fadeOut(0)});$(".main_article .main_left .article .avatar").hover(function(){$(this).siblings(".userData").fadeIn(100)},
        function(){$(this).siblings(".userData").fadeOut(100)});$(".main_article .main_left .article .preview").hover(function(){$(this).children(".xt-icon-search").fadeIn(100);$(this).children("img").css({transform:"scale(1.3,1.3)"})},function(){$(this).children(".xt-icon-search").fadeOut(100);$(this).children("img").css({transform:"scale(1,1)"})});$(".main_article .main_right .comment li").hover(function(){var a=$(this).position().top;$(".main_article .main_right .comment .xt_select_comment").stop().animate({top:a+
            "px"},100)});$(".footer_acgxt_tools .top").click(function(){xt.move(0)});$(".footer_acgxt_tools .comment").click(function(){var a=$("#comment_main").offset().top;xt.move(a)});$(".footer_acgxt_tools .bottom").click(function(){xt.move($(document).height())});$(".userAvatar").error(function(){var a=new Image,b=DEFAULT_AVATAR;a.src=b;var c=$(this);a.complete?c.attr("src",b):a.onload=function(){c.attr("src",b)}});$(".xt-menu").click(function(a){"xt-phone-menu"==a.target.id&&($(".xt-menu").animate({background:null,
        left:"-250px"},300),$(".phone_acgxt_header .shadow").animate({right:"-100%"},100),$(".xt-menu").fadeOut(0),$("html,body").animate({left:"0"},300),$(".phone_acgxt_header").animate({left:"0"},300))});$(".phone_acgxt_header .xt-icon-menu").click(function(){$(".xt-menu").fadeIn(0);$(".phone_acgxt_header .shadow").animate({right:0},300);$(".xt-menu").animate({background:"rgba(0,0,0,0.5)",left:"0"},300);$("html,body").animate({left:"125px"},300);$(".phone_acgxt_header").animate({left:"250px"},300)});$(".articlePreview").error(function(){var a=
        new Image,b=DEFAULT_PREVIEW;a.src=b;var c=$(this);a.complete?c.attr("src",b):a.onload=function(){c.attr("src",b)}})});
var xt={move:function(a){
        var b=500,b=$(window).scrollTop();
        if(b==a)return!1;
        b=b>a?b/2/2:(a-b)/2;
        isReturn=!0;
        $("body,html").animate({scrollTop:a},b);$(this);
        setTimeout(function(){isReturn=!1},b)},ajax:function(a,b,c,d,e,f)
    {
        $.ajax({type:a,url:URLS+"/"+b,dataType:c,data:d,success:e,error:f})},toastFlag:!1,toast:function(a,b,c,d){b=isNaN(b)?1:b;d=isNaN(d)?300:d;c=isNaN(c)?1500:c;$("#xt_toast #xt_toast_acgxt").text(a);if(!this.toastFlag){this.toastFlag=!0;a="rgba(90,170,224,0.9)";switch(b){case 2:a="rgba(224, 90, 90, 0.9)";
        break;
        case 3:a="rgba(249, 210, 117, 0.9)";break;case 4:a="rgba(101, 213, 79, 0.9)"}
        $("#xt_toast").css("backgroundColor",a);$("#xt_toast").animate({top:"0"},d);!1!==xt.toastFlag&&setTimeout(function(){!0===xt.toastFlag&&(xt.toastFlag=!1,$("#xt_toast").animate({top:"-60px"},d))},c)}},toastOpen:function(a,b,c){c=isNaN(c)?300:c;$("#xt_toast #xt_toast_acgxt").text(a);if(!this.toastFlag){this.toastFlag=!0;a="rgba(90,170,224,0.9)";switch(b){case 2:a="rgba(224, 90, 90, 0.9)";break;case 3:a="rgba(249, 210, 117, 0.9)";
        break;case 4:a="rgba(101, 213, 79, 0.9)"}$("#xt_toast").css("backgroundColor",a);$("#xt_toast").animate({top:"0"},c);this.toastFlag=!1}},toastClose:function(a){a=isNaN(a)?300:a;xt.toastFlag=!1;$("#xt_toast").animate({top:"-60px"},a)},confirm:function(a,b,c,d){$("#xt_confirm").fadeIn(0);null!=c?$("#xt_confirm #close").text(c):$("#xt_confirm #close").text("\u53d6\u6d88");null!=d?$("#xt_confirm #success").text(d):$("#xt_confirm #success").text("\u786e\u5b9a");$("#xt_confirm #xt_acg_confirm .acg_xt_content").text(a);
        $("#xt_confirm #xt_acg_confirm").addClass("show");
        if("function"==typeof b)$("#xt_acg_confirm .acg_xt_action #success").one("click",b)},confirm_hide:function(){$("#xt_confirm #xt_acg_confirm").removeClass("show");$("#xt_confirm").fadeOut(300)},events:function(){$("#xt_acg_confirm .acg_xt_action #success").click(function(){xt.confirm_hide()});$("#xt_toast").click(function(){!1!==xt.toastFlag&&(xt.toastFlag=!1,$("#xt_toast").animate({top:"-60px"},200))});$(".xt_slide .xt_slide_btn a").click(function(){var a=
        $(this).index();a!=xt.slideIndex&&xt.slide(slideData,a)})},scrollEvent:function(a){$(window).scroll(function(){acg_xt_text_focus&&$(this).scrollTop(liveScrollWindow)});$(a.warp).on("mousewheel",function(b){xt.scrollXt(b.originalEvent.wheelDelta&&(0<b.originalEvent.wheelDelta?1:-1)||b.originalEvent.detail&&(0<b.originalEvent.detail?-1:1),!1,a)});$(a.warp).on("DOMMouseScroll",function(b){xt.scrollXt(b.originalEvent.wheelDelta&&(0<b.originalEvent.wheelDelta?1:-1)||b.originalEvent.detail&&(0<b.originalEvent.detail?
        -1:1),!1,a)});$(a.scrollMain).mousedown(function(b){
        var c=$(this).offset(),d=b.clientY-c.top;$(a.warp).bind("mousemove",function(b){$(a.scrollWarp).stop();
            var c=$(this).offset();b=b.clientY-d-c.top;c=$(a.scrollWarp).height()-$(a.scrollMain).height();0>=b&&(b=0);b>c&&(b=c);liveScroll=b;var c=$(a.main).height(),e=-(c*b/160);_acg_xt_com_history_top=Math.abs(e)>c?-c:e;$(a.main).css("top",e+"px");$(a.scrollMain).css({left:"1px",top:b+"px"})})});$(document).mouseup(function(){$(a.warp).unbind("mousemove")});
        $(a.scrollWarp).click(function(b){
            var c=$(this).offset();liveScroll=b=b.clientY-c.top;
            var c=$(a.main).height(),d=-(c*b/160);_acg_xt_com_history_top=Math.abs(d)>c?-c:d;$(a.main).css("top",d+"px");
            $(a.scrollMain).css({left:"1px",top:b+"px"},0)})},scrollXt:function(a,b,c){var d=$(c.main).height(),d=160/Math.ceil(d/10);
        if(0<a)a=_acg_xt_com_history_top+10,0<a?liveScroll=_acg_xt_com_history_top=0:(liveScroll-=d,_acg_xt_com_history_top+=10),b?$(c.scrollMain).animate({top:Math.abs(liveScroll)+"px"},500):
            $(c.scrollMain).css({top:Math.abs(liveScroll)+"px"}),$(c.main).css("top",_acg_xt_com_history_top+"px");
        else if(0>a)
            var e=$(c.main).height()-160;
        a=_acg_xt_com_history_top-10;
        _acg_xt_com_history_top=Math.abs(a)>e?-e:_acg_xt_com_history_top-10;liveScroll=120>=Math.abs(liveScroll)-d?120<=liveScroll?120:liveScroll+d:120;b?$(c.scrollMain).animate({top:Math.abs(liveScroll)+"px"},500):$(c.scrollMain).css({top:Math.abs(liveScroll)+"px"});$(c.main).css("top",_acg_xt_com_history_top+"px")}},slideIndex:0,slide:function(a,
                                                                                                                                                                                                                                                                                                                                                            b){null==b?(this.slideIndex++,this.slideIndex>a.length-1&&(this.slideIndex=0)):this.slideIndex=b;b=a[this.slideIndex];var c=0,d=0,e=0;$(".xt_index_main .acg_main_header .xt_slide .xt_slide_btn a").eq(this.slideIndex).addClass("live").siblings("a").removeClass("live");d=xt.preIndex(a.length);type=20==$(".xt_index_main .acg_main_header .xt_slide #xt_slide_data .s_"+d+"").length?2:1;$(".xt_index_main .acg_main_header .xt_slide #xt_slide_data p").remove();if(1==type){for(var f=0;4>f;f++)for(var d=70*
    f,g=0;5>g;g++)e=100*g,e='<div class="s_'+this.slideIndex+'" style="background-image: url(\''+b.path+"');left:"+e+"px;top:"+d+"px;background-position:-"+e+"px -"+d+'px;transform:rotateY(270deg);"></div>',xt.rotateYSlide(c,e),c++;e="<p class='t_"+this.slideIndex+"' style='left:-500px;top:0;'>"+b.title+"</p>";xt.titleSlide(e,1);setTimeout(function(){var b=xt.preIndex(a.length);$(".xt_index_main .acg_main_header .xt_slide #xt_slide_data .s_"+b+"").remove()},3E3)}else if(2==type){for(f=0;20>f;f++)c=this.getRotateDeg(f),
    $(".xt_index_main .acg_main_header .xt_slide #xt_slide_data .s_"+d+"").eq(f).css({top:c.top+"px",left:c.left+"px",transform:"scale(1.8,1.8) rotate3d"+c.rotate3d,transition:".8s",zIndex:10,opacity:0});this.removeSlide(d,800);e="<p class='t_"+this.slideIndex+"' style='left:500px;bottom:0;'>"+b.title+"</p>";xt.titleSlide(e,2);$(".xt_index_main .acg_main_header .xt_slide #xt_slide_data").css("backgroundImage","url('"+b.path+"')")}else $(".xt_index_main .acg_main_header .xt_slide #xt_slide_data").css("backgroundImage",
    "url('"+b.path+"')"),f=xt.preIndex(a.length),this.removeSlide(f,100),e="<p class='t_"+this.slideIndex+"' style='left:500px;bottom:0;'>"+b.title+"</p>",xt.titleSlide(e,2);$(".xt_index_main .acg_main_header .xt_slide #xt_slide_data").attr("href",b.link)},getRotateDeg:function(a){a++;var b=Math.floor(100*Math.random()),c=Math.floor(100*Math.random()),d=Math.floor(100*Math.random()),e=Math.floor(280*Math.random());a=0==a?1:a;var f=parseInt(a/5),g=a%5;return 2>=a?{top:-45,left:-(10+50*g),rotate3d:"("+
        b+","+c+","+d+","+e+"deg)"}:3<=a&&5>=a?{top:-45,left:200+50*g,rotate3d:"("+b+","+c+","+d+","+e+"deg)"}:6==a||11==a?{top:-(10+35*f),left:-(10+20*g),rotate3d:"("+b+","+c+","+d+","+e+"deg)"}:10==a&&15==a?{top:10+35*f,left:250+50*Math.random()+30*g,rotate3d:"("+b+","+c+","+d+","+e+"deg)"}:11<=a&&16>=a?{top:Math.floor(10*Math.random())+35*f,left:Math.floor(250*Math.random())+50*g,rotate3d:"("+b+","+c+","+d+","+e+"deg)"}:17<=a&&18>=a?{top:70+70*f,left:-(10+20*g),rotate3d:"("+b+","+c+","+d+","+e+"deg)"}:
    {top:100*Math.random()+70*f,left:250*Math.random()+20*g,rotate3d:"("+b+","+c+","+d+","+e+"deg)"}},titleSlide:function(a,b){setTimeout(function(){$(".xt_index_main .acg_main_header .xt_slide #xt_slide_data").append(a);setTimeout(function(){1==b?$(".xt_index_main .acg_main_header .xt_slide #xt_slide_data p").css({left:0,top:0,transition:".5s"}):$(".xt_index_main .acg_main_header .xt_slide #xt_slide_data p").css({left:0,bottom:0,transition:".5s"})},200)},10)},rotateYSlide:function(a,b){var c=0==a?50:
    50*a;$(".xt_index_main .acg_main_header .xt_slide #xt_slide_data").append(b);setTimeout(function(){$(".xt_index_main .acg_main_header .xt_slide #xt_slide_data .s_"+xt.slideIndex+"").eq(a).css({transform:"rotate(0deg)"})},c)},removeSlide:function(a,b){setTimeout(function(){$(".xt_index_main .acg_main_header .xt_slide #xt_slide_data .s_"+a+"").remove()},b)},preIndex:function(a){var b=this.slideIndex;return 0<b?b-1:a-1},nextIndex:function(a){return this.slideIndex>=a-1?0:1},loadSlideImage:function(a){for(var b=
    0;b<a.length;b++){
    var c=a[b].path,d=new Image;d.src=c;d.complete||(d.onload=function(){return!0})}}};
xt.events();xt.scrollEvent({warp:".acgxt_com_header .acgxt_com_header_center .xt_history_warp",main:".acgxt_com_header .acgxt_com_header_center .xt_history",scrollWarp:".xt_acg_scroll",scrollMain:".xt_acg_scroll .scroll_xt"});

var rs = {
    username: "RAINSAT"
}

var index = 0,
    pre = 0;
var slider = {
    change: function () {
        if (index === 0) {
            pre = 4;
        } else {
            pre = index - 1;
        }
        $(".slider_wrapper .left_slider .pic_slider").eq(index).css({
            "display": "block",
            "opacity": "0.36"
        });
        $(".slider_wrapper .left_slider .pic_slider").eq(index).animate({
            opacity: "1"
        }, 3000, function () {
            $(this).css("opacity", "1");
        });

        $("#shadow a").eq(index).addClass("current");
        $(".slider_wrapper .left_slider .pic_slider").eq(pre).css({
            "display": "none",
            "opacity": "1"
        });
        $("#shadow a").eq(pre).removeClass("current");
        index++;
        if (index === 5) {
            index = 0;
        }
    },
    run: function () {
        setInterval(this.change, 3000);
    }
}

$(function () {
    $("#firstpage").attr("href", "https://github.com/" + rs.username);
    $("#repo").attr("href", "https://github.com/" + rs.username + "?tab=repositories");
    $("#star").attr("href", "https://github.com/" + rs.username + "?tab=stars");
    $("#blog").attr("href", "./blog/blog.html");
})

slider.run();

window.onload = function(){
    if(window.parent.location!=window.location)
    {
        window.parent.location.href=window.location;
    }
}