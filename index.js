

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
   
};

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

function Display(){

    var wakeup_value = document.getElementById('waketime').value;
    var lunch_value = document.getElementById("lunchtime").value;
    var nap_value = document.getElementById("naptime").value;
    var night_value = document.getElementById("nighttime").value;
    var current_hours = new Date().getHours();
 console.log(current_hours)
    if( wakeup_value == current_hours){
      
        document.getElementById('img').style.backgroundImage="url(./GM.jpg)"
        document.getElementById('message2').innerHTML='Grab Some Healthy Breakfast!!!';
        document.getElementById("message").innerHTML="GOOD MORNING!! WAKE UP !!";
    
}

if(lunch_value == current_hours){
    document.getElementById("img").style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7WqWRAjpIi07WcqtjxRr7A3jh2NNxt02BQ&usqp=CAU)"
    document.getElementById('message2').innerHTML="Let's Have Some Lunch !!";
    document.getElementById('message').innerHTML="GOOD AFTERNOON!!";
}


if(nap_value == current_hours){
    document.getElementById("img").style.backgroundImage="url(https://i.pinimg.com/originals/bb/b5/48/bbb5484cf69654da7a64285deb13b75e.jpg)"
    document.getElementById('message2').innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    document.getElementById("message").innerHTML="GOOD EVENING!!";
}

if(night_value == current_hours){
    document.getElementById("img").style.backgroundImage="url(https://news.northwestern.edu/assets/Stories/2019/12/sleep640.jpg)"
    document.getElementById('message2').innerText="CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("message").innerText="GOOD NIGHT !!";
}


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
