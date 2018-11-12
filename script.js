var button;

var httpRequest = new XMLHttpRequest();

window.onload = function (){
    button = document.getElementById("Search");
    button.onclick = function() {Click ();}
}

function Click(){
    
    var url = "https://info2180-lab6-lanai.c9users.io/request.php?q=";
    var text = document.getElementById("SubmitField").value;
    httpRequest.onreadystatechange = doSomething;
    
    httpRequest.open('GET', url + text);
    httpRequest.send();
}


function doSomething() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            alert(response);
        }
        else {
            alert('There was a problem with the request.');
        }
    }   
}