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

  function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i=0; i<arr.length; i++) {
      if (arr[i]>cutoff){
        filteredArr.push(arr[i])
      }
    }
    return filteredArr;
  }
  var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
  console.log(result)

  function betterThanAverage(arr) {
    var sum = 0;
    for( i=0;i<=arr.length;i++)
    sum=sum+arr[i];
    var count = 0
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
