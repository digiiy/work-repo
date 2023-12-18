package chap06.sec03.verify.exam02;

/**
 * packageName : chap06.sec03.verify.exam02
 * fileName : Member
 * author : GGG
 * date : 2023-09-20
 * description : 회원 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Member {
    String id; // 회원 id
    String name; // 회원명

    //    생성자 : 2
    public Member(String name, String id) {
        this.id = id;
        this.name = name;
    }

}
