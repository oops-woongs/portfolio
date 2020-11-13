$("ul#mainMenu>li").mouseover(function () {
    $(this).children("ul").stop().fadeIn(1000);
});
$("ul#mainMenu>li").mouseout(function () {
    $(this).children("ul").stop().fadeOut(1000);
});

$("#withdrawalBtn").click(function() {
    if (frm.chkWithdrawal.checked == false) {
        alert("안내 사항 확인에 동의해 주세요.");
    } else {
        $("#frm").submit();
    }
});
