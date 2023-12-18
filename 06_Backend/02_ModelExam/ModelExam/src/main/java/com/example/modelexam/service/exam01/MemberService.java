package com.example.modelexam.service.exam01;


import com.example.modelexam.dao.MemberDao;

import com.example.modelexam.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * packageName : com.example.modelexam.service.exam01
 * fileName : MemberService
 * author : GGG
 * date : 2023-10-10
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-10         GGG          최초 생성
 */
@Service
public class MemberService {
    @Autowired
    MemberDao memberDao; // 가짜 DB에 접근하는 객체

    /**
     * 전체 저회 함수 : selectAll()(DAO 객체 함수)
     * @return
     */
    public List<Member> findAll() {
//        TODO: deptDao.selectAll() : db 조회 함수 호출

        List<Member> list = memberDao.selectAll();

        return list;
    }
    }
