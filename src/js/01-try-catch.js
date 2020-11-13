// Обработка ошибок с try...catch
//  - Синтаксис
//  - Какие ошибки ловит
//    - ❌ ошибки парсинга (parsing errors)
//    - ✅ ошибки выполнения (runtime errors)
//  - Ловит только ошибки в синхронном коде
//    - Как словить ошибку в асинхронном коде
//  - Объект ошибки
//    - name
//    - message
//    - stack
          //   - error.name - имя ошибки,
          //   - error.message - сообщение об ошибке,
          //   - error.stack - выводит вид стэка вызова функций на момент,
          //     когда случилась ошибка(stack trace).
//  - Блок catch без объекта ошибки

try {
  console.log('Внутри try до myVar');

  myVar;

  console.log('Внутри try после myVar');
} catch (error) {
  console.log('Ошибка!');
}

console.log('После try...catch');
