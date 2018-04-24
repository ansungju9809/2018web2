var img=$("#slide img");
var max=img.length-1;
var cnt=0;

function slide() {
    $(img[cnt]).animate({"left":"100%"},function () {
        $(this).css({"left":"-100%"});
    });
    cnt++;
    if(cnt>max) cnt=0;
    $(img[cnt]).animate({"left":"0"});
}
setInterval(slide,2000);

$(".notice").click(function () {
    $("#notice").css({"height":"130px"});
    $("#h_notice").css({"height":"0px"});
});
$(".h_notice").click(function () {
    $("#notice").css({"height":"0px"});
    $("#h_notice").css({"height":"130px"});
});

var pop=$("#popup img");
var pop_max=img.length-1;
var i=0;

function pop_slide() {
    $(pop[i]).animate({"left":"100%"},function () {
        $(this).css({"left":"-100%"});
    });
    i++;
    if(i>pop_max) i=0;
    $(pop[i]).animate({"left":"0"});
}
setInterval(pop_slide,3000);