"use strict";

const loadMessage = function (src, error) {
  if (error) console.error(error);
  else {
    console.log(`${src} load success`);
  }
};
