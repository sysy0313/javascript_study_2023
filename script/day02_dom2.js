//getElement 방식
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents')
const boxId = document.getElementById('box');
const aTag = document.getElementsByTagName('a');
const aFirst = document.getElementsByClassName('first')
const aLast = document.getElementsByClassName('last')
console.log(mainTag, hTag[0], contentsCls[0], box);
console.log(aTag, aTag[0], aTag[1], aTag[2], aFirst[0], aLast[0]);

//ES6 querySelector 방식
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents')
const boxIdQ = document.querySelector('#box');
const aTagQ = document.querySelectorAll('a');
const aFirstQ = document.querySelector('.first');
const aLastQ = document.querySelector('.last');
console.log(mainTagQ, hTagQ, contentsClsQ, boxIdQ);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTagQ[2], aFirstQ, aLastQ);

// querySelector, querySelectorAll 
// 객체가 2개 이상일 때 태그 작성 순서상 한 개만 인식하고 싶다면
// == querySelector()
// 객체가 2개 이상일 때 모두 잡아서 구분해서 사용하고 싶다면
// == querySelectorAll()
