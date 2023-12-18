package chap07.sec01.exam01;

/**
 * packageName : chap07.sec01.exam01
 * fileName : People
 * author : GGG
 * date : 2023-09-21
 * description : 상속, super()
 * 요약 :
 *     상속 : 클래스를 재 사용하는 객체지향 기능,
 *        말 그대로 부모 클래스의 모든 재산(속성, 함수, 생성자)
 *     장점 : 코드 효율화(재 사용성 증가)
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-21         GGG          최초 생성
 */
public class People {
    public String name; // 이름
    public String ssn; // 주민번호

//    생성자 (name, ssn) : 자동화 기능 : alt + insert

    public People(String name, String ssn) {
        this.name = name;
        this.ssn = ssn;
    }
}
