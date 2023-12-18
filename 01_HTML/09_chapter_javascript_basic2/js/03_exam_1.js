// 함수 문제 풀이
// 연습문제 1)
// 함수를 사용해 출력하세요
// 입력 : 10
// 출력 : 20

// let num = Number(prompt("숫자를 입력하세요"))
// function f(a){
//     return a * 2;
// }
// let result = f(num);
// alert(result);

// 연습문제 2)
// 함수를 사용해서 출력하세요.
// 짝수이면 "even" 출력하고, 홀수이면 "odd" 출력하세요.
// 입력 : 2
// 출력 : even


// let num = Number(prompt("숫자를 입력하세요"))
// function name(a){
// //  a가 짝수이면
//     if(a % 2 == 0){
//         alert("even")    
//     }else {
//         alert("odd")
//     }
// }
// // 함수 사용
// name(num);

// 연습문제 3)
// 함수를 이용해서 아래를 작성하세요.
// 1 ~ 10 까지의 합을 출력하세요.
// 입력 : 10
// 출력 : 55

// function name(A){
//     let sumVal = 0; // 누적합 변수 초기화
//     for(let i=1; i<=A; i++){
//         sumVal = sumVal + i; // 누적합(params까지의 누적합)
//     }
//     alert(sumVal); // 결과 출력
// }
// // 함수 사용(호출)
// // 사용법 : 함수명(값);
// let num = Number(prompt("숫자"));
// name(num);

// 연습문제 4)
// 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 입력 1 : 1
// 입력 2 : 2
// 입력 3 : 3
// 출력 : 1
// 최소값 구하기(Math.min), 로직(코딩) 들어가야함
// 함수 2nd 형태 (매개변수 있고, return 없는 함수)
// let num = Number(prompt("숫자"));
// let num1 = Number(prompt("숫자"));
// let num2 = Number(prompt("숫자"));
// function name(params, params1, params2){
//     alert(Math.min(params, params1, params2));
// }
// name(num,num1,num2)

// 연습문제 5)
// 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 5의 배수이면 "5의 배수이다" 출력,
// 아니면 "5의 배수가 아니다" 라고 출력하세요
// 입력 : 5
// 출력 : 5의 배수이다.
// 입력값 :5

// let num = Number(prompt("숫자"));
// function MultiFive(params){
//     // 5의 배수 구하는 코딩하면됨
//     if(params % 5 ==0){
//         alert("5의 배수이다.");
//     } else{
//         alert("5의 배수가 아니다.")
//     }
// }

// // 함수 사용(호출)
// // 사용법 : 함수명(입력값)

// MultiFive(num);

// 연습문제 6)
// 함수를 이용해서 코딩하세요
// 3가지 숫자를 입력받아 합계와 평균 구하기
// 입력 : 80
// 입력2 : 90
// 입력3 : 100
// 결과 : 270 90

let num = Number(prompt("숫자"));
let num1 = Number(prompt("숫자"));
let num2 = Number(prompt("숫자"));
function sumVal(params){
    sum = (num + num1 + num2);
    avg = (sum/3);
    alert(sum + "\n" + avg)
}
sumVal(num,num1,num2);
