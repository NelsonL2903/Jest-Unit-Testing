const {add, multiply, subtract, divide} = require('../arithmetic');

test.each([[1, 1, 2], [-1, 3, 2], [2, 1, 3]])(
    '%i + %i equals %i', (a, b, expected) => {
        expect(add(a, b)).toBe(expected);
    },
);

test.each([[7, 4, 28], [-1, 3, -3], [-4, -2, 8]])(
    '%i * %i equals %i', (a, b, expected) => {
        expect(multiply(a, b)).toBe(expected);
    },
);

test.each([[11, 1, 10], [-1, 6, -7], [5, 1, 4]])(
    '%i - %i equals %i', (a, b, expected) => {
        expect(subtract(a, b)).toBe(expected);
    },
);

test.each([[10, 5, 2], [14, 2, 7], [33, 3, 11]])(
    '%i / %i equals %i', (a, b, expected) => {
        expect(divide(a, b)).toBe(expected);
    },
);