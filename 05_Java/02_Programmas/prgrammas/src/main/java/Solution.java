/**
 * packageName : PACKAGE_NAME
 * fileName : Solution
 * author : GGG
 * date : 2023-09-19
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class Solution {
    /**
     * 문자 리스트를 문자열로 변환하기
     * @param arr ["a", "b", "c"]
     * @return "abc"
     */
    public String solution(String[] arr) {
        String answer = ""; // 리턴값(내보내기)
        for (int i = 0; i < arr.length; i++) {
            answer = answer + arr[i]; // 문자열 붙이기
        }
        return answer;
    }
}
