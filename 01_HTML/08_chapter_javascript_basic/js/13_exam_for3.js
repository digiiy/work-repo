// 1) for문안에 if문으로 짝수체크해서 더하기
// 입력 : 없음
// 출력 : 1~100까지 합계 구하는데
//        짝수(2의 배수)의 합계를 구해서 출력하세요.

// let result = 0;
// for(i=1; i<=100; i++){
//     if(i % 2 === 0){
//         result = result + i;
//     }
// }
// document.querySelector("#output").innerHTML = result;

// 2) 입력 : 없음
// 2) 입력 : 1~100까지 합계 구하는데
//        3의 배수의 합계를 구해서 출력하세요.

// let result = 0;
// for(i=1; i<=100; i++){
//     if(i % 3 === 0){
//         result = result + i;
//     }
// }
// document.querySelector("#output").innerHTML = result;

// 3) 1부터 n까지 합 구하기
// 입력예시 : 100
// 출력예시 : 5050

// let num = Number(prompt("문자 1개를 입력하세요"))
// let result = 0;
// for(let i=1; i<=num; i++){
//     result = result + i;
// }
// document.querySelector("#output").innerHTML = result;
 

// 4) First Special Judge (Test)
// 10개의 수 중 5의 배수가 있으면 그 중 하나만 출력, 없다면 0을 출력
// 입력예시 : 1 2 3 4 5 6 7 8 9 10
// 출력예시 : 5
// 힌트 : 입력값 : .split("구분자") : 문자열 자르기 함수
// 힌트 : 1) 숫자배열 반복문 실행해서 5의 배수 있으면 출력; break;
//       2) 만약에 5의 배수 1개도 없다면(카운트변수 === 0) "0" 출력 
//         (반복문 내부에 5의 배수가 있을때 마다 카운트변수 1증가)
let num = prompt("문자 2개를 입력하세요").split(" ").map(Number); // 숫자 배열
// 카운트 변수 초기화
let count = 0;

// 반복문
// TODO: 1) 숫자배열 반복문 실행해서 5의 배수 있으면 출력;
// 배열 : 여러개의 값을 저장하는 공간
for(let i=0; i<num.length; i++){
    if( num[i] % 5 ===0){
        document.querySelector("#output").innerHTML=num[i];
        count = count + 1;
        break;
    }
}
// TODO: 2) 만약에 5의 배수가 1개도 없다면 0을 출력
// TODO: (반복문 내부에 5의 배수가 있을때마다 카운트변수 1증가)
// 5의 배수가 숫자 배열에 1개도 없으면 : count === 0임
if(count ===0) {
    document.querySelector("#output").innerHTML="0";
}

// 5) 1부터 n까지 중 짝수의 합 구하기
// 입력예시 : 5
// 출력예시 : 6

// let result = 0;
// let num = Number(prompt(""))
// for(let i=1; i<=num; i++){
//     if(i % 2 === 0){
//         result = result + i;
//     }
// }
// document.querySelector("#output").innerHTML = result;

// 6) 두수 사이의 홀수 출력하기
// 입력   : 2
// 입력 2 : 7
// 출력예시 : 3 5 7

// let result = "";
// let num = Number(prompt("숫자")) // 2
// let num1 = Number(prompt("숫자")) // 7
// for(let i=num; i<=num1; i++){
//     if(i % 2 ===1){
//         result = result + i + " ";
//     }
// }
// document.querySelector("#output").innerHTML = result;
