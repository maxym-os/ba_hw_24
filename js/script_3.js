// Запросить у пользователя число и вывести все делители этого числа.

let num = parseInt(prompt('Number?'));
let divider = 1;

for (; divider >= 1 && divider <= num; divider++) {
  if (num % divider == 0) {
    alert(divider);
  }
}