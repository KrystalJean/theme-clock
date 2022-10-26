const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//Function for Theme Changing Button
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
})

function setTime() {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    let hoursForClock = hours;
    //This if statement is for standard time, and can be commented out for military time. 
    if (hours > 12) {
        hoursForClock = hours - 12;
    }
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    const ampm = hours > 11 || hours < 24 ? 'PM' : 'AM';

    //Utility Function: maps one range of numbers to another range of numbers.
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minutes}:${seconds} ${ampm}`;
    dateEl.innerHTML = `~ ${days[day]}, ${months[month]} <span class="circle">${date}</span> ${year} ~`;

}

setTime();

setInterval(setTime, 1000);
