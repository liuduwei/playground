//helper
const getRandomInt = (max) => Math.floor(Math.random() * max);
// producer
const myPromise = new Promise(function (reslove, reject) {
  setTimeout(() => {
    reslove("done");
  }, 1000);
});

// const myRejectPromise = new Promise(function(reslove, reject){
//   setTimeout(() => {
//     reject(new Error('Woops!'));
//   }, 1000);
// });

// const myInstantPromise = new Promise(function(reslove, reject){
//   reject(new Error('Wodfe!'));
// });

// const myRandomPromise = new Promise((reslove, reject) => {
//   const determineNum = getRandomInt(10);
//   if (determineNum < 5) reslove("done");
//   reject(new Error("not done"));
// });

//cusumer

// myRandomPromise.finally(() => console.log('the promise is ready')).then(
//   (res) => console.log(res),
//   (err) => console.error(err)
// ).catch(err => console.error(`catch ${err}`))

const btn = document.querySelector(".btn");
const animationCircle = function (top, left, radius, callback) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = 0;
  circle.style.height = 0;
  circle.style.top = `${top}px`;
  circle.addEventListener('transitionend', () => {
    console.log(1);
    circle.removeEventListener('transitionend', handle);
    callback(circle);
  })
  circle.style.left = `${left}px`;
  document.body.appendChild(circle);

  // setTimeout(() => {
  //   circle.style.width = `${radius * 2}px`;
  //   circle.style.height = `${radius * 2}px`;
  //   circle.addEventListener("transitionend", function handle() {
  //     console.log(1);
  //     circle.removeEventListener("transitionend", handle);
  //     callback(circle);
  //   });
  // }, 0);
  btn.clientLeft;
    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;
    circle.addEventListener("transitionend", function handle() {
      console.log(1);
      circle.removeEventListener("transitionend", handle);
      callback(circle);
    });
};

btn.addEventListener("click", () => {
  animationCircle(100, 100, 100, (circle) => {
    circle.append("Hello world");
  });
});