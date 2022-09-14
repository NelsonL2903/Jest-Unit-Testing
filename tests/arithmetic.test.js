const {add, multiply, subtract, divide} = require('../arithmetic');

test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('3 * 4 = 12', () => {
    expect(multiply(3, 4)).toBe(12);
});

test('5 - 6 = -1', () => {
    expect(subtract(5, 6)).toBe(-1);
});

test('8 / 4 = 2', () => {
    expect(divide(8, 4)).toBe(2);
});