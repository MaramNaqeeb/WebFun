function hide() {
  var x = document.querySelector("footer");
  x.remove();
}


var maramSpans = document.querySelectorAll(".maram");

function temperature(temp) {
  if (temp == "c") {
    convertFtoC(maramSpans);
  }
  else if (temp == "f") {
    convertCtoF(maramSpans);
  }
}


function convertCtoF(maramSpans) {
  for (var i = 0; i < maramSpans.length; i++) {
    maramSpans[i].innerText =  parseInt(maramSpans[i].innerText * 9/5 + 32);
  }
}

function convertFtoC(maramSpans) {
  for (var i = 0; i < maramSpans.length; i++) {
    maramSpans[i].innerText =  parseInt(maramSpans[i].innerText * 5/9 - 32);
  }

}

function myFunction() {
  alert("This page says/loading weather report...");
}