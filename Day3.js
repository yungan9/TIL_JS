//배열
var arr = [one, two, three];

a.toUpperCase(); //대문자 변경
a.push(); //배열 끝에 원소 추가
a.concat(); //원소 여러개 추가
a.unshift(); //배열 앞에 원소 추가
a.splice(idx, -num, num); //인덱스에 들어갈 값 (인덱스,인덱스 뒤 제거될 원소수,값)
a.shift(); //첫번째 원소 제거
a.pop(); //마지막 원소 제거
a.sort(); //정렬
a.reverse(); //역순 정렬

//객체
var idx = { key: value }; //방법 1

var idx = {}; //방법 2
idx["key"] = value;

var idx = new Object(); //방법 3
idx["key"] = value;
new Object();

idx["key"]; //객체 속성 접근 방법 1
idx.key; //객체 속성 접근 방법 2

var idx = {
  key: { key: value, key: value },
  fuc: function () {
    alert(this); //속해있는 객체를 가리키는 변수
  },
};
idx["fuc"]();
