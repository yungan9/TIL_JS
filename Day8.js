/*콜백(callback)
  다른 함수가 실행을 끝낸 뒤 실행되는 callback 함수
*/

var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
numbers.sort(); //[1, 10, 2, 20, 3, 4, 5, 6, 7, 8, 9]
//.sort 는 암시적으로 원소를 문자로 형변환 하여 계산함
function sortNumber(a, b) {
  //명시적으로 숫자 비교
  console.log(a, b);
  if (a > b) {
    //a 는 b보다 뒤로
    return 1;
  } else if (a < b) {
    //a 는 b보다 앞으로
    return -1;
  } else {
    //순서변경 x
    return 0;
  }
  // = return a - b;
  // 역순 : returb b - a;
}
console.log(numbers.sort(sortNumber)); //sortNumber = 콜백

/* 비동기 처리
  : 어떤 요청이 오면 완료가 되기 전, 다음 요청을 실행 (동시 처리 가능)
  AJAX : 서버와 브라우저가 비동기 방식으로 데이터를 교환할 수 있는 통신기능
*/

$get(
  "./datasource.json.js",
  function (result) {
    //$ : 제이쿼리 객체, get : 메서드 호출
    console.log(result); //매개변수의 인자로 담아서 함수 호출
  },
  "json"
);
