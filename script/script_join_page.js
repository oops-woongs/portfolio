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

$("#cfBtn").click(function () {
    var userPhone = $("#userPhone").val();
    if (userPhone != "") {
        alert("입력하신 휴대폰번호로 인증번호가 발송되었습니다.");
        document.frm.userPhoneConfirm.readOnly = false;
        $("#userPhoneConfirm").css({
            "backgroundColor": "#f6e7d0"
        });
    }
});

var verify = $("#vfBtn").val();
$("#vfBtn").click(function () {
    var userPhoneConfirm = $("#userPhoneConfirm").val();
    if (userPhoneConfirm != "") {
        verify = 2;
        alert("인증번호가 확인되었습니다.");
    }
});

$("#joinBtn").click(function () {
    var userID = $("#userID").val();
    var userPW = $("#userPW").val();
    var userRePW = $("#userRePW").val();
    var userName = $("#userName").val();
    var userBirth = $("#uDate").val();
    var userPhone = $("#userPhone").val();
    var userPhoneConfirm = $("#userPhoneConfirm").val();

    var chkID = /[^a-z|A-Z|0-9]$/g;
    var chkPW = /[^a-z|A-Z|0-9|!@#$%^&*]$/g;
    var chkName = /[^가-힣|a-z|A-Z]$/g;
    var chkPhone = /[^0-9]$/g;
    var chkBirth = /[^0-9]{1,31}$/g;

    if (userID == "") {
        $("#alertID").text('아이디를 입력해주세요.');
    } else if (chkID.test(userID) || userID.length < 6 || userID.length > 15) {
        $("#alertID").text('아이디는 6~15자의 영문과 숫자만 가능합니다.');
    } else if (chkID.test(userID) == false) {
        $("#alertID").text('');
    }

   if (userPW == "") {
        $("#alertPW").text('비밀번호를 입력해주세요.');
    } else if (chkPW.test(userPW) || userPW.length < 6 || userPW.length > 10) {
        $("#alertPW").text('비밀번호는 6~10자리의 영문과 숫자, 특수문자 !@#$%^&* 만 가능합니다.');
    } else if (chkPW.test(userPW) == false) {
        $("#alertPW").text('');
    }

    if (userRePW == "") {
        $("#alertRePW").text('비밀번호를 다시 한 번 입력해주세요.');
    } else if (userPW != userRePW) {
        $("#alertRePW").text('비밀번호가 일치하지 않습니다.');
    } else if (chkPW.test(userRePW) == false) {
        $("#alertRePW").text('');
    }

    if (userName == "") {
        $("#alertName").text('이름을 입력해주세요.');
    } else if (chkName.test(userName)) {
        $("#alertName").text('한글 또는 영문을 사용해주세요.');
    } else if (chkName.test(userName) == false) {
        $("#alertName").text('');
    }

    if (userBirth == "") {
        $("#alertBirth").text('생년월일을 입력해주세요.');
    } else if (chkBirth.test(userBirth)) {
        $("#alertBirth").text('생년월일을 올바르게 입력해주세요.');
    } else if (chkBirth.test(userBirth) == false) {
        $("#alertBirth").text('');
    }

    if (userPhone == "") {
        $("#alertPhone").text('휴대폰 번호를 입력해주세요.');
    } else if (userPhone != "") {
        $("#alertPhone").text('');
    }

    if (userPhoneConfirm == "") {
        $("#alertPhoneConfirm").text('SMS 인증번호를 입력해주세요.');
    } else if (userPhoneConfirm != "") {
        $("#alertPhoneConfirm").text('');
    }

    if (userID != "" && userPW != "" && userRePW != "" && userName != "" && userBirth != "" && verify == 2) {
        $("#frm").submit();
    } else if (userPhoneConfirm != "" && verify != 2) {
        alert("SMS 인증번호를 확인해주세요");
    }
});
