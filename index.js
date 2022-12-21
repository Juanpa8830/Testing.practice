function stringLength (str) {
    if(str.length>0 && str.length <= 10) {
      return str.length;
    } else if(str.length < 1) {
      throw new Error ('invalid string');
    } else{
      throw new Error ('the string length is longer than the max allowed');
    }
  } 
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  class BasicCalculator{
    sum = (a, b) => {
      if (typeof a !== 'number') throw new Error('The first addend is not a Number ');
      if (typeof b !== 'number') throw new Error('The second addend is not a Number ');
      return a + b;
    }
  
    substract = (a, b) => {
      if (typeof a !== 'number') throw new Error('The minuend is not a Number ');
      if (typeof b !== 'number') throw new Error('The subtrahend is not a Number ');
      return a - b;
    }
  
    multiply = (a, b) => {
      if (typeof a !== 'number') throw new Error('The first factor is not a Number ');
      if (typeof b !== 'number') throw new Error('The second factor is not a Number ');
      return a * b;
    }
  
    divide = (a, b) => {
      if (b === 0) throw new Error('Undetermined');
      if (typeof a !== 'number') throw new Error('The dividend is not a Number ');
      if (typeof b !== 'number') throw new Error('The divisor is not a Number ');
      return a / b;
    }
  }
  
  function capitalize (str) {
    if (typeof str !== 'string') throw new Error('is not a string');
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  module.exports =
    {
      stringLength,
      reverseString,
      BasicCalculator,
      capitalize
    }