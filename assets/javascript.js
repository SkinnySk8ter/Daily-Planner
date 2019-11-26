// make the text boxes interactive with the time of day!! (should change colors to reflect past present and future) set up an .addeventlistener????
//document.readyState(function(){

    var d = new Date();
    var n = d.getHours();
    
    function scheduletimer(){
        var i = 0
        for (i = 0; i => n; i++) {
            if (i === n) {
                document.getElementById("text1").style.backgroundColor= "red"
                //alert("alert something")

                
            }
            
            
        }
        
    }

    

//get info from local storage and post it into the hour

    function getinfo(){
        var newItem = localStorage.getItem("text1");
        console.log(newItem); 
        $("#text1").val(newItem);
        console.log($("#text1").val());


    }
    getinfo();
    // scheduletimer();
   
    


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

$("#save1").click(function myFunction()
                {
                    // var text = $("#text1").val();
                    console.log(this)
                    var text = document.getElementById("text1").value;

                    window.localStorage.setItem("text1",JSON.stringify(text));
                    console.log(text);
                   // window.localStorage.getItem("text1") 
                   // return this.value
                    // document.getElementById("text1").innerText = var newtask;
                   
                    
                }
)