package chap09.sec02.exam02;

/**
 * packageName : chap09.sec02.exam02
 * fileName : Anonymous
 * author : GGG
 * date : 2023-10-02
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-02         GGG          최초 생성
 */
public class Anonymous {
//    TODO: 1) 속성 : 익명 객체 사용
//     사용법 : 인터페이스명 변수 = new 인터페이스명(){익명 클래스(자식)}
    RemoteControl field =
        new RemoteControl() {
            @Override
            public void turnOn() {
                System.out.println("Tv를 켭니다.");
            }

            @Override
            public void turnOff() {
                System.out.println("Tv를 끕니다.");
            }
        };

//    TODO: 2) 함수의 지역 변수로 익명 객체 사용
    void method1() {
        RemoteControl localVar = new RemoteControl() {
            @Override
            public void turnOn() {
                System.out.println("오디오를 켭니다");
            }

            @Override
            public void turnOff() {
                System.out.println("오디오를 끕니다.");
            }
        };
        localVar.turnOn();
        localVar.turnOff();
    }

//    TODO: 3) 매개변수의 다형성 이용으로 익명 객체(자식) 사용
    void method2(RemoteControl remoteControl){
        remoteControl.turnOn();
        remoteControl.turnOff();
    }
}
