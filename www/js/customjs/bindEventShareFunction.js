var addbetAmt = 50;

/***set betAmt**/
$(".betAmt50").bind("click", function() {
    addbetAmt = 50;
    $(".betAmt50").addClass("button-fill");
    $(".betAmt100").removeClass("button-fill");
    $(".betAmt500").removeClass("button-fill");
    $(".betAmt1000").removeClass("button-fill");
})
$(".betAmt100").bind("click", function() {
    addbetAmt = 100;
    $(".betAmt100").addClass("button-fill");
    $(".betAmt50").removeClass("button-fill");
    $(".betAmt500").removeClass("button-fill");
    $(".betAmt1000").removeClass("button-fill");
})
$(".betAmt500").bind("click", function() {
    addbetAmt = 500;
    $(".betAmt500").addClass("button-fill");
    $(".betAmt50").removeClass("button-fill");
    $(".betAmt100").removeClass("button-fill");
    $(".betAmt1000").removeClass("button-fill");
})
$(".betAmt1000").bind("click", function() {
    addbetAmt = 1000;
    $(".betAmt1000").addClass("button-fill");
    $(".betAmt50").removeClass("button-fill");
    $(".betAmt100").removeClass("button-fill");
    $(".betAmt500").removeClass("button-fill");
})

$(".betA").bind("click", function() {
    renderBidButtomEvent(this, "A");
})
$(".betB").bind("click", function() {
    renderBidButtomEvent(this, "B");
})
$(".betC").bind("click", function() {
    renderBidButtomEvent(this, "C");
})
$(".betD").bind("click", function() {
    renderBidButtomEvent(this, "D");
})
$(".betE").bind("click", function() {
    renderBidButtomEvent(this, "E");
})
$(".betF").bind("click", function() {
    renderBidButtomEvent(this, "F");
})


$(".betSubmit").bind("click", function() {
    var betAAmt = isNaN(parseInt($(".betAAmt").html())) ? 0 : parseInt($(".betAAmt").html());
    var betBAmt = isNaN(parseInt($(".betBAmt").html())) ? 0 : parseInt($(".betBAmt").html());
    var betCAmt = isNaN(parseInt($(".betCAmt").html())) ? 0 : parseInt($(".betCAmt").html());
    var betDAmt = isNaN(parseInt($(".betDAmt").html())) ? 0 : parseInt($(".betDAmt").html());
    var betEAmt = isNaN(parseInt($(".betEAmt").html())) ? 0 : parseInt($(".betEAmt").html());
    var betFAmt = isNaN(parseInt($(".betFAmt").html())) ? 0 : parseInt($(".betFAmt").html());
    //debugger;
    var totalBetAmt = betAAmt + betBAmt + betCAmt + betDAmt + betEAmt + betFAmt

    if ( totalBetAmt> 0) {
        //alert(1);
        clearInterval(sliceResult);
        var sliceResultA = $(".result1").attr("data-imageSign");
        var sliceResultB = $(".result2").attr("data-imageSign");
        var sliceResultC = $(".result3").attr("data-imageSign");
        var winAmt = 0

        switch (sliceResultA) {
            case "A":  winAmt += betAAmt ;  break;
            case "B":  winAmt += betBAmt ;  break;
            case "C":  winAmt += betCAmt ;  break;
            case "D":  winAmt += betDAmt ;  break;
            case "E":  winAmt += betEAmt ;  break;
            case "F":  winAmt += betFAmt ;  break;
            default:
        }
        switch (sliceResultB) {
            case "A":  winAmt += betAAmt ;  break;
            case "B":  winAmt += betBAmt ;  break;
            case "C":  winAmt += betCAmt ;  break;
            case "D":  winAmt += betDAmt ;  break;
            case "E":  winAmt += betEAmt ;  break;
            case "F":  winAmt += betFAmt ;  break;
            default:
        }
        switch (sliceResultC) {
            case "A":  winAmt += betAAmt ;  break;
            case "B":  winAmt += betBAmt ;  break;
            case "C":  winAmt += betCAmt ;  break;
            case "D":  winAmt += betDAmt ;  break;
            case "E":  winAmt += betEAmt ;  break;
            case "F":  winAmt += betFAmt ;  break;
            default:
        }
        var netAmt=  (winAmt * 2) - totalBetAmt;

        if(netAmt > 0){
          winAlert(netAmt)
        }else if(netAmt < 0)
        {
          lostAlert(Math.abs(netAmt))
        }else{
          drewAlert(netAmt)
        }
          var currentBalance=isNaN(parseInt($(".onhandAmt").html())) ? 0 : parseInt($(".onhandAmt").html())
          var newBalance = currentBalance + totalBetAmt + netAmt
          setMoney(newBalance)
          clearGameResult()
          //sliceGameResult()
    }else{
      noMoneyAlert(netAmt)
    }
})
