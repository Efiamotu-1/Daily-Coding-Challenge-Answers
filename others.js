const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 2 && arr[i] < 8) {
    // console.log(arr[i])
  } else {
    console.log(arr[i])
  }
}

const word = 'microverse'
console.log(word.substring(5))

const num = [1,2,3,4,5,6,7,8,9,10]
console.log(num.length)
// let number = 13;
num.push(13)
if (num.includes(13)) {
  console.log('found it')
} else {
  console.log('not found')
}

let newNum = []

for (let i = 0; i < num.length; i++){
  if (num[i] > 3 && num[i] < 10) {
    newNum.push(num[i])
  }
}

console.log(newNum)

const twoArr = [[1,2,3,4], [4,5], [7,8,9,10]];
for (let i = twoArr.length - 1; i >= 0; i--) {
  // console.log(twoArr[i])
  for (let j = twoArr[i].length - 1; j >= 0; j--) {
    console.log(twoArr[i][j]);
  }
}

const bigArr = [];
let nums = 9

for (let index = 3; index > 0; index--) {
  let littleArr = []
  for (let index = 3; index > 0; index--) {
    littleArr.push(num)
    num--
  }
  bigArr.push(littleArr)
}

console.log(bigArr)

function names(name) {
 let arr = [];
  for (let i = 0; i < name.length; i++) {
    arr.push(name[i] * 2)
  }
  return arr
}

names([1,3,5,7,9])

console.log(result)

function reverse(arr) {
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--){
    if (arr[i] === 1) {
      output.push("one")
    }
     if (arr[i] === 2) {
      output.push("two")
    } 
    if (arr[i] === 3) {
      output.push("three")
    }
    if (arr[i] === 4) {
      output.push("four")
    }
  }
  return output
}

let result = reverse([1,2,1,2])

console.log(result)

//  Challenge 1
function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertToF(-30);

//  Challenge 2
function reverseString(str) {
  let arr = str.split("")
  let newArr = ""
  for (let i = arr.length -1; i >= 0; i--){
    newArr +=(arr[i])
  }
  str = newArr.toString()

  console.log(str)
 

  return str;
}

reverseString("hello");

//  Challenge 3
function factorialize(num) {
  let number = 1
  for (let i = num; i >= 1; i--) {
   number  *= i
  }
  console.log(number)
  return number;
}

factorialize(5);

//  Challenge 4
function truncateString(str, num) {
  if (str.length > num) {
    console.log(`${str.substring(0, num)}...`)
  }
  
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//  Challenge 5
function getIndexToIns(arr, num) {
let count = 0
for (let i = 0; i < arr.length; i++) {
  if (num > arr[i]) {
    count++
  }
}
console.log(count)
  return num;
}

getIndexToIns([40, 60], 61);

//  Challenge 6
function chunkArrayInGroups(arr, size) {
let newArray = []

  for(let i = 0; arr.length > 0 ; i++){
 newArray.push(arr.splice(0,size))
  }
  console.log(newArray)
  return arr;
}




chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);


function chunk(arr, size) {
  var results = [];
  while(arr.length){
    results.push(arr.splice(0,size));
  }
  console.log(results);
}

chunk([0, 1, 2, 3, 4, 5], 2);

//  Challenge 7
function sumAll(arr) {
  let sum = 0
  arr.sort();
  console.log(arr)
  for (let i = arr[0]; i <= arr[1]; i++) {
     sum = sum + i
  }
    console.log(sum)
  
  return sum;
}

sumAll([9, 5]);

//  Challenge 8
   function destroyer(arr) {
      
  let deleteArr = [] 
  // console.log(arguments[3]) 
    for (let i = 1; i < arguments.length; i++) {
      deleteArr.push(arguments[i])
      }      
// console.log(deleteArr)
  let newArray = []  

      for (let j = 0; j < arr.length; j++){
        // console.log(arr[j])
      if (deleteArr.includes(arr[j]) === false) {
        newArray.push(arr[j])
        // console.log(newArray)
      }
    }
        console.log(newArray)
      
  return newArray;
}
destroyer(["tree", "hamburger", 53], "tree", 53)

function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        // console.log(arr[i])
        delete arr[i];
      }
    }
  }
  let filtered = arr.filter(item => item !== null);
console.log(filtered)
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);

//  Challenge 9
function translatePigLatin(str) {
  let vowel = ["a", "e", "i", "o", "u"];
  let newStr = ""
  if (vowel.indexOf(str[0]) > -1) {
    newStr = str + "way";
    console.log(vowel.indexOf(str[0]));
    console.log(newStr)
} else {
  let firstMatch = str.match(/[aeiou]/g) || 0
  let vowel = str.indexOf(firstMatch[0])
   newStr = str.substring(vowel) + str.substring(0, vowel) + "ay"
}
  console.log(newStr)
  return newStr;
}

translatePigLatin("consonant");

//  Challenge 10
function pairElement(str) {
  console.log(str)
  let output = []
  for (let i = 0; i < str.length; i++){
    let arr = []
    if (str[i] === "A" ) {
    arr.push("A", "T")
    }
    if (str[i] === "T" ) {
    arr.push("T", "A")
    }
    if (str[i] === "C" ) {
    arr.push("C", "G")
    }
    if (str[i] === "G" ) {
    arr.push("G", "C")
    }
  console.log(arr)
  output.push(arr)

}
  console.log(output)

  return output;
}

pairElement("TTGAG");


    //  Challenge 11
function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}
 
    // Challenge 12
function sumPrimes(num) {
  
  let sum = 0
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i
    }
  }
  return sum;
}

function isPrime(singleNumber) {
 
  for (let counter = 2; counter < singleNumber; counter++) {
    if (singleNumber % counter === 0) {
      return false;
    }
  }
    return true;
}


 
let results = sumPrimes(10);
console.log(results)
console.log(isPrime(3));


      // HackerRank Starts Here

// Challenge 13 

let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
    console.log(ar)

function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i]
    }
    console.log( sum)

}

aVeryBigSum(ar)

    // Challenge 15
function staircase(n) {
    let output = ''
    
    for (let i = 1; i <= n; i++) {
        for (let s = n - 1; s >= i; s--) {
            output += ' '
        }
        for (let h = 1; h <= i; h++) {
            output +='#'
        }
         output += "\n"
    }
    console.log(output)
    // Write your code here

}

      // Challenge 16
    function birthdayCakeCandles(candles) {
    // Write your code here
    let max = 0;
    let candle = 0
    for (let i  = 0; i < candles.length; i++) {
        if (max < candles[i]) {
            max = candles[i]
         // console.log(max)   
        }
    }
    
    for (let i = 0; i < candles.length; i++){
    if (max == candles[i]) {
        candle++
        }
    } 
    
    return candle;
    
}

birthdayCakeCandles([3,3,2,1])

      // Challenge 17

      function breakingRecords([hl,...scores]) {
    // Write your code here
    let high = hl;
    let low = hl;
    let highScores = 0;
    let lowScores = 0
    // console.log(scores)
    for (let i = 0; i < scores.length; i++) {
        if  (scores[i] < low) {
            low = scores[i]
            lowScores++
        } 
          
          
        else if (scores[i] > high) {
            high = scores[i]
            // console.log(scores[i)
          
            highScores++
        }
    }
    console.log(highScores + "," + lowScores);
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])

function gradingStudents(grades) {
    // Write your code here
    for (i = 0; i < grades.length; i++) {
      if (grades[i] >= 38 && grades[i] % 5 >= 3) {
        console.log(grades[i])
      }
    }
console.log()

}
gradingStudents([73,67,38,33])


function compareTriplets(a, b) {
    // Write your code here\

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
return alice, bob 
}

compareTriplets([1,2,3], [3,2,1])

function diagonalDifference(arr) {
    // Write your code here 
    // console.log(arr)
  let diff = 0;
  
  for (let i = 0; i < arr.length; i++) {
    diff += arr[i][arr.length-1 -[i]]  
    diff -= arr[i][i]
  }
    console.log(diff)
    return diff
}
diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ])


function miniMaxSum(arr) {
    // Write your code here
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i]
  }
  for (let j = 1; j < arr.length; j++) {
   max += arr[j]
  }
    // console.log(min, max)
  return [min,max]

}

miniMaxSum([1,2,3,4,5])

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
return arr
}
gradingStudents([73,67,38,33])

// console.log(67 % 5)


function sockMerchant(n, ar) {
    // Write your code here
  let pair = 0
  let search = new Set();
  for (let i = 0; i < ar.length; i++) {
    if (search.has(ar[i])) {
      pair++
      console.log(search)
      search.delete(ar[i])
    }
    else {
      search.add(ar[i])
    }
  }
 
  return pair
}

sockMerchant(7, [1,2,1,2,1,3,2])



// Dami Solutions
// Sum all numbers in a range
function sumAll(arr) {
  
  if(arr[0]>arr[1]){
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp; 
    
  }
  let sum = arr[0];
  for(let i=arr[0]+1;i<=arr[arr.length-1];i++){
    sum+=i; 
  }
  
  
  
  return sum;
  
}

sumAll([1, 4]);

// Seek and destroy
function destroyer(arr) {
  const firstArray = arguments[0];
  let myArr = []
  let isPresent =false;
  for(let i=0;i<firstArray.length;i++){
    //console.log(firstArray[i])   
    for(let j=1;j<arguments.length;j++){
      if(firstArray[i]==arguments[j]){
        isPresent = true;
      }
      
    }   
    if(!isPresent){
        myArr.push(firstArray[i]);
      }
      isPresent = false;          
  }
  
  
  console.log(myArr)
  
  return myArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//  Pig Latin
function translatePigLatin(str) {
  let cons = ["b","c","d","f","g","h","l","j","k","m","n","p","q","r","s","t","v","w","x","y","z"]
  let  bool =true;
  let i =1;
  for (const con of cons){ console.log(con)
      if(str[0]==con){
          str = str.slice(1);
          str = str.concat("",con+"ay");
          bool =false;
          
          
          
      }if(str[i]==con&&i!=0){
          str = str.slice(1);
          str = str.concat("",con+"ay");
      }
      

  }

  if(bool){str = str.concat("","way");}
  
  console.log(str)
  return str;
}

translatePigLatin("consonant");

//  Staircase

function staircase(n) {
  let output ="";
  // Write your code 
  const printLn = (i)=>{
      
        let line="";
        for(let k=0;k<n-i;k++){
                  line+=" "
              }
          for(let j =1;j<=i;j++){
              
              line+="#"
          }
      return line;
  }
  for(let i = 1;i<=n;i++){
      if(i==n){
          output += `\n${printLn(i)}`;
      }else{
          if(i==1){
          output += `${printLn(i)}`;
          }else{
              output += `\n${printLn(i)}`;
          }
      }
  }
  console.log(output)
  return output;
}

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}