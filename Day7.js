//함수의 용도
function a() {} //함수 a는 변수 a에 담겨진 값
a = {
  b: function () {
    //method
  },
};

function cal(func, num) {
  //인자 전달 활용
  return func(num);
}
function increase(num) {
  return num + 1;
}
console.log(cal(increase, 1));

function cal(mode) {
  var funcs = {
    plus: function (left, right) {
      return left + right;
    },
  };
  return funcs[mode]; //반환값으로 활용
}
console.log(cal("plus")(2, 1));
