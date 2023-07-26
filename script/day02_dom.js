//dom == document object model
//자바스크립트 = 객체지향언어
//bom == browser object model 웹 브라우저의 기본 객체
let hello = 'hello js';
// window.alert(hello);
// let qa = window.prompt('1+1?');
// window.alert('정답은' +qa+'입니다.')
// let ox = window.confirm('자바스크립트는 객체지향언어다.')
// 확인=true(참), 취소=false(거짓)
// window.alert(ox);
//객체.속성
//객체.메서드()
// 객체.속성.메서드()
//아이디 객체 변수 대입하기
//변수선언키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1')
console.log(btn1);
btn1.style.color ='red';
console.log('-----------------');
const loginBtn = document.getElementById('login');
const payBtn = document.getElementById('pay');
const price = document.getElementById('price');
console.log(loginBtn, payBtn, price);
console.log('-------------------')
// 클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first');
const li_second = document.getElementsByClassName('second');
const li_last = document.getElementsByClassName('last');
console.log(li_first, li_second, li_last)
console.log(li_first[0]);

// 태그 객체 변수 생성하기
const header = document.getElementsByTagName('header');
const h1 = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav');
const aTag = document.getElementsByTagName('a');
console.log(header, h1, aTag);
console.log(aTag [0]);
console.log(aTag [1]);
console.log(aTag [2]);
// innerHTML 속성 활용
// 객체.속성 //읽기
//객체.속성 = 대입값 //수정or삭제
console.log(header[0].innerHTML); //자식, 자손 읽기
console.log(h1[0].innerHTML);
console.log(aTag[0].innerHTML);
// 아이디 (인덱스 안 적어도 됨)
console.log(loginBtn.innerHTML);
console.log(payBtn.innerHTML);
// 클래스 (인덱스 적어야함)
console.log(li_first[0].innerHTML);
console.log(li_first[1].innerHTML);
console.log(li_second[0].innerHTML);

h1[0].innerHTML = '로<br>고';
btn1.innerHTML = '전송';
loginBtn.innerHTML = 'login';
payBtn.innerHTML = 'pay';
li_first[0].innerHTML = '1-a';
li_first[1].innerHTML = '1-b';
li_second[0].innerHTML = '2-a';
li_second[1].innerHTML = '';
aTag[2].innerHTML = '';
li_last[0].innerHTML = '';

nav[0].style.backgroundColor = 'pink';
nav[0].style.border = '1px solid black';
nav[0].style.borderRadius = '50%';
li_first[0].style.fontSize = '2rem';
li_first[1].style.color = 'red';
li_second[0].style.letterSpacing = '5em';
h1[0].style.background = 'linear-gradient(90deg, red, blue)'
h1[0].style.transform = 'rotate(-10deg)'