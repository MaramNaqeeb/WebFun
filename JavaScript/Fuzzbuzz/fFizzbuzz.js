var x = 'Fizz'
var y = 'Buzz'
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(x + y)
  } else if (i % 5 == 0) {
    console.log(y)
  } else if (i % 3 == 0) {
    console.log(x)
  } else console.log(i)
}
