let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function showtime() {
    const date = new Date();
    return date.getHours() + ":hrs" + date.getMinutes() + ":min" + date.getSeconds() + ":secs";
}
function makeAJAXCall(methodType,url,callback,async = true,data = null) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log("state change called ready state" + xhr.readyState + "at :" + showtime() + " status" + xhr.status);
    
    if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 201) {
            callback(xhr.responseText);
        }
        else if (xhr.status >= 400) {
            console.log("handle 400 client error" + xhr.status + "at:" + showtime());
        }
            xhr.open(methodType, url, async);
            if (data) {
                console.log(JSON.stringify(data));
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(JSON.stringify(data));
            }
            else xhr.send();
            console.log(methodType + " request sent to server at" + showtime());
    });   
}
const getURL="http://localhost:3000/employees/";
function getUserDetails(data) {
    console.log("get user data"+data);
}
makeAJAXCall("GET",getURL,getUserDetails);
console.log("made GET AJAX Call at "+showtime());
const deleteURL = "http://localhost:3000/employees/8";
function userDeleted(data){
    console.log(" user deleted "+data);
}
makeAJAXCall("DELETE",deleteURL,userDeleted,true);
console.log("made DELETE AJAX Call at "+showtime());
const postURL="http://localhost:3000/employees/";
const empData={"name":"kiran","salary":"50000"};
function userAdded(data) {
    console.log("user data:"+data);
}
makeAJAXCall("POST",postURL,userAdded,true,empData);
console.log("made POST AJAX Call at "+showtime());