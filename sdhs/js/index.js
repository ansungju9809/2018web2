$(document).ready(function () {
    var img=$("#slide img");
    var max=img.length-1;
    var cnt=0;

    $("#login").click(function () {
        $("#loginPage").fadeIn('fast');
        $("#mask").fadeIn('fast');
    })
    $("#login_exit").click(function () {
        $("#loginPage").fadeOut('fast');
        $("#mask").fadeOut('fast');
    })
    $("#sign_up").click(function () {
        $("#sign_upPage").fadeIn('fast');
        $("#mask").fadeIn('fast');
    })
    $("#signup_exit").click(function () {
        $("#sign_upPage").fadeOut('fast');
        $("#mask").fadeOut('fast');
    })

    function slide() {
        $(img[cnt]).animate({"left":"100%"},function () {
            $(this).css({"left":"-100%"});
            $("#slide_nav").css({"background":"blue"},function () {
                $(this).css({"background":"white"});
            });
        });
        cnt++;
        if(cnt>max) cnt=0;
        $(img[cnt]).animate({"left":"0"});
    }
    setInterval(slide,3000);

    $(".notice").click(function () {
        $("#notice").css({"height":"119px"});
        $("#h_notice").css({"height":"0px"});
    });
    $(".h_notice").click(function () {
        $("#notice").css({"height":"0px"});
        $("#h_notice").css({"height":"119px"});
    });
    $("#popup img").click(function () {

        var width = $(window).width();
        var height = $(window).height();

        $("#mask").css({
            width:width,
            height:height
        })
        $(".modalMask").fadeTo("slow", 0.3);
        $(".popup").fadeIn();
        $(".popup").css("top", $(document).height()/2-580);
        $(".popup").css("left",$(document).width()/2-315);
    })
    $(window).resize(function(){
        var height = $(window).height()/2-580;
        var width = $(window).width()/2-315;

        if(height<0)
            height=0;

        if(width<0)
            width=0;

        $(".popup").css("top",height);
        $(".popup").css("left",width);
    });
    $("#mask").click(function () {
        $(this).css({
            width:0,
            height:0
        })
        $(".popup").fadeOut(500);
    })
})