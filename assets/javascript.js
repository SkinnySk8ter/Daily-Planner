// add timeclock to top half into timeclock div space
var date = moment().format('MMMM Do YYYY, h:mm:ss a');

$("thedate").append(date); //need to get the clock to actually appear on the page



// make the text boxes interactive with the time of day!! (should change colors to reflect past present and future) set up an .addeventlistener????



// make the save button save the input text to local storage. 

$("#save1").click(function(){
window.localStorage.setItem("text1", JSON.stringify(""))

})