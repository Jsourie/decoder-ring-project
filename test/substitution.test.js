const { expect } = require("chai");
const {substitution} = require("../src/substitution.js");

describe("substitute() test written by Justine", () => {
       it("Should ignore capital letters", () =>{
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
            const expected = 'elp xhm xf mbymwwmfj dne';
      
           expect(actual).to.equal(expected);
          });
       it("Should maintain spaces throughough", () => {
         const actual = substitution("You Are An", "xoyqmcgrukswaflnthdjpzibev")
         const expected = "elp xhm xf"
         
         expect(actual).to.equal(expected)
          });
       it("Input should return false if not equal to 26 characters", () => {
        const actual = substitution("Hello", "short")
        
        expect(actual).to.be.false
          });
      it("Should return false if characters in alphabet are not unique", () => {
      const actual =substitution("Hello", "jcujcujcujcujcujcukmnhsiej")
      
      expect(actual).to.be.false
     });
});
  