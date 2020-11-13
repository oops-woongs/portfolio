$("ul#mainMenu>li").mouseover(function () {
    $(this).children("ul").stop().fadeIn(1000);
});
$("ul#mainMenu>li").mouseout(function () {
    $(this).children("ul").stop().fadeOut(1000);
});

function fnSelect() {
    var selectList = $("#selectProgram");
    var select = $("option:selected", selectList).val();

    alert(select);

    //셀렉트가 1~5 바뀜에 따라, css 블록하는거 정해. 그 addClass 하고.
}

//function fnOpt1() {
//    $("#explainFrame>div").addClass("goodsPage");
//    $("#goods1").css({"display": "block"});
//}
//function fnOpt2() {
//    $("#explainFrame>div").addClass("goodsPage");
//    $("#goods2").css({"display": "block"});
//}

//$("select#selectProgram").onchange(function() {
//
//});

// 수량 증가 시작
$("span#plus").click(function () {
    var goodsAmt = $("input#amount").val();
    goodsAmt = parseInt(goodsAmt);

    if (goodsAmt < 99) {
        goodsAmt++;
        document.getElementById("amount").value = goodsAmt;
    } else {
        alert("최대 예매 수량은 99매 입니다.");
    }

    var price = $("#price").text().trim();
    price = removeComma(price);

    var totalPrice;
    totalPrice = price * goodsAmt;
    totalPrice = sepComma(totalPrice.toString());
    document.getElementById("totalPrice").innerText = totalPrice;
});
// 수량 증가 끝

// 수량 감소 시작
$("span#minus").click(function () {
    var goodsAmt = $("input#amount").val();
    goodsAmt = parseInt(goodsAmt);

    if (goodsAmt > 1) {
        goodsAmt--;
        document.getElementById("amount").value = goodsAmt;
    } else {
        alert("최소 예매 수량은 1매 입니다.");
        return;
    }

    var price = $("#price").text().trim();
    price = removeComma(price);

    var totalPrice;
    totalPrice = price * goodsAmt;
    totalPrice = sepComma(totalPrice.toString());
    document.getElementById("totalPrice").innerText = totalPrice;
});
// 수량 감소 끝

nowGoodsAmt = 0;

function fnAmtChk() {
    var amount = $("#amount").val();
    nowGoodsAmt = parseInt(amount);
}

function fnCnt() {
    var amount = document.getElementById("amount").value;

    if (amount.trim() == "") {
        alert("상품수량을 입력해주세요.");
        document.getElementById("amount").value = nowGoodsAmt;
        document.getElementById("amount").focus();
    }

    amount = parseInt(amount);
    if (amount > 0) {

        var price = $("#price").text().trim();
        var totalPrice = 0;
        totalPrice = parseInt(removeComma(price)) * amount;
        totalPrice = sepComma(totalPrice.toString());
        document.getElementById("totalPrice").innerText = totalPrice;
    } else {
        alert("최소 수량은 1개입니다.");
        document.getElementById("amount").value = nowGoodsCnt;
        document.getElementById("amount").focus();
    }
}


function fnNumChk() {
    var amount = $("#amount").val();
    if (isNaN(amount)) {
        alert("숫자만 입력 가능합니다.");
        document.getElementById("amount").value = nowGoodsAmt;
        $("#amount").focus();
    }
}

var priceMoney = $("#price").text().trim();
$("#price").text(sepComma(priceMoney));

var totalPrice = $("#totalPrice").text().trim();
$("#totalPrice").text(sepComma(totalPrice));

function sepComma(inputMoney) {
    var pattern = /\B(?=(\d{3})+(?!\d))/g;
    var res = inputMoney.replace(pattern, ",");
    return res;
}

function removeComma(restore) {
    if (restore.search(',')) {
        arrComma = restore.split(',');
        for (i = 0;; i++) {
            if (!arrComma[i]) break;
            if (i == 0) {
                restore = arrComma[i];
            } else {
                restore += arrComma[i];
            }
        }
    }
    return restore;
}
