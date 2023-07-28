//null, undefined 데이터타입 차이
//null == 변수의 값을 삭제할 때 사용
//'' == 빈문자열은 문자데이터를 삭제할 때 사용
let a = 10
console.log(a);
a = null
console.log(a);
// ---------------------------
const pwd = document.querySelector('#pwd') //비밀번호입력칸
const submit = document.querySelector('#submit') //변경버튼
const reset = document.querySelector('#reset') //초기화버튼
// 확인
console.log(pwd, submit, reset)
//사용자가 비밀번호 입력칸에 비밀번호 입력 후 
//submit 버튼 클릭시 윈도우 팝업창으로 '비밀번호 변경'
//reset버튼 클릭 시 비밀번호 입력칸 값 초기화 (제거)
submit.addEventListener('click', function(){
    window.alert('비밀번호 변경');
})
reset.addEventListener('click', function(){
    pwd.value = '';
    //pwd.valule = null ; 둘 다 맞음
    window.alert('비밀번호 초기화');
})
//----------------------
//undefined 정의되지 않은 상태
let b = 10;
let c
console.log(b, c);
console.log(b+c); //10+undefined = NaN
//Not a Number = NaN
//문자+문자 = 문자
//문자+숫자 = 문자
//undefined는 문자가 아님 (키워드)
//-------------------------------------
console.log('---------------------------------')
let num1 = 10;
num1++;
console.log(num1);//11
num1--;
console.log(num1);//10
console.log(++num1); //10

console.log(num1); //11 
//출력 또는 대입연산자와 함께 할 때
//전위 후위 연산자에 따른 결과값이 다르게 출력된다.
//출력예) console.log(num1++);
//콘솔 로그로 기존 num1의 값을 먼저 전송 출력 후 
//++ 증감연산자로 num1의 값을 나중에 1증가한다.
//출력, 대입 관계없이 증감연산자를 개별로 작성한 경우
//전위, 후위 연산과 관계없이 무조건 1증가, 1감소된다.
let num2 = 5;
let num3 = 0;
console.log(`초기값 num2 ${num2} num3 ${num3}`)
num3 = num2 ++
console.log(`num2 ${num2} num3 ${num3}`) //num3 은 num2의 초기값을 대입 (후위. 나중에 1 늘어남)
num3 = ++num2
console.log(`num2 ${num2}, num3 ${num3}`) //num3 은 1늘어난 num2(후위)에 1늘어남 (전위)
console.log('-------------------------------')
let number1=10;
let number2=20;
let result;
number1--;
console.log(number1);//결과: 9 대입한 게 아니라서
number1++;
console.log(number1);//결과: 10 대입한 게 아니라서
result=number2++;
console.log(result); //결과: 20 대입하고 나중에 증가
result=++number2;
console.log(result); //결과:22 증가하고 또 바로 증가(전위)