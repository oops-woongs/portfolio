$("ul#mainMenu>li").click(function () {
    $(this).children("ul").toggleClass("on").siblings().removeClass("on");

});

$("input#chkParent").click(function () {
    var chk = $(this).is(":checked");
    if (chk) $("input.chkChild").prop("checked", true);
    else $("input.chkChild").prop("checked", false);
});

$(function () {
    $(".datepicker").datepicker({
        dateFormat: "yy-mm-dd"
    });
});
$.datepicker.setDefaults({
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
});

$("#userDel").click(function (e) {
    if (!confirm("선택하신 회원정보를 삭제하시겠습니까?")) {
        e.preventDefault();
    }
    // 선택된 회원 없을 시 선택된 회원이 없다는 메시지 출력.
});

$("#sendSms").click(function () {
    $("#smsLayer").css({
        "display": "block"
    });
});

$("#cancelSmsBtn").click(function () {
    $("#smsLayer").css({
        "display": "none"
    });
});

$("#sendSmsBtn").click(function () {
    var text = $("#smsPopup>textarea").val();

    if (text == "") {
        alert("전송하실 내용을 입력해 주세요.");
    } else {
        alert("SMS 전송을 완료하였습니다.");
        $("#smsLayer").css({
            "display": "none"
        });
    }
});
