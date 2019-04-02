var randomLocation = Math.floor(Math.random() * 5);

var location1 = randomLocation;
var location2 = location1 + 1;
var location3 = location2 + 1;

var userGuess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  userGuess = prompt("Введите число от 0-6:");

  if (userGuess < 0 || userGuess > 6) {
    alert("Пожалуйста, введите корректное значение!");
  } else {
    guesses = guesses + 1;

    if (userGuess == location1 || userGuess == location2 || userGuess == location3) {
      hits = hits + 1;
      alert("Попал!");
      if (hits == 3) {
        isSunk = true;
        alert("Корабль потоплен!");
      }
    } else {
      alert("Промахнулся!");
    }
  }
}

var status = "Вы выполнили " + guesses + " попыток потопить корабль, " + "и Ваш успех составил " + (3/guesses) + " точности";
alert(status);
