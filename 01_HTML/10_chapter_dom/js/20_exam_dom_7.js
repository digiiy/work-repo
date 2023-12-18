let cup = document.querySelector("#cup"); 

// 클릭 이벤트 함수
// js 선택함수 이용해서 태그에 접근가능 : img 태그
// 태그의 모든 속성을 사용할 수 있음 : src, width, height, id, class
function chagePic(){
    document.querySelector("#cup").src = "./img/cup-2.png";
}