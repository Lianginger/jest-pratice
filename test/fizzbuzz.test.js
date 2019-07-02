const fizzBuzz = require('./fizzbuzz')

test('Test fizzBuzz function', () => {
  expect(fizzBuzz(6)).toMatch('Fizz')
  expect(fizzBuzz(10)).toMatch('Buzz')
  expect(fizzBuzz(45)).toMatch('FizzBuzz')
  expect(fizzBuzz(7)).toBe(7)
})
