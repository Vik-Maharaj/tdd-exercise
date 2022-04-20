function Algo() {}

Algo.prototype.reverse = function(str) {
    return str.split('').reverse().join('');
}

Algo.prototype.isPalindrome = function(str) {
    return this.reverse(str) === str;
}

module.exports = Algo;