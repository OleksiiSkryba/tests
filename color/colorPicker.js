        // Farbe aus ColorPicker auslesen

var theInputH = document.getElementById("hue");
var theInputS = document.getElementById("saturation");
var theInputL = document.getElementById("lightness");
var theInputA = document.getElementById("alfa");

theInputH.addEventListener("input", function() {
var theColorH = theInputH.value;
document.getElementById("h_value").innerHTML = theColorH;
document.documentElement.style.setProperty('--h',theColorH);
}, false);

theInputS.addEventListener("input", function() {
    var theColorS = theInputS.value;
    document.getElementById("s_value").innerHTML = theColorS;
    document.documentElement.style.setProperty('--s',theColorS);
    }, false);

theInputL.addEventListener("input", function() {
    var theColorL = theInputL.value;
    document.getElementById("l_value").innerHTML = theColorL;
    document.documentElement.style.setProperty('--l',theColorL);
    }, false);
    
theInputA.addEventListener("input", function() {
    var theColorA = theInputA.value;
    document.getElementById("a_value").innerHTML = theColorA;
    document.documentElement.style.setProperty('--a',theColorA);
    }, false);


// Farcode (Hex) schreiben


// Farbvariable schreiben


// var theColorS = theInputS.value;
// var theColorL = theInputL.value;
// var theColorA = theInputA.value;