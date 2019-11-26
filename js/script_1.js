// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let firstNumber = parseInt(prompt('First number?'));
let lastNumber = parseInt(prompt('Last number?'));
let sum = 0;

while (firstNumber <= lastNumber) {
  sum += firstNumber;
  firstNumber++;
}
alert(sum);