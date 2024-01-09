//정규표현식
/*문자열에서 특정한 문자를 찾아내는 도구
  텍스트 안의 정보 존재 여부를 찾거나 
  텍스타 안의 정보 중에서 패턴에 해당하는 다른 텍스트로 치환
  이러한 경우에 정규 표현식 사용*/
//컴파일 단계
var pattern = /a/; //정규표현식 리터럴
var pattern = new RegExp("a"); //정규표현식 객체 생성자
//RegExp는 정규표현식 객체
RegExp.exec(); //찾는 문자열이 있으면 값 리턴
pattern.exec("abcde"); //["a"]

RegExp.test(); //문자열이 있으면 true, 없으면 false

String.match(); //문자열 메소드 실행
str.match(pattern); //["a"]

String.replace(); //문자열 패턴 검색 후 변경하여 값 리턴
str.replace(pattern, "A"); //"Abcde"

var oi = /a/i; //i를 주게되면 대소문자 구분 x
var xi = /a/g; //g를 주게되면 검색된 모든 결과(개수) 리턴

//함수지향 - 유효범위(Scope)
var vscope = "global"; //전역변수 : 전역에서 접근
function fscope() {
  var vscope = "local"; //지역변수
  alert(vscope);
}
fscope(); //var를 붙이지 않을 경우 전역변수로 접근
