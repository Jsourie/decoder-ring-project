// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const alphabetPermanent = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
    function substitution(input, alphabet, encode = true) {
      if(!alphabet || alphabet.length != 26)return false
      for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) !== i) return false;
    }
     
  const realAlphabetArray = alphabetPermanent
  const inputArray = input.toLowerCase().split("");    
  const subAlphabetArray = alphabet.toLowerCase().split("")   
  const onlyUniqueChars = subAlphabetArray.filter(
   (item, index, self) => self.indexOf(item) === index)
  
  const encodeMessage = () => {
        let result = [];
    const encode = (char) => {
     const charIndex = realAlphabetArray.indexOf(char);
          const encodedChar = subAlphabetArray[charIndex];
          result.push(encodedChar); 
      };
    inputArray.forEach((char) => { char === " " ? result.push(" ") : encode(char); });
        return result.join("");
      };
  
  const decodeMessage = () => {
        let result = [];
  const decode =(char) => {
    const charIndex = subAlphabetArray.indexOf(char);
          const decodedChar = realAlphabetArray[charIndex];
          result.push(decodedChar); 
  };
   inputArray.forEach((char) => { char === " " ? result.push(" ") : decode(char); });
        
    return result.join("");
      };
  
  return encode ? encodeMessage() : decodeMessage();
    }  
    return {
      substitution,
    };
  })();
  
  module.exports = { substitution: substitutionModule.substitution };
  
