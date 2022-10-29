// square root
function sqrRt(num) {
  return num ** .5;
}

// cube root
function cubeRt(num) {
  return num ** (1/3);
}

// square
function sqr(num) {
  return num * num;
} 

// cube
function cube(num) {
  return num * num * num;
}

// find all prime numbers from 2 to n
let n = 10;
getPrime:
for (i = 2; i <= 10; i++) {
  for (j = 2; j < i; j++) {
    if (i % j === 0) continue getPrime;
  }
  console.log( i );
}