//odd values 1 to 20
for (var i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i)
  }
}
//decreasing multiple of 3
for (var i = 100; i >= 0; i--) {
  if (i % 3 == 0) {
    console.log(i)
  }
  // from 4 to -3.5
  for (i = 4; i >= -3.5; i--) {
    console.log(i)
  }
}
//sigma
sum = 0
for (i = 1; i <= 100; i++) {
  sum = sum + i
  console.log(sum)
}
// factorail
factorial = 1
for (i = 1; i <= 12; i++) {
  factorial = factorial * i
  console.log(factorial)
}
