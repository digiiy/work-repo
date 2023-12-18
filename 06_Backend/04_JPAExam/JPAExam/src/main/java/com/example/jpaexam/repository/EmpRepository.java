package com.example.jpaexam.repository;


import com.example.jpaexam.model.Emp;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * packageName : com.example.jpaexam.repository
 * fileName : EmpRepository
 * author : GGG
 * date : 2023-10-16
 * description : 사원 CRUD 함수가 있는 레포지토리
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-16         GGG          최초 생성
 */
public interface EmpRepository extends JpaRepository<Emp, Integer> {
}
