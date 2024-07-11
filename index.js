const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];
debugger
function titleCased() {
  return tutorials.map(title => {
    // Split the title into words
    let words = title.split(' ');
    debugger
    // Capitalize each word
    words = words.map(word => {
      // Capitalize the first letter and concatenate with the rest of the word
    return word.charAt(0).toUpperCase() + word.slice(1);
    });
    debugger
    // Join the capitalized words back into a title
    return words.join(' ');
  });
}

// Test the function
console.log(titleCased());
