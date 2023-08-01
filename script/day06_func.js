//함수 = 재사용문법
//DOM.addEventListener('이벤트',function(){실행결과})
//기본문법
//function 함수명() {재사용문법}
//자판기 함수 : 무조건 콜라 1개가 나오는 자판기
//함수는 생성, 호출을 개별로 진행해야 한다.
function japangi(){ //생성
    console.log('콜라 1개 나왔습니다')
}
japangi() //호출 (생성된 함수명 작성)
const orderBtn = document.querySelector('#order')
console.log(orderBtn)
// DOM 이벤트로 함수 호출 시 함수명만 작성한다(괄호없이)
// orderBtn.addEventListener('click',japangi)
orderBtn.addEventListener('click',function(){
    console.log('1000원 입금')
    japangi()
})
// 함수 = 재사용되는 js문법을 감싸서 쉽게 호출하는 기능
// 매개변수 = 재사용되는 함수 내에 변경되는 데이터가 있을 경우
// 매개변수 활용한 함수 기본 문법
// function 생성함수명(생성매개변수명){재사용문법}
function japangi2(drink){
    console.log(drink+'1개 나왔습니다!')
}
//매개변수가 있는 함수를 호출할 경우
//호출함수 괄호 안에는 매개변수에 삽입할 데이터를 작성한다.
japangi2('사이다')
japangi2('콜라')
console.log('--------------------')
// --------------------------------
//사이다1개 나왔습니다
//콜라2개 나왔습니다
//사이다3개 나왔습니다
function japangi3(drink, num){
    console.log(drink+num+'개 나왔습니다')
}
// 출력
japangi3('사이다',1)
japangi3('콜라',2)
japangi3('사이다',3)
//----------------------------------------
console.log('------------------------')
// 4주 자유적금 통장
// 초기금액 = 10,000 원

let passBook = 10000
function week4Passbook(money){
    passBook += money //대입
    console.log(`${money.toLocaleString('ko-kr')}원입금했습니다`)
    console.log(`총 잔액은 ${passBook.toLocaleString('ko-kr')}원입니다.`)
}
week4Passbook(1000)
week4Passbook(1500)
week4Passbook(15000)
//----------------------------------------------
console.log('--------------------')
//구구단2단~9단까지 함수 제작하기
function dan99(dan) {
    console.log(`${dan}X1=${dan*1}`)
    console.log(`${dan}X2=${dan*2}`)
    console.log(`${dan}X3=${dan*3}`)
    console.log(`${dan}X4=${dan*4}`)
    console.log(`${dan}X5=${dan*5}`)
    console.log(`${dan}X6=${dan*6}`)
    console.log(`${dan}X7=${dan*7}`)
    console.log(`${dan}X8=${dan*8}`)
    console.log(`${dan}X9=${dan*9}`)
    console.log('----------------')
}
// 2단
dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)
//--------------------------------
