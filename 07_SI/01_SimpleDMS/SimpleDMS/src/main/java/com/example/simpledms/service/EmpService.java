package com.example.simpledms.service;

import com.example.simpledms.model.Dept;
import com.example.simpledms.model.Emp;
import com.example.simpledms.repository.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.service
 * fileName : EmpService
 * author : GGG
 * date : 2023-10-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-20         GGG          최초 생성
 */
@Service
public class EmpService {

    @Autowired
    EmpRepository empRepository; //DI

    /**
     * 전체 조회
     */
    public List<Emp> findAll() {
        List<Emp> list = empRepository.findAll();
        return list;
    }

    /**
     * 검색어 조회
     */
    public List<Emp> findAllByEnameContaining(String name) {
        List<Emp> list = empRepository.findAllByEnameContaining(name);
        return list;
    }
    /** 저장 함수(dno: null) + 수정함수(dno:값이 있으면)*/
    public Emp save(Emp emp) {
        Emp emp2 = empRepository.save(emp);

        return emp2;
    }
    /** 상세 조회(1건조회) */
    public Optional<Emp> findById(int eno){
        Optional<Emp> optionalEmp = empRepository.findById(eno);
        return optionalEmp;
    }

    /** 삭제 조회 */
    public boolean removeById(int eno){
        if(empRepository.existsById(eno)){
            empRepository.deleteById(eno);
            return true;
        }
        return false;
    }

}