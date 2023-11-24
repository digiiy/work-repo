// NoticeListPage.tsx
import React, { useEffect, useState } from "react";
import CustomerService from "../../../services/basic/CustomerService";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import INotice from "../../../types/Center/INotice";

function NoticeListPage() {
  // 변수 정의
  // customer 배열 변수
  const [notice, setNotice] = useState<Array<INotice>>([]);
  // select 태그에 선택된 값을 저장할 변수 : 기본 (question)
  const [searchSelect, setSearchSelect] = useState<string>("fullName");
  // 검색어(input) 변수
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  // todo: 공통 페이징 변수 4개
  // todo: 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수

  // todo: 함수 정의
  useEffect(() => {
    retrieveNotice(); // 전체조회 실행
  }, [page]);

  // 전체조회
  const retrieveNotice = () => {
    // 벡엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
    CustomerService.getAll(searchSelect, searchKeyword, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        const { notice, totalPages } = response.data;
        setNotice(notice);
        setCount(totalPages);
        // 로그 출력
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  //   select 태그 수동바인딩
  const onChangeSearchSelect = (e: any) => {
    setSearchSelect(e.target.value); // 화면값 -> 변수저장
  };

  //   input 태그 수동바인딩
  const onChangeSearchKeyword = (e: any) => {
    setSearchKeyword(e.target.value); // 화면값 -> 변수저장
  };

  //  todo: Pagination 수동 바인딩(공통)
  //  페이지 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  return (
    <div>
      {/* 테마 디자인 적용 : 컨택트 소스 */}
      {/* 테마 제목 시작 */}
      <div className="hero hero-customer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">공지 사항</h1>
                <p className="text-white">새소식과 운임 공지를 확인해보세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 offset-2">
        <div className="col-12 input-group mb-3">
          <select
            className="form-select"
            onChange={onChangeSearchSelect}
            value={searchSelect}
          >
            <option key="제목 + 내용" value="제목 + 내용">
              제목 + 내용
            </option>
            <option key="제목" value="제목">
              제목
            </option>
            <option key="내용" value="내용">
              내용
            </option>
          </select>

          <input
            type="text"
            className="form-control"
            placeholder="검색어를 입력하세요."
            value={searchKeyword}
            onChange={onChangeSearchKeyword}
          />

          <div className="input-group-append">
            <button
              className="btn btn-danger"
              type="button"
              onClick={retrieveNotice}
            >
              검색
            </button>
          </div>
        </div>
      </div>
      {/* 테마 제목 끝 */}

      <Accordion className="test1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <table>
              <tr>
                <td style={{ width: "850px" }}>
                  외투 보관 서비스 개시 안내(12/1~)
                </td>
                <td style={{}}>2023/11/13</td>
              </tr>
            </table>
          </Accordion.Header>
          <Accordion.Body>
            <tr style={{ fontSize: "20px" }}>
              고객 여러분의 편리안 해외여행을 위해 그린항공에서 겨울 시즌 외투
              보관 서비스를 개시하오니 많은 이용 부탁 드립니다.{" "}
            </tr>
            <br />
            - 이용기간 : 2023. 12. 01 ~ 2024. 02. 29
            <br />
            - 대상 : 그린항공 국제선을 이용하시는 모든 고객
            <br />
            - 인천국제공항 출/도착 한정
            <br />
            - 비회원의 경우 신규가입 필요
            <br />
            - 비즈니스 클래스 탑승 고객
            <br />
            - 공동 운항편 탑승객 이용 불가
            <br />
            <br />
            - 무료 보관 기간 및 수령 : 접수일 ~ 수령일 기준 5일, 1인 1벌
            <br /> 보관기간 (5일) 초과 시 추가 요금 발생
            <br />- 운영시간 : 매일 06:00 ~ 21:00
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <table>
              <tr>
                <td style={{ width: "850px" }}>
                  하나카드 시스템 작업 안내(11/18)
                </td>
                <td style={{}}>2023/11/13</td>
              </tr>
            </table>
          </Accordion.Header>
          <Accordion.Body>
            하나카드 시스템 업그레이드 작업으로 온라인 결제(승인) 서비스가
            일시적으로 중단될 예정입니다.
            <br />
            - 중단 서비스
            <br />
            하나카드 온라인 거래 승인 불가
            <br />
            <br />
            - 중단 일시
            <br />
            2023년 11월 18일, 00시 ~ 18시 (한국 시간 기준)
            <br />
            <br />
            ※ 하나카드 시스템 작업 진행 상황에 따라 시간은 변경될 수 있습니다.
            <br />
            감사합니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <table>
              <tr>
                <td style={{ width: "850px" }}>마일리지 유효기간 안내</td>
                <td style={{}}>2023/11/13</td>
              </tr>
            </table>
          </Accordion.Header>
          <Accordion.Body>
            2024년 1월 1일 00시 00분(한국시간 기준) 유효기간 종료 마일리지가
            소멸 예정임을 안내드립니다.
            <br />
            <br />
            기한 내 사용하지 않은 마일리지는 소멸될 예정이오니, 마일리지 사용에
            참고해 주시기 바랍니다.
            <br />
            마일리지 세부 내역은 홈페이지에서 확인하실 수 있습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <table>
              <tr>
                <td style={{ width: "850px" }}>
                  카드사 시스템 작업으로 결제(승인) 서비스가 일시적으로 중단될
                  예정입니다.
                </td>
                <td style={{}}>2023/11/13</td>
              </tr>
            </table>
          </Accordion.Header>
          <Accordion.Body>
            - 대상 카드
            <br />
            VISA / MASTER / JCB
            <br />
            <br />
            - 중단 서비스
            <br />
            해외발행카드의 원화(KRW) 결제 서비스 중단
            <br />
            <br />
            - 중단 일시
            <br />
            2023년 11월 18일, 00시 ~ 03시 (한국 시간 기준)
            <br />
            <br />
            ※ 카드사 시스템 작업 진행 상황에 따라 시간은 변경될 수 있습니다.
            <br />
            감사합니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <table>
              <tr>
                <td style={{ width: "850px" }}>
                  24년 1월 1일부, 인천-하네다 매일 운항
                </td>
                <td style={{}}>2023/11/13</td>
              </tr>
            </table>
          </Accordion.Header>
          <Accordion.Body>
            24년 1월 1일부, 인천-하네다 노선을 매일 운항합니다.
            <br />
            운항일자 : 매일 (24/1/1 ~ 3/30)
            <br />
            야간비행으로 도쿄의 아름다운 야경을 감상해보세요.
            <br />
            <br />
            인천-하네다 스케줄 안내
            <br />
            인천-하네다 OZ178
            <br />
            하네다-인천 OZ177
            <br />
            <br />
            운항 노선 및 스케줄은 정부인가 조건으로 운항되며, 부득이한 사유로
            운항스케줄 및 기종은 예약 이후에도 변경 될 수 있습니다.
            <br />
            상기 운항 스케줄은 케재 시점 기준 작성된 것으로 상시 변동될 수
            있습니다. 예매 단계에서 정확한 스케줄을 반드시 확인하여 주시기
            바랍니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <table>
              <tr>
                <td style={{ width: "850px" }}>
                  해외 공항에서 출발하는 국제선은 모바일 탑승권 발금이 안
                  되나요?
                </td>
                <td style={{}}>2023/11/13</td>
              </tr>
            </table>
          </Accordion.Header>
          <Accordion.Body>
            해외 공항에서 출발하는 국제선의 경우 일부 일본 노선을 제외하고
            모바일 탑승권 발급이 제한되며, 공항 카운터에서 탑승권을 발급
            받으셔야 합니다.
            <br />
            <br />
            *일본발 모바일 탑승권 발급 가능 노선
            <br />
            - 나리타 (NRT) - 시즈오카 (FSZ) - 나고야(NGO) -오사카(KIX)
            <br />
            - 마쯔야마(MYJ) -오이타(OIT) -히로시마(HIJ) -후쿠오카(FUK)
            <br />
            <br />
            국제선 항공편은 출발 24시간 전 부터 1시간 30분 전까지만 발급받으실
            수 있습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <table>
              <tr>
                <td style={{ width: "850px" }}>
                  위탁 수하물(캐리어)이 파손 되었는데 어떻게 하나요?
                </td>
                <td style={{}}>2023/11/13</td>
              </tr>
            </table>
          </Accordion.Header>
          <Accordion.Body>
            그린항공을 이용하시면서 위탁하신 수하물(캐리어)이 파손된 경우에는
            공항에서 바로 확인하신 경우에는 주변 그린항공 직원에게 문의하여 파손
            접수를 하시기 바랍니다. 현장에서 바로 확인을 하지 못하고
            거주지(집)으로 가신 다음에 확인하셨다면 도착일 기준 7일 이내에
            도착지 공항의 그린항공 또는 홈페이지 1:1 문의하기를 통해
            접수해주시기 바랍니다.
            <br />
            <br />
            아래의 경우는 배상대상이 아니오니, 유의하여 주시기 바랍니다.
            <br />
            - 유모차 부속품, 외부에 튀어나온 장식이나 손잡이, 고객 과실, 수하물
            고유 결함 등으로 인해 발생한 파손
            <br />
            - 정상적인 수하물 취급과정에서발생하는 경미한 긁힘, 흠집, 눌림 얼룩
            및 마모
            <br />- 액세서리, 외부 자물쇠, 이름표, 커버, 벨트 등 부속품의 분실
            및 손상
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <table>
              <tr>
                <td style={{ width: "850px" }}>DB 확인 후</td>
                <td style={{}}>2023/11/13</td>
              </tr>
            </table>
          </Accordion.Header>
          <Accordion.Body>{/* 여기 */}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <table>
              <tr>
                <td style={{ width: "850px" }}>DB 확인 후</td>
                <td style={{}}>2023/11/13</td>
              </tr>
            </table>
          </Accordion.Header>
          <Accordion.Body>{/* 여기 */}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <table>
              <tr>
                <td style={{ width: "850px" }}>DB 확인 후</td>
                <td style={{}}>2023/11/13</td>
              </tr>
            </table>
          </Accordion.Header>
          <Accordion.Body>{/* 여기 */}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <table>
              <tr>
                <td style={{ width: "850px" }}>DB 확인 후</td>
                <td style={{}}>2023/11/13</td>
              </tr>
            </table>
          </Accordion.Header>
          <Accordion.Body>{/* 여기 */}</Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* 페이지네이션 시작 */}
      <div className="col-md-4 offset-5">
        <Pagination
          className="my-3"
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </div>
      {/* 페이지네이션 끝 */}
    </div>
  );
}

export default NoticeListPage;
