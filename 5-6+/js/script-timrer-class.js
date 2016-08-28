(function () {
//2-позиция таймера
// 1 это сами кнопки
  var ms=0, ss=0, mm=0,hh=0, setBoxPosition=2;
  var timerID, timerElem,buttonGo, setBox, parentSetBox;
  
  function createElement(){
     var wrapper =document.createElement('div');
	 wrapper.classList.add('wrapper');
	 
	 var parentWrapper = document.querySelector('body');
	 parentWrapper.insertBefore(wrapper, parentWrapper.childre[0]);
     
	 var timerBox = document.createElement('div');
	 timerBox.classList.add('timerBox');
	 
	 var parentTimerBox=document.querySelector('.wrapper');
	 parentTimerBox.insertBefore(timerBox,parentTimerBox.children[0]);
	 
	 timerElem=document.createElement('h1');
	  timerElem.classList.add('timerElem');
	  
	  var parentTimerElem = document.querySelector('.timeBox');
	  parentTimerElem.insertBefore(timerElem,
	  parentTimerElem.children[1]);
	  
	  timerElem.innerHTML = '0' +hh+ ':' + '0' +
	  mm + ':' + '0' +ss + '.' + '<span>' + '0' +
	  ms + '</span>';
	  
	  var buttonsBox = document.createElement('div');
	  buttonsBox.classList.add('buttonsBox');
	  var parentButtonsBox = document.querySelector('.wrapper');
      parentButtonsBox.insertBefore( buttonsBox,
      	parentButtonsBox.children[1]);
		
	var buttonGo = document.createElement('button');
	  buttonGo.classList.add('goButton');
	var parentButtonGo =document.querySelector('.buttonsBox');
	parentButtonGo.insertBefore( buttonGo,
      	parentButtonGo.children[1]);
		buttonGo.innerHTML = 'Go';
		
    var buttonPause = document.createElement('button');
	  buttonPause.classList.add('pauseButton');
	var parentButtonPause =document.querySelector('.buttonsBox');
	parentButtonPause.insertBefore( buttonPause,
      	parentButtonPause.children[2]);
		buttonPause.innerHTML = 'Pause';
	  )
	  var buttonSet = document.createElement('button');
	   buttonSet.classList.add('setButton');
	   var parentButtonSet =document.querySelector('.buttonsBox');
	   parentButtonSet.insertBefore( buttonSet,
      	parentButtonSet.children[3]);
		buttonSet.innerHTML = 'Set';
		
		var buttonClear = document.createElement('button');
	  buttonClear.classList.add('clearButton');
	   var parentButtonClear =document.querySelector('.buttonsBox');
	   parentButtonClear.insertBefore( buttonClear,
      	parentButtonClear.children[3]);
		buttonClear.innerHTML = 'Clear';
		
		//Events
		buttonGo.addEventListener('click', goTimer);
		buttonPause.addEventListener('click', pauseTimer);
		buttonSet.addEventListener ('click', setTimer);
		buttonClear.addEventListener ('click', clearTimer);
		}
		
		createElement();
		//Определение времени
		function timerFunc(){
		ms++;
		if( ms===100){
		ms=0;
		ss=ss+1;
		ms++;
		    if(ss===60){
			   ms=0;ss=0;
			   hh=hh+1;ms++;
			       if(hh===24){
				      ms=0;ss=0;mm=0;hh=24; ms++;
					  }
                    }
             		}

//релизация єлементов до количества секунд					
		if(ss>9){
		    timerElem.innerHTML = '0' + hh + ':' + '0'+ mm + ':' +ss + '.' + '<span>' + ms +'</span>';
		}
		else{
		    timerElem.innerHTML = '0' + hh + ':' + '0'+ mm + ':' +'0' + '.' + '<span>' + ms +'</span>';
		}
		
		var msLead = document.querySelector('.timerElem span');
		if(ms<10){
		   msLead.innerHTML = "0" + ms;
		}
	}
	
	//Запуск таймера
	function goTimer(){
	    timerID = setInterval(timerFunc, 10);
		buttonGo.removeEventListener('click' , goTimer);
	}
	
	//Пауза таймера
	function pauseTimer(){
	   clearInterval(timerID);
	   buttonGo.addEventListener ('click' , goTimer);
	}
	//Очистка таймера
	function clearTimer(){
	buttonGo.addEventListener('click', goTimer);
	
	vlearInterval(timerID);
	ms=0;
	ss=0;
	mm=0;
	hh=0;
	timerElem.innerHTML = '0' + hh + ':' + '0' + mm + ':' + '0' + ss + '.' + '<span>' + '0'+ ms + '</span>';
	setBoxPosition = 2;
	
	var setBoxesLength=document.getElementByClassName('setBox').length;
	for(var i=0; i<setBoxesLength; i++){
	   parentSetBox.removeChild(document.querySelector('.setBox'));
	   
	}
	}
	function setTimer() {
	setBoxPosition = setBoxPosition + 1;
	setBox = document.createElement('div');
	setBox.classList.add('setBox');
	
	parentSetbox = document.querySelector('.wrapper');
	parentSetBox.insertBefore(setBox,parentSetBox.children[setBoxPosition]);
	
	
	if(ms<10)
	{
	  setBox.innerHTML = (setBoxPosition - 2) +') ' + hh + ':' + mm + ':' + ss + '.' + '<span>' + '0' + ms + '</span>';
	}
	else{
	setBox.innerHTML = (setBoxPosition - 2) +') ' + hh + ':' + mm + ':' + ss + '.' + '<span>'  + ms + '</span>';
	}
	}
	
	
	}) ();