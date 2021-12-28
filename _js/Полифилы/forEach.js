// самый простой способ: ---------------------------------------
// -------------------------------------------------------------

let arr = ['fox', 'Bill', 120, 'timpani', -91, 'git', 'cat', 1.454, true];

Array.prototype.forEach2 = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.forEach2((item, index, array) => {
  console.log(item, index);
  // console.log(array);
});
