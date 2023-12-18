let cont = document.querySelector("#cover");

// 마우스가 위로 올라가면 함수
cont.addEventListener("mouseover", function(){
    // girl.(./img/easys-1.jpg) -> boy(./img/easys-2.jpg)
    // img 태그의 src 속성 조작
    cont.src = "./img/여자아이.jpg"
})
// 마우스가 나가면 함수
cont.addEventListener("mouseout", function(){
    cont.src = "./img/남자아이.jpg"
})
