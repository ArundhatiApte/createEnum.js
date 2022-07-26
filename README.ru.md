### Утилита для создания объектов-перечислений

### Установка

`npm install https://`

### Пример использования

```js
"use strict";

import createEnum from "createEnum";

const componentOfColor = createEnum("RED", "GREEN", "BLUE");

console.log(componentOfColor);
// { RED: 1, GREEN: 2, BLUE: 3}

try {
  componentOfColor["ALPHA"] = 4;
} catch(unmodifiable) {}
```

Функция создает константный, неизменяемый объект-перечисление.
Значение каждого свойства равно целому числу, отличному от нуля.
