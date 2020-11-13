# js-22

- Обработка ошибок с try...catch
  - Синтаксис
  - Какие ошибки ловит
    - ❌ время оценки (чтения) - ошибки парсинга (parsing errors)
    - ✅ время выполнения скрипта - ошибки выполнения (runtime errors)
    - [http://fecore.net.ua/books/m5ph3r-javascript/module-02/scope.html#hoisting](http://fecore.net.ua/books/m5ph3r-javascript/module-02/scope.html#hoisting)
  - Ловит только ошибки в синхронном коде
    - Как словить ошибку в асинхронном коде
  - Объект ошибки
    - name
    - message
    - stack
  - Блок catch без ошибки
  - Использование - грамотный парс JSON
- Parceljs и async/await. Ошибка regenerator runtime
- Синтаксис async/await

# !!! Важно:

чтобы работал Parcel нужно подсказать Babel, для каких браузеров нужно
транспилировать код. Создаём файл .browserslistrc и пишем в нём, для каких
последних версий (напр., 3-х) и каких браузеров парсить код. После этого Babel
затягивает полифилы для async-await и далее может их нормально приобразовать:

---

last 3 and_chr versions last 3 chrome versions last 3 opera versions last 3
ios_saf versions last 3 safari versions

---

Для Webpack нужно использовать core-js - стандартная биб-ка для полифилов +
создать файлик .babelrc с содержимым:

---

{ "presets": [ [ "@babel/preset-env", { "modules": false, "loose": true,
"useBuiltIns": "usage", "corejs": 3 } ] ], "plugins":
["@babel/plugin-proposal-class-properties"] }

---
