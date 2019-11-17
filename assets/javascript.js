// make the text boxes interactive with the time of day!! (should change colors to reflect past present and future) set up an .addeventlistener????

var d = new Date();
var n = d.getHours();

function scheduletimer(){
    var i = 0
    for (i = 0; i => n; i++) {
        if (i === n) {
            document.getElementById("text1").style.backgroundColor= "red"
            
        }
      
        
    }

}

// make the save button save the input text to local storage. 

// var savethis = document.getElementById("save1")
// function rememberthis(){
//     var saveclick = document.getElementById("save1").addEventListener(onclick){
        
//     }
// }
// $("#save1").click(function(){
//     var clickthis = window.localStorage.setItem("text1", JSON.stringify(""))
//     clickthis()

// })