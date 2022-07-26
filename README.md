## Creating enumeration-object utility

### Installation

`npm install https://github.com/ArundhatiApte/create-enum-js/releases/download/v0.1.0/createEnum.package.tar.gz`

### Example of usage

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

The function creates constant, unmodifiable enumeration-object.
Value of every property is integer different from zero.
