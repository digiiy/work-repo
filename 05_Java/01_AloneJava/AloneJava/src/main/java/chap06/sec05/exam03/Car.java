package chap06.sec05.exam03;

/**
 * packageName : chap06.sec05.exam03
 * fileName : Car
 * author : GGG
 * date : 2023-09-21
 * description : 정적(공유) 속성/함수 사용시 주의점(참고)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class Car {
    int speed; // 속성

    void run() {
        System.out.println(speed + "으로 달립니다.");
    }

    public static void main(String[] args) {
//        this.speed; // 스태틱이 붙었을때 일반 속성 사용불가, 에러 발생
//        TODO: 같은 클래스라도 객체를 생성해서 속성을 사용해야함
        Car car = new Car();
        car.speed = 60;
        car.run();
    }
}
