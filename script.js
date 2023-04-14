 //Задача №1
// Напиши функцію findSmallesNumber(numbers)
 //для пошуку найменшого числа в масиві,
 // при умові що числа унікальні (не повторюються).
 //
 //const findSmallesNumber = function(numbers) {
  //  console.log(arguments);
  //   let smallNumber = numbers[0]
     
  //  for (Number of numbers ) {
  //      if (number < smallNumber)
  //          smallNumber = number
 //    }
 //    return smallNumber
//}


 //console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
 //console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
 //console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// .............................
// Задача №2
// Функція checkStorage(available, ordered)
// перевіряє можливість оформлення замовлення
//  і повертає повідомлення про результат.
//  Вона оголошує два параметри,
// значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження,
// доповни код функції таким чином, що:

// Якщо в замовленні вказане число,
// яке перевищує кількість товарів на складі,
// у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".

//function checkStorage(available, ordered) {
//    let message;
    // Change code below this line
//    if (available > ordered) {
//        message = "Order is processed, our manager will contact you."
     
//    } else {
//        message = "Not enough goods in stock!"
//    }
//    console.log(message);
    // Change code above this line
//    return message;
//}

 //checkStorage(100, 50);
 //checkStorage(100, 130);
 //checkStorage(200, 20);
 //checkStorage(200, 150);
// .............................