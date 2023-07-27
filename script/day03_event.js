//1. 변수생성
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const input_id = document.querySelector('#user_id')
console.log(btn1, btn2, btn3, btn4, btn5, input_id); //정상확인

// 2. 이벤트 작성
//btn3 클릭했을 때 경고창 띄우기
//객체.이벤트리스너('이벤트종류',함수(){실행결과})
btn3.addEventListener('click',function(){
    window.alert('error');
})
btn4.addEventListener('mouseover',function(){
    this.style.backgroundColor = 'aqua';
    //this 현재 이벤트 개체 대상 == btn4
    //현재대상.style.css 속성 = '대입값'
})
btn5.addEventListener('click',function(){
    btn4.style.transform = 'skewX(10deg)';
    btn3.style.backgroundColor = 'yellow';
    btn2.innerHTML = '결과';
    window.alert('good');
    this.innerHTML = '이벤트'
    btn1.innerHTML = '이벤트결과'
})
input_id.addEventListener('focus', function(){
    this.style.backgroundColor = 'lime';
})
input_id.addEventListener('blur',function(){
    this.style.backgroundColor = 'gray';
})
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트;,function(){실행});
