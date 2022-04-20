const Algo = require('../algo');

describe('Algo', () => {
  describe('reverse', () => {
    it('should reverse a given string', () => {
      const str = 'Hello World!';
      const reversed = '!dlroW olleH';
  
      const algo = new Algo();
  
      const result = algo.reverse(str);
  
      expect(result).toBe(reversed);
    });
  })

  describe('isPalindrome', () => {
    it('should return true if a string is a palindrome', () => {
      const str = 'racecar';
      const algo = new Algo();
      const result = algo.isPalindrome(str);

      expect(result).toEqual(true);
    })
  
    it('should return false if a string is not a palindrome', () => {
      const str = 'carter';
      const algo = new Algo();
      const result = algo.isPalindrome(str);

      expect(result).toEqual(false);
    })
  })
  

  
});

