$("ul#mainMenu>li").mouseover(function () {
    $(this).children("ul").stop().fadeIn(1000);
});
$("ul#mainMenu>li").mouseout(function () {
    $(this).children("ul").stop().fadeOut(1000);
});

setInterval(fnSlide, 5000);

function fnSlide() {
    $("#slideFrame>a:first").fadeOut(1000, function () {
        $("#slideFrame>a:first").insertAfter("#slideFrame>a:last");
    });
    $("#slideFrame>a:nth-child(2)").fadeIn(1000);
};

$("#newsletterBtn").click(function () {
    var newsName = $("#newsName").val();
    var newsEmail = $("#newsEmail").val();

    if (newsName == "" || newsEmail == "") {
        alert("구독자 분의 성함과 뉴스레터를 받아보실 이메일 주소를 입력해 주세요.");
    } else if (newsEmail.search(/(\S+)@(\S+)\.(\S+)/) == -1) {
        alert("이메일 형식이 올바르지 않습니다.");
    } else {
        $("#modalLayer").css({
            "display": "block"
        });
    }
});

$("#layerPopup>button").click(function () {
    $("#modalLayer").css({
        "display": "none"
    });
});
setInterval(fnCoSlide, 4000);

function fnCoSlide() {
    $("#coSlideFrame").animate({
        "margin-left": "-300px"
    }, 500, "swing", function () {
        $(this).css({
            "margin-left": "0"
        });
        $("#coSlideFrame>a:first").insertAfter("#coSlideFrame>a:last");
    });
}
