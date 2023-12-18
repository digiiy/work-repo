// 함수(메소드) : js 내장함수(js 미리 만들어 놓은 함수들)
// 예) .split() , .toFixed() 등
// 함수 사용 이유(why?) : 코드 재사용(코딩 생산성 증가)
//                      코딩 라인이 짧아짐(코딩 효율성 증가)
// TODO: 함수 만드는법(함수 정의)
// TODO: 1) 함수 1st 형태(패턴)
// 사용법 : (1) 함수 정의
//      function 함수명(){
//          실행문;    
//      }
//      (2) 함수 사용(호출)
//      함수명(); // 함수 사용(호출)

// 예제) 안녕하세요 출력하는 함수를 정의하고 사용해보세요.
// 함수 정의 : 1번만 정의(함수명 유일)
// function hello(){
//     alert("안녕하세요");
// }
// // 함수 사용(호출)
// hello();
// // 코드 재사용(코딩 라인이 짧아짐)
// hello();
// hello();

// 예제 1) "hello world" 출력하는 함수를 작성하고 함수를 사용하세요
// 입력 : 없음
// 출력 : hello world
// 단 함수를 정의해서 출려갛세요
// function hello(){
//     alert("hello world");
// }
// function hello(){
//     alert("hello world2");
// }
// 함수 사용(호출), 무조건 hello world 고정됨
// 만약에 hello world2를 출력하고 싶다면?
// 기존에 동작하던 소스가 오류가 발생할 가능성이 커짐(소스 수정 지양)
// hello();

// TODO: 2) 함수 2nd 형태(패턴), 1st 보다 효율적임
// 사용법 : (1) 함수 정의
//       function 함수명(매개변수, ...){
//         실행문 = 실행문 + 매개변수; // 실행문에서 매개변수 활용 
//       }
//       (2) 함수 사용(호출)
//       함수명(값); // 매개변수에 값을 넣으면서 사용함

// 예제 2) 매개변수를 이용해서 함수를 정의하고 "안녕하세요" 출력해보세요
// function hi(paa){
//     alert(paa); // 매개변수를 실행문에 활용
// }
// // 이 방법이 유연한 수정을 덜하게 하는 방법
// // 함수 사용(호출)
// hi("안녕하세요"); // 매개변수에 값을 넣으면서 사용함(paa = "안녕하세요")

// TODO: 2) 함수 3rd 형태
// 사용법 : (1) 함수 정의
//     function 함수명 (매개변수,...){
//          let 결과 = 실행문(매개변수);
//          return 결과; 결과 내보내기(함수 밖으로)
//     }
//     (2) 함수 사용(호출)
//     let 변수 = 함수명(매개변수);

// 예제 3) 매개변수와 return이 있는 함수를 정의해서 hello world 출력하세요
// function hi(fa){
//     return fa + "world"; // params + "world" : 결과 내보내기됨
// }
// // 함수 사용(호출)
// let result = hi("hello");
// alert(result);

// 예제 4) 어떤 수를 매개변수로 받아서 제곱을 구하는 함수를 작성하세요
// 입력 : f(3)
// 출력 : 9

// function f(hh){
// //  return : 함수 밖으로 결과 내보내기 예약어
//     return hh * hh;
// }
// let result = f(3);
// alert(result);

// 예제 5) 원의 넓이 구하기 함수를 작성하세요.
// 원의 넓이 공식 : 반지름 * 반지름 * 3.14
// 입력 : 5
// 출력 : 78.5

// let num = Number(prompt("길이를 입력하세요"));
// function fi(r){
//     return r * r * 3.14;
// let result = fi(num);
// }
// alert(result);

// 예제 6) 원의 둘레 구하기 함수를 작성하세요.
// 원의 둘레 공식 : 반지름 * 2 * 3.14
// 입력 : 6
// 출력 : 37.68

// let num = Number(prompt("길이를 입력하세요"));
// function fi(r){
//     return r * 2 * 3.14;
// }
// let result = fi(num);
// alert(result);

// 예제 7) 시작수, 끝수가 주어지면 시작수~끝수까지의 합계를
//        구하는 함수를 작성하세요.
// 입력 1 : 100
// 입력 2 : 300
// 결과 : 40200
// 단, 함수를 정의해서 코딩하세요.



function sum(first, end){
    let result = 0;
    for(let i=first; i <= end; i++){
        result = result + i;
    }
    return result; // 함수 밖으로 결과 내보내기
}
let num1 = Number(prompt("길이를 입력하세요"));
let num2 = Number(prompt("길이를 입력하세요"));
// 함수 호출 
let sumInt = sum(num1, num2);
alert(sumInt);




