const { expect } = require("chai");
const {caesar} = require("../src/caesar.js")//check if correct

describe('caeser() by Justine', () => {

  
it('should return false if value is not present', () => {
const actual = caesar("thinkful");
const expected = false
expect(actual).to.equal(expected)
 });

it('should return false if value is equal to 0', () => {
const actual = caesar("thinkful",0);
const expected = false
expect(actual).to.equal(expected) 
});  

it ('should encode a message by shifting', () => {
const actual = caesar("thinkful",3)
const expected = "wklqnixo"
expect (actual).to.equal(expected)
    });
it ('should decode a message by shifting the opposite direction', () => {
const actual = caesar("wklqnixo",3,false)
const expected = "thinkful"
expect (actual).to.equal(expected)
    });
   
it('should return false if value is less than -25', () => {
const actual = caesar("thinkful",-37);
const expected = false
expect(actual).to.equal(expected) 
});  
   
it('should return false if value is greater than 25', () => {
const actual = caesar("thinkful",99);
const expected = false
expect(actual).to.equal(expected) 
});  
  
it ('should maintain spaces as well as other nonalphabetic symbols', () => {
const actual = caesar("This is a secret message!", 8)
const expected = 'bpqa qa i amkzmb umaaiom!'
expect(actual).to.equal(expected)  
});
  
it ('should shift letter that go off the alphabet to the beginning or end of array' , () =>{
const actual = caesar('z', 3)
const expected = 'c'
expect(actual).to.equal(expected)  
});
  });
