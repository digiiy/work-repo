package chap15.sec02.exam03;

import java.io.*;

/**
 * packageName : chap14.sec02.exam02
 * fileName : NonBufferVsBufferApplicaton
 * author : ds
 * date : 2022-10-07
 * description : 파일 복사 성능 테스트( NonBuffer Vs Buffer )
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2022-10-07         ds          최초 생성
 */
public class NonBufferVsBufferApplication {

    static int data = -1;

    public static long copy(InputStream is, OutputStream os) throws Exception {
        long start = System.nanoTime();

        while(true) {
            data = is.read();
            if(data == -1) break;
            os.write(data);
        }

        long end = System.nanoTime();

        return (end - start);
    }

    public static void main(String[] args) throws Exception {
        String orgImgPath = "src/main/resources/images/boy.jpg";
        String orgImgPath2 = "src/main/resources/images/girl.jpg";

        String cpyImgPath = "src/main/resources/images/boy_copy.jpg";
        String cpyImgPath2 = "src/main/resources/images/girl_copy.jpg";

        FileInputStream fileInputStream
                = new FileInputStream(orgImgPath);
        FileOutputStream fileOutputStream
                = new FileOutputStream(cpyImgPath);

        long nonBufferTime = copy(fileInputStream, fileOutputStream);
        System.out.println("버퍼를 사용하지 않았을때 :" + nonBufferTime + "ns");

        fileInputStream.close();
        fileOutputStream.close();

//        ------------------- 버퍼 써서 파일 복사 ------------------
//        TODO: 여기부터 코딩
        
    }
}









