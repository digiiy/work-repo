// 1) 부호를 바꾸어 출력한다.
// 입력 : -1
// 출력 : 1
// let num = Number(prompt(""))
// alert(-num);

// 2) 입력 : -2147483649
//    출력 : -2147483649
// let num1 = Number(prompt(""))
// alert(num1);

// 3) 정수 2개 입력된다. a를 b로 나눈 몫을 출력한다.
// 입력1(a) : 1
// 입력2(b) : 3
// 출력 : 0
// 힌트 : parseInt(실수) -> 정수, parseInt(문자열) -> 정수
// let num = Number(prompt(""))
// let num1 = Number(prompt(""))
// alert(parseInt(num / num1));

// 4) 정수 2개 입력된다. a를 b를 나눈 나머지를 출력한다/
// 입력1(a) : 10
// 입력2(b) : 3
// 출력 : 1
// let num = Number(prompt(""))
// let num1 = Number(prompt(""))
// alert(parseInt(num % num1));

// 5) 입력된 정수에 1을 더해 출력한다.
// 입력 : 2147483647
// 출력 : 2147483648
// let num = Number(prompt(""))
// alert(++num);

// 6) 정수 2개 입력받아 자동 계산하기
// 첫 줄에 합
// 둘째 줄에 차(빼기),
// 셋째 줄에 곱,
// 넷째 줄에 몫,
// 다섯째 줄에 나머지,
// 입력 1: 10
// 입력 2: 3
// 출력 : 13
    //   7
    //   30
    //   3
    //   1
// let num = Number(prompt("숫자1"));
// let num1 = Number(prompt("숫자2"));
// let a = num + num1;

// let arr1 =a + "" + "\n"; 
// let arr2 =num - num1 + "\n"; 
// let arr3 =num * num1 + "\n";
// let arr4 =num / num1 + "\n";
// let arr5 =num % num1 + "\n";
// alert(arr1 + arr2 + arr3 + arr4 + arr5);

// 7) 정수 3개 입력받아 합과 평균 출력하기
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 6
// 공식 : 합 = 모든 숫자 더하기
//       평균 = 모든숫자합/개수
// let num = Number(prompt("숫자1"));
// let num1 = Number(prompt("숫자2"));
// let num2 = Number(prompt("숫자3"));
// let a =(num + num1 + num2 + "\n");
// let b =(a/3);
// alert(a+b);

// 8) 정수 1개 입력 받아 2배 곱해 출력하기(설명)
// 입력 : 1024
// 출력 : 2048
// let num3 = Number(prompt("숫자1"));
// alert(num3*2);

// 9) 두 정수(a,b) 입력받아 비교하기1(설명)
// a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1(a): 9
// 입력 2(b): 1

// let a = Number(prompt("숫자1"));
// let b = Number(prompt("숫자2"));
// if(a>b){
//     alert("1")
// } else{
//     alert("0")
// }

// 10) // 참 거짓 바꾸기
// 입력된 값이 0이면, 1이면 0을 출력한다.
// 단, 0또는 1만 입력된다.
// let a = Number(prompt("숫자1"));
// if(a=0){
//     alert("1")
// } else if(a=1){
//     alert("0")
// }


// 11) 정수 3개 입력 받아 가장 작은 수 출력하기
// 가장 작은 값을 출력한다.
// 입력 1: 3
// 입력 2: -1
// 입력 3: 5
// 출력 : -1
// 힌트 : Math.min(값1, 값2...) : 최소값, Math.mat(값1, 값2) : 최대값
// let a = Number(prompt("숫자1"));
// let b = Number(prompt("숫자2"));
// let c = Number(prompt("숫자3"));
// alert(Math.min(a,b,c))

// 12) 정수 3개 입력받아 짝수만 출력하기
// 입력 1 : 1
// 입력 2 : 2
// 입력 3 : 4
// 출력 : 2
//        4
// let a = Number(prompt("숫자1"));
// let b = Number(prompt("숫자2"));
// let c = Number(prompt("숫자3"));

// // 임시 결과 변수
// let result = ""; // 최초 빈문자 초기화

// // 조건문 판단
// if(a % 2 == 0){
//     result = result + a + "\n";
// } 
// if(b % 2 == 0){
//     result = result + b + "\n";
// }
// if(c % 2 == 0){
//     result = result + c + "\n";
// } 
// alert(result);



// 13) 정수 3개 입력받아 짝/홀 출력하기(설명)
// odd(홀수), even(짝수)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 8
// 출력 : odd
//       even
//       even
// let a = Number(prompt("숫자1"));
// let b = Number(prompt("숫자2"));
// let c = Number(prompt("숫자3"));

// let result = "";
// if(a % 2 == 0){ // 짝수냐?
//     result = result + "even" + "\n";
// } else {
//     result = result + "odd" + "\n";
// }
// if(b % 2 == 0){ // 짝수냐?
//     result = result + "even" + "\n";
// } else {
//     result = result + "odd" + "\n";
// }
// if(c % 2 == 0){ // 짝수냐?
//     result = result + "even" + "\n";
// } else {
//     result = result + "odd" + "\n";
// }
// alert(result);

// 14) 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.
// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//    0 ~   39 : D
// 로 평가되어야 한다.
// 입력 : 73
// 출력 : B

//let point = Number(prompt("점수를 입력하세요"));
// if( num >= 90 && num < 100){
//     alert("A");
// } else if(num >= 70 && num <90){
//     alert("B")
// } else if( num >= 40 && num < 70) {
//     alert("C");
// } else if( num >= 0 && num < 40) {
//     alert("D");
// }

// 15) 평가 출력
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?
// 입력 : A
// 출력 : best!!!

// let char = prompt("문자")
// if(char === "A"){
//     alert("best!!");
// } else if(char === "B"){
//     alert("good!!")
// }else if(strChar === "C") {
//     alert("run!");
// }else if(strChar === "D") {
//     alert("slowly~");
// } else {
//     alert("what?");
// }

// 16) 정수 판별
// 양수이면 "양수", 음수이면 "음수" 0이면 0을 출력
// 입력값 > 0(양수)
// 입력 : 5
// 출력 : 양수

// let num = Number(prompt("정수를 입력하세요."))
// if(num >0){
//     alert("양수")
// }else{
//     alert("음수")
// }

// 17) 비만도 측정
// BMI 수치 비만 판정
// ~10 이하 : 정상
// 11~20 이하 : 과체중
// 20 초과 : 비만
// 비만도를 입력받아서 위의 문자열로 출력하세요
// 입력 : 15 
// 출력 : 과체중
// let k = Number(prompt("비만도를 입력하세요."))
// if(k <= 10 ){
//      alert("정상");
//  } else if(k >= 11 && k <= 20 ){
//      alert("과체중");
//  } else  {
//      alert("비만");
//  }

