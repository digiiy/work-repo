function setToggle(){
    let content = document.querySelector("#content");
    if(content.classList.contains("dark") == true){
        // . light 클래스 추가
        content.classList.toggle("light")
    } else {
        content.classList.toggle("dark")
    }
    
    

}