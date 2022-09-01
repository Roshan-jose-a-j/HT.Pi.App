
var today = new Date();

const button=document.querySelector(".btn");
const displayTime=document.querySelector(".time-display");


function properTime(num){
    if(num<10){
        num=num.toString();
        num="0"+num;
    }else{
        num=num.toString();
    }
    return num;
}

var hoursInt;
var minutesInt;
var secondsInt;

hoursInt = parseInt(today.getHours());
minutesInt = parseInt(today.getMinutes());
secondsInt = parseInt(today.getSeconds());

//USING BUTTON

// button.addEventListener("click",()=>{
//     hoursInt = parseInt(today.getHours());
//     minutesInt = parseInt(today.getMinutes());
//     secondsInt = parseInt(today.getSeconds());

//     setInterval(()=>{
        
//             if(hoursInt>23){
//                 hour=0;
//             }
//             if(minutesInt<59 && secondsInt>59){
//                 minutesInt++;
//                 secondsInt=0;
//             }if(minutesInt>=59 && secondsInt>59){
//                 hoursInt++;
//                 minutesInt=0;
//                 secondsInt=0;
//             }
//             displayTime.innerHTML=properTime(hoursInt)+":"+properTime(minutesInt)+":"+properTime(secondsInt);
//             secondsInt++;
        
//     },1000)
// });



//WITHOUT USING BUTTON


setInterval(()=>{
        
    if(hoursInt>23){
        hour=0;
    }
    if(minutesInt<59 && secondsInt>59){
        minutesInt++;
        secondsInt=0;
    }if(minutesInt>=59 && secondsInt>59){
        hoursInt++;
        minutesInt=0;
        secondsInt=0;
    }
    displayTime.innerHTML=properTime(hoursInt)+":"+properTime(minutesInt)+":"+properTime(secondsInt);
    secondsInt++;

},1000)

 

