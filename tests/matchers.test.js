const {robotIsWorking, null_var, undefined_var, zero, int_var, string, true_bool, false_bool, object,
       value, float_value, array} = require('../matchers');

test('null', () => {
    expect(null_var).toBeNull();
    expect(null_var).not.toBeUndefined();
    expect(null_var).toBeDefined();
    expect(null_var).not.toBeTruthy();
    expect(null_var).toBeFalsy();
});

test('undefined', () => {
    expect(undefined_var).not.toBeNull();
    expect(undefined_var).toBeUndefined();
    expect(undefined_var).not.toBeDefined();
    expect(undefined_var).not.toBeTruthy();
    expect(undefined_var).toBeFalsy();
});

test('0', () => {
    expect(zero).not.toBeNull();
    expect(zero).not.toBeUndefined();
    expect(zero).toBeDefined();
    expect(zero).not.toBeTruthy();
    expect(zero).toBeFalsy();
});

test('integer', () => {
    expect(int_var).not.toBeNull();
    expect(int_var).not.toBeUndefined();
    expect(int_var).toBeDefined();
    expect(int_var).toBeTruthy();
    expect(int_var).not.toBeFalsy();
});

test('string', () => {
    expect(string).not.toBeNull();
    expect(string).not.toBeUndefined();
    expect(string).toBeDefined();
    expect(string).toBeTruthy();
    expect(string).not.toBeFalsy();
});

test('true', () => {
    expect(true_bool).not.toBeNull();
    expect(true_bool).not.toBeUndefined();
    expect(true_bool).toBeDefined();
    expect(true_bool).toBeTruthy();
    expect(true_bool).not.toBeFalsy();
});

test('false', () => {
    expect(false_bool).not.toBeNull();
    expect(false_bool).not.toBeUndefined();
    expect(false_bool).toBeDefined();
    expect(false_bool).not.toBeTruthy();
    expect(false_bool).toBeFalsy();
});

test('array', () => {
    expect(array).not.toBeNull();
    expect(array).not.toBeUndefined();
    expect(array).toBeDefined();
    expect(array).toBeTruthy();
    expect(array).not.toBeFalsy();
});

test('object', () => {
    expect(object).not.toBeNull();
    expect(object).not.toBeUndefined();
    expect(object).toBeDefined();
    expect(object).toBeTruthy();
    expect(object).not.toBeFalsy();
});

test('adds 2 + 2 to equal 4', () => {
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.7);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.2);
    expect(value).toBeLessThanOrEqual(4);
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('adding float numbers', () => {
    expect(float_value).not.toBe(0.3);    // .toBe cannot be used for float values due to rounding.
    expect(float_value).toBeCloseTo(0.3); // Use .toBeCloseTo instead.
});

test('Hello World', () => {
    expect('Hello World').toMatch(/World/);
    expect('Hello World').not.toMatch(/world/);
});
  
test('the array contains a specific integer', () => {
    expect(array).toContain(2);
    expect(array).not.toContain(3);
    expect(new Set(array)).toContain(5);
});

test('Checking that robot is working', () => {
    expect(() => robotIsWorking()).toThrow();
    expect(() => robotIsWorking()).toThrow(Error);
    expect(() => robotIsWorking()).toThrow('The robot stopped working');
    expect(() => robotIsWorking()).toThrow(/stopped/);
});