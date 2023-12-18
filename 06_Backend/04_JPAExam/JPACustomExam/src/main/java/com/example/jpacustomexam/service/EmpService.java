package com.example.jpacustomexam.service;


import com.example.jpacustomexam.dto.DeptGroupDto;
import com.example.jpacustomexam.dto.EmpGroupDto;
import com.example.jpacustomexam.model.Dept;
import com.example.jpacustomexam.model.Emp;
import com.example.jpacustomexam.repository.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import java.util.List;

/**
 * packageName : com.example.jpacustomexam.service
 * fileName : EmpService
 * author : GGG
 * date : 2023-10-17
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-17         GGG          최초 생성
 */
@Service
public class EmpService {
    @Autowired
    EmpRepository empRepository;

    //    전체 조회
//    쿼리 메소드 사용한 함수
    public List<Emp> findAllByOrderByEnoDesc() {
        List<Emp> list =empRepository.findAllByOrderByEnoDesc();

        return list;
    }

    //    전체 조회 + 정렬(eno 오름차순)
    public List<Emp> findAllByOrderByEname() {
        List<Emp> list = empRepository.findAllByOrderByEname();

        return list;
    }

    //    전체 조회 + dname like(Containing) 검색
    public List<Emp> findAllByEnameContaining(String ename){
        List<Emp> list = empRepository.findAllByEnameContaining(ename);

        return list;
    }

//   todo: 연습 4) EMP 테이블에서 Job이 manager이고
//             매개변수로 부서번호(dno)를 받는 함수를 작성하세요.
    public List<Emp> findAllByJobAndDno(String job, int dno){
        List<Emp> list = empRepository.findAllByJobAndDno(job, dno);

        return list;
    }


//   todo: 연습 5) EMP 테이블에서 salary가 1000 ~ 1500 사이인
//      사원을 조회하려는 함수를 작성하세요.
    public List<Emp> findAllBySalaryBetween(int first, int last){
        List<Emp> list = empRepository.findAllBySalaryBetween(first, last);

        return list;
    }


    //    todo: 연습 6)
    public List<Emp> findAllByJobIgnoreCase(String job) {
        List<Emp> list = empRepository.findAllByJobIgnoreCase(job);

        return list;
    }

    //    todo: 연습 7)
    public List<Emp> findAllByCommissionIsNotNull() {
        List<Emp> list = empRepository.findAllByCommissionIsNotNull();

        return list;
    }

    //    todo: 연습 8)
    public List<Emp> findAllByOrderBySalaryDescEnameAsc() {
        List<Emp> list = empRepository.findAllByOrderBySalaryDescEnameAsc();

        return list;
    }

    //    todo: 연습 9)
    public List<Emp> findAllBySalaryLessThanOrSalaryGreaterThan(int first,
                                                                int last) {
        List<Emp> list
                = empRepository
                .findAllBySalaryLessThanOrSalaryGreaterThan(first,last);

        return list;
    }

    //    todo: 연습 10)
    public List<Emp> findAllByCommissionOrCommissionOrCommission(int first,
                                                                 int second,
                                                                 int third
    ) {
        List<Emp> list
                = empRepository
                .findAllByCommissionOrCommissionOrCommission(first,second,third);

        return list;
    }



    /** 전체조회 + ename like 검색 : @Query */
    public List<Emp> selectByEname(String ename) {
        List<Emp> list
                = empRepository.selectByEname(ename);

        return list;
    }

    /** 전체조회 + ename like 검색 : @Query */
    public List<Emp> selectDesc() {
        List<Emp> list
                = empRepository.selectDesc();

        return list;
    }

    /** 연습 3) : @Query */
    public List<Emp> selectSalary(int salary) {
        List<Emp> list
                = empRepository.selectSalary(salary);

        return list;
    }

    /** 연습 4) : @Query */
    public List<Emp> selectHiredate(String first, String last) {
        List<Emp> list
                = empRepository.selectHiredate(first, last);

        return list;
    }


    /** 연습 5) : @Query(dto) */
    public List<EmpGroupDto> selectGroupDnoJob() {
        List<EmpGroupDto> list
                = empRepository.selectGroupDnoJob();

        return list;
    }

    /** 연습 6) : @Query(dto) */
    public List<EmpGroupDto> selectByGroupDnoTrunc() {
        List<EmpGroupDto> list
                = empRepository.selectByGroupDnoTrunc();

        return list;
    }

    /** 연습 7) : @Query(dto) */
    public List<EmpGroupDto> selectGroupSumMax() {
        List<EmpGroupDto> list
                = empRepository.selectGroupSumMax();

        return list;
    }

    //    todo: 8) 사원 테이블에서 가장 오래된 입사일(HIREDATE)과(MAX)
//            가장 빠른 입사일을(MIN) 출력하세요.
//       nativeQuery = true 사용,
//       dto : EmpGroupDto
    /** 연습 8) : @Query(dto) */
    public List<EmpGroupDto> selectGroupHiredate() {
        List<EmpGroupDto> list
                = empRepository.selectGroupHiredate();

        return list;
    }


    //    --------------------------------
//    연습 1) 페이징 연습
//    ---------------------------------
//    1) ename like 검색
    public Page<Emp> findAllByEnameContaining(String ename,
                                              Pageable pageable) {
        Page<Emp> page
                = empRepository.findAllByEnameContaining(ename, pageable);

        return page;
    }

//    2) 기본 제공되는 전체 조회 함수 : 페이징처리 기능 추가
    public Page<Emp> findAllPage(Pageable pageable) {
        Page<Emp> page
                = empRepository.findAll(pageable);

        return page;
    }


    public Page<Emp> selectByEnamePage(String ename, Pageable pageable) {
        Page<Emp> page
                = empRepository.selectByEnamePage(ename, pageable);

        return page;
    }








}
