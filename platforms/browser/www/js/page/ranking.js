myApp.onPageInit('ranking', function(page) {
    addRecord(onhandAmt)

    $(".changeUserName").bind("click", function() {
        myApp.prompt('你叫咩名?', function(value) {
            if (value != "") {

                changeUserName(value,function(e){
                    mainView.router.refreshPage();
                    myApp.alert("改左名啦");
                })
            }
        });
    });









})
