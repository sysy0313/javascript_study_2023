//for
//0~4반복문
for(let i = 0; i <=4 ; i++){
    console.log(i)
}
//변수
const list = document.querySelectorAll('.test li')
console.log(list, list[0], list[1])
console.log('---------------')
for(let i=0; i < list.length; i++){
    console.log(list[i]);
    // list[i].style.backgroundColor = 'yellow';
    //홀수 li 노랑
    //짝수 아쿠아
    if(i%2 === 1){
        list[i].style.backgroundColor = 'yellow'
    }else{
        list[i].style.backgroundColor = 'aqua'
    }
}
console.log('------------------------')
//다중for
for(let i=0; i<2; i++){//0 -> 1 까지 2번 반복문
    console.log(i)
    for(let j=1; j<6; j++){//1~6까지 5번 반복문
        console.log(`j=${j}`)
    }
}
console.log('--------------------------------------')
//ul-li*3-span*2
let ulTag = document.createElement('ul')
let liTag = document.createElement('li')
const answer1 = document.querySelector('.answer1')
console.log(ulTag, answer1, liTag)
/* for(let i = 0; i<3; i++){//1단 for li*3
    ulTag.innerHTML += `<li>li${i+1}`
    for(let j=0; j<2; j++){//2단 for span*2
        ulTag.innerHTML += `<span>span${j+1}</span><br>`
    }
    ulTag.innerHTML += `</li>`
} */
for(let i = 0; i<3; i++){//1단 for li*3
    liTag = document.createElement('li')//li 생성
    liTag.innerHTML += `li${i+1}` //li 태그 안에 글자 넣기
    for(let j=0; j<2; j++){//2단 for span*2 //li 태그 안에span 
        liTag.innerHTML += `<span>span${j+1}</span><br>`
    }
    ulTag.appendChild(liTag)//ul 안에 li 삽입 -> 반복
}
answer1.appendChild(ulTag)
console.log(ulTag)

//inerHTML 작성은 가장 마지막에 속한 내용 = inline or img 등
