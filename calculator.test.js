const { calculate } = require('./calculator.js');

test('1+2 = 3', () => {
  expect( calculate('1 + 2') ).toBe(3);
});

test('4*5/2 = 10', () => {
  expect( calculate('4*5/2') ).toBe(10);
});

test('-5+-8--11*2 = 9', () => {
  expect( calculate('-5+-8--11*2') ).toBe(9);
});

test('-.32       /.5 = -0.64', () => {
  expect( calculate('-.32       /.5') ).toBe(-0.64);
});

test('(4-2)*3.5 = 7', () => {
  expect( calculate('(4-2)*3.5') ).toBe(7);
});

test('((25 + 15) / 10) * 4 = 16', () => {
  expect( calculate('(((25 + 15) / 10) * 4') ).toBe(16);
});

test('(17 - 5) + ((((-18) / (-3)) + 10) * 2) = 44', () => {
  expect( calculate('(17 - 5) + ((((-18) / (-3)) + 10) * 2)') ).toBe(44);
});

test('(.05 * (-((20 * .1) + (10 - (-5))))) / 2 = -0.425', () => {
  expect( calculate('(.05 * (-((20 * .1) + (10 - (-5))))) / 2') ).toBe(-0.425);
});

// test('', () => {
//   expect( calculate('') ).toBe();
// });

// test('', () => {
//   expect( calculate('') ).toBe();
// });

// test('', () => {
//   expect( calculate('') ).toBe();
// });

// test('', () => {
//   expect( calculate('') ).toBe();
// });

// test('', () => {
//   expect( calculate('') ).toBe();
// });

// test('', () => {
//   expect( calculate('') ).toBe();
// });


// test('', () => {
//   expect( calculate('') ).toBe();
// });

// test('', () => {
//   expect( calculate('') ).toBe();
// });
