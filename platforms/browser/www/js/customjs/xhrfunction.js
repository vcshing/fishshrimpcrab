function addRecord(mark, callback) {
    if (typeof(callback) != "function") {
        callback = function() {};
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/fishshrimpcrab/addrecord.php",
        data: {
            "deviceid": getDeviceID(),
            "mark": mark,
            "lang": lang
        },
        dataType: "json",
        success: function(response) {

        },
        error: function(response) {

        }
    });
}

function changeUserName(name, callback) {
    if (typeof(callback) != "function") {
        callback = function() {};
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/fishshrimpcrab/changeUserName.php",
        data: {
            "deviceid": getDeviceID(),
            "name": name
        },
        dataType: "json",
        success: function(response) {
          debugger;
          callback(response)
        },
        error: function(response) {
          myApp.alert("Fail")
        }
    });
}
