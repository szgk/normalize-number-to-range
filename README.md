## About
normalize number to range

## Usage
normalize degree

```js
import normalizeNumberToRange from 'normalize-number-to-range'

normalizeNumberToRange(720, 0, 360) // 360
normalizeNumberToRange(-72200, 0, 360) // 160
```

normalize radian

```js
normalizeNumberToRange(7.283185307179586, 0, 2*Math.PI) // 2*Math.PI
normalizeNumberToRange(-7.283185307179586, 0, 2*Math.PI) // 2*Math.PI - 1
```

random number

```js
normalizeNumberToRange(-1, -4, -2)) // -3
normalizeNumberToRange(-3, -2, 4)) // 3
normalizeNumberToRange(-2780, -999, 999)) // -782
```
