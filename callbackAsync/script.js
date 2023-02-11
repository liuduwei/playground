const loadScript = function (src, callback) {
  const script = document.createElement("script");
  console.dir(script);
  script.src = src;
  // script.onload = () => {
  //   callback(script);
  // };
  // script.onload = allback
  script.addEventListener("load", () => {
    callback(src);
  });

  script.addEventListener("error", () => {
    callback(src, new Error(`Script ${src} load faild`));
  });
  document.head.append(script);
};

loadScript("scriptLoad.js", (src, error) => {
  if (error) {
    console.error(error);
  } else {
    loadMessage(src, error);
    loadScript("scriptLoad2.js", () => {
      if (error) {
        console.error(error);
      } else {
        loadMessage(src, error);
      }
    });
  }
});
