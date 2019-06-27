const fetch = require('node-fetch')

// Testing Asynchronous Code
test('Fetch pokeAPI to test the pokemon ditto weight is 40', done => {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(res => res.json())
    .then(res => {
      expect(res.weight).toBe(40)
      done()
    })
})