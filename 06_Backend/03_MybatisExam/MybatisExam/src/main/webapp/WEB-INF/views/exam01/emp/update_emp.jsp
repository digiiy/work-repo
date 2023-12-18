<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<%--header --%>
<jsp:include page="../../common/header.jsp"/>
<%--본문--%>
<div class="container">
    <form action="/exam01/emp/edit/${emp.eno}" method="post">
        <%-- TODO: 1) springboot 에서 아래와 같이 hidden 값을 전송하면 :  put 방식으로 인식해서 연결해줌    --%>
        <%--       2) application.propeties : spring.mvc.hiddenmethod.filter.enabled=true --%>
        <input type="hidden" name="_method" value="put"/>
        <%--     todo: 부서번호 : 화면에서 숨김 --%>
        <input type="hidden" name="eno" value="${emp.eno}"/>
        <%--     todo: 사원명 입력양식   --%>
        <div class="mb-3">
            <label for="ename" class="form-label">사원 이름</label>
            <input type="text"
                   class="form-control"
                   id="ename"
                   required
                   name="ename"
                   value="${emp.ename}"
            >
        </div>
        <%--     todo: 직위 입력양식--%>
        <div class="mb-3">
            <label for="job" class="form-label">직위</label>
            <input type="text"
                   class="form-control"
                   id="job"
                   required
                   name="job"
                   value="${emp.job}"
            >
        </div>
        <%--     todo: 매니저 입력양식--%>
        <div class="mb-3">
            <label for="manager" class="form-label">매니저</label>
            <input type="text"
                   class="form-control"
                   id="manager"
                   required
                   name="manager"
                   value="${emp.manager}"
            >
        </div>
        <%--     todo: 수정 버튼--%>
        <div class="mb-3">
            <button type="submit" class="btn btn-primary">Update</button>
        </div>
    </form>

    <form id="delete-form" action="/exam01/emp/delete/${emp.eno}" method="post">
        <%--    TODO: springboot 에서 아래와 같이 hidden 값을 전송하면 :  delete 방식으로 인식해서 연결해줌    --%>
        <input type="hidden" name="_method" value="delete"/>
        <button type="submit" class="btn btn-danger">Delete</button>
    </form>

</div>
<%--footer--%>
<jsp:include page="../../common/footer.jsp"/>

</body>
</html>
</html>