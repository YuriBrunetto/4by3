const test = require('tape')
const fbt = require('./index.js')

test('should be 4:3', function(assert) {
  const result = fbt(800, '')
  assert.equal(result, '4:3 -> 600')
  assert.end()
});

test('should be 16:9', function(assert) {
  const wide = { wide: true }
  const result = fbt(1600, wide);
  assert.equal(result, '16:9 -> 900')
  assert.end()
});

test('should be 21:9', function(assert) {
  const wide = { ultrawide: true }
  const result = fbt(210, wide)
  assert.equal(result, '21:9 -> 90')
  assert.end()
})
