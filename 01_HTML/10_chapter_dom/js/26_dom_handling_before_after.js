// TODO: 선택 태그 앞/뒤 추가
// 선택함수 : li 태그 중 class=two 인것
// 사용법 : document.querySelector(css선택자)
// 1) 선택한 태그
let liTag = document.querySelector(".two"); // 녹색

// 2) 이동할 태그
let movingTag = document.querySelector(".movingTag"); // 빨간색

// TODO: 선택한 요소의 앞에 추가 : 문자열/태그 모두 이동가능
// TODO: 사용법 : 태그.before(이동할 태그)
liTag.before(movingTag);

// TODO: 선택한 요소의 뒤에 추가 : 문자열/태그 모두 이동가능
// TODO: 사용법 : 태그.after(이동할 태그)
liTag.after(movingTag);

// 자바스크립트 
 