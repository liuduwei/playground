var id = "global";

function fun1() {
  console.log(this.id); // obj
  (() => {
    console.log("dfe", this.id); //obj
  })();
  const obj11 = {
    id: "obj11",
    a: (() => {
      console.log("dfe", this.id);
    })(), //obj
  };
  setTimeout(function () {
    console.log("fun1", this.id); //global
    setTimeout(function () {
      console.log("fun11", this.id); //global
    });
  }, 2000);
}

function fun2() {
  setTimeout(() => {
    console.log("fun2", this.id); // obj
    setTimeout(() => void console.log("fun22", this.id)); // obj
  }, 2000);
}

// fun1(); //global
// fun2(); //global

fun1.call({ id: "obj" });
fun2.call({ id: "obj" });

const obj1 = {
  id: "obj1",

  a() {
    console.log(this.id); //obj1
    (() => {
      console.log(this.id); //obj1
    })();
  },

  b: () => {
    console.log(this.id); // global
  },
};

obj1.a();
obj1.b();
