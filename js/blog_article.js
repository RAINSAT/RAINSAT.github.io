var xt_article={events:function(){$("#validatechange").click(function(){var a=URLS+"/data/validate?"+Math.random();$(this).attr("src",a)});$(".comment_send .comment_warp .tools a .emoji_list span").click(function(){var a=$(this).text();$(".comment_send .comment_warp .content textarea").val($(".comment_send .comment_warp .content textarea").val()+a);$(this).parents(".emoji_list").fadeOut(0);$(this).parents(".emoji_list").siblings("em").removeClass("click")});$(".comment_send .comment_warp .tools a.emoji em").click(function(){$(this).siblings(".emoji_list").fadeIn(0);
$(this).addClass("click")});$(document).click(function(a){"emojibtn1"!=a.target.id&&"emojibtn2"!=a.target.id&&"emoji_list"!=a.target.id&&($(".comment_send .comment_warp .tools a .emoji_list").fadeOut(0),$(".comment_send .comment_warp .tools a.emoji em").removeClass("click"))});$(".comment_send .comment_warp .content textarea").focus(function(){$(this).parents("div.comment_warp").addClass("focus")});$(".comment_send .comment_warp .content textarea").blur(function(){$(this).parents("div.comment_warp").removeClass("focus")});
$("#sendComment").click(function(){var a=$("#commentContent").val();if(0==a.length||""==a)$("#validatechange").attr("src",URLS+"/data/validate?"+Math.random()),xt.toast("\u6ca1\u6709\u5185\u5bb9\u8fd8\u600e\u4e48\u8bc4\u8bba?",2);else{var b=$(this).attr("data-type");if("article"!=b&&"info"!=b)$("#validatechange").attr("src",URLS+"/data/validate?"+Math.random()),xt.toast("\u8fd9\u4e2a\u5730\u65b9\u8bc4\u8bba\u6709\u8bef?",2);else{var c=$("#validate").val();if(4!=c.length)$("#validatechange").attr("src",
URLS+"/data/validate?"+Math.random()),xt.toast("\u55ef?\u9a8c\u8bc1\u7801\u662f4\u4f4d\u54e6!",2);else{var d=$(this);xt.toastOpen("\u6b63\u5728\u53d1\u5e03\u8bc4\u8bba...",3);xt.ajax("post","home/comment/send","json",{content:a,validate:c,pid:d.attr("data-pid"),rid:d.attr("data-rid"),name:$("#userName").val(),email:$("#userEmail").val(),url:$("#userUrl").val(),type:b},function(a){$("#validatechange").attr("src",URLS+"/data/validate?"+Math.random());0==a.state?($("#validate").val(""),xt.toast(a.message,
4),a='<li class="mani_li"><div class="comment"><a title="\u53bbTa\u7684\u7a7a\u95f4" target="_blank" href="'+a.space+'" class="avatar"><img class="userAvatar" src="'+a.avatar+'" alt="\u5934\u50cf"></a><div class="data"><h4 class="name"><a target="_blank" rel="nofollow" href="">'+a.name+'</a><a href="javascript:;" class="lv'+a.level+' level"></a></h4><p class="content">'+a.comment+'</p><div class="info"></div></div><div></div></div></li>',$(".tmpc").append(a),$("#commentContent").val("")):xt.toast(a.message,
2)},function(){$("#validatechange").attr("src",URLS+"/data/validate?"+Math.random());xt.toast("\u5f53\u524d\u4e0d\u80fd\u53d1\u5e03\u8bc4\u8bba\u54e6,\u8bf7\u7a0d\u540e\u518d\u8bd5",2)})}}}});$("#goodArticle").click(function(){if(1==$(this).attr("data-status"))xt.toast("\u4e43\u5df2\u8d5e\u8fc7\u5566!",3);else{var a=$(this).attr("data-id"),b=$(this);xt.ajax("post","Home/Data/good","json",{pid:a},function(a){0==a.state?(b.text(a.info),xt.toast(a.message,4)):xt.toast(a.message,2)},function(){xt.toast("\u70b9\u8d5e\u5931\u8d25...\u8bf7\u7a0d\u540e\u518d\u8bd5",
2)})}});$("#likeArticle").click(function(){var a=$(this).attr("data-status");if(2==a)xt.toast("\u4e43\u5df2\u6536\u85cf\u5566!",3);else if(0==a)xt.toast("\u4e43\u8fd8\u6ca1\u767b\u5f55\u5462...\u8fd8\u4e0d\u80fd\u6536\u85cf\u54e6!",3);else{var a=$(this).attr("data-id"),b=$(this);xt.ajax("post","Home/Data/like","json",{pid:a},function(a){0==a.state?(b.text(a.info),xt.confirm(a.message,function(){window.location.href=a.url},"\u518d\u77a7\u77a7","\u53bb\u7ba1\u7406")):xt.toast(a.message,2)},function(){xt.toast("\u6536\u85cf\u5931\u8d25...\u8bf7\u7a0d\u540e\u518d\u8bd5",
2)})}});$("#XtImagePreview #XtImagePreviewExit").click(function(){$("#XtImagePreview #XtImagePreviewExit,#XtImagePreview").fadeOut(100)});

        
        this.commentEvent()},commentEvent:function(){
            $("#comment_main .comment .data .info .replay").click(function(){$(this).parents(".comment").after($(".comment_send"));
$("#sendComment").attr("data-rid",$(this).attr("data-id"));$(".comment_send .cancelReplay").fadeIn(60)});$(".comment_send .cancelReplay").click(function(){$(this).fadeOut(0);$("#sendComment").attr("data-rid","0");$(".mainWarpData").append($(".comment_send"))});if(0!=$(".rand").length){var a=$(".rand").offset().top;$(window).scroll(function(){xt_article.scrollFixed(a)});xt_article.scrollFixed(a)}$(".userAvatar").error(function(){var a=new Image,c=DEFAULT_AVATAR;a.src=c;var d=$(this);a.complete?d.attr("src",
c):a.onload=function(){d.attr("src",c)}})},cancelComment:function(){$(".comment_send .cancelReplay").fadeOut(0);$("#sendComment").attr("data-rid","0");$(".mainWarpData").append($(".comment_send"))},infoNav:function(a,b,c){this.cancelComment();var d=this;xt.ajax("get","data/infoNav","html",{pageid:a,p:b},function(a){try{var b=JSON.parse(a);xt.toast(b.message,2)}catch(e){null==c&&xt.move($("#comment_main").offset().top),$("#comment_main").html(a),d.commentEvent()}},function(){xt.toast("\u83b7\u53d6\u8bc4\u8bba\u5931\u8d25\u4e86\u8bf6...",
2)})},articleNav:function(a,b,c){this.cancelComment();var d=this;xt.ajax("get","data/articleNav","html",{pid:a,p:b},function(a){try{var b=JSON.parse(a);xt.toast(b.message,2)}catch(e){null==c&&xt.move($("#comment_main").offset().top),$("#comment_main").html(a),d.commentEvent()}},function(){xt.toast("\u83b7\u53d6\u8bc4\u8bba\u5931\u8d25\u4e86\u8bf6...",2)})},XtPreviewRun:function(a,b){$("#XtImagePreview #previewImage").attr("src",b);b=a.width;a=a.height;1E3<b?(b=1E3,a=a/b*1E3):800<a&&(b=b/a*800,a=800);
$("#XtImagePreview #previewLoading").fadeOut(0);$("#XtImagePreview #XtImagePreviewExit").fadeIn(0);$("#XtImagePreview .XtImageWarp,#XtImagePreview #previewImage").fadeIn(100);$("#XtImagePreview .XtImageWarp,#XtImagePreview #previewImage").css({width:b+"px",height:a+"px",top:$(window).height()/3+50-a/2+"px"})},scrollFixed:function(a){$(window).scrollTop()+20>a?$(".xt_article .xt_article_right .rand").addClass("fixed"):$(".xt_article .xt_article_right .rand").removeClass("fixed")}};


$(function(){
    $(".article_content img").click(function(){
        var src = $(this).attr('src');
        var load = layer.load(2);
        var image = new Image();
        image.src = src;
        image.onerror = function(){
            layer.close(load);
            layer.alert("载入图片失败..",{icon:2});
        };
        image.onload = function(){
            layer.close(load);
            var maxwidth = $(window).width()-100;
            var maxheight = $(window).height()-100;
            var width = image.width;
            var height = image.height;

            if(width>height){
                if(image.width>maxwidth){
                    width = maxwidth;
                }
                height = image.height/image.width*width;
            }else{
                if(image.height>maxheight){
                    height = maxheight;
                }
                width = image.width/image.height*height;
            }
            var img = "<img src='" + src + "' style='display:block;width:"+width+"px;height:"+height+"px;' />";
            layer.open({
                type: 1,
                title: false, //不显示标题
                shadeClose: true,
                area:[(width)+"px",(height)+"px"],
                // area:[image.width,image.height],
                content: img,
                cancel: function () {

                }
            });
        };
    });
});