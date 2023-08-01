const dan2Btn = document.querySelector('#dan2')
const dan3Btn = document.querySelector('#dan3')
const dan4Btn = document.querySelector('#dan4')
const dan5Btn = document.querySelector('#dan5')
const dan99Wrap = document.querySelector('#dan99Wrap') // p태그 삽입객체
console.log(dan2Btn, dan3Btn, dan4Btn, dan5Btn, dan99Wrap)
// 버튼 누를 때 p태그가 추가되면서 
let pTag = document.createElement('p') //구구단 함수 결과를 삽입하는 DOM 객체
console.log(pTag)
// pTag.innerHTML = '2X1=2'
//dan99Wrap.appendChild(pTag)
// ---------------------
// 구구단 함수생성
function dan99(num){
    pTag.innerHTML = `${num}X1=${num*1}<br>` //처음이 대입이면 이전 값 지움
    pTag.innerHTML += `${num}X2=${num*2}<br>`
    pTag.innerHTML += `${num}X3=${num*3}<br>`
    pTag.innerHTML += `${num}X4=${num*4}<br>`
    pTag.innerHTML += `${num}X5=${num*5}<br>`
    pTag.innerHTML += `${num}X6=${num*6}<br>`
    pTag.innerHTML += `${num}X7=${num*7}<br>`
    pTag.innerHTML += `${num}X8=${num*8}<br>`
    pTag.innerHTML += `${num}X9=${num*9}`
    dan99Wrap.appendChild(pTag)
}
dan99(1)
dan2Btn.addEventListener('click',function(){
    dan99(2)
})
dan3Btn.addEventListener('click',function(){
    dan99(3)
})
dan4Btn.addEventListener('click',function(){
    dan99(4)
})
dan5Btn.addEventListener('click',function(){
    dan99(5)
})
