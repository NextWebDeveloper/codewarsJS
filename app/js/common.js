/* 
// Гласные буквы в строке

let x = getCount('aaaaaiou');
console.log(x);

function getCount(str) {
  var vowelsCount = 0;
  var vowels = 'aeiou';
  for (i=0; i<str.length; i++) {
    for (j=0; j<vowels.length; j++) {
      if (str[i] == vowels[j]) {
        vowelsCount += 1;
      }
    }
  }
  return vowelsCount;
} */


/* 
// Повторить строку n раз

let x = repeatStr(1, 'abc');
console.log(x); 

function repeatStr (n, s) {
  var repeatedStr = '';
  for (i=0; i<n; i++) {
    repeatedStr += s;
  }
  return repeatedStr;
} */

/* 
// Вернуть максимум и минимум из строки чисел
// highAndLow("1 22 -3 4 5"); // return "5 1"

function highAndLow(numbers){
	let convertedToNumbers = numbers.split(' ');
	let max = +convertedToNumbers[0];
	let min = +convertedToNumbers[0];
	for (i=0; i<convertedToNumbers.length; i++) {
		convertedToNumbers[i] = +convertedToNumbers[i];
		if (convertedToNumbers[i] > max) max = convertedToNumbers[i];
		if (convertedToNumbers[i] < min) min = convertedToNumbers[i];
	}
	const maxAndMin = max + ' ' + min;
	// return maxAndMin;
	console.log(maxAndMin);
} */


// Сумма всех чисел от 1 до числа в аргументе функции
// summation(8) -> 36  
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

/* console.log(summation(4));

const summation = function (num) {
	let sum = 0;
	for (i=1; i < (num+1); i++ ) {
		sum += i;
	}
	console.log(sum);
} */
 

/* var numbers = [1, 2, 2, 0, -5, 10];
var sum = 0;
numbers.forEach(
	function sumNumber( xi ) {
		sum += xi;
  }
);
console.log(sum); */


// Maximum and Minimum Values of a List

/* var min = function(list){
	const arr = list;
	let minimum = arr[0];
	arr.forEach (
		function findMin (currentValue) {
			minimum = (currentValue < minimum) ? currentValue : minimum;
		}
	)
	return minimum;
}

var max = function(list){
	const arr = list;
	let maximum = arr[0];
	arr.forEach (
		function findMax (xi) {
			maximum = xi > maximum ? xi : maximum;
		}
	)
	return maximum;
} */

// List filtering strings
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

