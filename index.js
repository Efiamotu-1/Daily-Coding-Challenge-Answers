            
            
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
  
   for (let i = 0; i <= 2 ; i++)  {
      if (a[i] > b[i]) {
    alice++
  }
     if (a[i] < b[i]) {
        bob++       
       }           
   }
   console.log([alice, bob])
return [alice, bob] 
}

compareTriplets([1, 2, 3],[3, 2, 1])


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
  console.log(diff)
  return Math.abs(diff);
//   The Math.abs() method returns the absolute value of a number. 
//   Therefore all negative value becomes positive.
}

diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]] )

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
            positive++
        }
        if (arr[i] < 0) {
            negative++
        }
        if (arr[i] === 0){
            zero++
        }
    }
    
    console.log((positive/arr.length).toFixed(6))
    console.log((negative/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
    

}
plusMinus([1,1,0,-1,-1])

// [4] Mini-Max Sum
/**Given five positive integers, find the minimum and maximum 
 * values that can be calculated by summing exactly four of the 
 * five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

 */

 function miniMaxSum(arr) {
    // Write your code here
  let arrClone1 = arr.slice() 
  let arrClone2 = arr.slice() 

  let arrMinor = arrClone1.sort(function(a, b){return a - b;})
  arrMinor.pop()

  let arrMajor = arrClone2.sort(function(a, b){return b - a;})
  arrMajor.pop()

  function getSum(a, b) {
    return a + b;
  }

  let result1 = arrMinor.reduce(getSum) 
  let result2 = arrMajor.reduce(getSum)    

  console.log(`${result1} ${result2}`)

}

miniMaxSum([1,2,3,4,5])

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
  let arr = []
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] % 5 >= 3) {
     arr.push(grades[i] + 5 - (grades[i] % 5))
    }
    else {
    arr.push(grades[i])
    }
  }
  console.log(arr)
return arr
}
gradingStudents([73,67,38,33])

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
let pair = 0
for(let i = 1; i < n; i++) {
for (let j = 0; j < ar.length; j++) {
 if (i === ar[j]) {
   pair++
 }
}
  
}
console.log(Math.round(pair/2))
console.log(pair)
}

sockMerchant(7, [1,2,1,2,1,3,2])