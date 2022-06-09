const startOfWar = 'February 24, 2022 04:24:00';

const timer = () => {
    const currentDate = new Date();
    const dayX = new Date(startOfWar);
    
    const totalSec = (currentDate - dayX) / 1000;
    
    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const min = Math.floor(totalSec / 60) % 60;
    const sec = Math.floor(totalSec) % 60;
    
    document.querySelector('#days').innerHTML = days;
    document.querySelector('#hours').innerHTML = formatTime(hours);
    document.querySelector('#min').innerHTML = formatTime(min);
    document.querySelector('#sec').innerHTML = formatTime(sec);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
timer();

setInterval(timer, 1000)