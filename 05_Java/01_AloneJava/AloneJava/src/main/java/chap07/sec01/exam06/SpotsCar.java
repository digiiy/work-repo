package chap07.sec01.exam06;

/**
 * packageName : chap07.sec01.exam06
 * fileName : SpotsCar
 * author : GGG
 * date : 2023-09-21
 * description : 자식 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class SpotsCar extends Car {
//    함수 재정의
    @Override
    public void speedUp() {
        speed += 10; // 스포츠카 속도 
    }
//    함수 재정의 : final 함수는 재정의 안됨
    
}
