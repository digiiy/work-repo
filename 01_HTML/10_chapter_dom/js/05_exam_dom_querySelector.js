// 연습문제 1)
// h1 태그 1개만 선택해서 아래와 같이 변경하세요
// style.color = "orange"
// style.background = "red"
// innerHTML = "From JavaScript"
// let header = document.querySelector("h1");

// header.style.color = "orange"
// header.style.background = "red"
// // 문자열 조작 : h1 태그 사이의 문자열 변경
// header.innerHTML = "From JavaScript"

// 연습문제 2)
// h1 태그 모두 선택해서 아래와 같이 조작하세요
// style.color = "orange"
// style.background = "red"
// innerHTML = "From JavaScript"
// css (있는 html 태그에만 디자인 적용)
// js  (없는 것을 다른 것으로 조작할때 주로 사용)

let header = document.querySelectorAll("h1");
// 반복문 실행 : header(배열) h1 태그 3개있음
//              header[0] = h1 태그, header[1] = h1 태그, header[2] = h1 태그
for(let i=0; i<header.length; i++){
    header[i].style.color = "orange"
    header[i].style.background = "red"
    header[i].innerHTML = "From JavaScript"
}

