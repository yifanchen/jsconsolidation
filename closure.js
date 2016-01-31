//(function(){
//  var name = 'one';
//  window.onload(){
//    console.log(name);
//  };
//  name  = 'two';
// })();


// when an inner function has no local variables, and itself is only availble to the parent function it is, so it can access it's parent's variables
function init(){
  var name = 'George';
  function displayName(){
    console.log(name);	
  }
  displayName();
}
init();


// displayName() inner function was returned from outter function before being executed.
// the local variabls within a function only exist for the duration of that function's execution. the following function shouldn't work normally. 
// a closure is a special kind of object that combines 2 things: a funciton, and the environment which the function was created.
// the environment consists of any local variables that were in-scope at the time the closure was created. 
// in this case, myFunc() incoporates both displayName() and name string when the closure, myFunc() was created. 
function makeFunc(){
  var name = 'George';
  function displayName(){
    console.log(name);    	
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();



