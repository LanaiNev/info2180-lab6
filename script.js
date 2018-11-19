var button;
var getAll;
var httpRequest = new XMLHttpRequest();

window.onload = function (){
    button = document.getElementById("Search");
    getAll = document.getElementById("MoreDef");
    
    button.onclick = function() {Click ();}
    getAll.onclick = function() {All ();}
}

function Click(){
    var url = "https://info2180-lab6-lanai.c9users.io/request.php?q=";
    
    var text = document.getElementById("SubmitField").value;
    httpRequest.onreadystatechange = doSomething();
    
    httpRequest.open('GET', url + text);
    httpRequest.send();
}

function All(){
    var url = "https://info2180-lab6-lanai.c9users.io/request.php?all=true";
    
    httpRequest.onreadystatechange = doSomething();
    
    httpRequest.open('GET', url);
    httpRequest.send();
}


function doSomething() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            var result = document.getElementById("result");
            result.innerHTML = response;
        }
        else {
            alert('There was a problem with the request.');
        }
    }   
}
