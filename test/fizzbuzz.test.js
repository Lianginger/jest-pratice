const fizzBuzz = require('./fizzbuzz')

describe('Test fizzBuzz function', () => {
  test('Should return Fizz if input number is divisible by 3', () => {
    expect(fizzBuzz(6)).toMatch('Fizz')
  })

  test('Should return Buzz if input number is divisible by 5', () => {
    expect(fizzBuzz(10)).toMatch('Buzz')
  })

  test('Should return FizzBuzz if input number is divisible by 3 and 5', () => {
    expect(fizzBuzz(45)).toMatch('FizzBuzz')
  })

  test('Should return the input number if input number is not divisible by 3 or 5', () => {
    expect(fizzBuzz(7)).toBe(7)
  })
})
