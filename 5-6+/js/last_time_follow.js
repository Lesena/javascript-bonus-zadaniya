var time1 = new Date();
var time2 = 0;
var time3 = 0;
var time4 = 0;
var time5 = 0;
var time6 = 0;
var pause = 0;

var txt = (navigator.language == 'ru' ? ['Начало','Время ','Заново','Пауза','Продолжить'] : ['Started','Your time ','Restart','Pause','Continue']);

function myClock()
{
time2 = new Date();
time3 = new Date();
var strings = '';
if (pause > 0)
{
	time5 = time2*1 + time2.getTimezoneOffset()*60000 - time1 - time4;
	time2 = new Date(time4);
}
else
{
	time2.setTime(time3 - time1 - time5 + time2.getTimezoneOffset()*60000);
	time4 = time2;
}
time6 = new Date(time3 - time1 + time2.getTimezoneOffset()*60000);
strings += (time1.getHours()<10?'0':'') + time1.toLocaleTimeString() + (time1.getMilliseconds()/1000).toFixed(3).slice(1) + '\u00A0 - ' + txt[0] + ' <br>';
strings += (time2.getHours()<10?'0':'') + time2.toLocaleTimeString() + (time2.getMilliseconds()/1000).toFixed(3).slice(1) + '\u00A0 - ' + txt[1] + '<br>';

document.getElementById('container').innerHTML = strings;
setTimeout("myClock()", 32);
}

function restartClock()
{
	time1.setTime(time3);
	time2 = 0;
	time5 = 0;
	pause = 0;
}

function pauseClock()
{
	pause = (pause > 0 ? 0 : 1);
}

document.forms.calc.button1.value = txt[2];
function playernumber()
{
	document.forms.calc.button2.value = txt[pause+3];
	setTimeout("playernumber()", 64);
}
