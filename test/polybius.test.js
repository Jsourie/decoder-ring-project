const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() test written by Justine", () => {
    describe( "Polybus message encoder", () => {
        it("Should still return a string message", () =>{
            const actual = polybius("thinkful");
            const expected = "4432423352125413";
      
            expect(actual).to.equal(expected);
          });
          it("Should ignore capital letters", () =>{
            const actual = polybius("thinkful");
            const expected = "4432423352125413";
      
            expect(actual).to.equal(expected);
          });
          it("Should maintain spaces throughout", () =>{
            const actual=polybius("Hello world");
            const expected = "3251131343 2543241341"
      
            expect(actual).to.equal(expected);
          });
        });
    describe( "Polybus message decoder", () => {
        it("Should return false if length of numbers is not even", () =>{
            const actual = polybius("12345",false);

            expect(actual).to.be.false;
          });
          it("Should show both I/J letters when decoding", () =>{
            const actual = polybius("4432423352125413",false);
            const expected = "th(i/j)nkful"
            expect(actual).to.equal(expected);
          });
          it("Should maintain spaces throughout", () =>{
            const actual=polybius("3251131343 2543241341",false);
            const expected = "hello world"
      
            expect(actual).to.equal(expected);
          });
        })
    })