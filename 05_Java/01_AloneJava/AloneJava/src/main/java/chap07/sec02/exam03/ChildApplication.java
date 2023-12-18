package chap07.sec02.exam03;

/**
 * packageName : chap07.sec02.exam03
 * fileName : ChildApplication
 * author : GGG
 * date : 2023-09-22
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-22         GGG          최초 생성
 */
public class ChildApplication {
    public static void main(String[] args) {
//        다형서 이용 객체 생성
//        TODO: 부모 객체 = 자식 객체
//        부모 클래스 객체변수 = new 자식 생성자();
        Parent parent = new Child();
        parent.field1 = "data";
        parent.method1();
        parent.method2();
//        TODO: 자식의(child) 고유함수 사용못함
//            parent.method3(); // 없다

//        예제 1) 위에서 다형성을 이용했는데 부득이하게 자식 함수와 속성을 사용할 일이 생겼음
//        TODO: 강제 형 변환해서 자식 객체로 원복
        Child child = (Child) parent; // (작은것 -> 큰것: 자동), (큰것 -> 작은것:수동)
        child.field2 = "data2"; // 고유 속성 사용
        child.method3(); // 고유 함수 실행
    }
}

