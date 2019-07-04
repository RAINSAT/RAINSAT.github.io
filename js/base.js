var rs = {
    username: "RAINSAT"
}

$(function () {
    $("#firstpage").attr("href", "https://github.com/" + rs.username);
    $("#repo").attr("href", "https://github.com/" + rs.username + "?tab=repositories");
    $("#star").attr("href", "https://github.com/" + rs.username + "?tab=stars");
    $("#blog").attr("href", "./blog/index.html/");
})

window.onload = function () {

    $(".git_nav .git_nav_ul .git_nav_uli a").hover(
        function () {
            $(this).children("span").addClass("on");
        },
        function () {
            $(this).children("span").removeClass("on");
        }
    )

}