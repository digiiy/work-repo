-- 05_Group_Func.sql
-- 그룹 함수 : 데이터 집계 함수들(총액, 평균, 최고, 최저액, 총개수)
-- 사용법)    SUM(컬럼명), AVG(컬럼명), MAX(컬럼명), MIN(컬럼명), COUNT(컬럼명)
-- 예제 1) 사원들의 급여(SALARY) 총액, 평균액, 최고액, 최소액 출력하기
-- 결과 특징) 1건이 나옴
SELECT SUM(SALARY) AS 총액
       ,ROUND(AVG(SALARY)) AS 평균
       ,MAX(SALARY) AS 최고액
       ,MIN(SALARY) AS 최저액
FROM EMPLOYEE;       

-- 연습문제 1) 최근에 입사한(HIREDATE) 사원과 가장 오래전에
--           입사한 사원의 입사일 출력하기
-- 힌트) 위의 집계 함수들 중 2개 사용해야함
SELECT MIN(HIREDATE) AS 신입
      ,MAX(HIREDATE) AS 최고참
FROM EMPLOYEE;

-- 연습문제 2) 사원들의(EMPLOYEE) 상여금(COMMISSION) 총액 출력하기
-- COMMISSION(상여금) 컬럼에는 NULL 있음 : 하지만 집계함수는 NULL 자동으로 제외하고 계산함
SELECT SUM(COMMISSION) AS 총액
FROM EMPLOYEE; 

-- 예제 2) 사원들의 총 인원을 출력하세요
-- 사용법) COUNT(컬럼명[*])
SELECT COUNT(*) AS 사원수
FROM EMPLOYEE;

-- 예제 3) 상여금을(COMMISSION) 받는 사원수 계산하기
-- COMMISSION 컬럼 NULL 있음(상여금 못받음)
-- 집계함수는 자동으로 NULL 제외하고 계산
SELECT COUNT(COMMISSION) AS 사원수
FROM EMPLOYEE;

-- 예제 4) NOT NULL 인 데이터만 계산하기
SELECT COUNT(COMMISSION) AS 사원수
FROM EMPLOYEE
WHERE COMMISSION IS NOT NULL;

-- 전체 집계 함수 특징 : 1) 1건이 결과로 나옴
--                    2) 일반 컬럼과 같이 사용할 수 없음 : 에러발생

-- 예제 6) 직위의(JOB) 종류가 몇개인지 출력하기
-- 사원 : EMPLOYEE
-- DISTINCT : 중복제거 키워드
-- 사용법) 중복제거 COUNT 함수 : COUNT(DISTINCT 컬럼명)
-- 컬럼별칭(*) : 컬럼명 AS 별칭
-- 테이블 별칭(*) : 테이블명 별칭 (사용 : 별칭.컬럼명)
SELECT COUNT(DISTINCT EMP.JOB) AS 직업개수
FROM EMPLOYEE EMP;

-- 전체 집계 함수 특징 : 1) 1건이 결과로 나옴
--                    2) 일반 컬럼과 같이 사용할 수 없음 : 에러발생
-- SELECT ENAME, MAX(SALARY)
-- FROM EMPLOYEE; -- 에러 (일반컬럼(ENAME), MAX(SALARY) 같이 사용못함)

-- 2) 부분(컬럼별) 집계 하기 : GROUP BY (예약어)
-- 사용법) GROUP BY 컬럼명, 컬럼명2...
-- 예제 7) 소속 부서별(DNO) 평균 급여(SALARY)를 부서번호와 함께 출력하세요
-- TRUNC() : 버림(==절삭)
SELECT DNO
      ,TRUNC(AVG(SALARY)) AS 평균급여
FROM EMPLOYEE
GROUP BY DNO; -- 부서번호 컬럼별 집계(부서번호 컬럼은 출력할 수 있음)

-- 주의점) 1) 그룹함수와 일반컬럼은 같이 사용할 수 없음.
--           (단, 컬럼별 집계에서 그 컬럼별은 그룹함수와 같이 사용할 수 있음)
SELECT DNO, ENAME
      ,TRUNC(AVG(SALARY)) AS 평균급여
FROM EMPLOYEE
GROUP BY DNO; -- 에러 : GROUP BY 대상 컬럼이 아니므로(ENMAE)
--                     그룹함수와 같이 출력할 수 없음

-- 연습문제 3) 부서번호별(DNO), 직위별(JOB) 데이터 건수(COUNT) 및 급여(SALARY) 총액(SUM) 구하기
-- 사원 : EMPLOYEE
-- 힌트 : GROUP BY 사용
SELECT DNO, JOB
       ,COUNT(*)
       ,TRUNC(SUM(SALARY)) AS 총액
FROM EMPLOYEE
GROUP BY DNO, JOB;

-- GROUB BY 사용시 조건을 추가 : HAVING 키워드 (그룹함수에만 사용함)
-- 사용법) HAVING 그룹함수(컬럼명) > 값

-- 연습문제 4) 부서번호별(DNO) 최고 급여가 3000이상인 부서의 번호(DNO)와
--           최고 급여 금액 구하기
SELECT DNO, MAX(SALARY)
FROM EMPLOYEE
GROUP BY DNO
HAVING MAX(SALARY) >= 3000;

-- 연습문제 5) 사원테이블에서(EMPLOYEE) JOB(직위)이 
--           1) MANAGER 인 값을 제외하고 3) 급여(SALARY) 총액(SUM)이 5000 
--           2) 직급별(JOB) 총액 구하기
SELECT JOB, SUM(SALARY)
FROM EMPLOYEE
WHERE JOB NOT LIKE '%MANAGER%'
GROUP BY JOB
HAVING SUM(SALARY) >= 5000;

       
            
       