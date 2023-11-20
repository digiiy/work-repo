// 문의게시판
import React from 'react'
import NoticeList from '../../../components/center/notice/NoticeList'

function QuestionBoardPage() {
  return (
    <div>
        {/* 테마 제목 시작 */}
        <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">문의게시판</h1>
                {/* <p className="text-white">
                  여기에서 고객 정보를 확인하실 수 있습니다.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 테마 제목 끝 */}
      <div className="gray_box" style={{ marginTop: 50 + "px" , padding: 40 + "px"}}>
     
        
        <ul className="list_type2">
        <h2>작성시 유의사항</h2>
        <br/>
          <li>
            코로나19 및 비운항으로 인한 항공권 환불 문의는 구매하신 발권처로 문의하여 주시기 바랍니다.
          </li>
          <li>
            고객님의 소중한 말씀은 공휴일을 제외한 평일 근무시간에 담당자에게 전달되며
            주말 및 공휴일에 문의하신 내용은 정상 근무일에 처리되기 때문에 답변이 다소
            지연될 수 있음을 양해해 주시기 바랍니다.
          </li>
          <li>
            욕설, 폭언, 성희롱 근거 없는 음해, 타인의 인격 모욕, 명예를 회손하는 표현이
            포함되거나 당사와 무관한 사안으로 고객의 말씀을 남겨주실 경우 예고없이 임의로
            답변 제외될 수 있음을 안내드립니다.
          </li>
          <li>
            계좌정보, 카드정보, 연락처 등 중요한 개인정보는 당사가 별도 요청한 경우를
            제외하고는 내용상에 기재하지 않도록 요청드립니다.
          </li>
        </ul>
      </div>

    </div>
  )
}

export default QuestionBoardPage