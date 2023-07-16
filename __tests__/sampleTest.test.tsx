const test_sum = require('../sampleTest');

test('adds 1 + 2 to equal 3', () => {
  expect(test_sum(1, 2)).toBe(3);
});
