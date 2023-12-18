// 코딩 역사 : 구조적 프로그래밍(절차적) : c언어
//            -> 객체 지향 프로그래밍 : js, java, c++, c#, 파이썬
//            -> 함수형 프로그래밍 : 클로저 등
// 함수형 프로그램이 (1억) vs 객체지향(5000만원)
// 객체지향 : 40명 -> 5명(함수명) : AT&T (통신사)

// foreach : 
// 용도 : 단순 출력용
// 특징 : 1) return 없음
//        2) break 문 못씀
// 자동으로 반복문을 실행함(배열의 끝까지)
// 사용법 : 배열변수.forEach((value)=>{반복문;})
// let myArr = [1,2,3,4,5];

// 향상된 for문
// for (const i of myArr) {
//     console.log(i);
// }
// // 함수형 프로그래밍 함수 : foreach
// myArr.forEach((value, index)=>{
//     console.log("value", value);
//     console.log("index", index);
// });

// 연습문제 1) forEach() 함수 사용해서 출력하기
// let arr = [0,1,2,3,4,5,6,7,8,9,10];
// for (const i of arr) {
//     console.log(i);
// }

// 연습문제 2) forEach() 함수 사용해서 출력하기
let strDummy = ["a", "b", "c", "d", "e"];
strDummy.forEach((value)=>{
    console.log("value", value)
})
