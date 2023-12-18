package chap14.sec01.exam01;

import java.util.ArrayList;

public class GenericApplication {
    public static void main(String[] args) {
//        TODO: 여기부터 코딩
//    TODO: 제네릭 : 향상된 배열에서 자료를 추가할때 자료형을 제한하는 것을 의미
//        사용법 : List< 제한할 자료형> list = new ArrayList<>();
//          부모 : Product, 자식 : Tv, Audio 클래스
        ArrayList<Product> productArrayList = new ArrayList<>();
        ArrayList<Tv> tvArrayList = new ArrayList<>();
//    TODO: 1) 아래 에러
//        ArrayList<Product> tvArrayList = new ArrayList<>();

//    TODO: 2) productArrayList : 부모 클래스 배열에 자식 넣기?
        productArrayList.add(new Tv());
        productArrayList.add(new Audio());

//    TODO: 3) tvArrayList : 당연히 Tv 객체만 배열에 추가 가능함
        tvArrayList.add(new Tv());

        System.out.println("------ 함수의 매개변수에 제네릭 사용 ------");
        printAll(productArrayList); // 당연함
//        printAll(tvArrayList); // 에러 발생 : 부모라도 자식 클래스는 안됨 : 대상 클래스만 가능

        System.out.println("---- 제네릭의 특수한 형태 ----");
        System.out.println("---- <> ----");
//     TODO: <? extends Tv> : Tv의 자식 클래스만 가능함  (부모 x)
        printAll2(tvArrayList); // 가능
//        printAll2(productArrayList); // 불가 (부모 안됨)

        System.out.println("---- <? super Product> ----");
//     TODO: <? super Product> : Product의 부모 클래스만 가능함(자식 x)
        printAll3(productArrayList); // 가능
//        printAll3(tvArrayList); // 불가 (자식 안됨)

        System.out.println("---- <?> ----");
//     TODO: <?> : 모든 자료형이 가능
        printAll4(productArrayList); // 가능
        printAll4(tvArrayList);      // 가능
    } 


    public static void printAll(ArrayList<Product> list) { // <Product> == 제네릭
        for(Object p : list) {
            System.out.println(p);
        }
    }

    public static void printAll2(ArrayList<? extends Tv> list) {
        for(Object p : list) {
            System.out.println(p);
        }
    }

    public static void printAll3(ArrayList<? super Product> list) {
        for(Object p : list) {
            System.out.println(p);
        }
    }

    public static void printAll4(ArrayList<?> list) {
        for(Object p : list) {
            System.out.println(p);
        }
    }
}











