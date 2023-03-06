function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  console.log(introduction("Alice")); // Hi, my name is Alice.
  console.log(introduction("Bob")); // Hi, my name is Bob.
  console.log(introduction("Charlie")); // Hi, my name is Charlie.
  console.log(introduction("David")); // Hi, my name is David
  
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  function introductionWithLanguageOptional(name = "Anonymous", language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  