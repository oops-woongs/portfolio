$("#loginBtn").click(function () {
    var userID = $("#userID").val();
    var userPW = $("#userPW").val();
    var alertID = "";
    var alertPW = "";
    var idChkReg = /[^a-z|A-Z|0-9]/;
    var pwChkReg = /[^a-z|A-Z|0-9|!@#$%^&*]/;

    if (userID == "") {
        alertID = "아이디를 입력하세요.";
    } else if (idChkReg.test(userID)) {
        alertID = "아이디는 영문과 숫자만 입력 가능합니다."
    } else if (userPW == "") {
        alertPW = "비밀번호를 입력하세요.";
    } else if (pwChkReg.test(userPW)) {
        alertPW = "비밀번호는 영문과 숫자, 특수기호 !@#$%^&*만 입력 가능합니다."
    } else {
        $("#loginFrm").submit();
    }
    $("#alertID").text(alertID);
    $("#alertPW").text(alertPW);
});
// 로그인 페이지


$("#loginTab").click(function () {
    $("#loginTab").css({
        "background-color": "#ccc"
    });
    $("#joinTab").css({
        "background-color": "#f6e7d0"
    });
    $("#loginFrame").css({
        "display": "block"
    });
    $("#joinFrame").css({
        "display": "none"
    });
});

$("#joinTab").click(function () {
    $("#joinTab").css({
        "background-color": "#ccc"
    });
    $("#loginTab").css({
        "background-color": "#f6e7d0"
    });
    $("#joinFrame").css({
        "display": "block"
    });
    $("#loginFrame").css({
        "display": "none"
    });
});
// 로그인, 회원가입 탭 변경


$("#joinBtn").click(function () {
    var alertAgree = "";

    if ((joinFrm.termsAgree.checked == false) || (joinFrm.policyAgree.checked == false)) {
        alertAgree = "이용약관과 개인정보 취급방침에 모두 동의해주세요.";
        $("#alertAgree").text(alertAgree);
    } else {
        $("#joinFrm").submit();
    }
});
// 회원가입 페이지
