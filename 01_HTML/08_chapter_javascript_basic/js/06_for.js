// 반복문 : for문
// 왜? 같은 명령문을 많은 횟수를 출력하고 싶을때
// alert("hello"); // 10번 출력

// 사용법: 초기값을 조건식에 넣어 판단해서 참이면 반복,
//         거짓이면 중단함 
// for(초기값;조건식;증감식){
//    반복문(문장);
// }

// 예제) 안녕하세요를 3번 출력하세요. 단, 반복문 사용
// for(let k=0; k < 3; k++){
//     alert("안녕하세요");
// }

// TODO: 자주 나오는 코딩 3가지 패턴: 꼭 기억할 것
// TODO: 1) 카운팅 : 1씩 증가시키기
// 예제 : count 변수가 1부터 10까지 1씩 증가하는 코드를 작성하세요.
// let count = 0;
// for(let k=1; k <= 10; k++){
    // k = 1 1 <= 10 참 == count = 0 + 1
    // k = 2 2 <= 10 참 == count = 1 + 1
    // k = 3 3 <= 10 참 == count = 2 + 1
    // k = 4 4 <= 10 참 == count = 3 + 1
    // k = 5 5 <= 10 참 == count = 4 + 1
    // count = count + 1; // 카운팅 코드
    // alert(count);


// TODO: 2) 누적합
// 예제 : 1 ~ 10까지 모든 숫자를 더해서 최종 결과를 출력하는 코드를 작성하쇼
// let count = 0;
// let sumVal = 0;
// for(let i=1; i<=10; i++){
    // 카운팅 코드
    // count = count + 1;
    // 누적합 코드
    // i=1 일때 1<=10 참 , count = 0 + 1, sumVal = 0 + 1
    // i=2 일때 2<=10 참 , count = 1 + 1, sumVal = 2 + 1
    // ...
    // sumVal = 55;
//     sumVal = sumVal + count;
// }
// alert(sumVal);

// TODO: 3) 문자열 붙이기
// 예제 : ********** 를 화면에 출력하세요
// 단 , 반복문 이용
// let strCount = ""; // 빈 문자열("")로 초기화
// for(let i=1; i<=10; i++){
//     strCount = strCount + "*";
// }
// alert(strCount);

// 연습 : 아래 결과처럼 별 출력하기
// *
// **
// ***
// ****
// *****
let strCount = "";
for(let i=1; i<=5; i++){
    strCount = strCount + "*";
    console.log(strCount);
}
