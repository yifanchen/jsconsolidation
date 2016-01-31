(function(){
  var name = 'one';
  window.onload(){
    console.log(name);
  };
  name  = 'two';
})();


// closures are functions that refer to independent(free) variables. In other words, the funciton defined in the colsure 'remembers' the enviroment in which it was created.
// when an inner function has no local variables, and itself is only availble to the parent function it is, so it can access it's parent's variables
// lexcial scoping
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



// Based on my understanding, the way to init are colsures are assigning functinos to values.
function makeAdder(x){
  return function(y){
    return x + y;
  };	
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));



function add(x){
  return function(y){
    return function(z){
      return function(a){
        return x + y + z + a;
      };
    };
  };	
}

var add = add(1);
var addy = add(2);
var addz = addy(3);
console.log(addz(6));



var counter = (function(){
  var privateCounter = 0;
  function changeBy(val){
    privateCounter += val;
  }
 return {
  increment: function(){
    changeBy(1);
  },
  decrement: function(){
    changeBy(-1);
  },
  value:function(){
    return privateCounter;
  }
 };
})();

console.log(counter.value());
counter.increment();
console.log(counter.value());
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());


// notice how each of the two maintains it's independence from each other. It's envoriment during the call of the makeCounter() function is different each time. The closure variable privateCounter contains a different instance each time. 
var makeCounter = function(){
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function(){
       changeBy(1);
    },
    decrement: function(){
      changeBy(-1);
    },
    value: function(){
     return privateCounter; 
   }
  };
};

var counter1 = makeCounter();
var counter2 = makeCounter();

console.log(counter1.value());
counter1.increment();
counter1.increment();
console.log(counter1.value());
counter1.decrement();
console.log(counter1.value());
console.log(counter2.value());

