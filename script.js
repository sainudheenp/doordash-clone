document.addEventListener("DOMContentLoaded", function () {
  var ci = document.getElementById("top-cities");
  ci.addEventListener("click", function () {
   document.getElementById("cu").style.display="none";
   document.getElementById("ch").style.display="none";

});

var cu = document.getElementById("top-cuis");
ci.addEventListener("click", function () {
 document.getElementById("ci").style.display="none";
 document.getElementById("cu").style.display="none";

});

var ch = document.getElementById("top-chains");
ci.addEventListener("click", function () {
 document.getElementById("ci").style.display="none",
 document.getElementById("cu").style.display="none";

});

});
