$("ul#mainMenu>li").mouseover(function () {
    $(this).children("ul").stop().fadeIn(1000);
});
$("ul#mainMenu>li").mouseout(function () {
    $(this).children("ul").stop().fadeOut(1000);
});

$("#regBtn").click(function () {
    var qnaTitle = $("#qnaTitle").val();
    var qnaBoard = $("#qnaBoard").val();
    var qnaPw = $("#qnaPw").val();

    if (qnaTitle == "" || qnaBoard == "") {
        alert("제목과 내용을 입력해 주세요.");
    } else if (qnaPw == "") {
        alert("비밀번호를 입력해 주세요.");
    } else {
        $("#frm").submit();
    }
});
