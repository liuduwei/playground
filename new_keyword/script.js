const Person = function(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  console.log(this.name);
}

const person1 = new Person('dfe');
console.log(person1);

//1. create empty obj

Function.prototype.myNew = function(...args) {
  
}