//함수 생성 > 호출 
//함수 생성 후 호출식을 작성하지 않으면 함수결과를 볼 수 없다.
//1. 생성 :  function 함수명 (매개변수명){재사용함수문법}
//2. 호출 :  함수명()
function func1(str){//접속 회원 맞춤형 인사 함수생성
    console.log(`${str}님 어서오세요!`)
}//생성함수 end
func1('홍길동')
func1('asdf1234')//호출
//-------------------------------------------------
// 함수기능 : 리턴 (return) 함수 결과값을 외부로 반환 명령
function func2(a){
    return a+1 //리턴활용 함수 결과값만 외부로 반환
}
func2(50) //함수결과값을 출력하는 메서드가 없어 출력x
console.log(func2(50))//함수결과를 호출앞 메서드가 출력O
// window.alert(func2(100))
document.write(func2(10))
//---------------------------------------------
function func3(a, b){
    return a*b //함수 내 return은 1개만 존재
}
console.log(func3(10,20))
console.log(func3(2,3))
//-----------------------------------------
let total = 0
function func4(a){
    total = a
    total++
    return total
    // total++ //return 뒤에 있는 js는 실행하지 못한다.
}
console.log(func4(10))
//----------------------------------------------
let num1 = 10
let num2 = 20
function func5(a,b){
    num1 += num2 // num1 = 10(num1)+20(num2)=30
    num2 = a+b // num2 = 2+4 = 6
    num1 += num2 // num1 = 30(num1)+6(num2)
    return num1 //36 외부반환
}
console.log(func5(2,4)) //함수 호출 ->36
const txtInput = document.querySelectorAll('.text')
console.log(txtInput)
txtInput[0].addEventListener('focus', function(){ 
    bg(txtInput[0], 'yellow')
})
txtInput[1].addEventListener('focus', function(){ 
    bg(txtInput[1], 'blue')
})
txtInput[2].addEventListener('focus', function(){
    bg(txtInput[2], 'pink')
})
// 함수 = 반복되는 재사용문법, 매개변수 = 재사용 문법 내에 수정되는 변수가 있을 때
function bg(target, bgcolor){
    return target.style.backgroundColor = bgcolor
}
//-------------------------------------
console.log('------------------------------------')
// 관심상품, 알림설정 이미지에 마우스를 올렸을 때 
// off -> on 이미지 변경
// 마우스를 나갔을 때 on -> off  이미지 변경
const likeImg = document.querySelector('.product .like img')
const ideaImg  = document.querySelector('.product .idea img')
console.log(likeImg, ideaImg) //변수 정상 확인
likeImg.addEventListener('mouseover',function(){
    // likeImg.src = "./images/heart_on.png" //객체.속성 =대입 "값"
    onOff(this, 'heart', 'on')
})
likeImg.addEventListener('mouseout', function(){
    // likeImg.src = "./images/heart_off.png"
    onOff(this, 'heart', 'off')
})
ideaImg.addEventListener('mouseover',function(){
    // ideaImg.src = "./images/idea_on.png"//객체.속성 =대입 "값"
    onOff(this, 'idea', 'on')
})
ideaImg.addEventListener('mouseout', function(){
    // ideaImg.src = "./images/idea_off.png"
    onOff(this, 'idea', 'off')
})
function onOff(target, name, status){
    return target.src = `/images/${name}_${status}.png`
}
//이미지 이름에 규칙이 있어야 동일한 함수 사용 가능함
