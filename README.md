### Creating enumeration-object utility

### Installation

`npm install github:ArundhatiApte/createEnum.js`  
or  
`yarn add github:ArundhatiApte/createEnum.js`

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
