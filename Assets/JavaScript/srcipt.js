var eightAmInput = document.getElementById("eightamactivity")
var nineAmInput = document.getElementById("nineamactivity")
var tenAmInput = document.getElementById("tenamactivity")
var elevenAmInput = document.getElementById("elevenamactivity")
var twelvePmInput = document.getElementById("twelvepmactivity")
var onePmInput = document.getElementById("onepmactivity")
var twoPmInput = document.getElementById("twopmactivity")
var threePmInput = document.getElementById("threepmactivity")
var fourPmInput = document.getElementById("fourpmactivity")
var fivePmInput = document.getElementById("fivepmactivity")
var sixPmInput = document.getElementById("sixpmactivity")

var lasteightamactivity = JSON.parse(localStorage.getItem("8am activity"));
var lastnineamactivity = JSON.parse(localStorage.getItem("9am activity"));
var lasttenamactivity = JSON.parse(localStorage.getItem("10am activity"));
var lastelevenamactivity = JSON.parse(localStorage.getItem("11am activity"));
var lasttwelvepmactivity = JSON.parse(localStorage.getItem("12pm activity"));
var lastonepmactivity = JSON.parse(localStorage.getItem("1pm activity"));
var lasttwopmactivity = JSON.parse(localStorage.getItem("2pm activity"));
var lastthreepmactivity = JSON.parse(localStorage.getItem("3pm activity"));
var lastfourpmactivity = JSON.parse(localStorage.getItem("4pm activity"));
var lastfivepmactivity = JSON.parse(localStorage.getItem("5pm activity"));
var lastsixpmactivity = JSON.parse(localStorage.getItem("6pm activity"));

eightAmInput.value = lasteightamactivity;
nineAmInput.value = lastnineamactivity;
tenAmInput.value = lasttenamactivity;
elevenAmInput.value = lastelevenamactivity;
twelvePmInput.value = lasttwelvepmactivity;
onePmInput.value = lastonepmactivity;
twoPmInput.value = lasttwopmactivity;
threePmInput.value = lastthreepmactivity;
fourPmInput.value = lastfourpmactivity;
fivePmInput.value = lastfivepmactivity;
sixPmInput.value = lastsixpmactivity;



var update = function() {
     var dateTimeNow = new Date();

     var date = document.getElementById("date");

     date.innerHTML = moment().format('LLLL');

     var currentTime = dateTimeNow.getHours();

     console.log(currentTime);

     if (currentTime > 8) {
          eightAmInput.style.backgroundColor = "lightgrey";
     }
     else if (currentTime < 8) {
          eightAmInput.style.backgroundColor = "lightgreen";
     }
     else {eightAmInput.style.backgroundColor = "lightcoral";
     }

     if (currentTime > 9) {
          nineAmInput.style.backgroundColor = "lightgrey";
     }
     else if (currentTime < 9) {
          nineAmInput.style.backgroundColor = "lightgreen";
     }
     else {nineAmInput.style.backgroundColor = "lightcoral";
     }

     if (currentTime > 10) {
          tenAmInput.style.backgroundColor = "lightgrey";
     }
     else if (currentTime < 10) {
          tenAmInput.style.backgroundColor = "lightgreen";
     }
     else {tenAmInput.style.backgroundColor = "lightcoral";
     }

     if (currentTime > 11) {
          elevenAmInput.style.backgroundColor = "lightgrey";
     }
     else if (currentTime < 11) {
          elevenAmInput.style.backgroundColor = "lightgreen";
     }
     else {elevenAmInput.style.backgroundColor = "lightcoral";
     }

     if (currentTime > 12) {
          twelvePmInput.style.backgroundColor = "lightgrey";
     }
     else if (currentTime < 12) {
          twelvePmInput.style.backgroundColor = "lightgreen";
     }
     else {twelvePmInput.style.backgroundColor = "lightcoral";
     }

     if (currentTime > 13) {
          onePmInput.style.backgroundColor = "lightgrey";
     }
     else if (currentTime < 13) {
          onePmInput.style.backgroundColor = "lightgreen";
     }
     else {onePmInput.style.backgroundColor = "lightcoral";
     }

     if (currentTime > 14) {
          twoPmInput.style.backgroundColor = "lightgrey";
     }
     else if (currentTime < 14) {
          twoPmInput.style.backgroundColor = "lightgreen";
     }
     else {twoPmInput.style.backgroundColor = "lightcoral";
     }

     if (currentTime > 15) {
          threePmInput.style.backgroundColor = "lightgrey";
     }
     else if (currentTime < 15) {
          threePmInput.style.backgroundColor = "lightgreen";
     }
     else {threePmInput.style.backgroundColor = "lightcoral";
     }

     if (currentTime > 16) {
          fourPmInput.style.backgroundColor = "lightgrey";
     }
     else if (currentTime < 16) {
          fourPmInput.style.backgroundColor = "lightgreen";
     }
     else {fourPmInput.style.backgroundColor = "lightcoral";
     }

     if (currentTime > 17) {
          fivePmInput.style.backgroundColor = "lightgrey";
     }
     else if (currentTime < 17) {
          fivePmInput.style.backgroundColor = "lightgreen";
     }
     else {fivePmInput.style.backgroundColor = "lightcoral";
     }

     if (currentTime > 18) {
          sixPmInput.style.backgroundColor = "lightgrey";
     }
     else if (currentTime < 18) {
          sixPmInput.style.backgroundColor = "lightgreen";
     }
     else {sixPmInput.style.backgroundColor = "lightcoral";
     }
}

setInterval(update, 1000);


$("button").on("click", function() {


var activities = {
     eightamactivity: eightAmInput.value.trim(),
     nineamactivity: nineAmInput.value.trim(),
     tenamactivity: tenAmInput.value.trim(),
     elevenamactivity: elevenAmInput.value.trim(),
     twelvepmactivity: twelvePmInput.value.trim(),
     onepmactivity: onePmInput.value.trim(),
     twopmactivity: twoPmInput.value.trim(),
     threepmactivity: threePmInput.value.trim(),
     fourpmactivity: fourPmInput.value.trim(),
     fivepmactivity: fivePmInput.value.trim(),
     sixpmactivity: sixPmInput.value.trim()
}

localStorage.setItem("8am activity", JSON.stringify(activities.eightamactivity)); 
localStorage.setItem("9am activity", JSON.stringify(activities.nineamactivity)); 
localStorage.setItem("10am activity", JSON.stringify(activities.tenamactivity)); 
localStorage.setItem("11am activity", JSON.stringify(activities.elevenamactivity)); 
localStorage.setItem("12pm activity", JSON.stringify(activities.twelvepmactivity)); 
localStorage.setItem("1pm activity", JSON.stringify(activities.onepmactivity)); 
localStorage.setItem("2pm activity", JSON.stringify(activities.twopmactivity)); 
localStorage.setItem("3pm activity", JSON.stringify(activities.threepmactivity));
localStorage.setItem("4pm activity", JSON.stringify(activities.fourpmactivity)); 
localStorage.setItem("5pm activity", JSON.stringify(activities.fivepmactivity));
localStorage.setItem("6pm activity", JSON.stringify(activities.sixpmactivity)); 



})
