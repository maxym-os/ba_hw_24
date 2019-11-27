// Запросить 2 числа и найти только наибольший общий делитель.

let num1 = parseInt(prompt('First number?'));
let num2 = parseInt(prompt('Second number?'));
let minNum = Math.min(num1, num2);

for (; minNum >= 1; minNum--) {
  if (num1 % minNum == 0 && num2 % minNum == 0) {
    alert(minNum);
    break;
  }
}