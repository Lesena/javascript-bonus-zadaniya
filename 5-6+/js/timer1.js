var timerTime = 0,          // Устанавливаем временной интервал.
    timerInterval = 0;      // Интервал для нашего цикла.
    var timerClock = document.getElementById(".clock").value;
	var timerInput = document.getElementById("#chislo").value;

// When entering new time, the app will trim it and turn it into seconds (*60).
(function () {
//Метод trim() возвращает строку с вырезанными пробельными символами с её концов. Метод trim() не изменяет значение самой строки.
    var newTime = timerInput.value().trim();

    if(newTime && newTime>=0) {
        timerTime = newTime * 60;
        timerClock.text(returnFormattedToSeconds(timerTime));
    }
    
}) ();
divElem=document.getElementById("#start");
divElem.attachEvent("onclick", function() { if(timerTime>0) {
        startTimer();
    } });

divElemreset=document.getElementById("#reset");
divElemreset.attachEvent("onclick", function() {  resetTimer();
    } });
divElemreset=document.getElementById("#pause");
divElemreset.attachEvent("onclick", function() {  pauseTimer();
    } });


function startTimer() {

    // Запретить несколько интервалов происходит одновременно.
    clearInterval(timerInterval);

    // Every 1000ms (1 second) decrease the set time until it reaches 0.
    timerInterval = setInterval(function () {
        timerTime--;
         timerClock.text(returnFormattedToSeconds(timerTime));
        if (timerTime <= 0) {
		    timerClock.text(returnFormattedToSeconds(0));
            pauseTimer();
        }
    }, 1000);

}


function pauseTimer(){
    clearInterval(timerInterval);

    timerInput.prop('disabled', false);
    timerClock.addClass('inactive');
}

// Reset the clock with the previous valid time.
// Useful for setting the same alarm over and over.
function resetTimer(){
    pauseTimer();
     if(Number(localStorage.lastTimerTime)){
        timerTime = Number(localStorage.lastTimerTime) * 60;
        timerClock.text(returnFormattedToSeconds(timerTime));
    }
}
function returnFormattedToSeconds(time){
    var minutes = Math.floor(time / 60),
        seconds = Math.round(time - minutes * 60);

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}
