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
    $("#notice").css({"height":"119px"});
    $("#h_notice").css({"height":"0px"});
});
$(".h_notice").click(function () {
    $("#notice").css({"height":"0px"});
    $("#h_notice").css({"height":"119px"});
});

var pop=$("#popup img");
var pop_max=pop.length-1;
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

var waist=$("#waist img");
var waist_max=waist.length-1;
var w=0;

function waist_slide() {
    $(waist[w]).animate({"left":"130px"},function () {
        $(this).css({"left":"-130px;"});
    })
    w++;
    if(w>waist_max) w=0;
    $(waist[w]).animate({"left":"0"})
}
setInterval(waist_slide,2000);