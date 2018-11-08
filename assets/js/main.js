// var person;
// 	if(confirm ("ты человек?")){
// 		person = prompt("Как тебя зовут?");
// 		alert("Привет " + person);
// 	}
// 	else alert ("ТЫ НЕ ЧЕЛОВЕК!");



// var arr = [1,"ckjdj",4,6,7,8];

// console.log(arr.map(function(e){
// 	return e.toString()
// }));





// function func(a, b,) {
// 	return a*b
// }
// console.log (func (5, 8))


// var func1 = function(){
// 	return function() {
// 		console.log ("iojhsdovi");
// 	};
// };
// func1()();

//самовызывающая анонимная функция============


// var prop1 = 1;
// ;(function() {
// 	var prop2 = 2;
// 	console.log ("самовызывающая анонимная функция")
// })();
// console.log (prop1)
// console.log (prop2)

// var prop = 1;

// var module = (function(p) {
	
// 	var p2 = 2;
// 	console.log(p);
// 	console.log(p2);

// })(prop);


// var funcArgs = function(){

// 	var i,
// 		sum = 0;

// 	for (i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	};

// 	return sum;
// };
// console.log(funcArgs(1,2,3,4,8));





// События

// (function() {

// 	var buttons = document.getElementsByTagName('button');

// 	var mes = function() {
// 		alert('HI');

// 	};

// 	for (var i = 0, len = buttons.length; i < len; i++){
// 		buttons[i].addEventListener('click', mes)
// 		buttons[i].addEventListener('focus', mes)
// 	};

// })();





// jQwery


$(document).ready(function(){

	$('.hamburger').on('click', function(e){
		$(this).toggleClass('is-active');
	})

	$("#my-menu").mmenu({
      
      });

})

