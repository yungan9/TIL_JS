//전역변수
arr.calculator{
  'left' : null,
  'right' : null
}
arr.coordinate

//정적 유효 범위
var i = 5;
function a(){  //사용될 때
  var i = 10;  //정의될 때
  b();
}
function b(){
  console.log(i); //5
}
a();