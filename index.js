// const numbers = [1, 2, 3, 4, 5];

// for (let i = 4; i >= 0; i--) {
//   console.log(numbers[i]);
// }

const number = +prompt();
let isPrime = true;

for (let i = 2; i < number; i++) {

  if (number % i === 0) isPrime = false;
}

if (isPrime) {
  console.log("Prime Number");
}
else {
  console.log("Composite Number");
}