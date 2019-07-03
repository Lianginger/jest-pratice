function sum(a, b) {
  if (typeof a === 'string' || typeof b === 'string') {
    return 'There are non-numbers in the variable'
  } else {
    return a + b
  }
}

module.exports = sum
