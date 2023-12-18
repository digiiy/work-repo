package chap04;

/**
 * packageName : chap04
 * fileName : Sec0402
 * author : GGG
 * date : 2023-09-19
 * description : 반복문
 * 요약 :
 *      for문 : for(초기화식; 조건식; 증감식) {반복문;}
 *      => 조건식이 true 일때만 반복문이 실행됨
 *      while문 : 초기화식;
 *               while(조건식) {
 *                   반복문;
 *                   증감식;
 *               }
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class Sec0402 {

    /**
     *  예제 1 : 1 ~ 10까지 숫자를 화면에 출력하세요
     *  단, 반복문 이용
     */
    public void exam01() {
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }
//        int result = 0;
//        for(int i = 1; i <= 10; i++){
//            result = result + 1;
//            System.out.println(result);
        }
    /**
     *  예제 2 : 1 ~ 100까지 합을 출력 : 반복문 이용(누적합)
     *  sum = sum + i (i는 1씩 증가)
     */

    public void exam02() {
        int sum = 0;

//      TODO: fori : for문 단축키
        for (int i = 1; i <= 100 ; i++) {
            sum = sum + i;
        }
//      TODO: 결과 : sout
        System.out.println(sum);

      }

    /**
     *  예제 : 주사위 2편 : 주사위 던져서 나오는 숫자를 화면에 출력하되
     *                    6이 나오면 반복문을 중단하고 빠져나오세요
     *                    단, 빠져 나올때 프로그램 종료 라고 출력하세요
     *    랜덤함수 : int num(int)(Math.random()*6) + 1;
     *    힌트 : 무한루프 코딩후에 6이 나오면 break 빠져나오기
     */
    public void exam08() {
        while (true){
            int num = (int)(Math.random()*6) + 1;
            System.out.println(num);
            if (num == 6){
                break;
            }
        }
//        프로그램 종료 화면 출력 
        System.out.println("프로그램 종료");
    }

    /**
     * 예제 9: 1 ~ 10 사이의 수 중에서 짝수만 출력하는 코드 : continue 문 사용하기
     * 힌트 : continue : 아래 실행을 skip하고 반복문 계속 진행시키기
     */
    public void exam09() {
        for (int i = 1; i <= 10; i++) {
            if(i % 2 !=0){
                continue;
            }
            System.out.println(i);
        }
    }

    /**
     *  새로나온 사용법 : 반복문의 라벨
     *  활용 : 중첩 for문에서 주로 사용
     */
    public void exam10() {
        Outter:
        for (char upper = 'A'; upper <= 'Z'; upper++) {
            for (char lower = 'a'; lower <= 'z'; lower++){
                System.out.println(upper + "-" + lower); // 화면 출력
//                g가 나오면(안쪽/바깥쪽 모두) 반복문 중단
                if(lower == 'g') {
                    break Outter; // 2중 반복문이 모두 중단됨
                }
            }
        }
        System.out.println("프로그램 종료");
    }

}

