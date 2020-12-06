function translate(word) {
    // Convert word to lowercase
    word = word.toLowerCase()
    
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelStart = 0;
  
    // If first letter is a vowel
    if (vowels.includes(word[0])) {
        return word + "way";
    } else {
      // If the first letter is a consonant, loop through until the first vowel is found
      for (let char of word) {
        if (vowels.includes(char)) {
          vowelStart = word.indexOf(char);
          break;
        }
      }
      
      return word.slice(vowelStart) + word.slice(0, vowelStart) + "ay";
    }
  }
