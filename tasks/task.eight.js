function outerFunction() {
    var outerVariable = "I'm from the outer function";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Calling the outer function and storing the returned inner function in a variable
  var returnedFunction = outerFunction();
  
  // Calling the inner function and observing that it still has access to the outer variable
  returnedFunction(); 