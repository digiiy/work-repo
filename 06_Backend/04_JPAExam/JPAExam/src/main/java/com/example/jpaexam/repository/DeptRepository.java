package com.example.jpaexam.repository;

import com.example.jpaexam.model.Dept;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * packageName : com.example.jpaexam.repository
 * fileName : DeptRepository
 * author : GGG
 * date : 2023-10-16
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-16         GGG          최초 생성
 */
// todo: @Repository - 클래스 위에 붙이고, 스프링서버가 실행될때 자동으로
//     객체 1개를 만들어줌 ( IOC )
//   사용법 : 인터피에스명 extends JpaRepository<모델클래스명, 기본키의 자료형>
public interface DeptRepository extends JpaRepository<Dept, Integer> {
}