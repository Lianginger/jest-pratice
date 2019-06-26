const sum = require('./sum')
const fetch = require('node-fetch')

test('the pokemon ditto weitht is 40', done => {
	fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
	.then(res => res.json())
	.then(res => {
		expect(res.weight).toBe(40)
		done()
	})
})

test('there is a stop in christoph', () => {
	expect('christoph').toMatch(/stop/)
})

test('adds 1 + 2 to equal 3',()=> {
	expect(sum(1,2)).toBe(3)
})

test('two plus two is four',() => {
	expect(2+2).toBe(4)
})

test('object assign check', () => {
	const data = {one:1}
	data['two'] = 2
	expect(data).toEqual({one:1, two:2})
})

test('null', () => {
	const n = null
	expect(n).toBeNull()
	expect(n).toBeDefined()
	expect(n).not.toBeUndefined()
	expect(n).not.toBeTruthy()
	expect(n).toBeFalsy()
})
