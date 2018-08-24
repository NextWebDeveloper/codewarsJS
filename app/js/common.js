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

// List filtering strings (bad code)
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

/* function filter_list(l) {
	const unsortedList = l;
	let sortedList =[];
	unsortedList.forEach (
		function delStrings (xi) {
			if (xi !== String(xi)) {
				sortedList.push(xi);
			}
		}
	)
	return sortedList;
}

const mixList = [1,2,'aasf','1','123',123];
console.log(filter_list(mixList)); */


// List filtering strings (good code)
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

/* function filter_list(l) {
	return l.filter(function(v) {return typeof v == 'number'})
}


const mixList = [11,-2,'aasf','1','123',123];
console.log(filter_list(mixList)); */

// Complete the solution so that it reverses the string value passed into it. 
// solution('world'); // returns 'dlrow'

/* function solution(str){
	return str.split('').reverse().join('');
}

console.log(solution('rimma')); */

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
// Tower block is represented as *
// Test.assertDeepEquals(towerBuilder(1), ["*"]);
// Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
// Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);


/* function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

console.log(towerBuilder(4)); */


// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// a being 1, b being 2, etc.
// As an example:
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

/* function alphabetPosition(text) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const alphabetBig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let textByLetter = text.replace(/[^A-Za-zА-Яа-яЁё]/g,'').split('');
	let newText = [];
	for (let letter of textByLetter) {
		let perem = ((alphabet.indexOf(letter)+1) == 0) ? (alphabetBig.indexOf(letter)+1) : (alphabet.indexOf(letter)+1);
		newText.push(perem);
	}
	console.log(newText);
	return text;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); */

// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

/* function findSum(n) {
	let result = 0;
  for (let i = 0; i <= n; i += 1) {
    if (i % 3 ===0 || i % 5 === 0) result += i
  }
  return result
}

console.log(findSum(100)); */

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.
// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
	let c = [];
	if (b.length > 0) {
		for(value of a) {
			if (b.includes(value) == false) c.push(value);
			}
		return c;
	} else return a;
}

console.log(array_diff([-10,2,-8,6,0,0,20,-12,-1,-8,-16,7],[7,-16,-10,6,0]));

