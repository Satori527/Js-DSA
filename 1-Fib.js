optFibonacci(1);
optFibonacci(10);

function optFibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return console.log(fib);
}

function myFibonacci(n) {
  let n1 = 0,
    n2 = 1;

  let sum = 0;

  if (n === 1) {
    return console.log(0);
  } else if (n === 2) {
    return console.log(0, "\n", 1);
  } else {
    console.log(0, "\n", 1);
  }

  for (let i = 3; i <= n; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    console.log(n2, " ");
  }
  return;
}
