// 1) 1부터 100까지 출력하기
// for 문 사용

// for(let i=1; i<=100; i++){
//     console.log(i)

// }
// 2) 1부터 n까지 출력하기
// 입력예시 : 5
// 출력예시 : 1 2 3 4 5
// let num = Number(prompt("정수1"));
// // 문자열 붙이기 변수
// let result = "";
// for(let i=1; i<=num; i++){
//     result = result + i + "";
// }
// console.log(result);

// 3) a(시작값)부터 b(끝값)까지 출력하기
// 입력예시1 : 8
// 입력예시2 : 3
// 출력예시 : 3 4 5 6 7 8
// for(시작값;시작값<=끝값;증감식){}
// 입력값 두개 비교하는 Math.max

// let num = Number(prompt("숫자 1개"));
// let num2 = Number(prompt("숫자 1개"));
// // 최대값(Math.max()), 최소값(Math.min)
// let maxNum = Math.max(num, num2); // 큰값
// let minNum = Math.min(num, num2); // 작은값
// // 문자열 붙이기 변수
// let result = ""; // 빈 문자열로 초기화
// for(let i=minNum; i<=maxNum; i++){
//     // 문자열 붙이기 : 문자열 + 숫자 => 문자열(자동 자료형변환)
//     result = result + i + " ";
// }
// alert(result);

// 4) 별 출력하기
// 입력 : 5
// 출력 : *****

// 문자열 붙이기 변수
let result = "";
let num = Number(prompt(""))
for(let i=0; i<=num; i++){
    result = result +"*";
}
console.log(result);


// 5) 1~10까지 합계를 구해서 아래와 같이 화면에 출력해보세요
// 출력 : "1~10까지의 합계" : 55

// let sum = 0;
// for(let i=1; i<=10; i++){
//     sum = sum + i; // 누적합변수 = 누적합변수 + 카운팅변수
// }
// console.log("1~10의 합계 : " + sum);