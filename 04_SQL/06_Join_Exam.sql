-- 06_Join_Exam.sql
-- 조인 연습문제
-- 1) 조인을 이용해서 SCOTT 사원의(ENAME) 부서번호와(DNO)
--    부서이름을(DNAME) 출력하시오
-- 대상 : EMPLOYEE(사원), DEPARTMENT(부서)
-- 공통 컬럼 : EMP.DNO = DEP.DNO
-- 사용법) SELECT 컬럼명,...
--        FROM EMPLOYEE EMP, DEPARYMENT DEP
--        WHERE ENP.DNO = DEP.DNO;
SELECT EMP.DNO, DEP.DNAME           -- EMP.DNO, DEP.DNAME 하면 이 정보만 나오는거고 EMP.* 모든정보가 다나온다 
FROM EMPLOYEE EMP, DEPARTMENT DEP   -- 앞에서 FROM EMPLOYEE 하는 느낌
WHERE EMP.DNO = DEP.DNO             -- 조인 한다
AND EMP.ENAME = 'SCOTT';            -- 문제의 스캇이라는 조건

-- 2) 모든 사원의 사원이름과(ENAME) 그 사원이 소속된 부서이름(DNAME)과
--    지역명(LOC)을 출력하시오
-- 사원 테이블 : EMPLOYEE
-- 부서 테이블 : DEPARTMENT
SELECT EMP.*, DEP.*            -- 모든 사원이라 .* 사용해야함
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO;       -- 조인

-- 3) 10번 부서에 속하는 사원(번호)에(ENO) 대해 직급과(JOB) 
--      지역명(LOC)을 출력하시오. 
-- 사원테이블 : EMPLOYEE
-- 부서테이블 : DEPARTMENT
SELECT EMP.JOB, DEP.LOC
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO       -- 조인
AND EMP.DNO = 10;             -- 조건

-- 4) 상여금(COMMISSION)을 받는 모든사원의 이름(ENAME),
--    부서이름(DNAME), 지역명(LOC)을 출력하시오.
SELECT EMP.ENAME, DEP.DNAME, DEP.LOC
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO
AND COMMISSION IS NOT NULL;

-- 5) = 조인과 Like 검색(와일드카드(%))를 사용하여 
--     이름에 A가 포함된 모든 사원의 이름과(ENAME)
--    부서명을(DNAME) 출력하시오.
SELECT EMP.ENAME, DEP.DNAME
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO
AND ENAME LIKE '%A%';

-- 6) NEW YORK 에 근무하는(LOC) 모든 사원의 이름(ENAME), 
--     업무(JOB), 부서번호(DNO) 
--     및 부서명을(DNAME) 출력하시오.
-- 사원테이블 : EMPLOYEE
-- 부서테이블 : DEPARTMEN
SELECT EMP.ENAME, DEP.DNAME, DEP.LOC, DEP.DNO, EMP.JOB
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO
AND DEP.LOC = 'NEW YORK';

-- 고급 응용 문제
-- 7) 각 부서에 대해 부서번호(DNO)별, 부서명(DNAME)별, 위치(LOC)별로
--   사원수(COUNT), 부서 내의 모든 사원의 평균 급여(AVG)를 출력하세요
--   컬럼별칭을 사용해서 부서번호, 부서명, 위치, 사원수 출력하세요
-- 평균급여는 소수점 2째자리에서 반올림하세요.
-- 사원테이블 : EMPLOYEE
-- 부서테이블 : DEPARTMENT
-- 힌트 : 그룹함수 사용, GROUP BY 사용
SELECT EMP.DNO        AS 부서번호
       ,DEP.DNAME     AS 부서명
       ,DEP.LOC       AS 부서위치
       ,COUNT(*)      AS 사원수
       ,ROUND(AVG(EMP.SALARY),2)  AS 평균급여
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO
GROUP BY EMP.DNO, DEP.DNAME, DEP.LOC;


-- 8) 각 부서명(DNAME)별, 급여별(SALARY) 사원수(COUNT)를 출력하세요
--   단, 부서명, 급여, 사원수의 별칭을 써서 출력하세요
-- 사원테이블 : EMPLOYEE
-- 부서테이블 : DEPARTMENT

SELECT DEP.DNAME     AS 부서명
      ,COUNT(*)      AS 사원수
      ,SALARY        AS 급여
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO
GROUP BY DEP.DNAME, SALARY;

-- 9) 각 부서명(DNAME)별, 담당업무별(JOB) 
--   급여(SALARY) 총액에서 5000 이상인 결과만 출력하세요
-- 사원테이블 : EMPLOYEE
-- 부서테이블 : DEPARTMENT
-- 힌트) HAVING 사용
SELECT DEP.DNAME     AS 부서명
      ,EMP.JOB       AS 담당업무
      ,SUM(SALARY)   AS 총액
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO      
GROUP BY EMP.JOB, DEP.DNAME 
HAVING MIN(SALARY) >= 5000;      

-- 10) 급여가(SALARY) 2000 초과인 사원들의 
--  부서번호(DNO), 부서명(DNAME), 사원번호(ENO), 사원명(ENAME), 급여를 출력하세요
SELECT EMP.DNO       AS 부서번호
      ,DEP.DNAME     AS 부서명
      ,EMP.ENO       AS 담당업무
      ,EMP.ENAME     AS 사원명
      ,EMP.SALARY    AS 급여
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO
AND EMP.SALARY > 2000;

-- 11) 각 부서별(DNO) 평균 급여(SALARY), 최대급여, 최소급여, 사원수를 출력해 보세요
SELECT  EMP.DNO                  AS 부서
       ,ROUND(AVG(EMP.SALARY))   AS 평균급여
       ,MAX(EMP.SALARY)          AS 최대급여
       ,MIN(EMP.SALARY)          AS 최소급여
       ,COUNT(*)                 AS 사원수
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO
GROUP BY EMP.DNO;

-- 12) 부서번호로 right outer join 하여 모든 부서 정보와 사원정보를 출력하세요
-- 단 부서번호, 사원명으로 오름차순 정렬하세요 

SELECT EMP.*, DEP.*
FROM EMPLOYEE EMP, DEPARTMENT DEP
WHERE EMP.DNO(+) = DEP.DNO
ORDER BY EMP.DNO, EMP.ENAME;














