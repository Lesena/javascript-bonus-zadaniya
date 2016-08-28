(function() {

//создаем переменніе задержка, счетчик
var delay=10,
    i=0;

//треннировочная функция старт таймер уменьшение
var startTimeri=function () {
// получаем значение истечения таймера
var endDate = new Date(0000,0,00,0,00);;
// получаем текущие значения

var expression = document.getElementById("chislo").value;
//проверка ввели ли воообще значение
function empty_form ()
	    {
	        var quantity = document.getElementById('quantity').value;
	        if(quantity == '')
	        {
	            alert('Вы забыли ввести текст.');
	            return false;
	        }   
	        return true;
	    }
var div = document.createElement("div");
	div.innerHTML = "<p>Вы ввели значение<\/p>";
	document.getElementById("zayavka").appendChild(div);
	
var seconds = (endDate-currentDate) / 1000; // определяем количество секунд до истечения таймера
if (seconds > 0) { // проверка - истекла ли дата обратного отсчета
var minutes = seconds/60; // определяем количество минут до истечения таймера
var hours = minutes/60; // определяем количество часов до истечения таймера
minutes = (hours - Math.floor(hours)) * 60; // подсчитываем кол-во оставшихся минут в текущем часе
hours = Math.floor(hours); // целое количество часов до истечения таймера
seconds = Math.floor((minutes - Math.floor(minutes)) * 60); // подсчитываем кол-во оставшихся секунд в текущей минут
minutes = Math.floor(minutes); // округляем до целого кол-во оставшихся минут в текущем часе

setTimePage(hours,minutes,seconds); // выставляем начальные значения таймера

//var my_timer = document.getElementById("displayScreen");
	//dateNow = Date.now(),
    //s = my_timer.value;
//будем уменьшать наш счетчик каждій раз
 
//после чего запускаем наш таймер
if(i<10){//s--
  
console.log('функция старт таймер'+(i-1)+'сработала');
//s = "0" + s;
 //document.getElementById("displayScreen").value = +s;
  setTimeout(startTimeri,delay);}
  i++;
};
//var timer=setTimeout(startTimeri, delay);
//clearTimeout(timer);
})();

