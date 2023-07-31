let a = 10 //숫자
let b = '10' //문자
let total = a+b //숫자+문지=문자
//암시적 형변환 (자바스크립트 자동으로 데이터변환 (기본))
console.log(`total>>${total}`) //1010
console.log(`${typeof(a)}+${typeof(b)}=${typeof(a+b)}`)//number+string=string
console.log('--------------------------------')
//명시적 형변환 (문자>숫자, 숫자>문자), 개발자가 직접 데이터형식을 결정
console.log(`b=${typeof(b)}, b+1=${b+1}`)//101
//Number()==형변환메서드
//괄호 안에 작성한 데이터를 숫자 데이터로 변환한다.
//메서드를 사용할 때만 1회성으로 숫자데이터로 인식한다.
//일회성의 불편함을 해소하기 위해 변환한 데이터로 다른 변수에 대입해서 일반적으로 사용한다.
console.log(`b=${typeof(Number(b))}, ${typeof(b)}`)
let c = Number(b);
console.log(`c=${typeof(c)}, c=${c}, a+c=${a+c}`)
console.log('----------------------------')
// const d = Number(window.prompt('1+1=?'))
// console.log(`d=${d}, ${typeof(d)}`)
//Number 메서드는 객체 없이 사용 가능하다
//그래서 다른 메서드를 괄호안에 넣어 사용할 수 있다.
//예) Number(객체.메서드())
console.log('------------------')
const userInput = document.querySelector('#user')
const resultBtn = document.querySelector('#result')
console.log(userInput, resultBtn); //DOM*2 출력\
//동작 이벤트 없이 input의 값 확인은 초기값만 인식한다
//input의 value값은 숫자 데이터로 입력해도 자동 문자데이터로 암시적 형변환이 된다.
userInput.value = 1234
console.log(`userInput typeof=${typeof(userInput.value)}`)
console.log(`userInput value=${userInput.value}`)
let userInputNumber = Number(userInput.value) //숫자로 형변환한 userInput 값
console.log(`userInputNumber type = ${typeof(userInputNumber)}`)
console.log(`userInputNumber  value= ${userInputNumber}`)
//버튼 클릭 시 input의 현재값 파악 후 결과 출력하기
// resultBtn.addEventListener('click', function(){
    // userInputNumber = Number(userInput.value)
    // console.log(`userInput typeof=${typeof(userInputNumber)}`)
    // console.log(`userInput value=${userInput.value}`)
    // //버튼 클릭 시 input값에 더하기 +1한 결과가 console 출력하기
    // console.log(userInput.value + 1) // x 문자+숫자
    // console.log(Number(userInput.value)+1) // o 대신 번거로움
    // console.log(userInputNumber + 1) // o
// })
//구구단 과제풀이
const dan2 = document.querySelector('#dan2')//2단 고정 input
const calc = document.querySelector('#calc')//계산식
const result = document.querySelector('#result')//결과출력 input\
const test = document.querySelector('#test')
// 확인
console.log(dan2, calc, result)
console.log(typeof(dan2.value), typeof(calc.value))//string, string
let first = 0
let last = 0
console.log(`2*2= ${'2'*'2'}, 2+2=${'2'+'2'}`)//곱하기는 암시적형변환으로 문자데이터를 숫자로 변환해줌/ 더하기는 연결연산자
//연산자 좌우 피연산자가 문자데이터일 경우
//더하기연산자(+) 라면 문자+문자=문자로 연결결과로 보여준다.
//나머지연산자(-,*,/,%) >> 문자를 암시적형변환으로 자동으로 
//숫자데이터로 변경해서 문자*문자=숫자 결과로 보여준다.
test.addEventListener('click', function(){
    first = Number(dan2.value)
    last = Number(calc.value)
    console.log(first*last)
    result.value = first*last
})


