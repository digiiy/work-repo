package chap06.sec04.exam06;

/**
 * packageName : chap06.sec04.exam06
 * fileName : Calculator
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Calculator {

    /**
     * 정사각형 넓이
     * @param width
     * @return
     */
    double areaRectangle(double width){
        double result = width * width;
        return result;
    }

    /**
     * 직사각형 넓이
     * @param height
     * @param width
     * @return
     */
    double areaRectangle(double height, double width){
        double result1 = height * width;
        return result1;
    }
}
