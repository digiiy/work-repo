package chap12.sec01.verify.exam03;

/**
 * packageName : chap12.sec01.verify.exam03
 * fileName : Faq
 * author : GGG
 * date : 2023-09-26
 * description : 모델 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class Faq {
    private int Fid;
    private String Subject;
    private String Text;

    public Faq() {

    }

    public Faq(int fid, String subject, String text) {
        this.Fid = fid;
        this.Subject = subject;
        this.Text = text;
    }

    public int getFid() {
        return Fid;
    }

    public String getSubject() {
        return Subject;
    }

    public String getText() {
        return Text;
    }
}
