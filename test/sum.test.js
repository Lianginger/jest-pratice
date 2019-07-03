const sum = require('./sum')

describe('Test add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('adds "1" + 2 to throw error message: There are non-numbers in the variable', () => {
    expect(sum('1', 2)).toMatch('There are non-numbers in the variable')
  })
})
