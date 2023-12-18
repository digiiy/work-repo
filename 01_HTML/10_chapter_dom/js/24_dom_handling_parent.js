// TODO: 부모 요소(태그) 접근
// 선택함수 : li 태그 중 class=two 인것
let liTag = document.querySelector(".two")

// TODO: 사용법 : 태그.parentElement; // 태그의 부모태그
let parent = liTag.parentElement;

console.log("parent", parent);