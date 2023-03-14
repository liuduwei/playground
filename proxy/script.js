const target = {};
const proxy = new Proxy(target, {});

proxy.test = 5;

// console.log(proxy.test); 5
// console.log(target.test); 5