

function clickme(){  
    var hours=document.getElementById("Hour");
    var minutes=document.getElementById("Min");
    var seconds=document.getElementById("Sec");
    var am=document.getElementById("setampm");
  

var Clock = new Date();
var hours = Clock.getHours();
var mins = Clock.getMinutes();
var secs = Clock.getSeconds();

var amPm = (hours < 12) ? "AM" : "PM";
// hours = (hours > 12) ? hours-12 :"0"+ hours;
// 

if(hours == 0){
    hours = 12;
    
}
if(hours > 12){
    hours = hours - 12;
    // hours = ""
    
    // amPm = "PM"
};
// if(hours < 12){
//     // hours = hours - 12;
//     // hours = ""
    
//     amPm = "AM"
// };
if(hours < 10){
    hours = "0" + hours
}
if(mins < 10){
    mins = "0" + mins
}
if(secs< 10){
    secs = "0" + secs
}

document.getElementById("Hours").innerHTML = hours ;
document.getElementById("Mins").innerHTML = mins ;
document.getElementById("Secs").innerHTML = secs ;
document.getElementById("setampm").innerHTML = amPm ; 
}

setInterval(clickme,1000)

function setDisplay(){

    var wakeup_value = document.getElementById('waketime').value;
    var lunch_value = document.getElementById("lunchtime").value;
    var nap_value = document.getElementById("naptime").value;
    var night_value = document.getElementById("nighttime").value;
    // var current_Value = document.getElementById("currentValue").value;
    var current_hours = new Date().getHours();
    // let Clock = new Date();
    // var HourS = Clock.getHours().getHours()

//     if(current_Value == current_hours){

     
//         document.getElementsByClassName('img').style.backgroundImage=" url(./default.jpg);"
//         document.getElementsByClassName('message2').innerHTML='Grab Some Healthy Breakfast!!!  vipin';
//         document.getElementsByClassName("message").innerHTML="GOOD MORNING!! WAKE UP !!";
    
// }
    if( wakeup_value == current_hours){

        document.getElementById('img').style.backgroundImage="url(./GM.jpg)";
      
        // document.getElementById('img').style.backgroundImage="url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-quotes-1581440427.jpg?crop=1.00xw:0.752xh;0,0.207xh&resize=980:*)"
        document.getElementById('message2').innerHTML='Grab Some Healthy Breakfast!!!  vipin';
        document.getElementById("message").innerHTML="GOOD MORNING!! WAKE UP !!";
    
}

if(lunch_value == current_hours){
    document.getElementById("img").style.backgroundImage="url(lunch.jpg)"
    document.getElementById('message2').innerHTML="Let's Have Some Lunch !!";
    document.getElementById('message').innerHTML="Good Afternoon!!";
}
// else{
//         document.getElementById("message2").innerText="lunch"
//     }

if(nap_value == current_hours){
    document.getElementById("img").style.backgroundImage="url(nap.jpg)"
    document.getElementById('message2').innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    document.getElementById("message").innerHTML="Good Night !!";
}

if(night_value == current_hours){
    document.getElementById("img").style.backgroundImage="url(night.jpg)"
    document.getElementById('message2').innerText="CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("message").innerText="Good Night !!";
}
// else{
//     document.getElementById("message2").innerText="Night"
// }

var wakeup_note_value = document.getElementById('waketime');
var lunch_note_value = document.getElementById("lunchtime");
var nap_note_value = document.getElementById("naptime");
var night_note_value = document.getElementById("nighttime");

var value = wakeup_note_value.options[wakeup_note_value.selectedIndex].text;
document.getElementById("wakeupnote").innerHTML="Wake Up Time : " + value;

var value = lunch_note_value.options[lunch_note_value.selectedIndex].text;
document.getElementById("lunchnote").innerHTML="Lunch Time : " + value;

var value = nap_note_value.options[nap_note_value.selectedIndex].text;
document.getElementById("napnote").innerHTML="Nap Time : " + value;

var value = night_note_value.options[night_note_value.selectedIndex].text;
document.getElementById("nightnote").innerHTML="Night Time : " + value;


}
