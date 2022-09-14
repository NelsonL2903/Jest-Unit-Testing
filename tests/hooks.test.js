const {add, multiply, subtract, divide} = require('../hooks');

describe("tests using hooks", () => {
    var input1 = 0
    var input2 = 0
    test_num = 0;
   
    beforeAll(() => {
        console.log("Starting hooks.test.js...");
    });
   
    afterAll(() => {
        console.log("...Finished hooks.test.js");
    });
    
    beforeEach(() => {
        ++test_num;
        console.log(`Starting hooks.test.js test #${test_num}`);
        input1 = 1;
        input2 = 2;
    });
    
    afterEach(() => {
        console.log(`Completed hooks.test.js test #${test_num}`);
    });
   
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
})