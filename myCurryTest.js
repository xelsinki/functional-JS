
/* 
    Test module of Curry
*/

// Функция складывает 3 числа
var add = function (a, b, c) {
    return a + b + c
  }

  // Вызывает каррирование для функции add
  var curriedAdd = curry(add)