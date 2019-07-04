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
    $("#blog").attr("href", "./blog/blog.html/");
})

slider.run();

window.onload = function () {
    $(".slider_wrapper .left_slider .pic_slider").eq(4).show()
    $(".git_nav .git_nav_ul .git_nav_uli a").hover(
        function () {
            $(this).children("span").addClass("on");
        },
        function () {
            $(this).children("span").removeClass("on");
        }
    )

}