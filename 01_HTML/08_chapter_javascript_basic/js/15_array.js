// 배열(객체) : 여러가지 값을 저장하는곳
// 비교) 변수 : 한가지 값을 저장하는곳

// 배열의 형태
// 사용법 :
//   1) 배열 정의
//      let 배열 변수명 = ["값", "값2", ... "값n"];
//   2) 배열 사용 : 인덱스 번호(0 ~ n-1까지)
//      배열변수명[0] <- "값"
//      배열변수명[1] <- "값2"
//      ...
//      배열변수명[n-1] <- "값n"
// 예제 ) 아래와 같이 색깔 배열이 있다. 화면에 배열의 값을 출력
// let color = ["red", "green", "blue", "yello", "skyblue"];
// for(let i=0; i<=4; i++){
//     console.log(color[i]);
// }

// 예제 2) 아래와 같은 배열 값들이 있다.
// 아래처럼 출력하세요
// 출력 : 1번째 할일 : 우유구매
//        2번째 할일 : 업무 매일 확인하기
//        3번쨰 할일 : 필라테스 수업
// let todos =["우유구매", "업무 매일 확인하기", "필라테스 수업"]
// for(i=0;i<=2;i++){
//     console.log((i+1) + "번째 할 일:" + todos[i]);
    // console.log((i+1) + "번째 할 일:" + 배열변수[인덱스번호]);

// }

// 예제 3) 화면에 배열 값들을 출력하세요
// 출력 : 12345
// 힌트 : 배열의 길이 : 배열 변수명.length 사용하세요
let result = "";
let array =[1,2,3,4,5];
// array.length(배열의 크기(개수):5)
for(let i=0; i<array.length; i++){
    result = result + array[i];
}
console.log(result);