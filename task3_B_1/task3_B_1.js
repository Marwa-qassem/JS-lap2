function uniCharCode(event) {
  var char = event.which || event.keyCode;
  document.getElementById("demo").innerHTML = "The Unicode CHARACTER code is: " + char;
}

function uniKeyCode(event) {
  var key = event.keyCode;
  document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key;
    if(key===16){
  document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key+"<br>"+ "this shift key";

    }
      if(key===18){
  document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key+"<br>"+ "this Alt key";

    }
        if(key===17){
  document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key+"<br>"+ "this ctrl key";

    }
}