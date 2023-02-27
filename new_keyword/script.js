const Person = function(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function() {
  console.log(this.name);
}

const person1 = new Person('dfe' ,18);
console.log(person1);

//1. create empty obj
//2. empty obj.__proto__ = function.prototype
//3. this = empty obj
//4. return empty obj

Function.prototype.myNew = function(name, age) { 
  const obj = {};
  obj.__proto__ = this.prototype;
  this.apply(obj,arguments);
  return obj;
}
const person2 = Person.myNew('dfedfe', 18);
console.log(person2 instanceof Person);
