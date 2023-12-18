package chap02;

import java.util.Scanner;

/**
 * packageName : chap02
 * fileName : Sec0204
 * author : GGG
 * date : 2023-09-18
 * description :
 * 요약 :
 *       System.out.println() : 화면에 출력하고 줄바꿈 함수
 *       System.out.println() : 화면에 출력하는 함수
 *       System.out.println("%d %s %f", 정수 변수, 문자열 변수, 실수 변수)
 *       Scanner : 콘솔 입력을 받기 위한 클래스(객체 정의)
 *                 한라인 입력 받기 함수 : .nextLine();
 *                 공백까지 입력 받기 함수 : .next()
 *                 참고) nextInt(), nextDouble() 등
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-18         GGG          최초 생성
 */
public class Sec0204 {
    public void  exam05(){
//        입력 받기 : System.in (키보드 입력)
        Scanner scanner = new Scanner(System.in);
        String inputData; // 입력 문자열
        while (true) {
            inputData = scanner.nextLine(); // 1라인 입력받기
            System.out.println("입력된 문자열" + inputData);
//            TODO: 코드를 완성하세요 (입력된 문자열이 q가 들어오면 반목문 종료하게 코딩하세요)
//            TODO : 자바의 문자열 비교 문자열.equlas("문자열2") : 같으면 true, 아니면 false
            if (inputData.equals("q")) {
                break;
            }
            }
        System.out.println("종료");
        }
    }

