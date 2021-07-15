const { calculate } = require('./calculator.js');

test('should throw an error if called without a number', () => {
  expect(() => calculate('19 + cinnamon')).toThrow("String contains characters that are not parseable");
});

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
  expect( calculate('((25 + 15) / 10) * 4') ).toBe(16);
});

test('(17 - 5) + ((((-18) / (-3)) + 10) * 2) = 44', () => {
  expect( calculate('(17 - 5) + ((((-18) / (-3)) + 10) * 2)') ).toBe(44);
});

test('.05 * -( (20 * .1) + (10 - -5) ) / 2 = -0.425', () => {
  expect( calculate('.05 * -( (20 * .1) + (10 - -5) ) / 2') ).toBe(-0.425);
});

test('3 * (8 * 1 * 10) + 31 * 8 = 488', () => {
  expect( calculate('3 * (8 * 1 * 10) + 31 * 8') ).toBe(488);
});

test('6 * 4 * (8 + 28 * 2) * 7 = 10752', () => {
  expect( calculate('6 * 4 * (8 + 28 * 2) * 7') ).toBe(10752);
});

test('(5 * 9 * 5 + 37) + 29 * 2 = 320', () => {
  expect( calculate('(5 * 9 * 5 + 37) + 29 * 2') ).toBe(320);
});

test('6 * (2 * 10 * 8 + 11 - 13) = 948', () => {
  expect( calculate('6 * (2 * 10 * 8 + 11 - 13)') ).toBe(948);
});

test('6 * 6 + (9 + 23) * 1 + 21 = 89', () => {
  expect( calculate('6 * 6 + (9 + 23) * 1 + 21') ).toBe(89);
});

test('7 * 4 * 3 + (30 - 7) + 10 = 117', () => {
  expect( calculate('7 * 4 * 3 + (30 - 7) + 10') ).toBe(117);
});


test('17 + 10 + 34 - 2 * (4 * 4) = 29', () => {
  expect( calculate('17 + 10 + 34 - 2 * (4 * 4)') ).toBe(29);
});

test('10 * 8 * 1 * 4 - (37 + 7) = 276', () => {
  expect( calculate('10 * 8 * 1 * 4 - (37 + 7)') ).toBe(276);
});

test('8 + 2 * (2 * 6 * 10) - 33 = 215', () => {
  expect( calculate('8 + 2 * (2 * 6 * 10) - 33') ).toBe(215);
});

test('21 + 36 * (7 + 32 + 5) + 30 = 1635', () => {
  expect( calculate('21 + 36 * (7 + 32 + 5) + 30') ).toBe(1635);
});

test('29 - 20 - 3 + (5 * 3) * 5 = 81', () => {
  expect( calculate('29 - 20 - 3 + (5 * 3) * 5') ).toBe(81);
});

test('4 * 7 + (19 + 27) - 36 - 38 = 0', () => {
  expect( calculate('4 * 7 + (19 + 27) - 36 - 38') ).toBe(0);
});

test('28 + 40 + (23 + 24) + 4 * 3 = 127', () => {
  expect( calculate('28 + 40 + (23 + 24) + 4 * 3') ).toBe(127);
});

test('14 + (5 * 5 * 6 * 5) * 3 = 2264', () => {
  expect( calculate('14 + (5 * 5 * 6 * 5) * 3') ).toBe(2264);
});

test('24 + 6 + (33 * 1 * 5 - 9) = 186', () => {
  expect( calculate('24 + 6 + (33 * 1 * 5 - 9)') ).toBe(186);
});

test('5 * 7 * (3 + 26 * 10) + 29 = 9234', () => {
  expect( calculate('5 * 7 * (3 + 26 * 10) + 29') ).toBe(9234);
});

test('5 * 10 * 8 + 22 * (5 * 1) = 510', () => {
  expect( calculate('5 * 10 * 8 + 22 * (5 * 1)') ).toBe(510);
});

test('1 * (4 * 4) * 9 - 38 + 3 = 109', () => {
  expect( calculate('1 * (4 * 4) * 9 - 38 + 3') ).toBe(109);
});

test('1 * (10 + 12 * 6 + 1) - 23 = 60', () => {
  expect( calculate('1 * (10 + 12 * 6 + 1) - 23') ).toBe(60);
});

test('5 * (3 + 11 * 4 - 18) + 35 = 180', () => {
  expect( calculate('5 * (3 + 11 * 4 - 18) + 35') ).toBe(180);
});

test('(22 + 33 + 2) * 8 + 13 - 19 = 450', () => {
  expect( calculate('(22 + 33 + 2) * 8 + 13 - 19') ).toBe(450);
});

test('(10 * 9 - 17) + 23 * 2 * 4 = 257', () => {
  expect( calculate('(10 * 9 - 17) + 23 * 2 * 4') ).toBe(257);
});

test('6 + (22 * 4) * 2 - 34 - 40 = 108', () => {
  expect( calculate('6 + (22 * 4) * 2 - 34 - 40') ).toBe(108);
});

test('30 + (3 - 1 * 2 + 9) + 22 = 62', () => {
  expect( calculate('30 + (3 - 1 * 2 + 9) + 22') ).toBe(62);
});

test('1/5 * 20/21 = 4/21', () => {
  expect( calculate('1/5 * 20/21') ).toBe(4/21);
});

test('0.95 / 54.4 = 0.017463235294117647', () => {
  expect( calculate('0.95 / 54.4') ).toBe(0.017463235294117647);
});

test('0.95 * 54.4 = 51.68', () => {
  expect( calculate('0.95 * 54.4') ).toBe(51.68);
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