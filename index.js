// Follow along with the examples herefunction doNothing() {}
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }


  sayHello();
  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }
  sayHelloToIsabel();
  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }
  sayHelloToSofia();
  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  }
  sayHelloToBrendan();
  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything"); // passing the argument 'anything' into our function
  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");
  say("Julio", "hello");
  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Julio", "hello");

  function add(x, y) {
    return x + y;
  }
  add(1, 2)
  console.log(add(1, 2));

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Sofia"));

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Sofia"));

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));

  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy", "partner"));

