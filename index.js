let a;
let date;
let time;  
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
function sayHello(){
    alert("Hello from Abir Shandilya")
}
setInterval(() => {
    a = new Date();
    let hour = a.getHours();
    if (hour > 12){
        oof = "PM";
        hour -= 12;
    }
    else if (hour<12){
        oof = "AM";
    }
    else{
        oof = ""
    }
    time = hour + ":" + a.getMinutes() + ":" + a.getSeconds() + " " +oof;
    date = a.toLocaleDateString(undefined, options);
    document.getElementById("time").innerHTML = time;
    document.getElementById('date').innerHTML = date;
}, 1000);
