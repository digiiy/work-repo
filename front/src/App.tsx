import React from 'react';
// todo: 외부 lib import
// aos css import(npm 설치)
import "aos/dist/aos.css";
// 개발자가 직접 만든 css 
import "./assets/css/style.css";

// todo: 리액트 import
import Nav from './components/common/Nav';
import Home from './pages/Home';
import Footer from './components/common/Footer';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';

import Elements from './pages/Elements';
import CustomerListPage from './pages/customer/CustomerListPage';
import AddCustomerPage from './pages/customer/AddCustomerPage';
import CustomerPage from './pages/customer/CustomerPage';
import QnaListPage from './pages/qna/QnaListPage';
import AddQnaPage from './pages/qna/AddQnaPage';
import QnaPage from './pages/qna/QnaPage';
import CuCenter from './pages/customerCenter/CuCenter';
import NoticeListPage from './pages/customerCenter/notice/NoticeListPage';
import OtherServicePage from './pages/customerCenter/other/OtherServicePage';
import QuestionPage from './pages/customerCenter/question/QuestionPage';
import QuestionBoardPage from './pages/customerCenter/board/QuestionBoardPage';
import AddQuestionBoardPage from './pages/customerCenter/board/AddQuestionBoardPage';
import Notice0 from './pages/customerCenter/notice/Notice0';

function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <Nav/>

      {/* 본문 */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        
        <Route path="/elements" element={<Elements/>} />

        {/* 고객센터 */}
        <Route path="/cucenter" element={<CuCenter/>} />

        {/* 공지사항 */}
        <Route path="/cu-notice" element={<NoticeListPage/>} />
        <Route path="/notice-0" element={<Notice0/>} />

        {/* 자주 찾는 질문 */}
        <Route path="/question" element={<QuestionPage/>} />
        {/* 문의 게시판 */}
        <Route path="/question-board" element={<QuestionBoardPage/>} />
        <Route path="/add-question-board" element={<AddQuestionBoardPage/>} />
        {/* 기타 서비스 */}
        <Route path="/other-service" element={<OtherServicePage/>} />
        
        


        {/* 고객 */}
        <Route path="/customer" element={<CustomerListPage/>} />
        <Route path="/add-customer" element={<AddCustomerPage/>} />
        <Route path="/customer/:cid" element={<CustomerPage/>} />

        {/* Q & A */}
        <Route path="/qna" element={<QnaListPage/>} />
        <Route path="/add-qna" element={<AddQnaPage/>} />
        <Route path="/qna/:qno" element={<QnaPage/>} />
      </Routes>
      
      {/* 꼬리말 */}
      <Footer/>
    </div>
  );
}

export default App;
