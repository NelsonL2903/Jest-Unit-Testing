const sum = require('./sum');

function robotIsWorking() {
    throw new Error('The robot stopped working');
}

const null_var = null;
const undefined_var = undefined;
const zero = 0;
const int_var = 19;
const string = "String";
const true_bool = true;
const false_bool = false;
const object = {key: "value", index: "8"};
const value = sum(2, 2);
const float_value = sum(0.1, 0.2);
const array = [1, 2, 4, 5, 6];

module.exports = {robotIsWorking, null_var, undefined_var, zero, int_var, string, true_bool, false_bool, object,
                  value, float_value, array};