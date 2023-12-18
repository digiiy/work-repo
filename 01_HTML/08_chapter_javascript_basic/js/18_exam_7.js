// 문제
// 연습문제 1)
// 12시 이전이면 오전입니다 이후이면 오후입니다 를 출력하세요

// let date = new Date();
// let hour = date.getHours();
// if(hour => 12){
//     console.log("오후입니다.")
// }else(hour < 12){
//     console.log("오전입니다.")
// }

// 2) 
// 현재 날짜를 이용해서 아래와 같이 코딩하세요
// 현재 시각이 5시 이전이면 "잠을 자렴..."
//            7시 이전이면 "준비"
//            9시 이전이면 "출근"
//            12시 이전이면 "빈둥빈둥"
//            14시 이전이면 "식사"

// let date = new Date();
// let hour = date.getHours();
// if(hour < 5){
//     console.log("잠을 자렴.")
// }else if(hour < 7){
//     console.log("준비.")
// }else if(hour < 9){
//     console.log("출근.")
// }else if(hour < 12){
//     console.log("빈둥빈둥.")
// }else if(hour < 14){
//     console.log("식사.")
// }

// 3)
// 연도, 월, 일이 닷(.)으로 구분되어 입력된다.
// 대시를 구분기호로 사용해서 일-월-연도로 바꾸어서
// 코딩용어 : -(마이너스, 대시)
// 출력하세요
// 입력 : 2020.3.4
// 출력 : 4-3-2020

// let chal = prompt("날짜를 입력").split("."); // 잘리면 배열
// // chal[0] = 2020, char1[1] = 3, chal[2] = 4
// alert(chal[2] + "-" + chal[1] + "-" + chal[0]);

// 4) 2중 반복문(이중 루프, 반복문안에 반복문)
// 가로(10개) X 세로(5개) 형태
// 힌트) for문 2개 사용
// 출력 : **********
//        **********
//        **********
//        **********
//        **********


let result = "";
// 2중 반복문 : 세로(밖에 for문 : 줄 5번 반복)
for(let j=0; j<5; j++){
    // 가로(안에 for문 : *10번 반복)
    for(let i=0; i<10; i++){
        result = result + "*" // * 10번 문자열 붙이기(가로)
    }
    result = result + "\n";
}
alert(result)
