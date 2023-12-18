// TODO: 1251 ~ 1261

// TODO: 1251
// let num = "";
// for(let i=1; i<=100; i++){
//   num = num + 1;
    
// }
// console.log("");

// TODO: 1252
// let num1 = Number(prompt("정수를 입력하세요"))
// let result = "";
// for(let i=1; i<=num1; i++){
//   result = result + i + " ";  
// }
// console.log(result);

// TODO: 1253
// let num1 = Number(prompt("정수를 입력하세요"))
// let num2 = Number(prompt("정수를 입력하세요"))
// let result1 = "";
// for(let i=1; i<=num1; i++){
//   result1 = result1 + i + " ";  
// }
// console.log(result1);


// TODO: 1254
// let char = prompt("두개의 알파벳을 입력하세요").split(" ") 
// let a = char[0].charCodeAt()
// let b = char[1].charCodeAt()
// let result = "";	

// for (let i=a; i<=b; i++) {
    
//     result += String.fromCharCode(i) + " "
// }
// console.log(result);

// TODO: 1255
// let char = prompt("두 실수를 입력하세요").split(" ") 
// let count = parseFloat(char[0])
// let count2 = parseFloat(char[1])
// let result = ""
// for(let i = count; i <= count2; i+=0.01){
//     result += i.toFixed(2) + " "
// }
// console.log(result);

// TODO: 1256
// let num = Number(prompt("정수를 입력하세요"))
// let result = ""
// for(let i = 1; i <= num; i++){
//     result += "*"
// }
// console.log(result);

// TODO: 1257
// let num = prompt("두 정수를 입력하세요").split(" ").map(Number) 
// let result = ""
// for(let i = num[0]; i <= num[1]; i++){
//     if ((i % 2) != 0) {
//         result += i + " "
//     }
// }
// console.log(result);

// TODO: 1258
// let num = Number(prompt("정수를 입력하세요"))
// let result = 0;
// for(let i=1; i<=num; i++){
//   result += i
// }
// console.log(result);

// TODO: 1259
// let num = Number(prompt("정수를 입력하세요"))
// let result = 0;
// for (let i=1; i<=num; i++){
//   if(i%2 ==0){
//     result += 1;
//   }
// }
// console.log(result);

// TODO: 1260
// let num = (prompt("두 수를 입력하세요")).split(" ").map(Number) 
// let result = 0;
// for(let i=num[0]; i<=num[1]; i++){
//   if(i%3==0){
//     result += i;
//   }
// }
// console.log(result);

// TODO: 1261
// let num = prompt("숫자를 입력하세요").split(" ").map(Number);
// let result = 0;
// for(let i=0; i< num.length; i++){
//   if(num[i]%5 == 0){
//     console.log(num[i])
//     result += 1;
//     break;
//   }
// }
// if(result ==0){
//   console.log(0)
// }


// TODO: 1265 ~ 1284, 1286

// TODO: 1265
// let num = Number(prompt("정수를 입력하세요"));
// let result = ""
// for(let i =1; i<=9; i++){
//     result = (num+ "*" + i + "=" + (num*i)) + "\n"
//     console.log(result);
// }

// TODO: 1266
// let num = Number(prompt("정수를 입력하세요"))
// let sum = 0;
// for(let i=1; i<=sum; i++){
//   let random = (Math.floor(Math.random()&1000)+ 1)
//   if(random%5 == 0){
//     sum += random
//   }
// }
// console.log(sum);

// TODO: 1267
// let num = Number(prompt("정수를 입력하세요"))
// let sum = 0
// for(let i=1; i<=num; i++){
//   let random = (Math.floor(Math.random()*1000)+1)
//   if(random%5 == 0){
//     sum += random
//   }
// }
// console.log(sum)

// TODO: 1268
// let num = Number(prompt("정수를 입력해주세요"))
// let sum = 0
// for(let i=1; i<=num; i++){
//   let random = (Math.floor(Math.random()*100) +1)
//   if(random%2 != 0){
//     sum += 1
//   }
// }
// console.log(sum)

// TODO: 1269
// let num = Number(prompt("정수를 입력해주세요")).split(" ").map(Number)
// let sum = 0
// for(let i=1; i<=num[3]; i++){
//     if (i == 1) {
//         sum = num[0]
//     } else{
//         sum = (sum * num[1]) + num[2]
//     }
// }
// console.log(sum)

// TODO: 1270
// let num = Number(prompt("정수를 입력해주세요")) 
// let char = 0
// for(let i = 1; i<=num; i++){
//     if(i%10 == 1){
//         char += 1
//     }
// }
// console.log(char)

// TODO: 1271
// let num = Number(prompt("정수를 입력하세요")) 
// let sum = 0
// for(let i = 1; i<=num; i++){
//     let random = (Math.floor(Math.random() * 1000000) + 1)
//     sum = Math.max(random)
// }
// console.log(sum)

// TODO: 1272
// let input = prompt("정수를 입력해주세요").split(" ").map(Number);
// let num1 = 0;
// let num2 = 0;

// if(input[0] % 2 == 0){
//    num1 = input[0] * 5;
// } else {
//    num1 = input[0]
// }
// if(input[1] % 2 == 0){
//    num2 = input[1] * 5;
// } else {
//     num2 = input[1]
// }
// console.log(num1+num2);

// TODO: 1273
// let num = Number(prompt("정수를 입력하세요"));
// let result = "";
// for(let i=1; i<=num; i++) {
//     if(num % i == 0 ){
//     result = result + i + " ";
//     }
// }
// console.log(result)

// TODO: 1274
// let num = Number(prompt("정수를 입력하세요"));
// for(let i=2; i<num; i++) {
//     if(num & i === 0) {
//         console.log("not prime")
//     } else {
//         console.log("prime")
//     }
// }

// TODO: 1275
// let num = prompt("정수를 입력하세요").split(" ").map(Number);
// let result = 1;
// for(let i=1; i<=num[1]; i++) {
//     result = result * num[0];
// }
// console.log(result);

// TODO: 1276
// let num = Number(prompt("정수를 입력하세요"));
// let result = 1;
// for(let i=num; i>0; i--) {
//   result = result * i;
// }
// console.log(result);

// TODO: 1277
// let num = Number(prompt("정수를 입력하세요")) 
// let sum = ""
// let sum1 = ""
// let sum2 = ""

// if (num % 2 != 0) {
//     for (let i = 1; i <= num; i++) {
//         let random = (Math.floor(Math.random() * num) + 1)
//         if (i == 1) {
//             sum = sum + random + " "
//         }
//         if ((1 + num) / 2 == i) {
//             sum1 = sum + random + " "
//         }
//         if (i == num) {
//             sum2 = sum1 + random + " "
//         }
//         console.log(random)
//     }
// }
// console.log(sum2)

// TODO: 1278
// let num = prompt("정수를 입력하세요");
// let num1 = num.length;
// console.log(num1);

// TODO: 1279
// let num = prompt("정수를 입력하세요").split(" ").map(Number);
// let result = 0;

// for(let i=num[0]; i<=num[1]; i++) {
//     if(i%2 !== 0) {
//         result = result + i;
//     } else if (i%2 ==0) {
//         result = result - i
//     }
// }
// console.log(result);

// TODO: 1280
// let num = prompt("정수를 입력하세요").split(" ").map(Number);
// let result = 0;
// let result1 = "";

// for(let i=num[0]; i<=num[1]; i++) {
//     if(i%2 !== 0) {
//         result = result + i;
//         result1 = result1 + "+" + i
//     } else if (i%2 ==0) {
//         result = result - i
//         result1 = result1 + "-" + i
//     }
// }
// console.log(result1 + "=" + result);

// TODO: 1281
// let num = prompt("정수를 입력하세요").split(" ").map(Number);
// let result = 0;
// let result1 = "";

// if (num[0] < num[1]) {
//   for (let i = num[0]; i <= num[1]; i++) {
//     if (i % 2 !== 0) {
//       result = result + i;
//       result1 = result1 + "+" + i;
//     } else if (i % 2 == 0) {
//       result = result - i;
//       result1 = result1 + "-" + i;
//     }
//   }
//   console.log(result1 + "=" + result);
// } else if (num[1] < num[0]) {
//   for (let i = num[1]; i <= num[0]; i++) {
//     if (i % 2 !== 0) {
//       result = result + i;
//       result1 = result1 + "+" + i;
//     } else if (i % 2 == 0) {
//       result = result - i;
//       result1 = result1 + "-" + i;
//     }
//   }
//   console.log(result1 + "=" + result);
// } else if (num[0] == num[1]) {
//     console.log(0);
// }

// TODO: 1282
// let num = Number(prompt("정수를 입력하세요"));
// let k = 0;
// for (let i=num; i>0; i--) {
//     if(i*i<num) {
//         k = num - (i*i);
//         console.log(k + " " + i);
//         break;
//     }
// }

// TODO: 1283
// let don = Number(prompt("금액을 입력하세요")) 
// let day = Number(prompt("날짜를 입력하세요")) 

// let sum = 0
// for (let i = 1; i <= day; i++) {
// let random = (Math.round(Math.random() * 201) - 100)
// sum = Math.round(don * random)
// }
// console.log(sum)
// if(sum - don > 0){
// console.log("good")
// } else if(sum - don == 0){
// console.log("same")
// } else{
// console.log("bad")
// }

// TODO: 1284
// let num = Number(prompt("정수를 입력하세요"));
// let result1 = 0;
// let result2 = 0;
// for(let i=2; i<=num; i++){
//     for(let j=2; j<=num; j++){
//         if(num%(i*j)==0){
//            result1 = i;
//            result2 = j;
//         }
//     }
// }
// for(let i=2; result1>i; i++){
//     if(result1 % i == 0) {
//         result1 = "not"
//     }
// }
// for(let i=2; result2>i; i++){
//     if(result2 % i == 0) {
//         result2 = "not"
//     }
// }

// if (result1 == "not" || result2 == "not"){
//     console.log("wrong number")
// } else if (result1 > result2){
//     console.log(result2 + " " + result1);
// } else if (result2>result1) {
//     console.log(result1 + " " + result2);
// }

// TODO: 1286
// let input = prompt("정수를 입력해주세요").split("\n").map(Number);
// console.log(Math.max(...input) + "\n" + Math.min(...input));

// TODO: 1294 ~ 1295, 1675

// TODO: 1294
// let input = prompt();
// let input1 = input.split("");
// let result = 0;
// let result2 = "";
// let result3 = "";
// for(let i=0; i<input.length; i++) {
//     result = result + input[i].charCodeAt(0) + ",";
// }
// result = result.split(",").map(Number);
// for(let i=0; i<result.length; i++) {
//     if(result[i] == 32) {
//         result[i] = 32
//         result2 = result2 + result[i] + ",";
//     } else if(result[i]==120){
//         result[i] = 97
//         result2 = result2 + result[i] + ","; 
//     } else if(result[i]==121) {
//         result[i] = 98
//         result2 = result2 + result[i] + ",";
//     } else if(result[i]==122) {
//         result[i] = 99
//         result2 = result2 + result[i] + ",";
//     } else {
//         result2 = result2 + (result[i]+3) + ",";
//     }
// }
// result2 = result2.split(",");
// for(let i=0; i<result2.length; i++) {
//     result3 = result3 + String.fromCharCode(result2[i]);
// }
// console.log(result3);

// TODO: 1295
// let input = prompt().split("");
// let result = "";
// let result1 = "";
// let result2 = "";
// let result3 = "";
// let result4 = "";
// for(let i=0; i<input.length; i++) {
//     result = result + input[i].charCodeAt() + ",";
// }
// result1 = result.split(",");
// for(let i=0; i<result1.length; i++) {
//       result1[i] = Number(result1[i])
//     if(result1[i]>=65 && result1[i]<=90){
//         result1[i] = result1[i] + 32
//     } else if(result1[i]>=97 && result1[i]<=122){
//         result1[i] = result1[i] - 32
//     } 
//     result2 = result2 + result1[i] + ",";   
// }

// result3 = result2.split(",");
// for(let i=0; i<result3.length; i++){
//    result4 = result4 + String.fromCharCode(result3[i]);
// }
// console.log(result4);

// TODO: 1675
let input = prompt();
let input1 = input.split("");
let result = 0;
let result2 = "";
let result3 = "";
for(let i=0; i<input.length; i++) {
    result = result + input[i].charCodeAt(0) + ",";
}
result = result.split(",").map(Number);
for(let i=0; i<result.length; i++) {
    if(result[i] == 32) {
        result[i] = 32
        result2 = result2 + result[i] + ",";
    } else if(result[i]==97){
        result[i] = 120
        result2 = result2 + result[i] + ","; 
    } else if(result[i]==98) {
        result[i] = 121
        result2 = result2 + result[i] + ",";
    } else if(result[i]==99) {
        result[i] = 122
        result2 = result2 + result[i] + ",";
    } else {
        result2 = result2 + (result[i]-3) + ",";
    }
}
result2 = result2.split(",");
for(let i=0; i<result2.length; i++) {
    result3 = result3 + String.fromCharCode(result2[i]);
}
console.log(result3);











