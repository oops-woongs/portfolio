window.onload = function () {
    var frm = document.frm;
    var date = new Date();
    var year = date.getFullYear();

    for (var i = 1970; i <= year; i++) {
        frm.uYear.add(new Option(i, i));
    }
    for (var i = 1; i <= 12; i++) {
        frm.uMonth.add(new Option(i, i));
    }
}

$("ul#mainMenu>li").mouseover(function () {
    $(this).children("ul").stop().fadeIn(1000);
});
$("ul#mainMenu>li").mouseout(function () {
    $(this).children("ul").stop().fadeOut(1000);
});

$("#changePhoneBtn").click(function() {
    $("#layer").css({"display": "block"});
});

$("#changeCfBtn").click(function () {
    var changePhone = $("#changePhone").val();
    if (changePhone != "") {
        alert("입력하신 휴대폰번호로 인증번호가 발송되었습니다.");
        document.frmPopup.changePhoneConfirm.readOnly = false;
        $("#changePhoneConfirm").css({
            "backgroundColor": "#f6e7d0"
        });
    }
});

$("#changeVfBtn").click(function () {
    var changePhoneConfirm = $("#changePhoneConfirm").val();
    if (changePhoneConfirm != "") {
        $("#layer").css({"display": "none"});
    }
});

$("#closePopup").click(function(){
    $("#layer").css({"display": "none"});
});

$("#modifyBtn").click(function() {
    var userPW = $("#userPW").val();
    var userRePW = $("#userRePW").val();

    var alertPW = $("#alertPW").text();
    var alertRePW = $("#alertRePW").text();

    var chkPW = /[^a-z|A-Z|0-9|!@#$%^&*]$/g;

    if (userPW != "" && (chkPW.test(userPW) || userPW.length < 6 || userPW.length > 10)) {
        $("#alertPW").text('비밀번호는 6~10자리의 영문과 숫자, 특수문자 !@#$%^&* 만 가능합니다.');
    } else if (chkPW.test(userPW) == false) {
        $("#alertPW").text('');
    }

    if ((userPW != "" && userRePW == "") || (userRePW != "" && userPW != userRePW)) {
        $("#alertRePW").text('비밀번호가 일치하지 않습니다.');
    } else if (chkPW.test(userRePW) == false) {
        $("#alertRePW").text('');
    }

    if ((userPW == "" && userRePW == "") || (userRePW.length >= 6 && (userPW == userRePW))) {
        $("#frm").submit();
    }
});
