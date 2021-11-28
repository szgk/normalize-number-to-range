import normalizeNumberToRange from '../normalize-number-to-range'

test('in range', () => {
  expect(normalizeNumberToRange(3, 2, 4)).toBe(3);
  expect(normalizeNumberToRange(2, 2, 4)).toBe(2);
  expect(normalizeNumberToRange(4, 2, 4)).toBe(4);
  // degree
  expect(normalizeNumberToRange(0, 0, 360)).toBe(0);
  expect(normalizeNumberToRange(360, 0, 360)).toBe(360);
  expect(normalizeNumberToRange(180, 0, 360)).toBe(180);
  // radian
  expect(normalizeNumberToRange(0, 0, 2*Math.PI)).toBe(0);
  expect(normalizeNumberToRange(2*Math.PI, 0, 2*Math.PI)).toBe(2*Math.PI);
  expect(normalizeNumberToRange(5.3, 0, 2*Math.PI)).toBe(5.3);
});

test('over range', () => {
  expect(normalizeNumberToRange(5, 2, 4)).toBe(3);
  expect(normalizeNumberToRange(8, 2, 4)).toBe(2);
  // degree
  expect(normalizeNumberToRange(361, 0, 360)).toBe(1);
  expect(normalizeNumberToRange(720, 0, 360)).toBe(360);
  expect(normalizeNumberToRange(72200, 0, 360)).toBe(200);
  expect(normalizeNumberToRange(-72200, 0, 360)).toBe(160);
  // radian
  expect(normalizeNumberToRange(7.283185307179586, 0, 2*Math.PI)).toBe(1);
  expect(normalizeNumberToRange(-7.283185307179586, 0, 2*Math.PI)).toBe(2*Math.PI-1);
  expect(normalizeNumberToRange(5*Math.PI, 0, 2*Math.PI)).toBe(Math.PI);
  expect(normalizeNumberToRange(-5*Math.PI, 0, 2*Math.PI)).toBe(Math.PI);
});

test('over range (max < 0)', () => {
  expect(normalizeNumberToRange(-1, -4, -2)).toBe(-3);
  expect(normalizeNumberToRange(8, -4, -2)).toBe(-4);
  expect(normalizeNumberToRange(9, -4, -2)).toBe(-3);
  expect(normalizeNumberToRange(0, -4, -2)).toBe(-2);
});

test('lower range', () => {
  expect(normalizeNumberToRange(1, 2, 4)).toBe(3);
  expect(normalizeNumberToRange(0, 2, 4)).toBe(2);
  expect(normalizeNumberToRange(-1, 2, 4)).toBe(3);
});

test('lower range (min < 0)', () => {
  expect(normalizeNumberToRange(-3, -2, 4)).toBe(3);
  expect(normalizeNumberToRange(-9, -2, 4)).toBe(3);
  expect(normalizeNumberToRange(-2780, -999, 999)).toBe(-782);
});

test('lower range (max < 0)', () => {
  expect(normalizeNumberToRange(-5, -4, -2)).toBe(-3);
  expect(normalizeNumberToRange(-10, -4, -2)).toBe(-2);
});
