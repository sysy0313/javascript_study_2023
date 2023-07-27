// 자바스크립트 연산자
let a = 10;
let b = 5;
let c = 1;
console.log(`${a}+${b}=${a+b}`);
console.log(a+'+'+b+'='+(a+b));
console.log(`${a}-${c}=${a-c}`);
console.log(`${b}X${c}=${b*c}`);
console.log(`${a}/${b}=${a/b}`);
console.log(`${a}%${b}=${a%b}`);
console.log('-----------------');
// 연결연산자
console.log('10'+10);//1010 연결연산자
console.log(10+10);//20 더하기연산자
console.log(typeof('10'+10));//string
console.log(typeof(10+10));//number
console.log('--------------------');
let age = 25;
// age = age+1
age += 1
console.log(`${age}살`);
age -= 1 //age = age-1
console.log(`${age}살`);
age *= 5 //age = age*5
console.log(age);
age /= 2 //age = age/2
console.log(age);
age %= 2 //age=age%2
console.log(age);
console.log('-----------------');
//복합대입연산자를 이용한 태그생성방법
let cart_li = '<ul>' //빈 장바구니 (초기)
// 참기름1개 장바구니 담기
cart_li += '<li>참기름1개</li>';
//베이글 2개 장바구니 담기
cart_li += '<li>베이글2개</li>';
cart_li += '</ul>';
console.log(cart_li);
console.log('-------------------');
//태그생성 메서드 craetElement('생성태그명')
let cartNewLi = document.createElement('ul');
cartNewLi.innerHTML = '<li>참기름1개</li>';
cartNewLi.innerHTML += '<li>베이글2개</li>';
console.log(cartNewLi);
const cart_contents = document.querySelector('#cart .contents');
console.log(cart_contents);
cart_contents.appendChild(cartNewLi);//객체의 메서드로 값을 삽입하겠다-> 값을 자식으로 넣겠다
