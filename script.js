document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("cu").style.display="none";
    // document.getElementById("ci").style.display="flex";
    document.getElementById("ch").style.display="none";





var cu = document.getElementById("top-cuis");
cu.addEventListener("click", function () {
 document.getElementById("ci").style.display="none";
 document.getElementById("cu").style.display="flex";
  document.getElementById("ch").style.display="none";

 console.log("hi")

});

var ch = document.getElementById("top-chains");
ch.addEventListener("click", function () {
 document.getElementById("ci").style.display="none",
 document.getElementById("cu").style.display="none";
 document.getElementById("ch").style.display="flex";


 console.log("hi")

});
// first element
var ci = document.getElementById("top-cities");
ci.addEventListener("click", function () {
 document.getElementById("cu").style.display="none";
 document.getElementById("ci").style.display="flex";
 document.getElementById("ch").style.display="none";
 console.log("hi")

});

});


// window.onscroll = function (){
//     var crntscrl = window.pageYOffset ;
//     // console.log(crntscrl)
//     if(crntscrl<70){
//         document.getElementsByClassName("js-banner")[0].style.display="inline"
//     }
// }
