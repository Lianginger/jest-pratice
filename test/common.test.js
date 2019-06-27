test('String testing: there is a stop in christoph', () => {
  expect('christoph').toMatch(/stop/)
})

test('Number testing: two plus two is four', () => {
  const value = 2 + 2
  expect(value).toBe(4)
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)
})

test('Truthiness testing: null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('object assign check', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})