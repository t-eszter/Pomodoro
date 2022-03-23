const sum = require('./focustimer.js');

test('Check that if seconds less than 10 timer has a preceding 0', () => {
    expect(checkSecond(7)).toBe("07");
  });

test('Check that if seconds more than 10 timer has not a preceding 0', () => {
    expect(checkSecond(17)).toBe("17");
  });

test('Check that if seconds are negative, an error is returned', () => {
    expect(checkSecond(-1)).toBe("Error");
  });