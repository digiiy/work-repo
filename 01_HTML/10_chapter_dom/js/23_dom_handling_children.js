// TODO: 자식 요소(태그) 접근
// 선택함수 : querySelector(css선택자)
let ulTag = document.querySelector("ul"); // ul 태그
// 사용법 : 태그.children[1] : 2nd li
//          태그.children[2] : 3rd li
let two = ulTag.children[1].innerHTML; // 2nd li의 텍스트
let three = ulTag.children[2].innerHTML; // 3rd li의 텍스트

// 출력
console.log("two", two);
console.log("three", three);

// TODO: 1st 자식요소(태그) / 마지막 자식요소(태그) 접근
// TODO: 사용법 : 태그.firstElementChild;
let one = ulTag.firstElementChild.innerHTML; // 1st li의 텍스트
// TODO: 사용법 : 태그.lastElementChild;
let last = ulTag.lastElementChild.innerHTML; // 1ast li의 텍스트

console.log("one", one);
console.log("last", last);