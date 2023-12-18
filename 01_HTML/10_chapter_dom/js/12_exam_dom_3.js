function sum_avg(kor, eng, math){
    let sumVal = kor + eng + math; // 합계
    let avgVal = sumVal / 3; // 평균

    // id = "kor" 위치에 국어(kor) 출력
    document.querySelector("#kor").innerHTML = kor;
    document.querySelector("#eng").innerHTML = eng;
    document.querySelector("#math").innerHTML = math;
    document.querySelector("#sum").innerHTML = sumVal;
    document.querySelector("#avg").innerHTML = avgVal;

}
