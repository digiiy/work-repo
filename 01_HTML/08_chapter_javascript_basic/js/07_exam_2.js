// 문제 풀이
// 1) 입력된 단어를 입력된 횟수만큼 반복해 출력하세요
// 입력1 : love
// 입력2 : 3
// 출력 : lovelovelove
// 입력함수 : let char = prompt("1개의 문자열이 입력된다.")
//            let num = Number(prompt("1개의 숫자가 입력된다"));

// let char = prompt("1개의 문자열이 입력된다")
// let num = Number(prompt("1개의 숫자가 입력된다."))
// let str = ""; // 문자열 붙이기 변수 초기화 
// for(i=0; i< num; i++){
//     str = str + char; // char = "love"
// }
// console.log(str);

// 2) 입력 : 없음
//    출력 : "!@#$%^&*()"
// alert('"!@#$%^&*()"'); 

// 3) 입력 : 없음
//    없음 : "C:\Download\hello.cpp"
// 특수문자 출력방법 : \\
// alert("C:\\Download\\hello.cpp");

// 4) 입력 : 1.414213
//    출력 : 1.414213
// let num = Number(prompt("숫자를 입력하세요"))
// alert(num);

// 5) 입력 : 1.59254
//    출력 : 1.59
// 소수점 자르기 함수 : 숫자.toFixed(소수자리)
// let num = Number(prompt("숫자를 입력하세요"))
// alert(num.toFixed(2));

// 6) 입력 : 125
//    출력 : 125 125 125
// let num = Number(prompt("숫자를 입력하세요"))
// alert(num + " " + num + " " + num);

// 자료형 : 배열
// 자료형 : 문자열(String), 숫자(number), 참/거짓(boolean/bool) 배열
// 변수 : 변하는 값을 저장하는 장소(1가지 값만 저장함), let 변수명
// 배열 : 여러가지 값을 저장하는 장소, 변수명 동일하게 사용, 인덱스 번호
// 사용법 : 변수명[인덱스 번호]
// 보충 설명 : a[0] == 0번 방에 값, a[1] == 1번 방에 값이 들어감
// 예) a[0] = 1, a[1] = 2, ...

// 예제 7) 입력 = 1 2
//         출력 = 2 1
// 자바스크립트에서 문자열 자르기 함수 : 문자열.split("자를 문자")
// 예) let arr = prompt("두 정수를 입력해 주세요").split(" ");
//     arr(배열), arr[0] = 1, arr[1] = 2
//     alert(arr[1] + " " + arr[0]); // 2 1 

// 7) 입력 : A B
//    출력 : B A
// let arr = prompt("두 정수를 입력해주세요").split(" ");
// alert(arr[1] + " " + arr[0]); // arr[0] = A, arr[1] = B

// 8) 입력 : 3:16
//    출력 : 3:16
// let num = prompt("")
// alert(num);

// 9) 입력 : 2013.8.5
//    출력 : 2013.08.05
// 문자열 자르기 함수 : 문자열.split("자를 문자");
// let num = prompt("").split(".")
// let year = num[0];
// let month = num[1];
// let day = num[2];
// alert(num[0] + ".0" + num[1] + ".0" + num[2]);

// 10) 입력 : 000907-1121112
//     출력 : 0009071121112
// let num = prompt("").split("-");
// let first = num[0];
// let second = num[1];
// alert(first + second);

// 11) 입력 : programming is very fun!!
//     출력 : programming is very fun!!
// let char = prompt("");
// alert(char);

// 12) 입력 : 1.414213
//     출력 : 1
// let num = prompt("숫자를 입력하세요").split(".");
// let first = num[0];
// let second = num[1];
// alert(first);

// 13) 입력 : Boy
//     출력 : 'B'
//            'o'
//            'y'
// Boy(문자열) : 1문자의 합 == 문자들의 배열
// let arr = "Boy" -> arr[0] = "B", arr[1] = "o", arr[2] = "y";
// let strcher = prompt(""); // Boy
// let arr = "'" + strcher[0] + "'" + "\n"; 
// let arr2 = "'" + strcher[1] + "'" + "\n"; 
// let arr3 = "'" + strcher[2] + "'" + "\n"; 
// alert(arr + arr2 + arr3);

// 14) 두 정수의 합을 출력한다.
// 입력1 : 2147483648
// 입력2 : 2147483648
// 출력 : 4294967296
// let num1 = Number(prompt(""));
// let num2 = Number(prompt(""));
// alert(num1 + num2);

// 15) 입력 : 75254 
//     숫자문자열 : "75254"
//               "75254" == "7" + "5" + "2" + "5" + "4"
//                       배열[0] + 배열[1] ... + 배열[4]
// let aaa = "75254";
//     aaa[0] == "7";
//     aaa[1] == "5";
//     alert(aaa[3]) // 5
// 출력 : [70000]
//        [5000]
//        [200]
//        [50]
//        [4]
let arr = prompt("")
let arr1 = "[" + arr[0] + "0000]" + "\n"; 
let arr2 = "[" + arr[1] + "000]" + "\n"; 
let arr3 = "[" + arr[2] + "00]" + "\n";
let arr4 = "[" + arr[3] + "0]" + "\n";
let arr5 = "[" + arr[4] + "]" + "\n";
alert(arr1 + arr2 + arr3 + arr4 + arr5);


