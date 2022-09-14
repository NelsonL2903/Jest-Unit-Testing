// '==' compares two variables but ignores datatypes.
const isPalindrome = (string) => string == string.split('').reverse().join('');

const isAnagram = (w1, w2) => {

    const regularize = (word) => {
        return word.toLowerCase().split('').sort().join('').trim();
    }

    // '===' compares two variables but also ensures datatypes are the same.
    return regularize(w1) === regularize(w2);
}

module.exports = {isPalindrome, isAnagram};