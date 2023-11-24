// 문의게시판
import React, { useState } from "react";
import ICenter from "../../../types/Center/ICenter";
import CustomerCenterSerivce from "../../../services/center/CustomerCenterService";

function QuestionBoardPage() {
  const initialQuestion = {
    title: "",
    content: "",
    memberId: "",
  };

  // qna객체
  const [question, setQuestion] = useState<ICenter>(initialQuestion);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setQuestion({ ...question, [name]: value }); // 변수저장
  };

  // 저장 함수
  const saveQuestion = () => {
    // 임시 qna 객체
    var data = {
      title: question.title,
      content: question.content,
      memberId: question.memberId,
    };

    CustomerCenterSerivce.create(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newQuestion = () => {
    setQuestion(initialQuestion); // Qna 초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  return (
    <>
      {/* 테마 제목 시작 */}
      <div className="hero hero-customer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">1:1 문의</h1>
                {/* <p className="text-white">
          여기에서 고객 정보를 확인하실 수 있습니다.
        </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 테마 제목 끝 */}

      <div className="wrap MO wrap--no-pab">
        <div className="content" id="content">
          <main className="main" id="main">
            <div className="page-title-wrap">
              <div className="page-title">1:1 문의 작성하기</div>
            </div>
          </main>
        </div>
      </div>

      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newQuestion}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          {/* <TitleCom title="Add Qna" /> */}
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            {/* question 입력창 시작 */}
            <div className="row g-3 align-items-center mb-3">
              {/* 라벨 시작 */}
              <div className="col-3">
                <label htmlFor="ID" className="col-form-label">
                  ID
                </label>
              </div>
              {/* 라벨 끝 */}

              <div className="col-9">
                <input
                  type="text"
                  id="ID"
                  required
                  className="form-control"
                  value={question.memberId}
                  onChange={handleInputChange}
                  placeholder="ID"
                  name="ID"
                />
              </div>
            </div>

            {/* question 입력창 끝 */}

            {/* questioner 입력창 시작 */}
            <div className="row g-3 align-items-center mb-3">
              {/* 라벨 시작 */}
              <div className="col-3">
                <label htmlFor="title" className="col-form-label">
                  제목
                </label>
              </div>
              {/* 라벨 끝 */}

              <div className="col-9">
                <input
                  type="text"
                  id="title"
                  required
                  className="form-control"
                  value={question.title}
                  onChange={handleInputChange}
                  placeholder="title"
                  name="title"
                />
              </div>
            </div>
            {/* questioner 입력창 끝 */}

            {/* answer 입력창 시작 */}
            <div className="row g-3 align-items-center mb-3">
              {/* 라벨 시작 */}
              <div className="col-3">
                <label htmlFor="content" className="col-form-label">
                  내용
                </label>
              </div>
              {/* 라벨 끝 */}

              <div className="col-9">
                <input
                  type="text"
                  id="content"
                  required
                  className="form-control"
                  value={question.content}
                  onChange={handleInputChange}
                  placeholder="content"
                  name="content"
                />
              </div>
            </div>
            {/* answer 입력창 끝 */}

            {/* answerer 입력창 시작 */}

            {/* answerer 입력창 끝 */}

            {/* 저장 버튼 시작 */}
            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveQuestion}
                className="btn btn-outline-primary ms-2 col"
              >
                작성
              </button>
            </div>
            {/* 저장 버튼 끝 */}

            {/* 유의사항 끝 */}
            <div
              className="gray_box"
              style={{ marginTop: 50 + "px", padding: 40 + "px" }}
            >
              <ul className="list_type2">
                <h2>작성시 유의사항</h2>
                <br />
                <li>
                  코로나19 및 비운항으로 인한 항공권 환불 문의는 구매하신
                  발권처로 문의하여 주시기 바랍니다.
                </li>
                <li>
                  고객님의 소중한 말씀은 공휴일을 제외한 평일 근무시간에
                  담당자에게 전달되며 주말 및 공휴일에 문의하신 내용은 정상
                  근무일에 처리되기 때문에 답변이 다소 지연될 수 있음을 양해해
                  주시기 바랍니다.
                </li>
                <li>
                  욕설, 폭언, 성희롱 근거 없는 음해, 타인의 인격 모욕, 명예를
                  회손하는 표현이 포함되거나 당사와 무관한 사안으로 고객의
                  말씀을 남겨주실 경우 예고없이 임의로 답변 제외될 수 있음을
                  안내드립니다.
                </li>
                <li>
                  계좌정보, 카드정보, 연락처 등 중요한 개인정보는 당사가 별도
                  요청한 경우를 제외하고는 내용상에 기재하지 않도록
                  요청드립니다.
                </li>
              </ul>
            </div>
            {/* 유의사항 끝 */}
          </div>
        </>
      )}
    </>
  );
}

export default QuestionBoardPage;

{
  /* 테마 제목 시작 */
}
<div className="hero hero-customer">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mx-auto text-center">
        <div className="intro-wrap">
          <h1 className="mb-0">1:1 문의</h1>
          {/* <p className="text-white">
          여기에서 고객 정보를 확인하실 수 있습니다.
        </p> */}
        </div>
      </div>
    </div>
  </div>
</div>;
{
  /* 테마 제목 끝 */
}

<div className="wrap MO wrap--no-pab">
  <div className="content" id="content">
    <main className="main" id="main">
      <div className="page-title-wrap">
        <div className="page-title">1:1 문의 작성하기</div>
      </div>
    </main>
  </div>
</div>;

{
  /* 유의사항 끝 */
}
<div className="gray_box" style={{ marginTop: 50 + "px", padding: 40 + "px" }}>
  <ul className="list_type2">
    <h2>작성시 유의사항</h2>
    <br />
    <li>
      코로나19 및 비운항으로 인한 항공권 환불 문의는 구매하신 발권처로 문의하여
      주시기 바랍니다.
    </li>
    <li>
      고객님의 소중한 말씀은 공휴일을 제외한 평일 근무시간에 담당자에게 전달되며
      주말 및 공휴일에 문의하신 내용은 정상 근무일에 처리되기 때문에 답변이 다소
      지연될 수 있음을 양해해 주시기 바랍니다.
    </li>
    <li>
      욕설, 폭언, 성희롱 근거 없는 음해, 타인의 인격 모욕, 명예를 회손하는
      표현이 포함되거나 당사와 무관한 사안으로 고객의 말씀을 남겨주실 경우
      예고없이 임의로 답변 제외될 수 있음을 안내드립니다.
    </li>
    <li>
      계좌정보, 카드정보, 연락처 등 중요한 개인정보는 당사가 별도 요청한 경우를
      제외하고는 내용상에 기재하지 않도록 요청드립니다.
    </li>
  </ul>
</div>;
{
  /* 유의사항 끝 */
}
