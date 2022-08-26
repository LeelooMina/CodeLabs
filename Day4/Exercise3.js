let date = new Date();

function showTime(){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amPm = "AM";

    if(hours === 0){
        hours = 12;
    }

    if(hours > 12){
        hours = fixHours(hours);
        amPm = "PM";
    }

    //setTimeout()
}

//Change 24 hours to 12 - does not check if time is in 24 hour format

function fixHours(num){
    num = num - 12;
    return num;
}



console.log(fixHours(14));