-- 계층형 쿼리 : level 의사 컬럼(예: 부모 0 ~ 1,2,3,4
SELECT BID            AS bid
      , LPAD('*', (LEVEL-1)) || board_title   AS BoardTitle
      , board_content AS boardContent
      , board_writer  AS boardWriter
      , view_cnt      AS viewCnt
      , board_group   AS boardGroup
      , board_parent  AS boardParent
FROM TB_REPLY_BOARD
WHERE BOARD_TITLE LIKE '%%'
AND   DELETE_YN = 'N'
START WITH BOARD_PARENT = 0  -- START WITH BOARD_PARENT(부모컬럼) = 0 (최초시작값:부모)
CONNECT BY PRIOR BID = BOARD_PARENT -- CONECT BY PRIOR BID(게시판 번호) = BOARD_PARENT(부모번호)
ORDER SIBLINGS BY BOARD_GROUP DESC