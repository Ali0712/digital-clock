
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const clock = () => {

    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let sec = now.getSeconds()

    let date = now.getDate()
    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;
    sec = sec < 10 ? '0' + sec : sec;

    document.getElementById('hr').innerHTML = hours;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('ampm').innerHTML = ampm;
    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML = month;
    document.getElementById('year').innerHTML = year;
    document.getElementById('day').innerHTML = day;

}
clock()

setInterval(clock, 1000);
