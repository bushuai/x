const greeting = require('./index')

test('invoke method: greeting', () => {
  expect(greeting()).toBe('Hello World')
})
