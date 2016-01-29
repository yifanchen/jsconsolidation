// run-time and parse-time functions, when functions are assigned to variables, they are run-time. In another word, order difference.
// when functions are not assigned to variaables, they are parse-time. In another word, no order difference.

var functionOne = function(){
  console.log('run-time error will be caused');
  // this functions will not run because when signing a funciton as a variable, it goes as run-time.
};
functionOne();

functionTwo();
function functionTwo(){
  console.log('parse-time');	
  // functionTwo() here actually will run twice, because it doens't matter anymore when not signning it to variable
}
functionTwo();

// and here is an anonymous function, since it's anonymous, it normally execute itself right away.
(function(){
  console.log('anonymous function');
 })();


