"use strict";

Function.prototype.myApply = function (context = undefined, args = []) {
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};

Function.prototype.myCall = function (context = undefined, ...args) {
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};

Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  args = args ? args : [];
  return function newFn(...newFnArgs) {
    if (this instanceof newFn) {
      return new fn(...args, ...newFnArgs);
    }
    return fn.apply(context, [...args, ...newFnArgs]);
  };
};

const test = function () {
  console.log(this);
};

test.myApply({ id: "test" });
test.myCall({ id: "test" });
const fn = test.myBind({id: "test"});
fn();
