
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const sound = document.getElementById('sound');

let timer;
let remainingTime; 

function startTimer() {
  const hours = Number(hoursInput.value);
  const minutes = Number(minutesInput.value);
  const seconds = Number(secondsInput.value);
  remainingTime = hours * 3600 + minutes * 60 + seconds;

  if (remainingTime === 0) {
    alert('Please enter a non-zero duration!');
    return;
  }
 

  
  timer = setInterval(() => {
    remainingTime--;
   
    if (remainingTime <0) {
      clearInterval(timer);
      sound.play();
      alert('Time\'s up!');
      return;
    }
     displayTimeLeft();
   
    
  }, 1000)  
}

function resetTimer() {
  clearInterval(timer);
  remainingTime = 0;
  displayTimeLeft();
}

function stopTimer() {
  clearInterval(timer);
}

function displayTimeLeft() {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  hoursInput.value = hours.toString().padStart(2, '0');
  minutesInput.value = minutes.toString().padStart(2, '0');
  secondsInput.value = seconds.toString().padStart(2, '0');
  document.title=`${hoursInput.value}:${minutesInput.value}:${secondsInput.value}`
}


