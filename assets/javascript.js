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

    function getinfo2(){
        var newItem = localStorage.getItem("text2");
        console.log(newItem);
        $("#text2").val(newItem)
        console.log($("#text1").val());

    }
    getinfo2();

    function getinfo3(){
        var newItem = localStorage.getItem("text3");
        console.log(newItem);
        $("#text3").val(newItem)
        console.log($("#text3").val());


    }
    getinfo3();

    function getinfo4(){

        var newItem = localStorage.getItem("text4");
        console.log(newItem);
        $("#text4").val(newItem)
        console.log($("#text4").val());
    }
    getinfo4();

    function getinfo5(){

        var newItem = localStorage.getItem("text5");
        console.log(newItem);
        $("#text5").val(newItem)
        console.log($("#text5").val());
    }
    getinfo5();

    function getinfo6(){

        var newItem = localStorage.getItem("text6");
        console.log(newItem);
        $("#text6").val(newItem)
        console.log($("#text6").val());
    }
    getinfo6();

    function getinfo7(){

        var newItem = localStorage.getItem("text7");
        console.log(newItem);
        $("#text7").val(newItem)
        console.log($("#text7").val());
    }
    getinfo7();

    

    function getinfo8(){

        var newItem = localStorage.getItem("text8");
        console.log(newItem);
        $("#text8").val(newItem)
        console.log($("#text8").val());
    }
    getinfo8();

    

    function getinfo9(){

        var newItem = localStorage.getItem("text9");
        console.log(newItem);
        $("#text9").val(newItem)
        console.log($("#text9").val());
    }
    getinfo9();

    

    // scheduletimer();
   
    



        

// }
// $("#save1").click(function(){
//     var clickthis = window.localStorage.setItem("text1", JSON.stringify(""))
//     clickthis()

// })

// $("#save1").click(function myFunction()
//                 {
//                     // var text = $("#text1").val();
//                     console.log(this)
//                     var text = document.getElementById("text1").value;

//                     window.localStorage.setItem("text1",JSON.stringify(text));
//                     console.log(text);
//                    // window.localStorage.getItem("text1") 
//                    // return this.value
//                     // document.getElementById("text1").innerText = var newtask;
                   
                    
//                 }
// )