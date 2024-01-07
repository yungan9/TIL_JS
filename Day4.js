//Node.js에서의 모듈 로드

  //로드될 대상
var PI = Math.PI;
exports.area = function (r){
  return PI * r * r;
};

  //로드의 주체
var circle = require('로드될 대상.js');

//jquery
$('#id').text('활용'); // #으로 id값의 태그 /.~로 활용함
$('#id').click(funcion(){
})