$("ul#mainMenu>li").mouseover(function () {
    $(this).children("ul").stop().fadeIn(1000);
});
$("ul#mainMenu>li").mouseout(function () {
    $(this).children("ul").stop().fadeOut(1000);
});

$("#modifyBtn").click(function(){
    $("#modifyLayer").css({"display": "block"});
});
$("#delBtn").click(function(){
    $("#deleteLayer").css({"display": "block"});
});
