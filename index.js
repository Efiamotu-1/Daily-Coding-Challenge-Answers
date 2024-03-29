//    [DIFFICULTY : EASY]

// [1] Compare the Triplets

/** Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Example

a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.

*/

function compareTriplets(a, b) {
  // Write your code here

  let alice = 0;
  let bob = 0;

  for (let i = 0; i <= 2; i++) {
    if (a[i] > b[i]) {
      alice++;
    }
    if (a[i] < b[i]) {
      bob++;
    }
  }
  console.log([alice, bob]);
  return [alice, bob];
}

compareTriplets([1, 2, 3], [3, 2, 1]);

// [2] Diagonal Difference

/**
 
 * Given a square matrix, calculate the absolute difference 
between the sums of its diagonals.

For example, the square matrix arr is shown below:

[[1, 2, 3], [4, 5, 6], [9, 8, 9]]   

*/

function diagonalDifference(arr) {
  // Write your code here
  let diff = 0;
  const length = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    diff += arr[i][i] - arr[i][length - i];
  }
  console.log(diff);
  return Math.abs(diff);
  //   The Math.abs() method returns the absolute value of a number.
  //   Therefore all negative value becomes positive.
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);

//  [3]  Plus Minus

/**Given an array of integers, calculate the ratios of its 
 * elements that are positive, negative, and zero. 
 * Print the decimal value of each fraction on a new line with 6
 *  places after the decimal.

Example

arr = [1,1,0,-1,-1]
 */

function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    }
    if (arr[i] < 0) {
      negative++;
    }
    if (arr[i] === 0) {
      zero++;
    }
  }

  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}
plusMinus([1, 1, 0, -1, -1]);

// [4] Mini-Max Sum
/**Given five positive integers, find the minimum and maximum 
 * values that can be calculated by summing exactly four of the 
 * five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

 */

function miniMaxSum(arr) {
  // Write your code here
  let arrClone1 = arr.slice();
  let arrClone2 = arr.slice();

  let arrMinor = arrClone1.sort(function (a, b) {
    return a - b;
  });
  arrMinor.pop();

  let arrMajor = arrClone2.sort(function (a, b) {
    return b - a;
  });
  arrMajor.pop();

  function getSum(a, b) {
    return a + b;
  }

  let result1 = arrMinor.reduce(getSum);
  let result2 = arrMajor.reduce(getSum);

  console.log(`${result1} ${result2}`);
}

miniMaxSum([1, 2, 3, 4, 5]);

//  [5] Grading Students

/**HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each 
student's grade according to these rules:

If the difference between the grade and the next multiple of 5
 is less than 3, round  up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
 */

function gradingStudents(grades) {
  // Write your code here
  let arr = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] % 5 >= 3) {
      arr.push(grades[i] + 5 - (grades[i] % 5));
    } else {
      arr.push(grades[i]);
    }
  }
  console.log(arr);
  return arr;
}
gradingStudents([73, 67, 38, 33]);

// [6] Sales By Match

/**There is a large pile of socks that must be paired by color. Given an
 *  array of integers representing the color of each sock, 
 * determine how many pairs of socks with matching colors there are. 
 * Example

n = 7
ar = [1,2,1,2,1,3,2]
*/

function sockMerchant(n, ar) {
  // Write your code here
  let pair = 0;
  let search = new Set();
  for (let i = 0; i < ar.length; i++) {
    if (search.has(ar[i])) {
      pair++;
      console.log(search);
      search.delete(ar[i]);
    } else {
      search.add(ar[i]);
    }
  }
  console.log(pair);
  return pair;
}

sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);

// [7] COUNTING VALLEYS

/**An avid hiker keeps meticulous records of their hikes. During the last hike that 
 * took exactly X steps, for every step it was noted if it was an uphill,U , or a downhill, D step.
 *  Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

* A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
* A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

*/
console.log("hello")

function countingValleys(steps, path) {
  // Write your code here
  let valleys = 0;
  let level = 0;

  for (const step of path) {
    let prev = level;
    level = step === "U" ? level + 1 : level - 1;
    if (prev == -1 && level == 0) {
      valleys++;
    }
  }
  console.log(valleys);
  return valleys;
}

countingValleys(8, "UDDDUDUU");

//  [8] TIME CONVERSION

/**Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
* s = '12:01:00PM'
  Return '12:01:00'

* s = '12:01:00AM'
  Return '00:01:00'
*/

function timeConversion(s) {
  // Write your code here
}

timeConversion("12:01:00PM");

//  [9] Find Digits

/** An integer d is a divisor of an integer n if the remainder of n / d = 0

.

Given an integer, for each digit that makes up the integer determine whether it is a divisor. 
Count the number of divisors occurring within the integer.

Example

n = 124

Check whether 1, 2 and 4 are divisors of 124. All 3 numbers divide evenly into 124 so return 3.  */

function findDigits(n) {
  // Write your code here
   let count = 0;
console.log(n)
  let num = "";
  num = n.toString();
console.log(num)
for (let i = 0; i < num.length; i++) {
  if (n % num[i] === 0 && n != 0) {
    count++
  }
}
console.log(count)
return count;

}

findDigits(1012)

// [10] EXTRA LONG FACTORIALS (MEDIUM)
/**The factorial of the integer n, written n!, is defined as: 
 * Calculate and print the factorial of a given integer.
 * For example, if n = 30, we calculate 30 X 29 X 28 X.... X 2 X 1 and get 265252859812191058636308480000000
 */

 function extraLongFactorials(n) {
  n = BigInt(n)
  let result = BigInt(1);
  
  for(let i = n; i >= 1; i--) {
    result *= i;
  }
  console.log(result)
  return result.toString();
}

extraLongFactorials(25)


// [11] MULTIPLICATION TABLE

/** Given an integer, n, print its first 10 multiples. Each multiple n X i 
 * should be printed on a new line in the form: n x i = result. */

 function main() {
  const n = parseInt(readLine().trim(), 10);

  let result = ""
  for(let i = 1; 10 >= i; i++ ) {
      result += `${n} x ${i} = ${n * i}\n` 
  }
  console.log(result)


}

main();

//  [12] CLASS vs. INSTANCE

/**Write a Person class with an instance variable, age, and a constructor that takes an integer, initial age, as a parameter. 
 The constructor must assign initial age to age after confirming the argument passed as initial age is not negative; if a negative argument is passed as initial age, 
 the constructor should set age to 0 and print Age is not valid, setting age to 0.. 
 In addition, you must write the following instance methods:

  yearPasses() should increase the age instance variable by 1
.
amIOld() should perform the following conditional actions:

If age < 13, print You are young..
If age >= 13 and age < 18, print You are a teenager..
Otherwise, print You are old.. */

function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  if (initialAge < 0) {
    console.log("Age is not valid, setting age to 0.");
    this.age = 0;
  } else {
    this.age = initialAge;
  }

  this.amIOld = function() {
    // Do some computations in here and print out the correct statement to the console
    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };

  this.yearPasses = function(){
    // Increment the age of the person in here
    this.age++;
  };
}

let person = new Person()

console.log(person.amIOld(2))

// LET'S REVIEW
/** Given a string, S, of N length that is indexed from 0 to N - 1, print its even-indexed and odd-indexed characters as 2

space-separated strings on a single line (see the Sample below for more detail).

Note: 0 is considered to be an even index. 
Example

s = adbecf
Print abc def
*/

function processData(input) {
  //Ie: "Hacker" and  "Rank" becomes:
  //"Hce akr" even values - odd values [H, a, c, k, e, r] equals [0, 1, 2, 3, 4, 5]
  //"Rn ak" even values - odd values [R, a, n, k] equals [0, 1, 2, 3]
  var myArray = input.split("\n"); //Splitting string between each newline into myArray values.
  //input is: "2\nHacker\nRank". myArray = [[2], ["Hacker"], ["Rank"]], [[0], [1], [2]]
  var evenChar = "";
  var oddChar = "";

  for (var i = 1; i < myArray.length; i++){ //Starting from 1 (Hacker) to length of array (3 values) &amp; incrementing by 1.
      for (var j = 0; j < myArray[i].length; j++) {//j is counting but array is already set to start at "Hacker" element.
          if (j%2 == 0) { //If j mod 2 equals 0, that means it's an even number.
              evenChar += myArray[i][j]; //Therefore, add value to evenChar string.
          } else {
              oddChar += myArray[i][j]; //If odd, add value to oddChar string.
          }
      }
      console.log(evenChar + " " + oddChar);
      evenChar = "";
      oddChar = "";
  }
}



//  ARRAY OF SUNSHINE
/** Given an array  A of N integers, print A's elements in reverse order as a single line of space-separated numbers.

Example
A = [1,2,3,4]
Print 4 3 2 1. Each integer is separated by one space.
*/

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  
  let result = ""
  for (let i = arr.length - 1; i >= 0 ; i--) {
      result += arr[i] + " "
  }
  console.log(result)
  return result
}