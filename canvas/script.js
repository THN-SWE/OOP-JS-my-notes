// javsctipt oop

// object literal syntax
const circle = {
  radius: 1,
  location: [1, 1],
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

// what if we need to create more circles with different property and methods.
// we could copy paste the circle object to create new one.
// or else we could use somthing called  factory function

// Factory function
function createCircle(radius) {
  return {
    // radius:radius,
    // NOTE:  if the key & value are the same we could reduce the noise by only mentioning the key.
    radius,
    location: {
      x: 1,
      y: 1,
    },
  };
}

// not we could create a circle obj by simple doing this
const circle1 = createCircle(1);

//there is another way to create a object that is using a constructor function

//constructor function
function Circle(radius) {
  // what is "this"
  // "this" is a reference to the obj which is executing this code;
  // NOTE: by default "this" points to the global object
  // "this" in browser points to window obj.
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle2 = new Circle(2);

// NOTE
// there is no significant differences between factory & constructor functions
//  you can use both in any contexts accoring to your preferences

// NOTE !
// Every object has a contructor porperty
// and that property refers to the function that was use to create that obj;
new String(); // String obj literal to create a string obj "" ,'',
new Number(); // 1,2,3,4
new Boolean(); // true, false

// let a = "apple";
// a -> 'apple'
// a.constructor -> ƒ String() { [native code] }

//NOTE
// another facinating fact
// in JS Functions are Objects itself

// lets take a look at the Circle constructor function as an exaple
// as I already have said its a object
// the Circle function|Object has its own properties

// since Every object has a contructor porperty(line94);
// Circle.constructor -> ƒ Function() { [native code] }

// JS has 2 data types
// Primitives and Objects(actually 3 but since Objects & Functions & Arrays are essentially objs)
// now lets see how data stored in each of these types

//NOTE : Primitives are copied by their value
//       Objects are copied by theri reference

// primitive: value of x directly copied into y
// let x = 10;
// let y = x;

// x = 20;

// console.log(x) -> 20
// console.log(y) -> 10

//object : only address|reference is stored in x 
// let x = {value: 10};
// let y = x;

// x.value = 20;

// console.log(x.value) -> 20
// console.log(y.value) -> 20


// NOTE : 
// getter is a function that is used to read a property

 
