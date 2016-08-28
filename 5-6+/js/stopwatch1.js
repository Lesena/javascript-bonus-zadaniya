
//document.getElementById ('chislo').oninput = function ()
//{document.getElementById ('do0').innerHTML = this.value}
// обработчик нажатия 
// цифровой кнопки
var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";
function NumPressed (Num) 
{
		if (FlagNewNum) 
		{
			Fcalc.ReadOut.value = Num;
			FlagNewNum = false;
		}	
		else 
		{
			if (Fcalc.ReadOut.value == "0")
				Fcalc.ReadOut.value = Num;
			else
				Fcalc.ReadOut.value += Num;
		}
}

(function() {
//считать значение из текстового поля и перевсти его в нормальное значение для отчета

var numb_1=document.getElementsByName('ReadOut')[0].value;
var numb_2 = document.getElementsByName('ReadOut1')[0].value;
var numb_3 = document.getElementsByName('ReadOut2')[0].value;
function times(numb, int_id) {
  var _ = numb;
  if (_ <= 0) {
    clearInterval(int_id);
  }
  return (_ < 10) ? '0' + _ : _;
}

function interval(int_id, numb) {
  var span = document.getElementById(int_id);
  int_id = setInterval(function() {
    span.innerHTML = times(numb--, int_id);
  }, 1000);

}

interval('times1', numb_1);
interval('times2', numb_2);
interval('times3', numb_3);


//дополнительная проверка таймеры JS не точны, и лучше почаще вызывать события и "смотреть" на часы компьютера
$('#display').text(numb_1); // показать начальное значение сразу

var BigBen = new Date(); // это часы
function tiktak() {
    if( (Date.now() - BigBen.getTime()) < 1000) return; // ещё не прошло 1 сек

    x -= 1; // например, будем уменьшать на 1 каждую секунду
    $('#display').text(x); // показать значение x
    BigBen.setTime( Date.now()); // обновить время на «сейчас»
}
window.setInterval( tiktak, 1000/100); // точность 1/100 секунды. Можно и точнее.
})();
// Очистка текущего результата
function ClearEntry () 
{
		Fcalc.ReadOut.value = "0";
		FlagNewNum = true;
}
	
// Полная очистка всех результатов
function Clear () 
{
		Currents = 0;
		PendingOp = "";
		ClearEntry();

}

