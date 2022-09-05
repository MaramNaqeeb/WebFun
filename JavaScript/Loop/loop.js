// function alwaysHungry(arr);
function alwaysHungry(arr){
  for (var i=0; i<arr.length;i++){
      var meal=0
    if(arr[i]=="food"){
    console.log("yammy");
    meal++
    }
  }
    if (meal===0)   console.log( "I'm hungry")
  }
    alwaysHungry([3.14, "food", "pie", true, "food"]);
  alwaysHungry([4, 1, 5, 7, 2]);
// the second challenge
  function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++) {
      if (arr[i]>cutoff){
        filteredArr.push(arr[i])
      }
    }
    return filteredArr;
  }
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]copy
// third challenge
function arrayAverage(arr) {
  let sum = 0;
  for (let i in arr) {
    sum = sum + arr[i];
  }
  
  //sum = arr.reduce((t,n) => t + n, 0);
  
  var av = sum / arr.length; 
  
  return av;
}
 function betterThanAverage(arr) {
  // get average
var av  = arrayAverage(arr);
  
  // get better than average
  var bta = [];
  for (var i in arr) {
    if (arr[i] > av) {
 bta.push(arr[i]);
      }
  }
  
  return bta;
}


function sort(arr) {
  return arr.sort();
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
// forth challenge
function reverse(arr) {
      
  var revArr = [];
  for (var i=arr.length-1; i >= 0; i--) {
    revArr.push(arr[i]); 
  }
  
  return revArr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// fifth challenge
function fibonacciArray(n) {

  var fibArr = [0, 1];
  for (var i=0; i<(n-2); i++)
fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2])

  return fibArr;
}
 
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

hello maram