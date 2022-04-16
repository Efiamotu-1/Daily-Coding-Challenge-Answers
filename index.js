            
            
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