const add = require('./strCalculator.js');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});
test('should return the number itself for a single number', () => {
    expect(add("2")).toBe(2);
});

test('should return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
});
