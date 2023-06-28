function myFunction() {
    var insideVariable = "Inside";
  }
  myFunction();
  console.log(insideVariable); 
  
  
  var outsideVariable = "Outside";
  
  function myFunction() {
    console.log(outsideVariable);
  }
  
  myFunction(); // "Outside"
  
  
  
  
  
  