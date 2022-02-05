### Утилита для создания объектов-перечислений

### Установка

`npm install github:ArundhatiApte/createEnum-JS`  
или  
`yarn add github:ArundhatiApte/createEnum-JS`

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

Функция создает константный, неизменияемый объект-перечисление.
Значение каждого свойства равно целому числу, отличному от нуля.