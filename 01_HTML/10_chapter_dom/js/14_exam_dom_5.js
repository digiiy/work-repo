let A = prompt("글자");
if(A=="y"){
    // 글쓰는 버튼 추가
    document.querySelector("#app").innerHTML = "<button>글쓰기</button>";
} else {
    // 글수정 버튼 추가
    document.querySelector("#app").innerHTML = "<button>글수정</button>";
}
