let totalReduxTime = Array.from(document.querySelectorAll('[data-time]'))
    .filter(item => item.textContent.includes('Redux'))
    .map(item => item.dataset.time)
    .map(timecode => {
        let parts = timecode.split(':').map(part => parseInt(part));
        let minutes = parts[0];
        let seconds = parts[1];
        return minutes * 60 + seconds;
    })
    .reduce((runningTime, current) => runningTime + current, 0)
    
    console.log(secondsToString(totalReduxTime));

function secondsToString(totalSeconds) {
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds - minutes * 60;
    return `${minutes} minutes and ${seconds} seconds`;
}

console.log(totalReduxTime);