test('helloWorld',() => {
  const data = require('../index')
  expect(data)
    .toBe('hello')
})
