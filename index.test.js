const testingFunctions = require("./index");

test('length of "hello" is equal to 5', () => {
  expect(testingFunctions.stringLength('Hello')).toStrictEqual(5);
});

test('empty string throws error', () => {
  expect(() => testingFunctions.stringLength('')).toThrow();
});

test('reverse string of "roma" is equal to "amor"', () => {
  expect(testingFunctions.reverseString('roma')).toStrictEqual('amor');
});



describe('Calculator.sum', () => {
  test('adds "5" + 6 throw error', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(() => calculator.sum('5', 6)).toThrow();
  });

  test('adds 5 + "6" throw error', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(() => calculator.sum(5, '6')).toThrow();
  });

  test('adds 5 + 6 is equal to 11', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(calculator.sum(5, 6)).toStrictEqual(11);
  });
});

describe('Calculator.substract', () => {
  test('substract "8" - 4 throw error', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(() => calculator.substract('8', 4)).toThrow();
  });

  test('substract 8 - "4" throw error', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(() => calculator.substract(8, '4')).toThrow();
  });

  test('substract 8 - 4 is equal to 4', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(calculator.substract(8, 4)).toStrictEqual(4);
  });
});

describe('Calculator.multiply', () => {
  test('multiply "8" * 4 throw error', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(() => calculator.multiply('8', 4)).toThrow();
  });

  test('multiply 8 * "4" throw error', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(() => calculator.multiply(8, '4')).toThrow();
  });

  test('multiply 8 * 4 is equal to 32', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(calculator.multiply(8, 4)).toStrictEqual(32);
  });
});

describe('Calculator.divide', () => {
  test('divide "8" by 4 throw error', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(() => calculator.divide('8', 4)).toThrow();
  });

  test('divide 8 by "4" throw error', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(() => calculator.divide(8, '4')).toThrow();
  });

  test('divide 10 / 5 is equal to 2', () => {
    const calculator = new testingFunctions.BasicCalculator();
    expect(calculator.divide(8, 4)).toStrictEqual(2);
  });
});

describe('Capitalize test', () => {
  test('Capitalize (10)  throw error', () => {
    expect(() => testingFunctions.capitalize(10)).toThrow();
})
  test('Capitalize word is equal to Word', () => {
    expect(testingFunctions.capitalize('good')).toStrictEqual('Good');
  });
});