function outerFunctions() {
    let outerGreatness = "I'm from the outer function";
  
    function innerFunction() {
      console.log(outerGreatness);
    }
  
    return innerFunction;
  }
  
  let returnedFunction = outerFunction();
  
  returnedFunction(); 