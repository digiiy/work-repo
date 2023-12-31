package chap11.sec02.exam01;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * packageName : chap11.sec02.exam01
 * fileName : DateApplication
 * author : GGG
 * date : 2023-09-26
 * description : Date (날짜 함수 : 현재 날짜) , 과거 코딩
 *               월 : 0 ~ 11까지
 *               
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-26         GGG          최초 생성
 */
public class DateApplication {
    public static void main(String[] args) {
//    TODO: 날짜 함수 :
        Date now = new Date();          // 현재날짜 가져오기
        String strNow = now.toString(); // 현재날짜 문자열로 변환
        System.out.println(strNow);     // 결과 출력

//    TODO: 날짜 포맷(대소문자 구분) : yyyy--MM--dd hh:mm:ss(vs SQL : YYYY-MM-DD HH24:MI:SS)
        SimpleDateFormat simpleDateFormat
                = new SimpleDateFormat("yyyy년 MM월 dd일 hh시 mm분 ss초");
//        TODO: 사용법 : simpleDateFormat.format(Date객체변수)
        String strNow2 = simpleDateFormat.format(now); // 기본 포맷 -> 사용자 정의 포맷변경
        System.out.println(strNow2); // 결과 출력
    }
}
